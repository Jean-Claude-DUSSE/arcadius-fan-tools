'use strict';

//LEGACY. Based on old format.
//Convoluted. Will rework completely when game is realeased

let pick_idx = 0;
let tier = 0;
let impact = 0;
let durability = 0;
let accuracy = 0;
let drop_rate = 0;

let ore_collection = [];
let pick = null;

function select_pickaxe(i)
{
	let pick_list = arcadius_global_data.tools.pickaxes;
	var min = 0;
	var max = pick_list.length - 1;

	pick_idx = circular_limits(min, max, i);

	tier = pick_list[pick_idx].tier;
	let name = pick_list[pick_idx].name;
	let img = pick_list[pick_idx].image;
	let base_cost_offset = pick_list[pick_idx].base_cost_offset;
	let base_cost_multiply = pick_list[pick_idx].base_cost_multiply;

	document.getElementById('selector_img').setAttribute('src', "../img/tools/pickaxes/" + img);
	document.getElementById('selector_img').setAttribute('alt', name);
	document.getElementById('selector_name').innerText = name + " pick (tier " + tier + ")";
	document.getElementById('selector_prev').style.backgroundImage = "url(img/" + pick_list[circular_limits(min, max, pick_idx - 1)].img + ")";
	document.getElementById('selector_next').style.backgroundImage = "url(img/" + pick_list[circular_limits(min, max, pick_idx + 1)].img + ")";
	document.getElementById('selector_prev').setAttribute('title', "Click to select " + pick_list[circular_limits(min, max, pick_idx - 1)].name + " pick");
	document.getElementById('selector_next').setAttribute('title', "Click to select " + pick_list[circular_limits(min, max, pick_idx + 1)].name + " pick");

	pick = new Pickaxe(pick_list[pick_idx]);
	update_controls();
	update_display();
	update_graphs();
	update_table();
}

function update_display()
{
	//get the inputs for current levels
	impact = parseInt(document.getElementById('i_x').value);
	durability = parseInt(document.getElementById('d_x').value);
	accuracy = parseInt(document.getElementById('player_acc').value);
	drop_rate = parseInt(document.getElementById('player_drop').value*10)/10;
	accuracy = accuracy==100?200:accuracy;
	//get the inputs for future levels

	let impact_future = parseInt(document.getElementById('i_future').value);
	let durability_future = parseInt(document.getElementById('d_future').value);

	disp('player_acc_value',document.getElementById('player_acc').value);
	disp('player_drop_value',document.getElementById('player_drop').value);

	disp("i_0",pick.get_impact_base_value(), "", " dmg");
	disp("d_0",pick.get_durability_base_value(), "", " HP");
	disp("r_0",Math.round(pick.get_repair_base_price()),"$ ");
	disp("c_0",pick.get_crafting_fee(),"$ ");

	//titles parsed with inputs
	disp("i_x_lvl",impact);
	disp("d_x_lvl",durability);
	disp("i_future_lvl",i_future.value);
	disp("d_future_lvl",d_future.value);

	//display warnings if sum of level > max upgrade
	let sum_upg =  impact +  durability;
	if (sum_upg > pick.get_upgrade_max())
	{
		document.getElementById('id_x').setAttribute('class','warning');
		document.getElementById('id_x_max').setAttribute('class','warning');
	}
	else
	{
		document.getElementById('id_x').setAttribute('class','');
		document.getElementById('id_x_max').setAttribute('class','');
	}
	disp("id_x", sum_upg);
	disp("id_x_max",pick.get_upgrade_max());

	//display warnings if sum of level > max upgrade
	let sum_upg_future =  impact_future +  durability_future;
	if (sum_upg_future > pick.get_upgrade_max())
	{
		document.getElementById('id_future').setAttribute('class','warning');
		document.getElementById('id_future_max').setAttribute('class','warning');
	}
	else
	{
		document.getElementById('id_future').setAttribute('class','');
		document.getElementById('id_future_max').setAttribute('class','');
	}

	//edit the content of lots of fields.
	disp("id_future", sum_upg_future);
	disp("id_future_max",pick.get_upgrade_max());

	disp("i_x_val",pick.get_impact_value(impact),"", " dmg");
	disp("d_x_val",pick.get_durability_value(durability),"", " HP");

	disp("i_x_cost",pick.get_impact_cost(impact),"$ ");
	disp("d_x_cost",pick.get_durability_cost(durability),"$ ");
	disp("id_x_cost",pick.get_upgrade_cost(impact,durability),"$ ");
	disp("r_x_cost",pick.get_repair_price(impact,durability),"$ ");
	disp("s_x_cost",pick.get_resale_value(impact,durability),"$ ");

	disp("i_future_val",pick.get_impact_value(impact_future),"", " dmg");
	disp("d_future_val",pick.get_durability_value(durability_future),"", " HP");

	disp("i_future_cost",pick.get_impact_cost(impact_future),"$ ");
	disp("d_future_cost",pick.get_durability_cost(durability_future),"$ ");
	disp("id_future_cost",pick.get_upgrade_cost(impact_future,durability_future),"$ ");
	disp("r_future_cost",pick.get_repair_price(impact_future,durability_future),"$ ");
	disp("s_future_cost",pick.get_resale_value(impact_future,durability_future),"$ ");

	disp("i_delta_cost",pick.get_impact_cost(impact_future) - pick.get_impact_cost(impact),"$ ");
	disp("d_delta_cost",pick.get_durability_cost(durability_future) - pick.get_durability_cost(durability),"$ ");
	disp("id_delta_cost",pick.get_upgrade_cost(impact_future,durability_future) - pick.get_upgrade_cost(impact,durability),"$ ");

	update_graphs();
	update_table();
}

