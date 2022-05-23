'use strict';

class Pickaxe {
	constructor(data)
	{
		this.tier                           = data.tier;
		this.name                           = data.name
		this.level                          = data.level;
		this.image                          = data.image;

		this.base_cost_multiply             = data.additional_cost_multiplicative;
		this.buying_cost                    = data.buying_cost;

		this.generate_values();
	}

	generate_values()
	{
		//called once by constructor (it's like a fat constructor)
		this.shop_price = this.get_shop_price();

		this.upgrade_max = this.get_upgrade_max();

		this.impact_cost_base = 		this.get_impact_cost_base();
		this.impact_cost_increment = 	this.get_impact_cost_increment();
		this.impact_value_base =  		this.get_impact_value_base();
		this.impact_value_increment = 	this.get_impact_value_increment();

		this.durability_cost_base = 		this.get_durability_cost_base();
		this.durability_cost_increment = 	this.get_durability_cost_increment();
		this.durability_value_base = 		this.get_durability_value_base();
		this.durability_value_increment = 	this.get_durability_value_increment();

		this.repair_base = this.get_repair_base_price();
		this.repair_big_increment = this.get_repair_big_increment();
		this.repair_small_increment = this.get_repair_small_increment();
	}


	compute_values(i, d)
	{
		this.impact_value = 		this.get_impact_value(i);
		this.durability_value = 	this.get_durability_value(d);

		this.repair_price = this.get_repair_price(i,d);

		this.impact_total_price = 		this.get_impact_cost(i,d);
		this.durability_total_price = 	this.get_durability_cost(i,d);
		this.upgrade_price = 			this.get_upgrade_cost(i,d);
		this.sell_price = 				this.get_resale_value(i,d);
	}

	get_shop_price()
	{
		return 10 * (this.tier - 1) * (this.tier - 1) * (this.tier - 1) * (this.tier - 1) * (1 + this.base_cost_multiply );
	}

	get_upgrade_max()
	{
		return 10 * (this.tier - 1);
	}

	get_impact_cost_base()
	{
		return 200 * (this.tier - 1);
	}
	get_impact_cost_increment()
	{
		return 200 * (this.tier - 1);
	}
	get_impact_value_base()
	{
		return 2 * this.tier * this.tier;
	}
	get_impact_value_increment()
	{
		return this.tier;
	}

	get_durability_cost_base()
	{
		return  200 * (this.tier - 1);
	}
	get_durability_cost_increment()
	{
		return  200 * (this.tier - 1);
	}
	get_durability_value_base()
	{
		return 10 * this.tier * this.tier;
	}
	get_durability_value_increment()
	{
		return  5 * this.tier;
	}

	get_repair_base_price()
	{
		return this.tier * this.tier * this.tier * this.tier / 5;
	}
	get_repair_big_increment()
	{
		return this.tier * this.tier * this.tier / 10;
	}
	get_repair_small_increment()
	{
		return this.tier * this.tier / 20;
	}



	get_impact_value(i)
	{
		return this.impact_value_base + i * this.impact_value_increment;
	}
	get_durability_value(d)
	{
		return this.durability_value_base + d * this.durability_value_increment;
	}
	get_impact_cost(i)
	{
		return i * (i - 1) / 2 * this.impact_cost_increment + i * this.impact_cost_base;
	}
	get_durability_cost(d)
	{
		return d * (d - 1) / 2 * this.durability_cost_increment + d * this.durability_cost_base;
	}
	get_upgrade_cost(i,d)
	{
		return this.get_impact_cost(i) + this.get_durability_cost(d);
	}
	get_resale_value(i,d)
	{
		return this.shop_price + this.get_upgrade_cost(i,d) / 2;
	}
	get_repair_price(i,d)
	{
		return Math.round(this.repair_base + this.repair_big_increment * i + this.repair_big_increment * d + d * i * this.repair_small_increment);
	}
}
