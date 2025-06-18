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
    "GOES19 SSA COMPOSITE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/ssa/EXTENT3/GOES19-SSA-EXTENT3-900x540.gif", //EXTENT3, from the GLM sensor
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/Sandwich/GOES19-SSA-Sandwich-900x540.gif", //ABI sensor, sandwich composite
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/AirMass/GOES19-SSA-AirMass-900x540.gif", //ABI sensor, air mass composite
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/DayNightCloudMicroCombo/GOES19-SSA-DayNightCloudMicroCombo-900x540.gif", //Day night cloud microcombo
  ],
  [
    "GOES19 SSA IR",
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/02/GOES19-SSA-02-900x540.gif", //IR, ABI sensor, band 2
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/07/GOES19-SSA-07-900x540.gif", //band 7
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/08/GOES19-SSA-08-900x540.gif", //band 8
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/13/GOES19-SSA-13-900x540.gif", //band 13
	"https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/SSA/14/GOES19-SSA-14-900x540.gif", //band 14
  ],
  [
    "GOES19 SA B13",
	"https://ciram.epagri.sc.gov.br/ciram_arquivos/meteorologia/satelite/animationzoom.gif", //Full south america
    "https://ciram.epagri.sc.gov.br/ciram_arquivos/meteorologia/satelite/animation.gif",
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
    "iframe|https://www.meteoblue.com/pt/tempo/widget/daily/curitiba_brasil_3464975?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=0&winddirection=0&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=0&pressure=1&layout=dark",
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
  10000,12000,14000,16000,
  10000,10000,10000,100000,
  100000,7500,8000,9000,
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["https://www.allsides.com/rss/news", 60],
  ["https://www.nasa.gov/news-release/feed/", 60],
  ];
