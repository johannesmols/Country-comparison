<?php
	if((isset($_POST['sel1']) === true) && (isset($_POST['sel2']) === true) && (empty($_POST['sel1']) === false) && (empty($_POST['sel2']) === false)) {
		require '../db/connect.php';
		
		$sql = "SELECT isocode, region, capital, surface_area, land_area, water_area, global_area_rank, land_boundary, bordering_countries, coastline, climate, terrain, avg_elevation, highest_elevation, lowest_elevation, natural_resources, land_use, irrigated_land, natural_hazards, region_src, capital_src, surface_area_src, land_area_src, water_area_src, global_area_rank_src, land_boundary_src, bordering_countries_src, coastline_src, climate_src, terrain_src, avg_elevation_src, highest_elevation_src, lowest_elevation_src, natural_resources_src, land_use_src, irrigated_land_src, natural_hazards_src FROM db673227608.geography WHERE isocode='" . mysqli_real_escape_string($conn, $_POST['sel1']) . "' OR isocode='" . mysqli_real_escape_string($conn, $_POST['sel2']) . "' ORDER BY CASE WHEN isocode= '" . mysqli_real_escape_string($conn, $_POST['sel1']) . "' THEN 1 ELSE 2 END, isocode";
		//ORDER BY CASE WHEN makes sure to order the query not by id, but by the first selected country to not accidentally swap the selection when the second selection has a lower ID
		
		$result = $conn->query($sql);
		$obj = array();
		
		if ($result->num_rows > 0) 
		{
			while($row = $result->fetch_assoc()) {
				$obj[] = array("region" => $row['region'], "capital" => $row['capital'], "surface_area" => $row['surface_area'], "land_area" => $row['land_area'], "water_area" => $row['water_area'], "global_area_rank" => $row['global_area_rank'], "land_boundary" => $row['land_boundary'], "bordering_countries" => $row['bordering_countries'], "coastline" => $row['coastline'], "climate" => $row['climate'], "terrain" => $row['terrain'], "avg_elevation" => $row['avg_elevation'], "highest_elevation" => $row['highest_elevation'], "lowest_elevation" => $row['lowest_elevation'], "natural_resources" => $row['natural_resources'], "land_use" => $row['land_use'], "irrigated_land" => $row['irrigated_land'], "natural_hazards" => $row['natural_hazards'], "region_src" => $row['region_src'], "capital_src" => $row['capital_src'], "surface_area_src" => $row['surface_area_src'], "land_area_src" => $row['land_area_src'], "water_area_src" => $row['water_area_src'], "global_area_rank_src" => $row['global_area_rank_src'], "land_boundary_src" => $row['land_boundary_src'], "bordering_countries_src" => $row['bordering_countries_src'], "coastline_src" => $row['coastline_src'], "climate_src" => $row['climate_src'], "terrain_src" => $row['terrain_src'], "avg_elevation_src" => $row['avg_elevation_src'], "highest_elevation_src" => $row['highest_elevation_src'], "lowest_elevation_src" => $row['lowest_elevation_src'], "natural_resources_src" => $row['natural_resources_src'], "land_use_src" => $row['land_use_src'], "irrigated_land_src" => $row['irrigated_land_src'], "natural_hazards_src" => $row['natural_hazards_src']);
			}
			echo json_encode($obj);
		}
		else {
			echo "0 results";
		}
		$conn->close();
	}
?>