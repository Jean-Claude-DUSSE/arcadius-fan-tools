let picks = arcadius_global_data.tools.pickaxes;
let ores = arcadius_global_data.items.minerals;

let arr = [];

let DEBUG = false;;

for(i in picks)
{
	let p = picks[i];
	arr[i] = [];

	for(j in ores)
	{
		let o = ores[j];

		let max_impact = get_max_impact(p);//x2 for crits only

		if(max_impact *2  < o.hitpoints)
		{
			arr[i].push({
				"tool":p,
				"material":o,
				"status":false
			});
			if(DEBUG)console.log("CANNOT POWER SHOT",o.name, "with ",p.name, "pick");
			continue;
		}


		let req_impact_lvl = get_req_impact_lvl(p,o);
		let req_impact_value = get_req_impact_value(p, req_impact_lvl);
		let amount_of_hits_per_node = get_amount_of_hits_per_node(o, req_impact_value);
		let amount_of_nodes = get_amount_node(p,o);
		let average_drops = 3.5
		let gross_income = get_gross_income(o, amount_of_nodes, average_drops);
		let net_income = get_net_income(p, req_impact_lvl, gross_income);

		arr[i].push({
			"tool":p,
			"material":o,
			"status":true,
			"min_impact_lvl":req_impact_lvl,
			"min_impact_value":req_impact_value,
			"amount_of_hits_per_node":amount_of_hits_per_node,
			"amount_of_nodes":amount_of_nodes,
			"average_drops":average_drops,
			"gross_income":gross_income,
			"net_income":net_income
		});
/*
		if(DEBUG)console.log(p.name, "pick for",o.name, "ore");
		if(DEBUG)console.log("max =", max_impact, 2 * max_impact);
		if(DEBUG)console.log("hps =", o.hitpoints);
		if(DEBUG)console.log("min lvl =", req_impact_lvl);
		if(DEBUG)console.log("min value =", req_impact_value, 2 * req_impact_value);
		if(DEBUG)console.log("hits per node =", amount_of_hits_per_node);
		if(DEBUG)console.log("# of nodes =", amount_of_nodes);
		if(DEBUG)console.log("gross income =", gross_income);
		if(DEBUG)console.log("net income =", net_income);

		if(DEBUG)console.log("-".repeat(125));*/

	}
	if(DEBUG)console.log("@".repeat(125));
}

function get_max_impact(tool){
	return tool.base_impact_value + tool.increment_impact_value * tool.maximum_upgrade;
}

function get_req_impact_lvl(tool, resource){
	return Math.max(Math.ceil(((resource.hitpoints/2)-tool.base_impact_value)/tool.increment_impact_value),0);
}

function get_req_impact_value(tool, impact_level){
	return tool.base_impact_value + tool.increment_impact_value * impact_level;
}

function get_amount_of_hits_per_node(resource, impact_value){
	return Math.ceil((resource.hitpoints/2)/impact_value);
}

function get_amount_node(tool, resource){
	return Math.ceil(tool.base_durability_value / resource.durability);
}

function get_gross_income(resource, nodes, drops){
	return nodes * drops * resource.price_raw;
}

function get_net_income(tool, impact_lvl, gross){/*TODO FIND THE NEW REPAIR VALUE. DISCOUNT ? Availability ?*/
	return gross - (tool.base_repair_cost + tool.repair_cost_big_increment * impact_lvl) * (impact_lvl>120?0.5:(impact_lvl>80?0.7:1));
}




let table = document.getElementById("t");

//THEAD

let thead = document.createElement("THEAD");
let tr = document.createElement("TR");
let corner_cell = document.createElement("TH");
tr.appendChild(corner_cell);

for(a in arr[0])
{
	let th = document.createElement("TH");
	let material_name = document.createTextNode(arr[0][a].material.name);
	let material_name_container = document.createElement("SPAN");
	material_name_container.setAttribute("class", "row_col_title");

	let pic = document.createElement("IMG");
	pic.src="../img/items/ores/ore_" + arr[0][a].material.name + "-2022-05.png";
	pic.setAttribute("class", "row_col_pic");

	material_name_container.appendChild(material_name);

	th.appendChild(pic);
	th.appendChild(material_name_container);

	tr.appendChild(th);

}
thead.appendChild(tr);
table.appendChild(thead);

//TBODY

