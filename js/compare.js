$('button#btnSubmit').on('click', function() {
	//Compare button pressed
	var sel1 = $('select#country1').val(); //country iso codes
	var sel2 = $('select#country2').val();
	
	if(sel1 === "" || sel2 === "" || sel1 === sel2) {
		//alert("Please select at least two different countries")
	}
	else {
		//post this to php file to retrieve data
		try {
			$.post('php/retrieve_geo_data.php', { sel1: sel1, sel2: sel2 }, function(data) {
				//Parse the JSON string into an object readable for JavaScript
				var obj = JSON.parse(data);
				
				//Test output in the console
				//console.log(data); //raw data
				console.log(obj); //parsed data
				
				/* --- Fill Geography Table --- */
				//Change Header Titles
				var sel1text = $('select#country1').find(":selected").text();
				var sel2text = $('select#country2').find(":selected").text();
				document.getElementById("country_header_1").innerHTML = sel1text;
				document.getElementById("country_header_2").innerHTML = sel2text;
				document.getElementById("country_header_3").innerHTML = sel1text;
				document.getElementById("country_header_4").innerHTML = sel2text;
				
				//Fill with data from database
				document.getElementById("geo_region_1").innerHTML = obj[0].region;
				document.getElementById("geo_region_2").innerHTML = obj[1].region;
				document.getElementById("geo_capital_1").innerHTML = obj[0].capital;
				document.getElementById("geo_capital_2").innerHTML = obj[1].capital;
				document.getElementById("geo_surface_area_1").innerHTML = putThousandsSeparators(obj[0].surface_area) + " km<sup>2</sup>";
				document.getElementById("geo_surface_area_2").innerHTML = putThousandsSeparators(obj[1].surface_area) + " km<sup>2</sup>";
				document.getElementById("geo_land_area_1").innerHTML = putThousandsSeparators(obj[0].land_area) + " km<sup>2</sup>";
				document.getElementById("geo_land_area_2").innerHTML = putThousandsSeparators(obj[1].land_area) + " km<sup>2</sup>";
				document.getElementById("geo_water_area_1").innerHTML = putThousandsSeparators(obj[0].water_area) + " km<sup>2</sup>";
				document.getElementById("geo_water_area_2").innerHTML = putThousandsSeparators(obj[1].water_area) + " km<sup>2</sup>";
				document.getElementById("geo_global_area_rank_1").innerHTML = obj[0].global_area_rank;
				document.getElementById("geo_global_area_rank_2").innerHTML = obj[1].global_area_rank;
				document.getElementById("geo_land_boundary_1").innerHTML = putThousandsSeparators(obj[0].land_boundary) + " km";
				document.getElementById("geo_land_boundary_2").innerHTML = putThousandsSeparators(obj[1].land_boundary) + " km";
				document.getElementById("geo_bordering_countries_1").innerHTML = obj[0].bordering_countries;
				document.getElementById("geo_bordering_countries_2").innerHTML = obj[1].bordering_countries;
				document.getElementById("geo_coastline_1").innerHTML = putThousandsSeparators(obj[0].coastline) + " km";
				document.getElementById("geo_coastline_2").innerHTML = putThousandsSeparators(obj[1].coastline) + " km";
				document.getElementById("geo_climate_1").innerHTML = obj[0].climate;
				document.getElementById("geo_climate_2").innerHTML = obj[1].climate;
				document.getElementById("geo_terrain_1").innerHTML = obj[0].terrain;
				document.getElementById("geo_terrain_2").innerHTML = obj[1].terrain;
				document.getElementById("geo_avg_elevation_1").innerHTML = putThousandsSeparators(obj[0].avg_elevation) + " m";
				document.getElementById("geo_avg_elevation_2").innerHTML = putThousandsSeparators(obj[1].avg_elevation) + " m";
				document.getElementById("geo_highest_elevation_1").innerHTML = putThousandsSeparators(obj[0].highest_elevation) + " m";
				document.getElementById("geo_highest_elevation_2").innerHTML = putThousandsSeparators(obj[1].highest_elevation) + " m";
				document.getElementById("geo_lowest_elevation_1").innerHTML = putThousandsSeparators(obj[0].lowest_elevation) + " m";
				document.getElementById("geo_lowest_elevation_2").innerHTML = putThousandsSeparators(obj[1].lowest_elevation) + " m";
				document.getElementById("geo_natural_resources_1").innerHTML = obj[0].natural_resources;
				document.getElementById("geo_natural_resources_2").innerHTML = obj[1].natural_resources;
				document.getElementById("geo_land_use_1").innerHTML = obj[0].land_use;
				document.getElementById("geo_land_use_2").innerHTML = obj[1].land_use;
				document.getElementById("geo_irrigated_land_1").innerHTML = putThousandsSeparators(obj[0].irrigated_land) + " km<sup>2</sup>";
				document.getElementById("geo_irrigated_land_2").innerHTML = putThousandsSeparators(obj[1].irrigated_land) + " km<sup>2</sup>";
				document.getElementById("geo_natural_hazards_1").innerHTML = obj[0].natural_hazards;
				document.getElementById("geo_natural_hazards_2").innerHTML = obj[1].natural_hazards;
				
				//Set titles/tooltips for sources
				document.getElementById("geo_region_1").title = "Source: " + obj[0].region_src;
				document.getElementById("geo_region_2").title = "Source: " + obj[1].region_src;
				document.getElementById("geo_capital_1").title = "Source: " + obj[0].capital_src;
				document.getElementById("geo_capital_2").title = "Source: " + obj[1].capital_src;
				document.getElementById("geo_surface_area_1").title = "Source: " + obj[0].surface_area_src;
				document.getElementById("geo_surface_area_2").title = "Source: " + obj[1].surface_area_src;
				document.getElementById("geo_land_area_1").title = "Source: " + obj[0].land_area_src;
				document.getElementById("geo_land_area_2").title = "Source: " + obj[1].land_area_src;
				document.getElementById("geo_water_area_1").title = "Source: " + obj[0].water_area_src;
				document.getElementById("geo_water_area_2").title = "Source: " + obj[1].water_area_src;
				document.getElementById("geo_global_area_rank_1").title = "Source: " + obj[0].global_area_rank_src;
				document.getElementById("geo_global_area_rank_2").title = "Source: " + obj[1].global_area_rank_src;
				document.getElementById("geo_land_boundary_1").title = "Source: " + obj[0].land_boundary_src;
				document.getElementById("geo_land_boundary_2").title = "Source: " + obj[1].land_boundary_src;
				document.getElementById("geo_bordering_countries_1").title = "Source: " + obj[0].bordering_countries_src;
				document.getElementById("geo_bordering_countries_2").title = "Source: " + obj[1].bordering_countries_src;
				document.getElementById("geo_coastline_1").title = "Source: " + obj[0].coastline_src;
				document.getElementById("geo_coastline_2").title = "Source: " + obj[1].coastline_src;
				document.getElementById("geo_climate_1").title = "Source: " + obj[0].climate_src;
				document.getElementById("geo_climate_2").title = "Source: " + obj[1].climate_src;
				document.getElementById("geo_terrain_1").title = "Source: " + obj[0].terrain_src;
				document.getElementById("geo_terrain_2").title = "Source: " + obj[1].terrain_src;
				document.getElementById("geo_avg_elevation_1").title = "Source: " + obj[0].avg_elevation_src;
				document.getElementById("geo_avg_elevation_2").title = "Source: " + obj[1].avg_elevation_src;
				document.getElementById("geo_highest_elevation_1").title = "Source: " + obj[0].highest_elevation_src;
				document.getElementById("geo_highest_elevation_2").title = "Source: " + obj[1].highest_elevation_src;
				document.getElementById("geo_lowest_elevation_1").title = "Source: " + obj[0].lowest_elevation_src;
				document.getElementById("geo_lowest_elevation_2").title = "Source: " + obj[1].lowest_elevation_src;
				document.getElementById("geo_natural_resources_1").title = "Source: " + obj[0].natural_resources_src;
				document.getElementById("geo_natural_resources_2").title = "Source: " + obj[1].natural_resources_src;
				document.getElementById("geo_land_use_1").title = "Source: " + obj[0].land_use_src;
				document.getElementById("geo_land_use_2").title = "Source: " + obj[1].land_use_src;
				document.getElementById("geo_irrigated_land_1").title = "Source: " + obj[0].irrigated_land_src;
				document.getElementById("geo_irrigated_land_2").title = "Source: " + obj[1].irrigated_land_src;
				document.getElementById("geo_natural_hazards_1").title = "Source: " + obj[0].natural_hazards_src;
				document.getElementById("geo_natural_hazards_2").title = "Source: " + obj[1].natural_hazards_src;
				
				/* --- Calculate comparison facts --- */
				//Surface Area
				clearExistingStats("geo_surface_area_1_stats", "geo_surface_area_2_stats");
				var surface_area_1 = parseInt(obj[0].surface_area);
				var surface_area_2 = parseInt(obj[1].surface_area);
				var surface_area_result = compareStats(surface_area_1, surface_area_2);
				if(surface_area_result != "value 0" && surface_area_result != "value negative" && surface_area_result != "values equal" && surface_area_result != "unexpected error") {
					document.getElementById("geo_surface_area_1_stats").innerHTML = surface_area_result[0];
					document.getElementById("geo_surface_area_2_stats").innerHTML = surface_area_result[1];
					if(surface_area_1 > surface_area_2) {
						document.getElementById("geo_surface_area_1_stats").innerHTML += " times larger";
						document.getElementById("geo_surface_area_2_stats").innerHTML += "%";
					}
					else if(surface_area_2 > surface_area_1) {
						document.getElementById("geo_surface_area_1_stats").innerHTML += "%";
						document.getElementById("geo_surface_area_2_stats").innerHTML += " times larger";
					}
				}
				
				//Land Surface Area
				clearExistingStats("geo_land_area_1_stats", "geo_land_area_2_stats");
				var land_surface_area_1 = parseInt(obj[0].land_area);
				var land_surface_area_2 = parseInt(obj[1].land_area);
				var land_surface_result = compareStats(land_surface_area_1, land_surface_area_2);
				if(land_surface_result != "value 0" && land_surface_result != "value negative" && land_surface_result != "values equal" && land_surface_result != "unexpected error") {
					document.getElementById("geo_land_area_1_stats").innerHTML = land_surface_result[0];
					document.getElementById("geo_land_area_2_stats").innerHTML = land_surface_result[1];
					if(land_surface_area_1 > land_surface_area_2) {
						document.getElementById("geo_land_area_1_stats").innerHTML += " times larger";
						document.getElementById("geo_land_area_2_stats").innerHTML += "%";
					}
					else if(land_surface_area_2 > land_surface_area_1) {
						document.getElementById("geo_land_area_1_stats").innerHTML += "%";
						document.getElementById("geo_land_area_2_stats").innerHTML += " times larger";
					}
				}
				
				//Water Surface Area
				clearExistingStats("geo_water_area_1_stats", "geo_water_area_2_stats");
				var water_area_1 = parseInt(obj[0].water_area);
				var water_area_2 = parseInt(obj[1].water_area);
				var water_area_result = compareStats(water_area_1, water_area_2);
				if(water_area_result != "value 0" && water_area_result != "value negative" && water_area_result != "values equal" && water_area_result != "unexpected error") {
					document.getElementById("geo_water_area_1_stats").innerHTML = water_area_result[0];
					document.getElementById("geo_water_area_2_stats").innerHTML = water_area_result[1];
					if(water_area_1 > water_area_2) {
						document.getElementById("geo_water_area_1_stats").innerHTML += " times larger";
						document.getElementById("geo_water_area_2_stats").innerHTML += "%";
					}
					else if(water_area_2 > water_area_1) {
						document.getElementById("geo_water_area_1_stats").innerHTML += "%";
						document.getElementById("geo_water_area_2_stats").innerHTML += " times larger";
					}
				}
				
				//Global Area Rank
				clearExistingStats("geo_global_area_rank_1_stats", "geo_global_area_rank_2_stats");
				var global_area_rank_1 = parseInt(obj[0].global_area_rank);
				var global_area_rank_2 = parseInt(obj[1].global_area_rank);
				if(global_area_rank_1 == 0) { //0 = no rank available
					document.getElementById("geo_global_area_rank_1").innerHTML = "unranked";
				}
				if(global_area_rank_2 == 0) { //0 = no rank available
					document.getElementById("geo_global_area_rank_2").innerHTML = "unranked";
				}
				if(global_area_rank_1 != 0 && global_area_rank_2 != 0 && global_area_rank_1 != global_area_rank_2) {
					var difference = Math.abs(global_area_rank_1 - global_area_rank_2);
					if(global_area_rank_2 > global_area_rank_1) {
						document.getElementById("geo_global_area_rank_1_stats").innerHTML = difference + " ranks higher";
						document.getElementById("geo_global_area_rank_2_stats").innerHTML = difference + " ranks lower";
					}
					else if(global_area_rank_1 > global_area_rank_2) {
						document.getElementById("geo_global_area_rank_1_stats").innerHTML = difference + " ranks lower";
						document.getElementById("geo_global_area_rank_2_stats").innerHTML = difference + " ranks higher";
					}
				}
				
				//Land Boundary
				clearExistingStats("geo_land_boundary_1_stats", "geo_land_boundary_2_stats");
				var land_boundary_1 = parseInt(obj[0].land_boundary);
				var land_boundary_2 = parseInt(obj[1].land_boundary);
				var land_boundary_result = compareStats(land_boundary_1, land_boundary_2);
				if(land_boundary_result != "value 0" && land_boundary_result != "value negative" && land_boundary_result != "values equal" && land_boundary_result != "unexpected error") {
					document.getElementById("geo_land_boundary_1_stats").innerHTML = land_boundary_result[0];
					document.getElementById("geo_land_boundary_2_stats").innerHTML = land_boundary_result[1];
					if(land_boundary_1 > land_boundary_2) {
						document.getElementById("geo_land_boundary_1_stats").innerHTML += " times longer";
						document.getElementById("geo_land_boundary_2_stats").innerHTML += "%";
					}
					else if(land_boundary_2 > land_boundary_1) {
						document.getElementById("geo_land_boundary_1_stats").innerHTML += "%";
						document.getElementById("geo_land_boundary_2_stats").innerHTML += " times longer";
					}
				}
				
				//Coastline
				clearExistingStats("geo_coastline_1_stats", "geo_coastline_2_stats");
				var coastline_1 = parseInt(obj[0].coastline);
				var coastline_2 = parseInt(obj[1].coastline);
				var coastline_result = compareStats(coastline_1, coastline_2);
				if(coastline_result != "value 0" && coastline_result != "value negative" && coastline_result != "values equal" && coastline_result != "unexpected error") {
					document.getElementById("geo_coastline_1_stats").innerHTML = coastline_result[0];
					document.getElementById("geo_coastline_2_stats").innerHTML = coastline_result[1];
					if(coastline_1 > coastline_2) {
						document.getElementById("geo_coastline_1_stats").innerHTML += " times longer";
						document.getElementById("geo_coastline_2_stats").innerHTML += "%";
					}
					else if(coastline_2 > coastline_1) {
						document.getElementById("geo_coastline_1_stats").innerHTML += "%";
						document.getElementById("geo_coastline_2_stats").innerHTML += " times longer";
					}
				}
				
				//Avg elevation
				clearExistingStats("geo_avg_elevation_1_stats", "geo_avg_elevation_2_stats");
				var avg_elevation_1 = parseInt(obj[0].avg_elevation);
				var avg_elevation_2 = parseInt(obj[1].avg_elevation);
				var avg_elevation_result = compareStats(avg_elevation_1, avg_elevation_2);
				if(avg_elevation_1 == -1000) { document.getElementById("geo_avg_elevation_1").innerHTML = "unknown"; } //-1000 value stands for unknown avg_elevation
				if(avg_elevation_2 == -1000) { document.getElementById("geo_avg_elevation_2").innerHTML = "unknown"; }
				if(avg_elevation_result != "value 0" && avg_elevation_result != "value negative" && avg_elevation_result != "values equal" && avg_elevation_result != "unexpected error" && avg_elevation_1 != -1000 && avg_elevation_2 != -1000) {
					document.getElementById("geo_avg_elevation_1_stats").innerHTML = avg_elevation_result[0];
					document.getElementById("geo_avg_elevation_2_stats").innerHTML = avg_elevation_result[1];
					if(avg_elevation_1 > avg_elevation_2) {
						document.getElementById("geo_avg_elevation_1_stats").innerHTML += " times higher";
						document.getElementById("geo_avg_elevation_2_stats").innerHTML += "%";
					}
					else if(avg_elevation_2 > avg_elevation_1) {
						document.getElementById("geo_avg_elevation_1_stats").innerHTML += "%";
						document.getElementById("geo_avg_elevation_2_stats").innerHTML += " times higher";
					}
				}
				
				//Highest elevation
				clearExistingStats("geo_highest_elevation_1_stats", "geo_highest_elevation_2_stats");
				var highest_elevation_1 = parseInt(obj[0].highest_elevation);
				var highest_elevation_2 = parseInt(obj[1].highest_elevation);
				var highest_elevation_result = compareStats(highest_elevation_1, highest_elevation_2);
				if(highest_elevation_result != "value 0" && highest_elevation_result != "value negative" && highest_elevation_result != "values equal" && highest_elevation_result != "unexpected error") {
					document.getElementById("geo_highest_elevation_1_stats").innerHTML = highest_elevation_result[0];
					document.getElementById("geo_highest_elevation_2_stats").innerHTML = highest_elevation_result[1];
					if(highest_elevation_1 > highest_elevation_2) {
						document.getElementById("geo_highest_elevation_1_stats").innerHTML += " times higher";
						document.getElementById("geo_highest_elevation_2_stats").innerHTML += "%";
					}
					else if(highest_elevation_2 > highest_elevation_1) {
						document.getElementById("geo_highest_elevation_1_stats").innerHTML += "%";
						document.getElementById("geo_highest_elevation_2_stats").innerHTML += " times higher";
					}
				}
				
				//Lowest elevation
				clearExistingStats("geo_lowest_elevation_1_stats", "geo_lowest_elevation_2_stats");
				var lowest_elevation = true;
				var lowest_elevation_1 = parseInt(obj[0].lowest_elevation);
				var lowest_elevation_2 = parseInt(obj[1].lowest_elevation);
				if(lowest_elevation_1 == 0 && lowest_elevation_2 == 0) {
					//do nothing
				}
				else if(lowest_elevation_1 >= lowest_elevation_2) {
					if(lowest_elevation_1 <= 0 || lowest_elevation_2 <= 0) { //account for negative height values
						var difference = Math.abs(lowest_elevation_1 - lowest_elevation_2);
						document.getElementById("geo_lowest_elevation_1_stats").innerHTML = difference + "m higer";
						document.getElementById("geo_lowest_elevation_2_stats").innerHTML = difference + "m lower";
					}
					else if(lowest_elevation_1 > 0 && lowest_elevation_2 > 0) {
						var lowest_elevation_stat_1 = ((lowest_elevation_1 != 0 && lowest_elevation_2 != 0) ? (lowest_elevation_1 / lowest_elevation_2).toFixed(2) : lowest_elevation = false);
						var lowest_elevation_stat_2 = ((lowest_elevation_1 != 0 && lowest_elevation_2 != 0) ? (lowest_elevation_2 / lowest_elevation_1 * 100).toFixed(2) : lowest_elevation = false);
						if(lowest_elevation) {
							document.getElementById("geo_lowest_elevation_1_stats").innerHTML = lowest_elevation_stat_1 + " times higher";
							document.getElementById("geo_lowest_elevation_2_stats").innerHTML = lowest_elevation_stat_2 + "%";
						}
					}
				}
				else if(lowest_elevation_2 >= lowest_elevation_1) {
					if(lowest_elevation_1 <= 0 || lowest_elevation_2 <= 0) { //account for negative height values
						var difference = Math.abs(lowest_elevation_1 - lowest_elevation_2);
						document.getElementById("geo_lowest_elevation_1_stats").innerHTML = difference + "m lower";
						document.getElementById("geo_lowest_elevation_2_stats").innerHTML = difference + "m higher";
					}
					else if(lowest_elevation_1 > 0 && lowest_elevation_2 > 0) {
						var lowest_elevation_stat_1 = ((lowest_elevation_1 != 0 && lowest_elevation_2 != 0) ? (lowest_elevation_1 / lowest_elevation_2 * 100).toFixed(2) : lowest_elevation = false);
						var lowest_elevation_stat_2 = ((lowest_elevation_1 != 0 && lowest_elevation_2 != 0) ? (lowest_elevation_2 / lowest_elevation_1).toFixed(2) : lowest_elevation = false);
						if(lowest_elevation) {
							document.getElementById("geo_lowest_elevation_1_stats").innerHTML = lowest_elevation_stat_1 + "%";
							document.getElementById("geo_lowest_elevation_2_stats").innerHTML = lowest_elevation_stat_2 + " times higher";
						}
					}
				}
				
				//Irrigated land
				clearExistingStats("geo_irrigated_land_1_stats", "geo_irrigated_land_2_stats");
				var irrigated_land_1 = parseInt(obj[0].irrigated_land);
				var irrigated_land_2 = parseInt(obj[1].irrigated_land);
				var irrigated_land_result = compareStats(irrigated_land_1, irrigated_land_2);
				if(irrigated_land_1 == -1000) { document.getElementById("geo_irrigated_land_1").innerHTML = "unknown"; } //-1000 value stands for unknown avg_elevation
				if(irrigated_land_2 == -1000) { document.getElementById("geo_irrigated_land_2").innerHTML = "unknown"; }
				if(irrigated_land_result != "value 0" && irrigated_land_result != "value negative" && irrigated_land_result != "values equal" && irrigated_land_result != "unexpected error") {
					document.getElementById("geo_irrigated_land_1_stats").innerHTML = irrigated_land_result[0];
					document.getElementById("geo_irrigated_land_2_stats").innerHTML = irrigated_land_result[1];
					if(irrigated_land_1 > irrigated_land_2) {
						document.getElementById("geo_irrigated_land_1_stats").innerHTML += " times larger";
						document.getElementById("geo_irrigated_land_2_stats").innerHTML += "%";
					}
					else if(irrigated_land_2 > irrigated_land_1) {
						document.getElementById("geo_irrigated_land_1_stats").innerHTML += "%";
						document.getElementById("geo_irrigated_land_2_stats").innerHTML += " times larger";
					}
				}
			});
		}
		catch(err) {
			alert("Error: " + err.message);
		}
	}
});