function disp(elt, val, prefix = "", suffix = "")
{
	//quick macro to format a number with units.
	document.getElementById(elt).innerText = prefix + val.toLocaleString() + suffix;
}

function update_controls()
{
	//update the limits off the input-range fields to reflect the current pick.
	document.getElementById('i_x').max = pick.get_upgrade_max();
	document.getElementById('d_x').max = pick.get_upgrade_max();
	document.getElementById('i_future').min = document.getElementById('i_x').value;
	document.getElementById('d_future').min = document.getElementById('d_x').value;
	document.getElementById('i_future').max = pick.get_upgrade_max();
	document.getElementById('d_future').max = pick.get_upgrade_max();
}

function inBoundaries(low, high, value)
{
	//returns a number inside boundaries.
	return Math.min(Math.max(value, low), high);
}

function circular_limits(low, high, value)
{
	if(value > high)
		return low;

	if(value < low)
		return high;

	return value;
}
function circular_limits_branchless(low, high, x)
{
	return (x < low) * high + (x > high) * low + (x >= low && x <= high) * x;
}

function update_graphs()
{
	let t1 = document.getElementById('graph_absolute');
	let t2 = document.getElementById('graph_relative');

	kill_all_childs(t1);
	kill_all_childs(t2);


	let cap1 = document.createElement("caption");
	cap1.appendChild(document.createTextNode("Repair costs in function of the upgrades."));
	t1.appendChild(cap1);

	let cap2 = document.createElement("caption");
	cap2.appendChild(document.createTextNode("Evolution of the repair costs in function of the upgrades."));
	t2.appendChild(cap2);

	let max_repair = pick.get_repair_price(pick.get_upgrade_max()/2, pick.get_upgrade_max()/2);//this trick works for 0.9.8b since I & D have same weight for repairs.
	let base_repair = pick.get_repair_base_price(0, 0);
	fillTable(t1, base_repair, max_repair);
	fillTable(t2, base_repair, max_repair, true);
}