let tbody = document.createElement("TBODY");
for(a in arr)
{
	let tr = document.createElement("TR");
	for(b in arr[a])
	{
		//add 1st row
		if(b==0)
		{
			let td = document.createElement("TD");
			td.setAttribute("class", "heading_cell");
			let hc_container = document.createElement("SPAN");
			

			let pic = document.createElement("IMG");
			pic.src="../wiki/tools/pickaxes/pick_" + arr[a][b].tool.name + "-2022-05.png";
			pic.setAttribute("class", "row_col");

			let material_name = document.createTextNode(arr[a][b].tool.name);
			
			//td.appendChild(pic);
			td.setAttribute("style", "position:relative; width:190px; height:170px; background-repeat:no-repeat; background-image:url('../img/tools/pickaxes/pick_" + arr[a][b].tool.name + "-2022-05.png')");
			
			hc_container.appendChild(material_name);
			td.appendChild(hc_container);

			tr.appendChild(td);
		}
		if(!DEBUG)
		//fill table
		{
			let td = document.createElement("TD");
			let blob = get_content(arr[a][b], td);

			tr.appendChild(td);
		}

		if(DEBUG)
		{
			let td = document.createElement("TD");
			for(key in arr[a][b])
			{
				td.appendChild(document.createTextNode(key + " : "+  arr[a][b][key]));
				td.appendChild(document.createElement("BR"));
				console.log(key)

			}

			tr.appendChild(td);
		}
	}

	tbody.appendChild(tr);
}

table.appendChild(tbody);

function get_content(data, cell)
{
	if(!data.status)
	{
		let content = document.createElement("SPAN");
		content.setAttribute("class","impossible");
		content.appendChild(document.createTextNode("Impossible"));
		cell.appendChild(content);
		return;
	}
	get_content_line(cell, "info_impact","[" + data.min_impact_lvl + "]");
	//get_content_line(cell, (Math.round(data.net_income)>0)?"income":"income_neg","Net gain : " + Math.round(data.net_income));
	get_content_line(cell, "nodes",data.amount_of_nodes + " nodes");
	let value_per_node = Math.round(data.net_income/data.amount_of_nodes)

	let pic = null;

	let value_node = document.createElement("SPAN");
	pic = document.createElement("IMG");
	pic.src="../img/coin.png";
	pic.setAttribute("class", "coin");
	value_node.appendChild(document.createTextNode(value_per_node + " "));
	value_node.appendChild(pic);
	value_node.setAttribute("class", value_per_node>0?"eff_factor":"eff_factor_neg");
	cell.appendChild(value_node);

	//get_content_line(cell, "eff_factor_process","$/node process : " + (data.material.smeltable?value_per_node*2:0));
	let impact_cost = (data.min_impact_lvl - 1) * data.min_impact_lvl / 2 * data.tool.increment_impact_cost + data.min_impact_lvl * data.tool.base_impact_cost


	let invest_node = document.createElement("SPAN");
	pic = document.createElement("IMG");
	pic.src="../img/coin.png";
	pic.setAttribute("class", "coin");
	invest_node.appendChild(document.createTextNode(impact_cost.toLocaleString() + " "));
	invest_node.appendChild(pic);
	invest_node.setAttribute("class", "investment");
	cell.appendChild(invest_node);


	let pic_container = document.createElement("SPAN");
	pic_container.setAttribute("class", "img_container");
	 pic = document.createElement("IMG");
	pic.src="../img/tools/pickaxes/pick_" + data.tool.name + "-2022-05.png";
	pic.setAttribute("class", "illustration");
	pic_container.appendChild(pic);

	let cheat_spacer = document.createElement("SPAN");
	cheat_spacer.setAttribute("class","spacer")
	cheat_spacer.appendChild(document.createTextNode("space"));
	pic_container.appendChild(cheat_spacer);

	let pic2 = document.createElement("IMG");
	pic2.src="../img/items/ores/ore_" + data.material.name + "-2022-05.png";
	pic2.setAttribute("class", "illustration");
	pic_container.appendChild(pic2);
	cell.appendChild(pic_container);
	cell.appendChild(document.createElement("BR"));
	get_content_line(cell, "legend", data.tool.name + " / " +  data.material.name);

	return;
}


function get_content_line(cell, style_class, value)
{
	let line = document.createElement("SPAN");
	line.appendChild(document.createTextNode(value));
	line.setAttribute("class", style_class);
	cell.appendChild(line);
	return;
}