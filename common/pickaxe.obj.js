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
		this.crafting_fee = this.get_crafting_fee();

		this.upgrade_max = this.get_upgrade_max();

		this.impact_base_cost = this.get_impact_base_cost();
		this.impact_increment_cost = this.get_impact_increment_cost();
		this.impact_base_value =  this.get_impact_base_value();
		this.impact_increment_value = this.get_impact_increment_value();

		this.durability_base_cost = this.get_durability_base_cost();
		this.durability_increment_cost = this.get_durability_increment_cost();
		this.durability_base_value = this.get_durability_base_value();
		this.durability_increment_value = this.get_durability_increment_value();

		this.repair_base = this.get_repair_base_price();
		this.repair_big_increment = this.get_repair_big_increment();
		this.repair_small_increment = this.get_repair_small_increment();
	}

	compute_values(impact, durability)
	{
		this.impact_value = this.get_impact_value(impact);
		this.durability_value = this.get_durability_value(durability);

		this.repair_price = this.get_repair_price(impact, durability);

		this.impact_total_price = this.get_impact_cost(impact, durability);
		this.durability_total_price = this.get_durability_cost(impact, durability);
		this.upgrade_price = this.get_upgrade_cost(impact, durability);
		this.sell_price = this.get_resale_value(impact, durability);
	}

	get_crafting_fee()
	{
		let t_1 = this.tier - 1
		return 10 * (t_1 * t_1 * t_1 * t_1) * (1 + this.base_cost_multiply);
	}

	get_upgrade_max()
	{
		return 10 * (this.tier - 1);
	}

	get_impact_base_cost()
	{
		return 200 * (this.tier - 1);
	}
	get_impact_increment_cost()
	{
		return 200 * (this.tier - 1);
	}
	get_impact_base_value()
	{
		return 2 * this.tier * this.tier;
	}
	get_impact_increment_value()
	{
		return this.tier;
	}

	get_durability_base_cost()
	{
		return  200 * (this.tier - 1);
	}
	get_durability_increment_cost()
	{
		return  200 * (this.tier - 1);
	}
	get_durability_base_value()
	{
		return 10 * this.tier * this.tier;
	}
	get_durability_increment_value()
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

	get_impact_value(impact)
	{
		return this.impact_base_value + impact * this.impact_increment_value;
	}
	get_durability_value(durability)
	{
		return this.durability_base_value + durability * this.durability_increment_value;
	}
	get_impact_cost(impact)
	{
		return impact * ((impact - 1) / 2 * this.impact_increment_cost +  this.impact_base_cost);
	}
	get_durability_cost(durability)
	{
		return durability * ((durability - 1) / 2 * this.durability_increment_cost +  this.durability_base_cost);
	}
	get_upgrade_cost(impact, durability)
	{
		return this.get_impact_cost(impact) + this.get_durability_cost(durability);
	}
	get_resale_value(impact, durability)
	{
		return this.crafting_fee + this.get_upgrade_cost(impact, durability) / 2;
	}
	get_repair_price(impact, durability)
	{
		let price_modifier = 1;
		if (impact > 80)
			price_modifier = 0.7;
		if (impact > 120)
			price_modifier = 0.5;
		return Math.round((this.repair_base + this.repair_big_increment * (impact + durability) + this.repair_small_increment * (impact * durability) )* price_modifier);
	}
}