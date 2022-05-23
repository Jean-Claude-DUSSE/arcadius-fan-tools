'use strict';

class Ore {
	constructor(data)
	{
		this.tier = data.tier;
		this.name = data.name;
		this.image = data.image;
		this.smeltable = data.smeltable;
		this.hitpoints = data.hitpoints;
		this.durability = data.durability;
		this.respawn = data.respawn;

		this.ore_price = data.price_raw;
		this.ingot_price = data.price_processed;
		this.smelt_time = data.smelt_time;
		this.smelt_exp = data.smelt_exp;

		this.ore_to_ingot_ratio = 4;
	}

	get_tier()
	{
		return this.tier;
	}
	get_name()
	{
		return this.name;
	}
	get_img()
	{
		return this.img;
	}
	get_smeltable()
	{
		return this.smeltable;
	}

	get_hitpoints(t)
	{
		return t * t * 15;
	}
	get_durability(t)
	{
		return t * t / 2;
	}

	get_respawn(t)
	{
		return t * 5;
	}
	get_smelt_time(t)
	{
		return t * 5;
	}

	get_ore_price(t)
	{
		return t * t * 5;
	}

	get_ingot_price(t)
	{
		//Type returned depends of this.smeltable flag.
		return this.smeltable?(t * t * 40):"N/A";
	}

	get_coal_lifetime(t)
	{
		//Type returned depends of this.smeltable flag.
		return this.smeltable?(840/(t-1)):"N/A";
	}
}
