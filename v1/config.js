const disableSetup = false;
var topBarCenterText = `MLask Server`;

// Grid layout
var layout_cols = 5;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["4660FF", "StarLink", "https://satellitemap.space/#", "1.2"]
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  [
    "AIA/HMI SUNDISK",
	"https://umbra.nascom.nasa.gov/images/latest_aia_94.gif",
	"https://umbra.nascom.nasa.gov/images/latest_aia_131.gif",
	"https://umbra.nascom.nasa.gov/images/latest_aia_171.gif",
	"https://umbra.nascom.nasa.gov/images/latest_aia_193.gif",
	"https://umbra.nascom.nasa.gov/images/latest_aia_211.gif",
	"https://umbra.nascom.nasa.gov/images/latest_aia_304.gif",
    "https://umbra.nascom.nasa.gov/images/latest_hmi_mgram.gif",
	"https://umbra.nascom.nasa.gov/images/latest_hmi_igram.gif",
  ],
  [
    "GOES19 FULL DISK",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/GEOCOLOR/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/Sandwich/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/AirMass/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/DayNightCloudMicroCombo/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/07/678x678.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/08/678x678.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/13/678x678.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/14/678x678.jpg",	
  ],
  [
    "GOES19 SSA HALF DISK",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/ssa/EXTENT3/GOES19-SSA-EXTENT3-900x540.gif", //Extent3
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/Sandwich/GOES19-SSA-Sandwich-900x540.gif", //ABI sensor, sandwich composite
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/AirMass/GOES19-SSA-AirMass-900x540.gif", //ABI sensor, air mass composite
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/DayNightCloudMicroCombo/GOES19-SSA-DayNightCloudMicroCombo-900x540.gif", //Day night cloud microcombo
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/07/GOES19-SSA-07-900x540.gif", //band 7
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/08/GOES19-SSA-08-900x540.gif", //band 8
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/13/GOES19-SSA-13-900x540.gif", //band 13
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/14/GOES19-SSA-14-900x540.gif", //band 14
  ],
  [
    "",
	"https://dados.metsul.com/satelite/prec_cs.gif", //rain
	"https://dados.metsul.com/satelite/dcf_cs.gif", //rgb daytime cloud phase
	"https://dados.metsul.com/satelite/infra_cs.gif", //ir
	"https://dados.metsul.com/satelite/lst_cs.gif", //surface temp
	"https://dados.metsul.com/satelite/nmp_cs.gif", //night-time microphysics
	"https://dados.metsul.com/satelite/true_color_cs.gif", //true color
	"https://dados.metsul.com/satelite/vapor_cs.gif", //water vapor
	"https://dados.metsul.com/satelite/visivel_cs.gif", //visible
  ],
    [
    "",
	"https://dados.metsul.com/satelite/prec_pr.gif", //rain
	"https://dados.metsul.com/satelite/dcf_pr.gif", //rgb daytime cloud phase
	"https://dados.metsul.com/satelite/glm_pr.gif", //ir+glm
	"https://dados.metsul.com/satelite/lst_pr.gif", //surface temp
	"https://dados.metsul.com/satelite/nmp_pr.gif", //night-time microphysics
	"https://dados.metsul.com/satelite/true_color_pr.gif", //true color
	"https://dados.metsul.com/satelite/vapor_pr.gif", //water vapor
	"https://dados.metsul.com/satelite/visivel_pr.gif", //visible
  ],
  [
    "",
	"https://www.hamqsl.com/solargraph.php",
	"https://www.hamqsl.com/marston.php",
	"https://www.hamqsl.com/solarsystem.php",
  ],
  [
	"",
    "iframe|https://www.meteoblue.com/pt/tempo/widget/daily/curitiba_brasil_3464975?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=0&windgust=0&winddirection=0&uv=1&humidity=0&precipitation=1&precipitationprobability=1&spot=0&pressure=0&layout=dark",
  ],
  [
	"",
    "iframe|https://www.meteoblue.com/pt/tempo/widget/daily/quatro-barras_brasil_13002092?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=0&windgust=0&winddirection=0&uv=1&humidity=0&precipitation=1&precipitationprobability=1&spot=0&pressure=0&layout=dark",
  ],
  [
	"",
    "iframe|https://www.meteoblue.com/pt/tempo/widget/daily/porto-de-cima_brasil_3452835?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=0&windgust=0&winddirection=0&uv=1&humidity=0&precipitation=1&precipitationprobability=1&spot=0&pressure=0&layout=dark",
  ],
  [
	"SUNRISE/SUNSET",
	"iframe|https://www.calculatorsoup.com/calculators/time/sunrise_sunset.php?action=print&term=2&term_unit=day&latitude=-25.4346&latitude_s=0&longitude=-49.2134&longitude_s=0&timezone=-3&opt_sunrise_sunset=1&opt_day_length=&opt_solar_noon=&opt_civil=&opt_nautical=&opt_astronomical=&hhmmss=&clock=24&date_format=iso",
  ],
  [
    "RADAR",
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=radar&product=radar&level=surface&lat=-25.58&lon=-49.250&message=true", //radar
    "iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=rain&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //rain/thunder
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=satellite&product=satellite&level=surface&lat=-25.58&lon=-49.250&message=true", //sat
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=rainAccu&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //accumulated rain
  ],

  [
    "CLOUDS/VIS",
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=lclouds&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //lo clouds
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=default&zoom=8&overlay=visibility&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //vis
    "iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=cbase&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //cloud base 
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=fog&product=icon&level=surface&lat=-25.58&lon=-49.250&message=true", //fog
  ],
  [
    "WIND/UV",
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=wind&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //wind
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=gust&product=ecmwf&level=surface&lat=-25.58&lon=-49.250&message=true", //wind gusts
	"iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=8&overlay=uvindex&product=cams&level=surface&lat=-25.58&lon=-49.250", //uv index
  ],
  [
    "",
	"https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec24h.png",
	"https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec48h.png",
	"https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec72h.png",
	"https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec96h.png",
	"https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec120h.png",
	"https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec144h.png",
  ],
  [
	"ATC MAP",
	"iframe|https://globe.adsbexchange.com/?airport=CWB",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  10000,10000,10000,10000,10000,
  5000,5000,5000,5000,5000,
  100000,5000,100000,100000,100000,
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ];