var compareStats = function(val1, val2) {
	if(val1 == 0 || val2 == 0) {
		//console.log("value 0");
		return "value 0";
	}
	else if(val1 < 0 || val2 < 0) {
		//console.log("value negative");
		return "value negative";
	}
	else if(val1 > val2) {
		//result[0] = factor of which val1 is bigger than val2, result[1] = percentage which val2 has of val1
		var result = [(val1/val2).toFixed(2), (val2/val1*100).toFixed(2)];
		return result;
	}
	else if(val2 > val1) {
		//result[0] = factor of which val2 is bigger than val1, result[1] = percentage which val1 has of val2
		var result = [(val1/val2*100).toFixed(2), (val2/val1).toFixed(2)];
		return result;
	}
	else if(val1 == val2) {
		//console.log("values equal");
		return "values equal";
	}
	else {
		//console.log("unexpected error");
		return "unexpected error";
	}
}

var clearExistingStats = function(field1, field2) {
	document.getElementById(field1).innerHTML = null;
	document.getElementById(field2).innerHTML = null;
}

//formats numbers to readable format
var putThousandsSeparators = function(value, sep) {
  if (sep == null) {
    sep = ',';
  }
  // check if it needs formatting
  if (value.toString() === value.toLocaleString()) {
    // split decimals
    var parts = value.toString().split('.')
    // format whole numbers
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    // put them back together
    value = parts[1] ? parts.join('.') : parts[0];
  } else {
    value = value.toLocaleString();
  }
  return value;
};