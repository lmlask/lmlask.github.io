const disableSetup = false;
var topBarCenterText = `MLask Server`;

// Grid layout
var layout_cols = 4;
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
var aIMG = [  [
    "GOES19 FULL DISK",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/GEOCOLOR/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/Sandwich/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/AirMass/339x339.jpg",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/DayNightCloudMicroCombo/339x339.jpg",
  ],
  [
    "GOES19 SSA HALF DISK",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/ssa/EXTENT3/450x270.jpg", //EXTENT3, geocolor + lightning from GLM
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/Sandwich/450x270.jpg", //ABI sensor, sandwich composite
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/AirMass/450x270.jpg", //ABI sensor, air mass composite
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/DayNightCloudMicroCombo/450x270.jpg", //Day night cloud microcombo
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ssa/07/450x270.jpg", //band 7
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ssa/08/450x270.jpg", //band 8
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ssa/13/450x270.jpg", //band 13
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ssa/14/450x270.jpg", //band 14
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ssa/16/450x270.jpg", //band 16
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
	"SUNRISE/SUNSET",
	"iframe|https://www.calculatorsoup.com/calculators/time/sunrise_sunset.php?action=print&term=6&term_unit=day&latitude=-25.4346&latitude_s=0&longitude=-49.2134&longitude_s=0&timezone=-3&opt_sunrise_sunset=1&opt_day_length=&opt_solar_noon=&opt_civil=&opt_nautical=&opt_astronomical=&hhmmss=&clock=24&date_format=iso",
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
	"",
    "iframe|https://www.meteoblue.com/pt/tempo/widget/daily/s%c3%a3o-luiz-do-purun%c3%a3_brasil_3448555?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=0&windgust=0&winddirection=0&uv=1&humidity=0&precipitation=1&precipitationprobability=1&spot=0&pressure=0&layout=dark",
  ],
  [
	"SUNRISE/SUNSET",
	"iframe|https://www.calculatorsoup.com/calculators/time/sunrise_sunset.php?action=print&term=6&term_unit=day&latitude=-25.4346&latitude_s=0&longitude=-49.2134&longitude_s=0&timezone=-3&opt_sunrise_sunset=1&opt_day_length=&opt_solar_noon=&opt_civil=&opt_nautical=&opt_astronomical=&hhmmss=&clock=24&date_format=iso",
  ],
  [
	"GREY LINE",
	"https://www.timeanddate.com/scripts/sunmap.php?iso=now",
	"https://www.timeanddate.com/scripts/sunmap.php?obj=moon&iso=now",
  ],
  [
    "GOES19 SUVI",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/094/latest.png",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/131/latest.png",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/171/latest.png",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/195/latest.png",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/284/latest.png",
	"https://services.swpc.noaa.gov/images/animations/suvi/primary/304/latest.png",
	"https://umbra.nascom.nasa.gov/images/latest_aia_304.gif",
    "https://umbra.nascom.nasa.gov/images/latest_hmi_mgram.gif",
	"https://umbra.nascom.nasa.gov/images/latest_hmi_igram.gif",
  ],
  [
    "",
	"https://www.hamqsl.com/solargraph.php",
	"https://www.hamqsl.com/marston.php",
	"https://www.hamqsl.com/solarsystem.php",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  10000,12000,21000,23000,
  100000,100000,100000,100000,
  100000,7500,8000,9000,
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ];