function fillTable(table, ratio, maxi, mode = false)
{
	//mode : 0 (absolute value)
	//mode : 1 relative to value (0,0)

	//TODO REFACTOR THIS ASAP
	//TODO : it would be better to calculate an array of object(value, status, ratio) and then loop to create a <table>
	//TODO : this function is a monster.

	//fix a division by 0 later
	if (ratio ==0)
		ratio = 1;

	let thead = document.createElement("thead");
	let th = document.createElement("th");
	let tr = document.createElement("tr");
	th.setAttribute('class','tablehead_horizontal tablehead_vertical');
	th.appendChild(document.createTextNode("D/I"));
	tr.appendChild(th);

/*1st ROW*/
	for(let j = 0; j < 11; j++)
	{
		let th = document.createElement("th");
		th.appendChild(document.createTextNode(pick.get_upgrade_max() * j / 10));
		tr.appendChild(th);

		th.setAttribute('class','tablehead_horizontal');
	}
	thead.appendChild(tr);
	table.appendChild(thead);

	let tbody = document.createElement("tbody");
/*TABLE*/
	/*lines*/
	for(let j = 0; j < 11; j++)
	{
		let tr = document.createElement("tr");
		let td = document.createElement("td");
		td.setAttribute('class','tablehead_vertical');
		td.appendChild(document.createTextNode(pick.get_upgrade_max() * j / 10));
		tr.appendChild(td);
		/*cells*/
		for(let i = 0; i < 11; i++)
		{
			td = document.createElement("td");
			/*if cell has to be filled*/
			/*formula is a simplification*/
			if(i+j<11)
			{
				let value = pick.get_repair_price(pick.get_upgrade_max() * i / 10, pick.get_upgrade_max() * j / 10);
				if(mode)
				{
					td.appendChild(document.createTextNode(Math.round(value / ratio * 10) / 10));
				}
				else
				{
					td.appendChild(document.createTextNode(value.toLocaleString()));
				}
				td.style.backgroundColor = "rgba(255,0,0," + (Math.round(10 * value / maxi) / 10) + ")";

			}
			else
			{
				td.appendChild(document.createTextNode(""));
				td.setAttribute('class','table_empty');
			}
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

function kill_all_childs(t)
{
	//removes all the child of a parent.
	//can be used to clear a table if the argument is a <table>
	//can be used to clear a content of table if the argument is a <tbody>
	while (t.hasChildNodes())
	{
		t.removeChild(t.lastChild);
	}
}


function create_ore_object()
{
	let ore_list = arcadius_global_data.items.minerals;
	for(let i = ore_list.length - 1; i >= 0; i--)
	{
		let s = false;//smeltable flag
		if(!(ore_list[i].smeltable === undefined))
			s = true;

		let c = false;//cheated (or modified with hardcoded numbers) ore
		if(!(ore_list[i].cheat === undefined))
			c = true;

		ore_collection.push(new Ore(ore_list[i]));

		if(c)//edit last ore with correct value if it's cheated
		{
			let t = ore_list[i].tier;
			let o = ore_collection[ore_collection.length-1];//last item pushed

			let hp = (ore_list[i].hitpoints===undefined)?o.get_hitpoints(t):ore_list[i].hitpoints;
			let dur  = (ore_list[i].durability===undefined)?o.get_durability(t):ore_list[i].durability;
			let resp = (ore_list[i].respawn===undefined)?o.get_respawn(t):ore_list[i].respawn;
			let ore = (ore_list[i].ore_price===undefined)?o.get_ore_price(t):ore_list[i].ore_price;
			let ingot = (ore_list[i].ingot_price===undefined)?o.get_ingot_price(t):ore_list[i].ingot_price;
			let smelt = (ore_list[i].smelt_time===undefined)?o.get_smelt_time(t):ore_list[i].smelt_time;
			let coal = (ore_list[i].coal_lifetime===undefined)?o.get_coal_lifetime(t):ore_list[i].coal_lifetime;
			o.generate_cheat_value(hp, dur, resp, ore, ingot, smelt, coal)
		}
	}
}


function update_table()
{
	let tb = document.getElementById('ore_data');
	kill_all_childs(tb);

	for(let i = 0; i <= ore_collection.length - 1; i++)
	{
		let o = ore_collection[i];
		let tr = document.createElement("tr");

		add_cell(tr, o.tier);
		add_cell(tr, o.name);
		
		//add_cell(tr, o.img);
		let img = document.createElement("img");
		img.setAttribute("src", "../img/items/ores/" + o.image);
		img.setAttribute("height", "50px");
		//img.setAttribute("alt", o.name);
		tr.appendChild(img);

		add_cell(tr, o.smeltable);
		add_cell(tr, o.hitpoints);
		add_cell(tr, o.durability);
		add_cell(tr, o.respawn);
		add_cell(tr, o.smelt_time);
		add_cell(tr, o.ore_price);
		add_cell(tr, o.ingot_price);
		add_cell(tr, Math.round((o.smeltable?o.ingot_price:o.ore_price)/o.durability/10)*10);

		let time_stack = o.smeltable?/*max_furnace_capacity*/100/o.ore_to_ingot_ratio*o.smelt_time:0;
		let time_stack_m = Math.floor(time_stack/60);
		let time_stack_s = time_stack - time_stack_m*60;
		add_cell(tr, o.smeltable?(time_stack_m + "m" + (time_stack_s<10?"0":"") + time_stack_s + "s"):"-");
		
		add_cell(tr, o.smeltable?Math.round(o.ingot_price/o.smelt_time*100)/100:"-");


		//<th>Hits to break</th>		
		let hits_to_break_a_node = o.hitpoints/pick.get_impact_value(impact)/(accuracy==100?200:accuracy)*100;
		add_cell(tr, Math.ceil(hits_to_break_a_node).toLocaleString());
		
		//<th>Amount of hits</th>
		let hits_per_run = pick.get_durability_value(durability) / o.durability;
		add_cell(tr, Math.ceil(hits_per_run).toLocaleString());

		//<th>Amount of nodes</th>
		let nodes_per_run = Math.ceil(hits_per_run) / Math.ceil(hits_to_break_a_node);
		add_cell(tr, (Math.round(nodes_per_run * 100) / 100).toLocaleString());

		//<th>Amount of drops</th>
		let drops_per_run = nodes_per_run * drop_rate;
		add_cell(tr, (Math.round(drops_per_run * 100) / 100).toLocaleString());
		
		//<th>Gross income per run</th>
		let gross_income_per_run = drops_per_run * (o.smeltable?o.ingot_price/2:o.ore_price);
		add_cell(tr, (Math.round(gross_income_per_run * 100) / 100).toLocaleString());

		//<th>Net income per run</th>
		let net_income_per_run = gross_income_per_run - pick.get_repair_price(impact, durability);
		add_cell(tr, (Math.round(net_income_per_run * 100) / 100).toLocaleString());

		//<th>Net income per hit</th>
		let net_income_per_hit = net_income_per_run /  Math.ceil(hits_per_run);
		add_cell(tr, (Math.round(net_income_per_hit * 100) / 100).toLocaleString() );

		tb.appendChild(tr);
	}
}

function add_cell(row, val)
{
	let td = document.createElement("td");
	td.appendChild(document.createTextNode(val));
	row.appendChild(td);
}

function toggle_column_visibility(source)
{
	let target = document.getElementById(source.getAttribute("col"));
	if(source.checked)
	{
		target.style.visibility = "";
		target.style.width = "auto";
	}
	else
	{
		target.style.visibility = "collapse";
		target.style.width = 0;
	}
}


//events on the input-range
document.getElementById('selector_prev').addEventListener('click', function() {select_pickaxe(--pick_idx);});
document.getElementById('selector_next').addEventListener('click', function() {select_pickaxe(++pick_idx);});

document.getElementById('i_x').addEventListener('input', function(){update_controls();update_display();});
document.getElementById('d_x').addEventListener('input', function(){update_controls();update_display();});
document.getElementById('i_future').addEventListener('input', function(){update_display();});
document.getElementById('d_future').addEventListener('input', function(){update_display();});
document.getElementById('player_acc').addEventListener('input', function(){update_display();});
document.getElementById('player_drop').addEventListener('input', function(){update_display();});

let col_selectors = document.getElementsByClassName("col_selector");
for (var i = 0; i < col_selectors.length; i++)
{
	col_selectors[i].addEventListener('click', function(){toggle_column_visibility(this);});
	toggle_column_visibility(col_selectors[i]);
}


//starting values of the script
accuracy = parseInt(document.getElementById('player_acc').value);

create_ore_object();
select_pickaxe(-1);