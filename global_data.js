/*TODO
items >  resources or materials

Picture of items raw and processed
Pictures of tools
Clean tools.pick attribute, some are not made for export.
Create functions inside JSON (if possible)
Check level for pickaxes on the test server
same for other tools.

*/
arcadius_global_data = {
	"tools":{
		"pickaxes":[
			{"tier":1 , "name":"Wood"    , "level":0  , "additional_cost_multiplicative":0 , "base_impact_cost":0   , "increment_impact_cost":0   , "base_impact_value":2  , "increment_impact_value":1 , "base_durability_cost":0   , "increment_durability_cost":0   , "base_durability_value":10  , "increment_durability_value":5 , "maximum_upgrade":0  , "base_repair_cost":0.2    , "repair_cost_big_increment":0.1  , "repair_cost_small_increment":0.05 , "buying_cost":0       , "image":"pick_wood-2022-05.png"    ,"recipe":[]},
			{"tier":2 , "name":"Stone"   , "level":0  , "additional_cost_multiplicative":0 , "base_impact_cost":200 , "increment_impact_cost":200 , "base_impact_value":8  , "increment_impact_value":2 , "base_durability_cost":200 , "increment_durability_cost":200 , "base_durability_value":40  , "increment_durability_value":10, "maximum_upgrade":10 , "base_repair_cost":3.2    , "repair_cost_big_increment":0.8  , "repair_cost_small_increment":0.2  , "buying_cost":10      , "image":"pick_stone-2022-05.png"   ,"recipe":[{"item":"items.trees.birch:log"   ,"q":5  },{"item":"items.minerals.stone:ore"     ,"q":5 }]},
			{"tier":3 , "name":"Bronze"  , "level":5  , "additional_cost_multiplicative":0 , "base_impact_cost":400 , "increment_impact_cost":400 , "base_impact_value":18 , "increment_impact_value":3 , "base_durability_cost":400 , "increment_durability_cost":400 , "base_durability_value":90  , "increment_durability_value":15, "maximum_upgrade":20 , "base_repair_cost":16.2   , "repair_cost_big_increment":2.7  , "repair_cost_small_increment":0.45 , "buying_cost":160     , "image":"pick_bronze-2022-05.png"  ,"recipe":[{"item":"items.trees.birch:log"   ,"q":10 },{"item":"items.minerals.copper:ingot"  ,"q":3 },{"item":"items.minerals.tin:ingot"     ,"q":3 }]},
			{"tier":4 , "name":"Iron"    , "level":10 , "additional_cost_multiplicative":0 , "base_impact_cost":600 , "increment_impact_cost":600 , "base_impact_value":32 , "increment_impact_value":4 , "base_durability_cost":600 , "increment_durability_cost":600 , "base_durability_value":160 , "increment_durability_value":20, "maximum_upgrade":30 , "base_repair_cost":51.2   , "repair_cost_big_increment":6.4  , "repair_cost_small_increment":0.8  , "buying_cost":810     , "image":"pick_iron-2022-05.png"    ,"recipe":[{"item":"items.trees.birch:log"   ,"q":10 },{"item":"items.minerals.iron:ingot"    ,"q":6 }]},
			{"tier":5 , "name":"Gold"    , "level":15 , "additional_cost_multiplicative":0 , "base_impact_cost":800 , "increment_impact_cost":800 , "base_impact_value":50 , "increment_impact_value":5 , "base_durability_cost":800 , "increment_durability_cost":800 , "base_durability_value":250 , "increment_durability_value":25, "maximum_upgrade":40 , "base_repair_cost":125    , "repair_cost_big_increment":12.5 , "repair_cost_small_increment":1.25 , "buying_cost":2560    , "image":"pick_gold-2022-05.png"    ,"recipe":[{"item":"items.trees.pine:log"    ,"q":15 },{"item":"items.minerals.gold:ingot"    ,"q":5 },{"item":"items.minerals.iron:ingot"    ,"q":3 }]},
			{"tier":6 , "name":"Mithril" , "level":20 , "additional_cost_multiplicative":0 , "base_impact_cost":1000, "increment_impact_cost":1000, "base_impact_value":72 , "increment_impact_value":6 , "base_durability_cost":1000, "increment_durability_cost":1000, "base_durability_value":360 , "increment_durability_value":30, "maximum_upgrade":50 , "base_repair_cost":259.2  , "repair_cost_big_increment":21.6 , "repair_cost_small_increment":1.8  , "buying_cost":6250    , "image":"pick_mithril-2022-05.png" ,"recipe":[{"item":"items.trees.pine:log"    ,"q":20 },{"item":"items.minerals.mithril:ingot" ,"q":6 },{"item":"items.minerals.gold:ingot"    ,"q":5 }]},
			{"tier":7 , "name":"Diamond" , "level":25 , "additional_cost_multiplicative":0 , "base_impact_cost":1200, "increment_impact_cost":1200, "base_impact_value":98 , "increment_impact_value":7 , "base_durability_cost":1200, "increment_durability_cost":1200, "base_durability_value":490 , "increment_durability_value":35, "maximum_upgrade":60 , "base_repair_cost":480.2  , "repair_cost_big_increment":34.3 , "repair_cost_small_increment":2.45 , "buying_cost":12960   , "image":"pick_diamond-2022-05.png" ,"recipe":[{"item":"items.trees.pine:log"    ,"q":25 },{"item":"items.minerals.diamond:ingot" ,"q":8 },{"item":"items.minerals.mithril:ingot" ,"q":6 }]},
			{"tier":8 , "name":"Emerald" , "level":30 , "additional_cost_multiplicative":0 , "base_impact_cost":1400, "increment_impact_cost":1400, "base_impact_value":128, "increment_impact_value":8 , "base_durability_cost":1400, "increment_durability_cost":1400, "base_durability_value":640 , "increment_durability_value":40, "maximum_upgrade":70 , "base_repair_cost":819.2  , "repair_cost_big_increment":51.2 , "repair_cost_small_increment":3.2  , "buying_cost":24010   , "image":"pick_emerald-2022-05.png" ,"recipe":[{"item":"items.trees.oak:log"     ,"q":30 },{"item":"items.minerals.emerald:ingot" ,"q":9 },{"item":"items.minerals.diamond:ingot" ,"q":7 }]},
			{"tier":9 , "name":"Amethyst", "level":35 , "additional_cost_multiplicative":0 , "base_impact_cost":1600, "increment_impact_cost":1600, "base_impact_value":162, "increment_impact_value":9 , "base_durability_cost":1600, "increment_durability_cost":1600, "base_durability_value":810 , "increment_durability_value":45, "maximum_upgrade":80 , "base_repair_cost":1312.2 , "repair_cost_big_increment":72.9 , "repair_cost_small_increment":4.05 , "buying_cost":40960   , "image":"pick_amethyst-2022-05.png","recipe":[{"item":"items.trees.oak:log"     ,"q":35 },{"item":"items.minerals.amethyst:ingot","q":10},{"item":"items.minerals.emerald:ingot" ,"q":9 },{"item":"items.minerals.aluminite:ore","q":10}]},
			{"tier":10, "name":"Topaz"   , "level":40 , "additional_cost_multiplicative":0 , "base_impact_cost":1800, "increment_impact_cost":1800, "base_impact_value":200, "increment_impact_value":10, "base_durability_cost":1800, "increment_durability_cost":1800, "base_durability_value":1000, "increment_durability_value":50, "maximum_upgrade":90 , "base_repair_cost":2000   , "repair_cost_big_increment":100  , "repair_cost_small_increment":5    , "buying_cost":65610   , "image":"pick_topaz-2022-05.png"   ,"recipe":[{"item":"items.trees.oak:log"     ,"q":15 },{"item":"items.minerals.topaz:ingot"   ,"q":8 },{"item":"items.minerals.amethyst:ingot","q":10},{"item":"items.minerals.aluminite:ore","q":25}]},
			{"tier":11, "name":"Sapphire", "level":45 , "additional_cost_multiplicative":0 , "base_impact_cost":2000, "increment_impact_cost":2000, "base_impact_value":242, "increment_impact_value":11, "base_durability_cost":2000, "increment_durability_cost":2000, "base_durability_value":1210, "increment_durability_value":55, "maximum_upgrade":100, "base_repair_cost":2928.2 , "repair_cost_big_increment":133.1, "repair_cost_small_increment":6.05 , "buying_cost":100000  , "image":"pick_sapphire-2022-05.png","recipe":[{"item":"items.trees.beech:log"   ,"q":25 },{"item":"items.minerals.sapphire:ingot","q":13},{"item":"items.minerals.topaz:ingot"   ,"q":9 },{"item":"items.minerals.aluminite:ore","q":25}]},
			{"tier":12, "name":"Ruby"    , "level":50 , "additional_cost_multiplicative":0 , "base_impact_cost":2200, "increment_impact_cost":2200, "base_impact_value":288, "increment_impact_value":12, "base_durability_cost":2200, "increment_durability_cost":2200, "base_durability_value":1440, "increment_durability_value":60, "maximum_upgrade":110, "base_repair_cost":4147.2 , "repair_cost_big_increment":172.8, "repair_cost_small_increment":7.2  , "buying_cost":146410  , "image":"pick_ruby-2022-05.png"    ,"recipe":[{"item":"items.trees.beech:log"   ,"q":30 },{"item":"items.minerals.ruby:ingot"    ,"q":9 },{"item":"items.minerals.sapphire:ingot","q":9 },{"item":"items.minerals.aluminite:ore","q":35}]},
			{"tier":13, "name":"Demonic" , "level":60 , "additional_cost_multiplicative":0 , "base_impact_cost":2400, "increment_impact_cost":2400, "base_impact_value":338, "increment_impact_value":13, "base_durability_cost":2400, "increment_durability_cost":2400, "base_durability_value":1690, "increment_durability_value":65, "maximum_upgrade":120, "base_repair_cost":5712.2 , "repair_cost_big_increment":219.7, "repair_cost_small_increment":8.45 , "buying_cost":207360  , "image":"pick_demonic-2022-05.png" ,"recipe":[{"item":"items.trees.beech:log"   ,"q":120},{"item":"items.minerals.demonic:ingot" ,"q":25}]},
			{"tier":13, "name":"Heavenly", "level":60 , "additional_cost_multiplicative":0 , "base_impact_cost":2400, "increment_impact_cost":2400, "base_impact_value":338, "increment_impact_value":13, "base_durability_cost":2400, "increment_durability_cost":2400, "base_durability_value":1690, "increment_durability_value":65, "maximum_upgrade":120, "base_repair_cost":5712.2 , "repair_cost_big_increment":219.7, "repair_cost_small_increment":8.45 , "buying_cost":207360  , "image":"pick_heavenly-2022-05.png","recipe":[{"item":"items.trees.mapple:log"  ,"q":120},{"item":"items.minerals.soul:ingot"    ,"q":25}]},
			{"tier":14, "name":"Bone"    , "level":70 , "additional_cost_multiplicative":2 , "base_impact_cost":2600, "increment_impact_cost":2600, "base_impact_value":392, "increment_impact_value":14, "base_durability_cost":2600, "increment_durability_cost":2600, "base_durability_value":1960, "increment_durability_value":70, "maximum_upgrade":130, "base_repair_cost":7683.2 , "repair_cost_big_increment":274.4, "repair_cost_small_increment":9.8  , "buying_cost":856830  , "image":"pick_bone-2022-05.png"    ,"recipe":[{"item":"items.trees.mapple:log"  ,"q":100},{"item":"items.minerals.bone:ore"      ,"q":90}]},
			{"tier":15, "name":"Molten"  , "level":80 , "additional_cost_multiplicative":3 , "base_impact_cost":2800, "increment_impact_cost":2800, "base_impact_value":450, "increment_impact_value":15, "base_durability_cost":2800, "increment_durability_cost":2800, "base_durability_value":2250, "increment_durability_value":75, "maximum_upgrade":140, "base_repair_cost":10125  , "repair_cost_big_increment":337.5, "repair_cost_small_increment":11.25, "buying_cost":1536640 , "image":"pick_molten-2022-05.png"  ,"recipe":[{"item":"items.trees.ash:log"     ,"q":60 },{"item":"items.minerals.molten:ore"    ,"q":60},{"item":"items.minerals.bone:ore"      ,"q":60}]},
			{"tier":16, "name":"Frost"   , "level":100, "additional_cost_multiplicative":9 , "base_impact_cost":3000, "increment_impact_cost":3000, "base_impact_value":512, "increment_impact_value":16, "base_durability_cost":3000, "increment_durability_cost":3000, "base_durability_value":2560, "increment_durability_value":80, "maximum_upgrade":150, "base_repair_cost":13107.2, "repair_cost_big_increment":409.6, "repair_cost_small_increment":12.8 , "buying_cost":5062500 , "image":"pick_frost-2022-05.png"   ,"recipe":[{"item":"items.trees.ash:log"     ,"q":60 },{"item":"items.minerals.frost:ore"     ,"q":60},{"item":"items.minerals.molten:ore"    ,"q":60}]},
			{"tier":17, "name":"Blood"   , "level":120, "additional_cost_multiplicative":10, "base_impact_cost":3200, "increment_impact_cost":3200, "base_impact_value":578, "increment_impact_value":17, "base_durability_cost":3200, "increment_durability_cost":3200, "base_durability_value":2890, "increment_durability_value":85, "maximum_upgrade":160, "base_repair_cost":16704.2, "repair_cost_big_increment":491.3, "repair_cost_small_increment":14.45, "buying_cost":7208960 , "image":"pick_blood-2022-05.png"   ,"recipe":[{"item":"items.trees.whiteoak:log","q":60 },{"item":"items.minerals.bloodspore:ore","q":60},{"item":"items.minerals.molten:ore"    ,"q":60}]},
			{"tier":18, "name":"Bismuth" , "level":140, "additional_cost_multiplicative":11, "base_impact_cost":3400, "increment_impact_cost":3400, "base_impact_value":648, "increment_impact_value":18, "base_durability_cost":3400, "increment_durability_cost":3400, "base_durability_value":3240, "increment_durability_value":90, "maximum_upgrade":170, "base_repair_cost":20995.2, "repair_cost_big_increment":583.2, "repair_cost_small_increment":16.2 , "buying_cost":10022520, "image":"pick_bismuth-2022-05.png" ,"recipe":[{"item":"items.trees.whiteoak:log","q":60 },{"item":"items.minerals.bismuth:ore"   ,"q":60},{"item":"items.minerals.molten:ore"    ,"q":60}]},
			{"tier":19, "name":"Onyx"    , "level":160, "additional_cost_multiplicative":12, "base_impact_cost":3600, "increment_impact_cost":3600, "base_impact_value":722, "increment_impact_value":19, "base_durability_cost":3600, "increment_durability_cost":3600, "base_durability_value":3610, "increment_durability_value":95, "maximum_upgrade":180, "base_repair_cost":26064.2, "repair_cost_big_increment":685.9, "repair_cost_small_increment":18.05, "buying_cost":13646880, "image":"pick_onyx-2022-05.png"    ,"recipe":[{"item":"items.trees.whiteoak:log","q":60 },{"item":"items.minerals.onyx:ore"      ,"q":60},{"item":"items.minerals.molten:ore"    ,"q":60}]}
 		],
		"axes":[],
		"sickles":[],
		"rods":[],
		"potions":[]
	},
	"items":{
		"minerals":[
			{"tier":1,  "name":"Stone",       "smeltable":false, "hitpoints":15,   "durability":0.5,   "respawn":5,  "price_raw":5,    "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_stone-2022-05.png"      },
			{"tier":2,  "name":"Tin",         "smeltable":true,  "hitpoints":60,   "durability":2,     "respawn":10, "price_raw":20,   "price_processed":160,  "smelt_time":10, "coal_rate":"?", "smelt_exp":4,   "image":"ore_tin-2022-05.png"        },
			{"tier":2,  "name":"Copper",      "smeltable":true,  "hitpoints":60,   "durability":2,     "respawn":10, "price_raw":20,   "price_processed":160,  "smelt_time":10, "coal_rate":"?", "smelt_exp":4,   "image":"ore_copper-2022-05.png"     },
			{"tier":3,  "name":"Iron",        "smeltable":true,  "hitpoints":135,  "durability":4.5,   "respawn":15, "price_raw":45,   "price_processed":360,  "smelt_time":15, "coal_rate":"?", "smelt_exp":11,  "image":"ore_iron-2022-05.png"       },
			{"tier":3,  "name":"Coal",        "smeltable":false, "hitpoints":135,  "durability":4.5,   "respawn":15, "price_raw":45,   "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_coal-2022-05.png"       },
			{"tier":4,  "name":"Gold",        "smeltable":true,  "hitpoints":240,  "durability":8,     "respawn":20, "price_raw":80,   "price_processed":640,  "smelt_time":20, "coal_rate":"?", "smelt_exp":22,  "image":"ore_gold-2022-05.png"       },
			{"tier":5,  "name":"Sandstone",   "smeltable":true,  "hitpoints":375,  "durability":12.5,  "respawn":25, "price_raw":125,  "price_processed":1000, "smelt_time":25, "coal_rate":"?", "smelt_exp":37,  "image":"ore_sandstone-2022-05.png"  },
			{"tier":5,  "name":"Mithril",     "smeltable":true,  "hitpoints":375,  "durability":12.5,  "respawn":25, "price_raw":125,  "price_processed":1000, "smelt_time":25, "coal_rate":"?", "smelt_exp":37,  "image":"ore_mithril-2022-05.png"    },
			{"tier":6,  "name":"Diamond",     "smeltable":true,  "hitpoints":540,  "durability":18,    "respawn":30, "price_raw":180,  "price_processed":1440, "smelt_time":30, "coal_rate":"?", "smelt_exp":56,  "image":"ore_diamond-2022-05.png"    },
			{"tier":7,  "name":"Emerald",     "smeltable":true,  "hitpoints":735,  "durability":24.5,  "respawn":35, "price_raw":245,  "price_processed":1960, "smelt_time":35, "coal_rate":"?", "smelt_exp":79,  "image":"ore_emerald-2022-05.png"    },
			{"tier":8,  "name":"Amethyst",    "smeltable":true,  "hitpoints":960,  "durability":32,    "respawn":40, "price_raw":320,  "price_processed":2560, "smelt_time":40, "coal_rate":"?", "smelt_exp":106, "image":"ore_amethyst-2022-05.png"   },
			{"tier":8,  "name":"Aluminite",   "smeltable":false, "hitpoints":960,  "durability":32,    "respawn":40, "price_raw":320,  "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_aluminite-2022-05.png"  },
			{"tier":9,  "name":"Topaz",       "smeltable":true,  "hitpoints":1215, "durability":40.5,  "respawn":45, "price_raw":405,  "price_processed":3240, "smelt_time":45, "coal_rate":"?", "smelt_exp":137, "image":"ore_topaz-2022-05.png"      },
			{"tier":10, "name":"Sapphire",    "smeltable":true,  "hitpoints":1500, "durability":50,    "respawn":50, "price_raw":500,  "price_processed":4000, "smelt_time":50, "coal_rate":"?", "smelt_exp":172, "image":"ore_sapphire-2022-05.png"   },
			{"tier":11, "name":"Ruby",        "smeltable":true,  "hitpoints":1815, "durability":60.5,  "respawn":55, "price_raw":605,  "price_processed":4840, "smelt_time":55, "coal_rate":"?", "smelt_exp":211, "image":"ore_ruby-2022-05.png"       },
			{"tier":12, "name":"Soul",        "smeltable":true,  "hitpoints":2160, "durability":72,    "respawn":60, "price_raw":720,  "price_processed":5760, "smelt_time":60, "coal_rate":"?", "smelt_exp":254, "image":"ore_soul-2022-05.png"       },
			{"tier":13, "name":"Demonic",     "smeltable":true,  "hitpoints":2535, "durability":84.5,  "respawn":65, "price_raw":845,  "price_processed":5760, "smelt_time":65, "coal_rate":"?", "smelt_exp":254, "image":"ore_demonic-2022-05.png"    },
			{"tier":15, "name":"Bone",        "smeltable":false, "hitpoints":3375, "durability":247.5, "respawn":75, "price_raw":980,  "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_bone-2022-05.png"       },
			{"tier":15, "name":"Molten",      "smeltable":false, "hitpoints":3375, "durability":247.5, "respawn":75, "price_raw":2250, "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_molten-2022-05.png"     },
			{"tier":16, "name":"Frost",       "smeltable":false, "hitpoints":3840, "durability":352,   "respawn":80, "price_raw":3328, "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_frost-2022-05.png"      },
			{"tier":17, "name":"Blood spore", "smeltable":false, "hitpoints":4335, "durability":397.5, "respawn":85, "price_raw":4046, "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_bloodspore-2022-05.png" },
			{"tier":18, "name":"Bismuth",     "smeltable":false, "hitpoints":4860, "durability":486,   "respawn":90, "price_raw":5508, "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_bismuth-2022-05.png"    },
			{"tier":19, "name":"Onyx",        "smeltable":false, "hitpoints":5415, "durability":544,   "respawn":95, "price_raw":6137, "price_processed":0,    "smelt_time":0,  "coal_rate":"?", "smelt_exp":0,   "image":"ore_onyx-2022-05.png"       }
		],
		"trees":[
			{"Tier":1 , "name":"Birch"    , "Hitpoints":15  , "Durability":0.5 , "Value":5  , "Experience":15  , "Respawn":5 },
			{"Tier":2 , "name":"Pine"     , "Hitpoints":60  , "Durability":2   , "Value":20 , "Experience":60  , "Respawn":10},
			{"Tier":3 , "name":"Oak"      , "Hitpoints":135 , "Durability":4.5 , "Value":45 , "Experience":135 , "Respawn":15},
			{"Tier":4 , "name":"Beech"    , "Hitpoints":240 , "Durability":8   , "Value":80 , "Experience":240 , "Respawn":20},
			{"Tier":5 , "name":"Mapple"   , "Hitpoints":375 , "Durability":12.5, "Value":125, "Experience":375 , "Respawn":25},
			{"Tier":6 , "name":"Ash"      , "Hitpoints":540 , "Durability":18  , "Value":125, "Experience":540 , "Respawn":30},
			{"Tier":11, "name":"White Oak", "Hitpoints":1815, "Durability":60.5, "Value":605, "Experience":1815, "Respawn":55}
		],
		"flowers":[
			{"Tier":1 , "Name":"Dahila"          , "Durability":3  , "Value":5  , "Experience":1  , "Respawn":5 },
			{"Tier":2 , "Name":"Crimini Mushroom", "Durability":12 , "Value":20 , "Experience":5  , "Respawn":10},
			{"Tier":3 , "Name":"Flax"            , "Durability":27 , "Value":45 , "Experience":15 , "Respawn":15},
			{"Tier":3 , "Name":"Oyster Mushroom" , "Durability":27 , "Value":45 , "Experience":15 , "Respawn":15},
			{"Tier":4 , "Name":"Daisy"           , "Durability":48 , "Value":80 , "Experience":31 , "Respawn":20},
			{"Tier":4 , "Name":"Red Mushroom"    , "Durability":48 , "Value":80 , "Experience":31 , "Respawn":20},
			{"Tier":5 , "Name":"Glow Mushroom"   , "Durability":75 , "Value":125, "Experience":53 , "Respawn":25},
			{"Tier":5 , "Name":"Poison Mushroom" , "Durability":75 , "Value":125, "Experience":53 , "Respawn":25},
			{"Tier":6 , "Name":"Vinca Petal"     , "Durability":108, "Value":180, "Experience":81 , "Respawn":30},
			{"Tier":6 , "Name":"Night Petal"     , "Durability":108, "Value":180, "Experience":81 , "Respawn":30},
			{"Tier":7 , "Name":"Amar Spore"      , "Durability":147, "Value":245, "Experience":115, "Respawn":35},
			{"Tier":7 , "Name":"Sun Leaf"        , "Durability":147, "Value":245, "Experience":115, "Respawn":35},
			{"Tier":8 , "Name":"Blue Blossom"    , "Durability":192, "Value":320, "Experience":155, "Respawn":40},
			{"Tier":8 , "Name":"Ice Petal"       , "Durability":192, "Value":320, "Experience":155, "Respawn":40},
			{"Tier":8 , "Name":"Moon Leaf"       , "Durability":192, "Value":320, "Experience":155, "Respawn":40},
			{"Tier":9 , "Name":"Shade Flower"    , "Durability":243, "Value":405, "Experience":201, "Respawn":45},
			{"Tier":9 , "Name":"Snake Mushroom"  , "Durability":243, "Value":405, "Experience":201, "Respawn":45},
			{"Tier":10, "Name":"Purple Wisp"     , "Durability":300, "Value":500, "Experience":253, "Respawn":50},
			{"Tier":10, "Name":"Shadow Leaf"     , "Durability":300, "Value":500, "Experience":253, "Respawn":50},
			{"Tier":10, "Name":"Poison Spore"    , "Durability":300, "Value":500, "Experience":253, "Respawn":50},
			{"Tier":11, "Name":"Sun Blossom"     , "Durability":363, "Value":605, "Experience":311, "Respawn":55},
			{"Tier":11, "Name":"Tentrashrooms"   , "Durability":363, "Value":605, "Experience":311, "Respawn":55}
		],
		"fishes":[
			{"tier":10, "name":"Lava Arowana Fish"     , "value":968  , "durability":5 , "biome":"Lava" , "order":52},
			{"tier":11, "name":"Lava Guppy"            , "value":1152 , "durability":6 , "biome":"Lava" , "order":53},
			{"tier":13, "name":"Magma Angel Fish"      , "value":1568 , "durability":7 , "biome":"Lava" , "order":54},
			{"tier":15, "name":"Lava Angel Fish"       , "value":2048 , "durability":8 , "biome":"Lava" , "order":51},
			{"tier":18, "name":"Red Exallias Brevis"   , "value":2888 , "durability":9 , "biome":"Lava" , "order":55},
			{"tier":1 , "name":"Blue Mandarin"         , "value":32   , "durability":1 , "biome":"Ocean", "order":57},
			{"tier":2 , "name":"Grouper"               , "value":72   , "durability":1 , "biome":"Ocean", "order":9 },
			{"tier":3 , "name":"Blue Streak Angel Fish", "value":128  , "durability":2 , "biome":"Ocean", "order":58},
			{"tier":4 , "name":"Dark Tang"             , "value":200  , "durability":2 , "biome":"Ocean", "order":60},
			{"tier":5 , "name":"Needle Nose"           , "value":288  , "durability":3 , "biome":"Ocean", "order":13},
			{"tier":6 , "name":"Puffer Fish"           , "value":352  , "durability":3 , "biome":"Ocean", "order":64},
			{"tier":7 , "name":"Purple Sauger"         , "value":512  , "durability":4 , "biome":"Ocean", "order":16},
			{"tier":8 , "name":"Rainbow Minnow"        , "value":648  , "durability":4 , "biome":"Ocean", "order":17},
			{"tier":9 , "name":"Red Lion Fish"         , "value":800  , "durability":5 , "biome":"Ocean", "order":67},
			{"tier":10, "name":"Sea Tang"              , "value":968  , "durability":5 , "biome":"Ocean", "order":68},
			{"tier":11, "name":"Sharp Fin"             , "value":1152 , "durability":6 , "biome":"Ocean", "order":18},
			{"tier":12, "name":"Blue Dotted Wrasse"    , "value":1352 , "durability":6 , "biome":"Ocean", "order":56},
			{"tier":13, "name":"Shell Tail Fish"       , "value":1568 , "durability":7 , "biome":"Ocean", "order":19},
			{"tier":13, "name":"Spotted Mackerel"      , "value":1568 , "durability":7 , "biome":"Ocean", "order":20},
			{"tier":14, "name":"Spotted Tailfin"       , "value":1800 , "durability":7 , "biome":"Ocean", "order":21},
			{"tier":15, "name":"Yellow Back"           , "value":2048 , "durability":8 , "biome":"Ocean", "order":25},
			{"tier":16, "name":"Sun Mandarin"          , "value":2312 , "durability":8 , "biome":"Ocean", "order":70},
			{"tier":17, "name":"Sun Tang"              , "value":2592 , "durability":9 , "biome":"Ocean", "order":71},
			{"tier":18, "name":"Rainbow Tang"          , "value":2888 , "durability":9 , "biome":"Ocean", "order":66},
			{"tier":19, "name":"Sun Fish"              , "value":3200 , "durability":10, "biome":"Ocean", "order":22},
			{"tier":20, "name":"Wavey Grouper"         , "value":3528 , "durability":10, "biome":"Ocean", "order":24},
			{"tier":21, "name":"Pink Exallias Brevis"  , "value":3872 , "durability":11, "biome":"Ocean", "order":63},
			{"tier":22, "name":"White Spotted Tang"    , "value":4232 , "durability":11, "biome":"Ocean", "order":73},
			{"tier":23, "name":"Purple Angel Fish"     , "value":4608 , "durability":12, "biome":"Ocean", "order":65},
			{"tier":24, "name":"Devil Flower Horn"     , "value":5000 , "durability":12, "biome":"Ocean", "order":61},
			{"tier":25, "name":"Stingray"              , "value":5408 , "durability":13, "biome":"Ocean", "order":69},
			{"tier":26, "name":"Yellow Lion Fish"      , "value":5832 , "durability":13, "biome":"Ocean", "order":74},
			{"tier":27, "name":"Tiger Tang"            , "value":6272 , "durability":14, "biome":"Ocean", "order":72},
			{"tier":28, "name":"Deep Blue Fish"        , "value":6728 , "durability":14, "biome":"Ocean", "order":6 },
			{"tier":29, "name":"Chick Fin"             , "value":7200 , "durability":15, "biome":"Ocean", "order":4 },
			{"tier":30, "name":"Yellow Blow Fish"      , "value":7688 , "durability":15, "biome":"Ocean", "order":26},
			{"tier":31, "name":"Evasive Squil"         , "value":8192 , "durability":16, "biome":"Ocean", "order":8 },
			{"tier":32, "name":"Evasive Tang"          , "value":8712 , "durability":16, "biome":"Ocean", "order":62},
			{"tier":35, "name":"Dark Stingray"         , "value":10368, "durability":18, "biome":"Ocean", "order":59},
			{"tier":1 , "name":"Betta Fish"            , "value":32   , "durability":1 , "biome":"Pond" , "order":32},
			{"tier":2 , "name":"Blue Fish"             , "value":72   , "durability":1 , "biome":"Pond" , "order":1 },
			{"tier":3 , "name":"Blue Marlin"           , "value":128  , "durability":2 , "biome":"Pond" , "order":2 },
			{"tier":4 , "name":"Blue Tailfin"          , "value":200  , "durability":2 , "biome":"Pond" , "order":3 },
			{"tier":5 , "name":"Koi Fish"              , "value":288  , "durability":3 , "biome":"Pond" , "order":41},
			{"tier":6 , "name":"Cow Angel Fish"        , "value":392  , "durability":3 , "biome":"Pond" , "order":33},
			{"tier":7 , "name":"Highfin"               , "value":512  , "durability":4 , "biome":"Pond" , "order":10},
			{"tier":8 , "name":"Angelic Tang"          , "value":648  , "durability":4 , "biome":"Pond" , "order":30},
			{"tier":9 , "name":"Lake Arowana"          , "value":800  , "durability":5 , "biome":"Pond" , "order":42},
			{"tier":10, "name":"Lake Mahi Fish"        , "value":968  , "durability":5 , "biome":"Pond" , "order":11},
			{"tier":11, "name":"Deep Blue Mackerel"    , "value":1152 , "durability":6 , "biome":"Pond" , "order":7 },
			{"tier":12, "name":"Moor Fish"             , "value":1352 , "durability":6 , "biome":"Pond" , "order":43},
			{"tier":13, "name":"Orange Sauger"         , "value":1568 , "durability":7 , "biome":"Pond" , "order":14},
			{"tier":14, "name":"Iced Koi"              , "value":1800 , "durability":7 , "biome":"Pond" , "order":39},
			{"tier":15, "name":"Pond Mandarin"         , "value":2048 , "durability":8 , "biome":"Pond" , "order":44},
			{"tier":16, "name":"Angelic Angel Fish"    , "value":2312 , "durability":8 , "biome":"Pond" , "order":28},
			{"tier":17, "name":"Purple Mahi-Mahi"      , "value":2592 , "durability":9 , "biome":"Pond" , "order":15},
			{"tier":18, "name":"Sand Mandarin"         , "value":2888 , "durability":9 , "biome":"Pond" , "order":45},
			{"tier":19, "name":"Beautiful Flower Horn" , "value":3200 , "durability":10, "biome":"Pond" , "order":31},
			{"tier":20, "name":"Angelic Guppy"         , "value":3528 , "durability":10, "biome":"Pond" , "order":29},
			{"tier":21, "name":"Summer Angel Fish"     , "value":3872 , "durability":11, "biome":"Pond" , "order":46},
			{"tier":22, "name":"Swampy Trigger Fish"   , "value":4232 , "durability":11, "biome":"Pond" , "order":47},
			{"tier":23, "name":"Target Angel Fish"     , "value":4608 , "durability":12, "biome":"Pond" , "order":48},
			{"tier":24, "name":"Dark Guppy"            , "value":5000 , "durability":12, "biome":"Pond" , "order":35},
			{"tier":25, "name":"Sunshine Trout"        , "value":5408 , "durability":13, "biome":"Pond" , "order":23},
			{"tier":26, "name":"Koi Angel Fish"        , "value":5832 , "durability":13, "biome":"Pond" , "order":40},
			{"tier":27, "name":"Yellow Disc Tang"      , "value":6272 , "durability":14, "biome":"Pond" , "order":50},
			{"tier":28, "name":"Dark Moor"             , "value":6728 , "durability":14, "biome":"Pond" , "order":36},
			{"tier":29, "name":"Dark Disc Tang"        , "value":7200 , "durability":15, "biome":"Pond" , "order":34},
			{"tier":30, "name":"Dark Trout"            , "value":7688 , "durability":15, "biome":"Pond" , "order":5 },
			{"tier":31, "name":"Love Fish"             , "value":8192 , "durability":16, "biome":"Pond" , "order":12},
			{"tier":32, "name":"Yellow Sauger"         , "value":8712 , "durability":16, "biome":"Pond" , "order":27},
			{"tier":33, "name":"Tiger Koi"             , "value":9248 , "durability":17, "biome":"Pond" , "order":49},
			{"tier":34, "name":"Evasive Trigger Fish"  , "value":9800 , "durability":17, "biome":"Pond" , "order":37},
			{"tier":35, "name":"Evasive Wrasse Fish"   , "value":10368, "durability":18, "biome":"Pond" , "order":38}
		]
	},
	"resource_location":{
		"icons":{
			"NPC":                "./icons/ico_NPC.png",
			"Jobsite":            "./icons/ico_JOB.png",
			"Mineral":            "./icons/ico_MINERAL.png",
			"Trees":              "./icons/ico_TREE.png",
			"Flowers":            "./icons/ico_FLOWER.png",
			"Points of Interest": "./icons/ico_POI.png"
		},
		"data":{
			"NPC":{
				"1":{
					"name":"Shop Keeper",
					"pos":[{"x":312,"y":671}]
				},
				"2":{
					"name":"Blacksmith",
					"pos":[{"x":320,"y":668}]
				},
				"3":{
					"name":"Fisherman",
					"pos":[]
				}
			},
			"Jobsite":{
				"1":{
					"name":"Furnace",
					"pos":[{"x":323,"y":676}]
				},
				"2":{
					"name":"Storage Chest",
					"pos": [{"x":976,"y":231}, {"x":924,"y":354}, {"x":317,"y":666}]
				},
				"3":{
					"name":"Teleporter Stone",
					"pos": [
						{"x":315,"y":654,"label":"Mount Chibi"},
						{"x":649,"y":320,"label":"Misty Hills"},
						{"x":505,"y":537,"label":"Fishers Refuge"},
						{"x":894,"y":335,"label":"Mount Magma"},
						{"x":690,"y":771,"label":"Snowy Peak"}]
				},
				"4":{
					"name":"Workbench",
					"pos":[{"x":318,"y":677}]
				},
				"5":{
					"name":"Alchemy Table",
					"pos":[{"x":0,"y":0}]
				}
			},
			"Mineral":{
				"1":{
					"name":"Stone",
					"pos":[{"x":326,"y":649}, {"x":323,"y":638}, {"x":326,"y":637}, {"x":305,"y":624}, {"x":346,"y":621}]
				},
				"2":{
					"name":"Tin",
					"pos":[{"x":297,"y":616}, {"x":300,"y":621}]
				},
				"3":{
					"name":"Copper",
					"pos":[{"x":326,"y":652}, {"x":329,"y":647}]
				},
				"4":{
					"name":"Iron",
					"pos":[{"x":345,"y":625},{"x":345,"y":622},{"x":347,"y":622},{"x":328,"y":586},{"x":327,"y":589}]
				},
				"5":{
					"name":"Coal",
					"pos":[{"x":345,"y":619}, {"x":347,"y":624}, {"x":327,"y":592}, {"x":366,"y":562}, {"x":364,"y":564}]
				},
				"6":{
					"name":"Gold",
					"pos":[{"x":329,"y":585},{"x":328,"y":588},{"x":339,"y":586},{"x":341,"y":584},{"x":369,"y":575},{"x":369,"y":578}]
				},
				"7":{
					"name":"Sandstone",
					"pos":[{"x":0,"y":0}]
				},
				"8":{
					"name":"Mithril",
					"pos":[{"x":0,"y":0},{"x":362,"y":564},{"x":366,"y":564},{"x":368,"y":562}]
				},
				"9":{
					"name":"Diamond",
					"pos":[{"x":0,"y":0}]
				},
				"10":{
					"name":"Emerald",
					"pos":[{"x":0,"y":0}]
				},
				"11":{
					"name":"Amethyst",
					"pos":[{"x":0,"y":0}]
				},
				"12":{
					"name":"Aluminite",
					"pos":[{"x":0,"y":0}]
				},
				"13":{
					"name":"Topaz",
					"pos":[{"x":0,"y":0}]
				},
				"14":{
					"name":"Sapphire",
					"pos":[{"x":0,"y":0}]
				},
				"15":{
					"name":"Ruby",
					"pos":[{"x":0,"y":0}]
				},
				"16":{
					"name":"Soul",
					"pos":[{"x":0,"y":0}]
				},
				"17":{
					"name":"Demonic",
					"pos":[{"x":0,"y":0}]
				},
				"18":{
					"name":"Bone",
					"pos":[{"x":0,"y":0}]
				},
				"19":{
					"name":"Molten",
					"pos":[{"x":0,"y":0}]
				},
				"20":{
					"name":"Frost",
					"pos":[{"x":0,"y":0}]
				},
				"21":{
					"name":"Blood Spore",
					"pos":[{"x":0,"y":0}]
				},
				"22":{
					"name":"Bismuth",
					"pos":[{"x":0,"y":0}]
				},
				"23":{
					"name":"Onyx",
					"pos":[{"x":0,"y":0}]
				}
			},
			"Trees":{
				"1":{
					"name":"Birch Tree",
					"pos":[{"x":296,"y":660},{"x":330,"y":665},{"x":324,"y":643},{"x":302,"y":634},{"x":317,"y":600},{"x":316,"y":612},{"x":357,"y":593},{"x":355,"y":604},{"x":356,"y":614},{"x":342,"y":562},{"x":352,"y":548}]
				},
				"2":{
					"name":"Pine Tree",
					"pos":[{"x":327,"y":660},{"x":330,"y":681},{"x":339,"y":640},{"x":301,"y":626},{"x":360,"y":603},{"x":350,"y":587},{"x":308,"y":608},{"x":347,"y":549},{"x":371,"y":582}]
				},
				"3":{
					"name":"Oak Tree",
					"pos":[]
				},
				"4":{
					"name":"Beech Tree",
					"pos":[]
				},
				"5":{
					"name":"Maple Tree",
					"pos":[]
				},
				"6":{
					"name":"Ash Tree",
					"pos":[]
				},
				"7":{
					"name":"White Oak Tree",
					"pos":[]
				}
			},
			"Flowers":{
				"1":{ 
					"name":"Dahila", 
					"pos":[{"x":303,"y":661}, {"x":300,"y":640}, {"x":345,"y":586}] 
				},
				"2":{ 
					"name":"Crimini Mushroom", 
					"pos":[{"x":339,"y":642}, {"x":335,"y":640}, {"x":296,"y":612}, {"x":294,"y":626}, {"x":361,"y":610},{"x":376,"y":569}]
				},
				"3":{ 
					"name":"Flax", 
					"pos":[{"x":353,"y":593},{"x":353,"y":618},{"x":312,"y":603},{"x":364,"y":578}] 
				},
				"4":{ 
					"name":"Oyster Mushroom", 
					"pos":[] 
				},
				"5":{ 
					"name":"Daisy", 
					"pos":[] 
				},
				"6":{ 
					"name":"Red Mushroom", 
					"pos":[{"x":335,"y":560}] 
				},
				"7":{ 
					"name":"Glow Mushroom", 
					"pos":[] 
				},
				"8":{ 
					"name":"Poison Mushroom", 
					"pos":[] 
				},
				"9":{ 
					"name":"Vinca Petal", 
					"pos":[] 
				},
				"10":{ 
					"name":"Night Petal", 
					"pos":[] 
				},
				"11":{ 
					"name":"Amar Spore", 
					"pos":[] 
				},
				"12":{ 
					"name":"Sun Leaf", 
					"pos":[] 
				},
				"13":{ 
					"name":"Blue Blossom", 
					"pos":[] 
				},
				"14":{ 
					"name":"Ice Petal", 
					"pos":[] 
				},
				"15":{ 
					"name":"Moon Leaf", 
					"pos":[] 
				},
				"16":{ 
					"name":"Shade Flower", 
					"pos":[] 
				},
				"17":{ 
					"name":"Snake Mushroom", 
					"pos":[] 
				},
				"18":{ 
					"name":"Purple Wisp", 
					"pos":[] 
				},
				"19":{ 
					"name":"Shadow Leaf", 
					"pos":[] 
				},
				"20":{ 
					"name":"Poison Spore", 
					"pos":[] 
				},
				"21":{ 
					"name":"Sun Blossom", 
					"pos":[] 
				},
				"22":{ 
					"name":"Tentrashrooms", 
					"pos":[] 
				}
			},
			"Points of Interest":{
				"0":{"name":"Points of Interest-","pos":[
					{"x":33,"y":675,"label":"Newbies Island"},
					{"x":834,"y":700,"label":"Not Creative Island"},
					{"x":509,"y":439,"label":"Pond"},
					{"x":48,"y":613,"label":"Ship"},
					{"x":945,"y":286,"label":"Top of Mount Magma"},
					{"x":850,"y":113,"label":"Top of the world"},
					{"x":739,"y":414,"label":"Altar"},
					{"x":407,"y":488,"label":"Secret Rune"},
					{"x":552,"y":624,"label":"Secret Rune"},
					{"x":403,"y":511,"label":"Tents & camp"},
					{"x":912,"y":388,"label":"Tents & camp"},
					{"x":589,"y":409,"label":"Tents & camp"},
					{"x":919,"y":327,"label":"Cave"}
					]
				}
			}
		}
	}
}