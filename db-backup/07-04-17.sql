-- phpMyAdmin SQL Dump
-- version 4.1.14.8
-- http://www.phpmyadmin.net
--
-- Host: db673227608.db.1and1.com
-- Erstellungszeit: 07. Apr 2017 um 14:10
-- Server Version: 5.5.54-0+deb7u2-log
-- PHP-Version: 5.4.45-0+deb7u8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `db673227608`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `geography`
--

CREATE TABLE IF NOT EXISTS `geography` (
  `id` int(255) NOT NULL,
  `isocode` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `region` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `region_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `capital` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `capital_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `surface_area` int(10) unsigned NOT NULL,
  `surface_area_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `land_area` int(10) unsigned NOT NULL,
  `land_area_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `water_area` int(10) unsigned NOT NULL,
  `water_area_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `global_area_rank` smallint(5) unsigned NOT NULL,
  `global_area_rank_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `land_boundary` int(10) unsigned NOT NULL,
  `land_boundary_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `bordering_countries` text COLLATE latin1_german2_ci NOT NULL,
  `bordering_countries_src` varchar(11) COLLATE latin1_german2_ci NOT NULL,
  `coastline` int(10) unsigned NOT NULL,
  `coastline_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `climate` text COLLATE latin1_german2_ci NOT NULL,
  `climate_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `terrain` text COLLATE latin1_german2_ci NOT NULL,
  `terrain_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `avg_elevation` int(11) NOT NULL,
  `avg_elevation_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `highest_elevation` int(11) NOT NULL,
  `highest_elevation_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `lowest_elevation` int(11) NOT NULL,
  `lowest_elevation_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `natural_resources` text COLLATE latin1_german2_ci NOT NULL,
  `natural_resources_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `land_use` text COLLATE latin1_german2_ci NOT NULL,
  `land_use_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `irrigated_land` int(10) NOT NULL,
  `irrigated_land_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  `natural_hazards` text COLLATE latin1_german2_ci NOT NULL,
  `natural_hazards_src` varchar(255) COLLATE latin1_german2_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `isocode` (`isocode`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci;

--
-- Daten für Tabelle `geography`
--

INSERT INTO `geography` (`id`, `isocode`, `region`, `region_src`, `capital`, `capital_src`, `surface_area`, `surface_area_src`, `land_area`, `land_area_src`, `water_area`, `water_area_src`, `global_area_rank`, `global_area_rank_src`, `land_boundary`, `land_boundary_src`, `bordering_countries`, `bordering_countries_src`, `coastline`, `coastline_src`, `climate`, `climate_src`, `terrain`, `terrain_src`, `avg_elevation`, `avg_elevation_src`, `highest_elevation`, `highest_elevation_src`, `lowest_elevation`, `lowest_elevation_src`, `natural_resources`, `natural_resources_src`, `land_use`, `land_use_src`, `irrigated_land`, `irrigated_land_src`, `natural_hazards`, `natural_hazards_src`) VALUES
(1, 'AF', 'Southern Asia', '2015, UN', 'Kabul', '2015, UN', 652230, '2017, CIA', 652230, '2017, CIA', 0, '2017, CIA', 41, '2017, CIA', 5987, '2017, CIA', 'China (91 km), Iran (921 km), Pakistan (2,670 km), Tajikistan (1,357 km), Turkmenistan (804 km), Uzbekistan (144 km)', '2017, CIA', 0, '2017, CIA', 'arid to semiarid; cold winters and hot summers', '2017, CIA', 'mostly rugged mountains; plains in north and southwest', '2017, CIA', 1884, '2017, CIA', 7485, '2017, CIA', 258, '2017, CIA', 'natural gas, petroleum, coal, copper, chromite, talc, barites, sulfur, lead, zinc, iron ore, salt, precious and semiprecious stones, arable land', '2017, CIA', 'agricultural land: 58.1%, forest: 2.1%, other: 39.8%', '2011, CIA', 32080, '2012, CIA', 'damaging earthquakes occur in Hindu Kush mountains; flooding; droughts', '2017, CIA'),
(2, 'AL', 'Southern Europe', '2015, UN', 'Tirana', '2015, UN', 28748, '2017, CIA', 27398, '2017, CIA', 1350, '2017, CIA', 145, '2017, CIA', 691, '2017, CIA', 'Greece (212 km), Kosovo (112 km), Macedonia (181 km), Montenegro (186 km)', '2017, CIA', 362, '2017, CIA', 'mild temperate; cool, cloudy, wet winters; hot, clear, dry summers; interior is cooler and wetter', '2017, CIA', 'mostly mountains and hills; small plains along coast', '2017, CIA', 708, '2017, CIA', 2764, '2017, CIA', 0, '2017, CIA', 'petroleum, natural gas, coal, bauxite, chromite, copper, iron ore, nickel, salt, timber, hydropower, arable land', '2017, CIA', 'agricultural land: 43.8%, forest: 28.3%, other: 27.9%', '2011, CIA', 3310, '2012, CIA', 'destructive earthquakes; tsunamis occur along southwestern coast; floods; drought', '2017, CIA'),
(3, 'DZ', 'Northern Africa', '2015, UN', 'Algiers', '2015, UN', 2381741, '2017, CIA', 2381741, '2017, CIA', 0, '2017, CIA', 10, '2017, CIA', 6734, '2017, CIA', 'Libya (989 km), Mali (1,359 km), Mauritania (460 km), Morocco (1,900 km), Niger (951 km), Tunisia (1,034 km), Western Sahara (41 km)', '2017, CIA', 998, '2017, CIA', 'arid to semiarid; mild, wet winters with hot, dry summers along coast; drier with cold winters and hot summers on high plateau; sirocco is a hot, dust/sand-laden wind especially common in summer', '2017, CIA', 'mostly high plateau and desert; some mountains; narrow, discontinuous coastal plain', '2017, CIA', 800, '2017, CIA', 3003, '2017, CIA', -40, '2017, CIA', 'petroleum, natural gas, iron ore, phosphates, uranium, lead, zinc', '2017, CIA', 'agricultural land: 17.3%, forest: 0.6%, other: 82%', '2011, CIA', 5700, '2012, CIA', 'mountainous areas subject to severe earthquakes; mudslides and floods in rainy season', '2017, CIA'),
(4, 'AS', 'Oceania', '2017, CIA', 'Pago Pago', '2017, Wikipedia', 199, '2017, CIA', 199, '2017, CIA', 0, '2017, CIA', 216, '2017, CIA', 0, '2017, CIA', 'none', '2017, CIA', 116, '2017, CIA', 'tropical marine, moderated by southeast trade winds; annual rainfall averages about 3 m; rainy season (November to April), dry season (May to October); little seasonal temperature variation', '2017, CIA', 'five volcanic islands with rugged peaks and limited coastal plains, two coral atolls (Rose Island, Swains Island)', '2017, CIA', -1000, '', 964, '2017, CIA', 0, '2017, CIA', 'pumice, pumicite', '2017, CIA', 'agricultural land: 21.7%, forest: 78.3%, other: 0%', '2011, CIA', 0, '2017, CIA', 'typhoons common from December to March, volcanism', '2017, CIA'),
(5, 'AD', 'Southern Europe', '2017, UN', 'Andorra la Velle', '2017, UN', 468, '2017, CIA', 468, '2017, CIA', 0, '2017, CIA', 196, '2017, CIA', 118, '2017, CIA', 'France (55 km), Spain (63 km)', '2017, CIA', 0, '2017, CIA', 'temperate; snowy, cold winters and warm, dry summers', '2017, CIA', 'rugged mountains dissected by narrow valleys', '2017, CIA', 1996, '2017, CIA', 2946, '2017, CIA', 840, '2017, CIA', 'hydropower, mineral water, timber, iron ore, lead', '2017, CIA', 'agricultural land: 43.4%, forest: 34%, other: 22.6%', '2011, CIA', 0, '2012, CIA', 'avalanches', '2017, CIA'),
(6, 'AO', 'Middle Africa', '2015, UN', 'Luanda', '2015, UN', 1246700, '2017, CIA', 1246700, '2017, CIA', 0, '2017, CIA', 23, '2017, CIA', 5369, '2017, CIA', 'Democratic Republic of the Congo (2,646 km), Republic of the Congo (231 km), Namibia (1,427 km), Zambia (1,065 km)', '2017, CIA', 1600, '2017, CIA', 'semiarid in south and along coast to Luanda; north has cool, dry season (May to October) and hot, rainy season (November to April)', '2017, CIA', 'narrow coastal plain rises abruptly to vast interior plateau', '2017, CIA', 1112, '2017, CIA', 2620, '2017, CIA', 0, '2017, CIA', 'petroleum, diamonds, iron ore, phosphates, copper, feldspar, gold, bauxite, uranium', '2017, CIA', 'agricultural land: 47.3%, forest: 46.8%, other: 5.9%', '2011, CIA', 860, '2012, CIA', 'locally heavy rainfall causes periodic flooding on the plateau', '2017, CIA'),
(7, 'AI', 'Caribbean', '2017, CIA', 'The Valley', '2017, Wikipedia', 91, '2017, CIA', 91, '2017, CIA', 0, '2017, CIA', 227, '2017, CIA', 0, '2017, CIA', 'none', '2017, CIA', 61, '2017, CIA', 'tropical; moderated by northeast trade winds', '2017, CIA', 'flat and low-lying island of coral and limestone', '2017, CIA', -1000, 'unknown', 65, '2017, CIA', 0, '2017, CIA', 'salt, fish, lobster', '2017, CIA', 'agricultural land: 0%, forest: 61.1%, other: 38.9%', '2011, CIA', 0, '2012, CIA', 'frequent hurricanes and other tropical storms (July to October)', '2017, CIA'),
(8, 'AQ', 'Antarctic Region', '2017, CIA', 'none', 'none', 14000000, '2017, CIA', 13720000, '2017, CIA', 280000, '2017, CIA', 0, 'none', 0, '2017, CIA', 'none', '2017, CIA', 17968, '2017, CIA', 'severe low temperatures vary with latitude, elevation, and distance from the ocean; East Antarctica is colder than West Antarctica because of its higher elevation; Antarctic Peninsula has the most moderate climate; higher temperatures occur in January along the coast and average slightly below freezing', '2017, CIA', 'about 98% thick continental ice sheet and 2% barren rock, with average elevations between 2,000 and 4,000 m; mountain ranges up to nearly 5,000 m; ice-free coastal areas include parts of southern Victoria Land, Wilkes Land, the Antarctic Peninsula area, and parts of Ross Island on McMurdo Sound; glaciers form ice shelves along about half of the coastline, and floating ice shelves constitute 11% of the area of the continent', '2017, CIA', 2300, '2017, CIA', 4897, '2017, CIA', -2540, '2017, CIA', 'iron ore, chromium, copper, gold, nickel, platinum and other minerals, and coal and hydrocarbons have been found in small noncommercial quantities; none presently exploited; krill, finfish, and crab have been taken by commercial fisheries', '2017, CIA', 'agricultural land: 0%, forest: 0%, other: 100% (ice 98%, barren rock 2%)', '2015, CIA', 0, 'none', 'katabatic (gravity-driven) winds blow coastward from the high interior; frequent blizzards form near the foot of the plateau; cyclonic storms form over the ocean and move clockwise along the coast; volcanism on Deception Island and isolated areas of West Antarctica; other seismic activity rare and weak; large icebergs may calve from ice shelf', '2017, CIA'),
(9, 'AG', 'Carribean', '2015, UN', 'Saint John''s', '2015, UN', 443, '2017, CIA', 443, '2017, CIA', 0, '2017, CIA', 201, '2017, CIA', 0, '2017, CIA', 'none', 'none', 153, '2017, CIA', 'tropical maritime; little seasonal temperature variation', '2017, CIA', 'mostly low-lying limestone and coral islands, with some higher volcanic areas', '2017, CIA', -1000, '2017, CIA', 402, '2017, CIA', 0, '2017, CIA', 'NEGL; pleasant climate fosters tourism', '2017, CIA', 'agricultural land: 20.5%, forest: 22.3%, other: 57.2%', '2011, CIA', 1, '2017, CIA', 'hurricanes and tropical storms (July to October); periodic droughts', '2017, CIA'),
(10, 'AR', 'South America', '2015, UN', 'Buenos Aires', '2015, UN', 2780400, '2017, CIA', 2736690, '2017, CIA', 43710, '2017, CIA', 8, '2017, CIA', 11968, '2017, CIA', 'Bolivia (942 km), Brazil (1,263 km), Chile (6,691 km), Paraguay (2,531 km), Uruguay (541 km)', '2017, CIA', 4989, '2017, CIA', 'mostly temperate; arid in southeast; subantarctic in southwest', '2017, CIA', 'rich plains of the Pampas in northern half, flat to rolling plateau of Patagonia in south, rugged Andes along western border', '2017, CIA', 595, '2017, CIA', 6960, '2017, CIA', -105, '2017, CIA', 'fertile plains of the pampas, lead, zinc, tin, copper, iron ore, manganese, petroleum, uranium, arable land', '2017, CIA', 'agricultural land: 53.9%, forest: 10.7%, other: 35.4%', '2011, CIA', 23600, '2012, CIA', 'San Miguel de Tucuman and Mendoza areas in the Andes subject to earthquakes; pamperos are violent windstorms that can strike the pampas and northeast; heavy flooding in some areas; volcanic activity in the Andes Mountains along the Chilean border', '2017, CIA'),
(11, 'AM', 'Western Asia', '2015, UN', 'Yerevan', '2015, UN', 29743, '2017, CIA', 28203, '2017, CIA', 1540, '2017, CIA', 143, '2017, CIA', 1570, '2017, CIA', 'Azerbaijan (996 km), Georgia (219 km), Iran (44 km), Turkey (311 km)', '2017, CIA', 0, '2017, CIA', 'highland continental, hot summers, cold winters', '2017, CIA', 'Armenian Highland with mountains; little forest land; fast flowing rivers; good soil in Aras River valley', '2017, CIA', 1792, '2017, CIA', 4090, '2017, CIA', 400, '2017, CIA', 'small deposits of gold, copper, molybdenum, zinc, bauxite', '2017, CIA', 'agricultural land: 59.7%, forest: 9.1%, other: 31.2%', '2011, CIA', 2740, '2012, CIA', 'occasionally severe earthquakes; droughts', '2017, CIA'),
(12, 'AW', 'Caribbean', '2015, UN', 'Oranjestad', '2015, UN', 180, '2017, CIA', 180, '2017, CIA', 0, '2017, CIA', 218, '2017, CIA', 0, '2017, CIA', 'none', '2017, CIA', 69, '2017, CIA', 'tropical marine; little seasonal temperature variation', '2017, CIA', 'flat with a few hills; scant vegetation', '2017, CIA', -1000, '2017, CIA', 188, '2017, CIA', 0, '2017, CIA', 'NEGL; white sandy beaches foster tourism', '2017, CIA', 'agricultural land: 11.1%, forest: 2.3%, other: 86.6%', '2011, CIA', -1000, '2017, CIA', 'hurricanes; lies outside the Caribbean hurricane belt and is rarely threatened', '2017, CIA'),
(13, 'AU', 'Oceania', '2015, UN', 'Canberra', '2015, UN', 7741220, '2017, CIA', 7682300, '2017, CIA', 58920, '2017, CIA', 6, '2017, CIA', 0, '2017, CIA', 'none', '2017, CIA', 25760, '2017, CIA', 'generally arid to semiarid; temperate in south and east; tropical in north', '2017, CIA', 'mostly low plateau with deserts; fertile plain in southeast', '2017, CIA', 330, '2017, CIA', 2229, '2017, CIA', -15, '2017, CIA', 'bauxite, coal, iron ore, copper, tin, gold, silver, uranium, nickel, tungsten, rare earth elements, mineral sands, lead, zinc, diamonds, natural gas, petroleum', '2017, CIA', 'agricultural land: 53.4%, forest: 19.3%, other: 27.3%', '2011, CIA', 25500, '2012, CIA', 'cyclones along the coast; severe droughts; forest fires', '2017, CIA');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
