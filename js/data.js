/**
 * 2026世界杯数据中心
 * 48支球队 + 104场比赛 (72小组赛 + 32淘汰赛)
 * 复用自小程序 worldcup2026 Mock数据
 */

// ============ 48支球队 (A-L共12组) ============
const TEAMS = [
  // A组
  { id:1, name:"Mexico", nameCN:"墨西哥", fifaCode:"MEX", fifaRank:14, group:"A", flag:"assets/flags/mex.png" },
  { id:2, name:"South Africa", nameCN:"南非", fifaCode:"RSA", fifaRank:67, group:"A", flag:"assets/flags/rsa.png" },
  { id:3, name:"South Korea", nameCN:"韩国", fifaCode:"KOR", fifaRank:28, group:"A", flag:"assets/flags/kor.png" },
  { id:4, name:"Czech Republic", nameCN:"捷克", fifaCode:"CZE", fifaRank:35, group:"A", flag:"assets/flags/cze.png" },
  // B组
  { id:5, name:"Canada", nameCN:"加拿大", fifaCode:"CAN", fifaRank:41, group:"B", flag:"assets/flags/can.png" },
  { id:6, name:"Bosnia", nameCN:"波黑", fifaCode:"BIH", fifaRank:58, group:"B", flag:"assets/flags/bih.png" },
  { id:7, name:"Qatar", nameCN:"卡塔尔", fifaCode:"QAT", fifaRank:52, group:"B", flag:"assets/flags/qat.png" },
  { id:8, name:"Switzerland", nameCN:"瑞士", fifaCode:"SUI", fifaRank:15, group:"B", flag:"assets/flags/sui.png" },
  // C组
  { id:9, name:"Brazil", nameCN:"巴西", fifaCode:"BRA", fifaRank:1, group:"C", flag:"assets/flags/bra.png" },
  { id:10, name:"Morocco", nameCN:"摩洛哥", fifaCode:"MAR", fifaRank:22, group:"C", flag:"assets/flags/mar.png" },
  { id:11, name:"Haiti", nameCN:"海地", fifaCode:"HAI", fifaRank:87, group:"C", flag:"assets/flags/hai.png" },
  { id:12, name:"Scotland", nameCN:"苏格兰", fifaCode:"SCO", fifaRank:42, group:"C", flag:"assets/flags/sco.png" },
  // D组
  { id:13, name:"USA", nameCN:"美国", fifaCode:"USA", fifaRank:16, group:"D", flag:"assets/flags/usa.png" },
  { id:14, name:"Paraguay", nameCN:"巴拉圭", fifaCode:"PAR", fifaRank:50, group:"D", flag:"assets/flags/par.png" },
  { id:15, name:"Australia", nameCN:"澳大利亚", fifaCode:"AUS", fifaRank:38, group:"D", flag:"assets/flags/aus.png" },
  { id:16, name:"Turkey", nameCN:"土耳其", fifaCode:"TUR", fifaRank:32, group:"D", flag:"assets/flags/tur.png" },
  // E组
  { id:17, name:"Germany", nameCN:"德国", fifaCode:"GER", fifaRank:11, group:"E", flag:"assets/flags/ger.png" },
  { id:18, name:"Curacao", nameCN:"库拉索", fifaCode:"CUW", fifaRank:90, group:"E", flag:"assets/flags/cuw.png" },
  { id:19, name:"Ivory Coast", nameCN:"科特迪瓦", fifaCode:"CIV", fifaRank:55, group:"E", flag:"assets/flags/civ.png" },
  { id:20, name:"Ecuador", nameCN:"厄瓜多尔", fifaCode:"ECU", fifaRank:44, group:"E", flag:"assets/flags/ecu.png" },
  // F组
  { id:21, name:"Netherlands", nameCN:"荷兰", fifaCode:"NED", fifaRank:7, group:"F", flag:"assets/flags/ned.png" },
  { id:22, name:"Japan", nameCN:"日本", fifaCode:"JPN", fifaRank:24, group:"F", flag:"assets/flags/jpn.png" },
  { id:23, name:"Sweden", nameCN:"瑞典", fifaCode:"SWE", fifaRank:23, group:"F", flag:"assets/flags/swe.png" },
  { id:24, name:"Tunisia", nameCN:"突尼斯", fifaCode:"TUN", fifaRank:30, group:"F", flag:"assets/flags/tun.png" },
  // G组
  { id:25, name:"Belgium", nameCN:"比利时", fifaCode:"BEL", fifaRank:2, group:"G", flag:"assets/flags/bel.png" },
  { id:26, name:"Egypt", nameCN:"埃及", fifaCode:"EGY", fifaRank:36, group:"G", flag:"assets/flags/egy.png" },
  { id:27, name:"Iran", nameCN:"伊朗", fifaCode:"IRN", fifaRank:20, group:"G", flag:"assets/flags/irn.png" },
  { id:28, name:"New Zealand", nameCN:"新西兰", fifaCode:"NZL", fifaRank:103, group:"G", flag:"assets/flags/nzl.png" },
  // H组
  { id:29, name:"Spain", nameCN:"西班牙", fifaCode:"ESP", fifaRank:8, group:"H", flag:"assets/flags/esp.png" },
  { id:30, name:"Cape Verde", nameCN:"佛得角", fifaCode:"CPV", fifaRank:72, group:"H", flag:"assets/flags/cpv.png" },
  { id:31, name:"Saudi Arabia", nameCN:"沙特阿拉伯", fifaCode:"KSA", fifaRank:56, group:"H", flag:"assets/flags/ksa.png" },
  { id:32, name:"Uruguay", nameCN:"乌拉圭", fifaCode:"URU", fifaRank:14, group:"H", flag:"assets/flags/uru.png" },
  // I组
  { id:33, name:"France", nameCN:"法国", fifaCode:"FRA", fifaRank:4, group:"I", flag:"assets/flags/fra.png" },
  { id:34, name:"Senegal", nameCN:"塞内加尔", fifaCode:"SEN", fifaRank:18, group:"I", flag:"assets/flags/sen.png" },
  { id:35, name:"Iraq", nameCN:"伊拉克", fifaCode:"IRQ", fifaRank:68, group:"I", flag:"assets/flags/irq.png" },
  { id:36, name:"Norway", nameCN:"挪威", fifaCode:"NOR", fifaRank:43, group:"I", flag:"assets/flags/nor.png" },
  // J组
  { id:37, name:"Argentina", nameCN:"阿根廷", fifaCode:"ARG", fifaRank:3, group:"J", flag:"assets/flags/arg.png" },
  { id:38, name:"Algeria", nameCN:"阿尔及利亚", fifaCode:"ALG", fifaRank:44, group:"J", flag:"assets/flags/alg.png" },
  { id:39, name:"Austria", nameCN:"奥地利", fifaCode:"AUT", fifaRank:25, group:"J", flag:"assets/flags/aut.png" },
  { id:40, name:"Jordan", nameCN:"约旦", fifaCode:"JOR", fifaRank:71, group:"J", flag:"assets/flags/jor.png" },
  // K组
  { id:41, name:"Portugal", nameCN:"葡萄牙", fifaCode:"POR", fifaRank:9, group:"K", flag:"assets/flags/por.png" },
  { id:42, name:"DR Congo", nameCN:"刚果(金)", fifaCode:"COD", fifaRank:61, group:"K", flag:"assets/flags/cod.png" },
  { id:43, name:"Uzbekistan", nameCN:"乌兹别克", fifaCode:"UZB", fifaRank:74, group:"K", flag:"assets/flags/uzb.png" },
  { id:44, name:"Colombia", nameCN:"哥伦比亚", fifaCode:"COL", fifaRank:17, group:"K", flag:"assets/flags/col.png" },
  // L组
  { id:45, name:"England", nameCN:"英格兰", fifaCode:"ENG", fifaRank:5, group:"L", flag:"assets/flags/eng.png" },
  { id:46, name:"Croatia", nameCN:"克罗地亚", fifaCode:"CRO", fifaRank:6, group:"L", flag:"assets/flags/cro.png" },
  { id:47, name:"Ghana", nameCN:"加纳", fifaCode:"GHA", fifaRank:61, group:"L", flag:"assets/flags/gha.png" },
  { id:48, name:"Panama", nameCN:"巴拿马", fifaCode:"PAN", fifaRank:63, group:"L", flag:"assets/flags/pan.png" },
];

// ============ 104场比赛 ============
const MATCHES = [
  // --- 小组赛 Matchday 1 ---
  { id:"m001",date:"2026-06-12",time:"03:00",stage:"group",group:"A",matchday:1,home:"MEX",away:"RSA",venue:"Mexico City Azteca",status:"scheduled",score:null,city:"Mexico City"},
  { id:"m002",date:"2026-06-12",time:"06:00",stage:"group",group:"B",matchday:1,home:"CAN",away:"BIH",venue:"Toronto BMO Field",status:"scheduled",score:null,city:"Toronto"},
  { id:"m003",date:"2026-06-12",time:"21:00",stage:"group",group:"A",matchday:1,home:"KOR",away:"CZE",venue:"Guadalajara Akron",status:"scheduled",score:null,city:"Guadalajara"},
  { id:"m004",date:"2026-06-13",time:"00:00",stage:"group",group:"B",matchday:1,home:"QAT",away:"SUI",venue:"Vancouver BC Place",status:"scheduled",score:null,city:"Vancouver"},
  { id:"m005",date:"2026-06-13",time:"03:00",stage:"group",group:"C",matchday:1,home:"BRA",away:"MAR",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m006",date:"2026-06-13",time:"06:00",stage:"group",group:"D",matchday:1,home:"USA",away:"PAR",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m007",date:"2026-06-13",time:"21:00",stage:"group",group:"C",matchday:1,home:"HAI",away:"SCO",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m008",date:"2026-06-14",time:"00:00",stage:"group",group:"D",matchday:1,home:"AUS",away:"TUR",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m009",date:"2026-06-14",time:"03:00",stage:"group",group:"E",matchday:1,home:"GER",away:"CUW",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m010",date:"2026-06-14",time:"06:00",stage:"group",group:"F",matchday:1,home:"NED",away:"JPN",venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m011",date:"2026-06-14",time:"21:00",stage:"group",group:"E",matchday:1,home:"CIV",away:"ECU",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m012",date:"2026-06-15",time:"00:00",stage:"group",group:"F",matchday:1,home:"SWE",away:"TUN",venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  { id:"m013",date:"2026-06-15",time:"03:00",stage:"group",group:"G",matchday:1,home:"BEL",away:"EGY",venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  { id:"m014",date:"2026-06-15",time:"06:00",stage:"group",group:"H",matchday:1,home:"ESP",away:"CPV",venue:"Kansas City Arrowhead",status:"scheduled",score:null,city:"Kansas City"},
  { id:"m015",date:"2026-06-15",time:"21:00",stage:"group",group:"G",matchday:1,home:"IRN",away:"NZL",venue:"Seattle Lumen",status:"scheduled",score:null,city:"Seattle"},
  { id:"m016",date:"2026-06-16",time:"00:00",stage:"group",group:"H",matchday:1,home:"KSA",away:"URU",venue:"Denver Mile High",status:"scheduled",score:null,city:"Denver"},
  { id:"m017",date:"2026-06-16",time:"03:00",stage:"group",group:"I",matchday:1,home:"FRA",away:"SEN",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m018",date:"2026-06-16",time:"06:00",stage:"group",group:"J",matchday:1,home:"ARG",away:"ALG",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m019",date:"2026-06-16",time:"21:00",stage:"group",group:"I",matchday:1,home:"IRQ",away:"NOR",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m020",date:"2026-06-17",time:"00:00",stage:"group",group:"J",matchday:1,home:"AUT",away:"JOR",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m021",date:"2026-06-17",time:"03:00",stage:"group",group:"K",matchday:1,home:"POR",away:"COD",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m022",date:"2026-06-17",time:"06:00",stage:"group",group:"L",matchday:1,home:"ENG",away:"CRO",venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m023",date:"2026-06-17",time:"21:00",stage:"group",group:"K",matchday:1,home:"UZB",away:"COL",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m024",date:"2026-06-18",time:"00:00",stage:"group",group:"L",matchday:1,home:"GHA",away:"PAN",venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  // --- 小组赛 Matchday 2 ---
  { id:"m025",date:"2026-06-18",time:"03:00",stage:"group",group:"A",matchday:2,home:"MEX",away:"CZE",venue:"Mexico City Azteca",status:"scheduled",score:null,city:"Mexico City"},
  { id:"m026",date:"2026-06-18",time:"06:00",stage:"group",group:"B",matchday:2,home:"CAN",away:"QAT",venue:"Vancouver BC Place",status:"scheduled",score:null,city:"Vancouver"},
  { id:"m027",date:"2026-06-18",time:"21:00",stage:"group",group:"A",matchday:2,home:"RSA",away:"KOR",venue:"Guadalajara Akron",status:"scheduled",score:null,city:"Guadalajara"},
  { id:"m028",date:"2026-06-19",time:"00:00",stage:"group",group:"B",matchday:2,home:"BIH",away:"SUI",venue:"Toronto BMO Field",status:"scheduled",score:null,city:"Toronto"},
  { id:"m029",date:"2026-06-19",time:"03:00",stage:"group",group:"C",matchday:2,home:"BRA",away:"HAI",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m030",date:"2026-06-19",time:"06:00",stage:"group",group:"D",matchday:2,home:"USA",away:"AUS",venue:"Kansas City Arrowhead",status:"scheduled",score:null,city:"Kansas City"},
  { id:"m031",date:"2026-06-19",time:"21:00",stage:"group",group:"C",matchday:2,home:"MAR",away:"SCO",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m032",date:"2026-06-20",time:"00:00",stage:"group",group:"D",matchday:2,home:"PAR",away:"TUR",venue:"Denver Mile High",status:"scheduled",score:null,city:"Denver"},
  { id:"m033",date:"2026-06-20",time:"03:00",stage:"group",group:"E",matchday:2,home:"GER",away:"CIV",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m034",date:"2026-06-20",time:"06:00",stage:"group",group:"F",matchday:2,home:"NED",away:"SWE",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m035",date:"2026-06-20",time:"21:00",stage:"group",group:"E",matchday:2,home:"CUW",away:"ECU",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m036",date:"2026-06-21",time:"00:00",stage:"group",group:"F",matchday:2,home:"JPN",away:"TUN",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m037",date:"2026-06-21",time:"03:00",stage:"group",group:"G",matchday:2,home:"BEL",away:"IRN",venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  { id:"m038",date:"2026-06-21",time:"06:00",stage:"group",group:"H",matchday:2,home:"ESP",away:"KSA",venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  { id:"m039",date:"2026-06-21",time:"21:00",stage:"group",group:"G",matchday:2,home:"EGY",away:"NZL",venue:"Seattle Lumen",status:"scheduled",score:null,city:"Seattle"},
  { id:"m040",date:"2026-06-22",time:"00:00",stage:"group",group:"H",matchday:2,home:"CPV",away:"URU",venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m041",date:"2026-06-22",time:"03:00",stage:"group",group:"I",matchday:2,home:"FRA",away:"IRQ",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m042",date:"2026-06-22",time:"06:00",stage:"group",group:"J",matchday:2,home:"ARG",away:"AUT",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m043",date:"2026-06-22",time:"21:00",stage:"group",group:"I",matchday:2,home:"SEN",away:"NOR",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m044",date:"2026-06-23",time:"00:00",stage:"group",group:"J",matchday:2,home:"ALG",away:"JOR",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m045",date:"2026-06-23",time:"03:00",stage:"group",group:"K",matchday:2,home:"POR",away:"UZB",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m046",date:"2026-06-23",time:"06:00",stage:"group",group:"L",matchday:2,home:"ENG",away:"GHA",venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  { id:"m047",date:"2026-06-23",time:"21:00",stage:"group",group:"K",matchday:2,home:"COD",away:"COL",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m048",date:"2026-06-24",time:"00:00",stage:"group",group:"L",matchday:2,home:"CRO",away:"PAN",venue:"Seattle Lumen",status:"scheduled",score:null,city:"Seattle"},
  // --- 小组赛 Matchday 3 ---
  { id:"m049",date:"2026-06-24",time:"03:00",stage:"group",group:"A",matchday:3,home:"CZE",away:"RSA",venue:"Monterrey BBVA",status:"scheduled",score:null,city:"Monterrey"},
  { id:"m050",date:"2026-06-24",time:"03:00",stage:"group",group:"A",matchday:3,home:"KOR",away:"MEX",venue:"Guadalajara Akron",status:"scheduled",score:null,city:"Guadalajara"},
  { id:"m051",date:"2026-06-25",time:"00:00",stage:"group",group:"B",matchday:3,home:"SUI",away:"CAN",venue:"Vancouver BC Place",status:"scheduled",score:null,city:"Vancouver"},
  { id:"m052",date:"2026-06-25",time:"00:00",stage:"group",group:"B",matchday:3,home:"QAT",away:"BIH",venue:"Toronto BMO Field",status:"scheduled",score:null,city:"Toronto"},
  { id:"m053",date:"2026-06-25",time:"03:00",stage:"group",group:"C",matchday:3,home:"SCO",away:"BRA",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m054",date:"2026-06-25",time:"03:00",stage:"group",group:"C",matchday:3,home:"HAI",away:"MAR",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m055",date:"2026-06-26",time:"00:00",stage:"group",group:"D",matchday:3,home:"TUR",away:"USA",venue:"Kansas City Arrowhead",status:"scheduled",score:null,city:"Kansas City"},
  { id:"m056",date:"2026-06-26",time:"00:00",stage:"group",group:"D",matchday:3,home:"AUS",away:"PAR",venue:"Denver Mile High",status:"scheduled",score:null,city:"Denver"},
  { id:"m057",date:"2026-06-26",time:"03:00",stage:"group",group:"E",matchday:3,home:"ECU",away:"GER",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m058",date:"2026-06-26",time:"03:00",stage:"group",group:"E",matchday:3,home:"CIV",away:"CUW",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m059",date:"2026-06-27",time:"00:00",stage:"group",group:"F",matchday:3,home:"TUN",away:"NED",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m060",date:"2026-06-27",time:"00:00",stage:"group",group:"F",matchday:3,home:"SWE",away:"JPN",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m061",date:"2026-06-27",time:"03:00",stage:"group",group:"G",matchday:3,home:"NZL",away:"BEL",venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  { id:"m062",date:"2026-06-27",time:"03:00",stage:"group",group:"G",matchday:3,home:"IRN",away:"EGY",venue:"Seattle Lumen",status:"scheduled",score:null,city:"Seattle"},
  { id:"m063",date:"2026-06-28",time:"00:00",stage:"group",group:"H",matchday:3,home:"URU",away:"ESP",venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  { id:"m064",date:"2026-06-28",time:"00:00",stage:"group",group:"H",matchday:3,home:"KSA",away:"CPV",venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m065",date:"2026-06-28",time:"03:00",stage:"group",group:"I",matchday:3,home:"NOR",away:"FRA",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m066",date:"2026-06-28",time:"03:00",stage:"group",group:"I",matchday:3,home:"IRQ",away:"SEN",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m067",date:"2026-06-29",time:"00:00",stage:"group",group:"J",matchday:3,home:"JOR",away:"ARG",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m068",date:"2026-06-29",time:"00:00",stage:"group",group:"J",matchday:3,home:"AUT",away:"ALG",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m069",date:"2026-06-29",time:"03:00",stage:"group",group:"K",matchday:3,home:"COL",away:"POR",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m070",date:"2026-06-29",time:"03:00",stage:"group",group:"K",matchday:3,home:"UZB",away:"COD",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m071",date:"2026-06-30",time:"00:00",stage:"group",group:"L",matchday:3,home:"PAN",away:"ENG",venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  { id:"m072",date:"2026-06-30",time:"00:00",stage:"group",group:"L",matchday:3,home:"GHA",away:"CRO",venue:"Seattle Lumen",status:"scheduled",score:null,city:"Seattle"},
  // --- 32强 (Round of 32) ---
  { id:"m073",date:"2026-07-01",time:"23:00",stage:"round32",home:"MEX",away:"SUI",venue:"Mexico City Azteca",status:"scheduled",score:null,city:"Mexico City"},
  { id:"m074",date:"2026-07-02",time:"03:00",stage:"round32",home:"BRA",away:"TUR",venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m075",date:"2026-07-02",time:"23:00",stage:"round32",home:"CAN",away:"KOR",venue:"Vancouver BC Place",status:"scheduled",score:null,city:"Vancouver"},
  { id:"m076",date:"2026-07-03",time:"03:00",stage:"round32",home:"USA",away:"SCO",venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m077",date:"2026-07-03",time:"23:00",stage:"round32",home:"GER",away:"SWE",venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m078",date:"2026-07-04",time:"03:00",stage:"round32",home:"BEL",away:"URU",venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  { id:"m079",date:"2026-07-04",time:"23:00",stage:"round32",home:"NED",away:"ECU",venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m080",date:"2026-07-05",time:"03:00",stage:"round32",home:"ESP",away:"IRN",venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  { id:"m081",date:"2026-07-05",time:"23:00",stage:"round32",home:"FRA",away:"AUT",venue:"San Francisco Levi's",status:"scheduled",score:null,city:"San Francisco"},
  { id:"m082",date:"2026-07-06",time:"03:00",stage:"round32",home:"POR",away:"CRO",venue:"Boston Gillette",status:"scheduled",score:null,city:"Boston"},
  { id:"m083",date:"2026-07-06",time:"23:00",stage:"round32",home:"ARG",away:"SEN",venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m084",date:"2026-07-07",time:"03:00",stage:"round32",home:"ENG",away:"COL",venue:"Seattle Lumen",status:"scheduled",score:null,city:"Seattle"},
  { id:"m085",date:"2026-07-07",time:"23:00",stage:"round32",home:"MAR",away:"JPN",venue:"Kansas City Arrowhead",status:"scheduled",score:null,city:"Kansas City"},
  { id:"m086",date:"2026-07-08",time:"03:00",stage:"round32",home:"PAR",away:"EGY",venue:"Denver Mile High",status:"scheduled",score:null,city:"Denver"},
  { id:"m087",date:"2026-07-08",time:"23:00",stage:"round32",home:"CZE",away:"BIH",venue:"Monterrey BBVA",status:"scheduled",score:null,city:"Monterrey"},
  { id:"m088",date:"2026-07-09",time:"03:00",stage:"round32",home:"ALG",away:"NOR",venue:"Guadalajara Akron",status:"scheduled",score:null,city:"Guadalajara"},
  // --- 16强 (Round of 16) ---
  { id:"m089",date:"2026-07-10",time:"23:00",stage:"round16",home:null,away:null,venue:"Mexico City Azteca",status:"scheduled",score:null,city:"Mexico City"},
  { id:"m090",date:"2026-07-11",time:"03:00",stage:"round16",home:null,away:null,venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m091",date:"2026-07-11",time:"23:00",stage:"round16",home:null,away:null,venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m092",date:"2026-07-12",time:"03:00",stage:"round16",home:null,away:null,venue:"Houston NRG",status:"scheduled",score:null,city:"Houston"},
  { id:"m093",date:"2026-07-12",time:"23:00",stage:"round16",home:null,away:null,venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m094",date:"2026-07-13",time:"03:00",stage:"round16",home:null,away:null,venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  { id:"m095",date:"2026-07-13",time:"23:00",stage:"round16",home:null,away:null,venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m096",date:"2026-07-14",time:"03:00",stage:"round16",home:null,away:null,venue:"Philadelphia Lincoln",status:"scheduled",score:null,city:"Philadelphia"},
  // --- 8强 (Quarter-finals) ---
  { id:"m097",date:"2026-07-15",time:"23:00",stage:"quarter",home:null,away:null,venue:"Los Angeles SoFi",status:"scheduled",score:null,city:"Los Angeles"},
  { id:"m098",date:"2026-07-16",time:"03:00",stage:"quarter",home:null,away:null,venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
  { id:"m099",date:"2026-07-16",time:"23:00",stage:"quarter",home:null,away:null,venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  { id:"m100",date:"2026-07-17",time:"03:00",stage:"quarter",home:null,away:null,venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  // --- 半决赛 ---
  { id:"m101",date:"2026-07-18",time:"03:00",stage:"semi",home:null,away:null,venue:"Dallas AT&T",status:"scheduled",score:null,city:"Dallas"},
  { id:"m102",date:"2026-07-19",time:"03:00",stage:"semi",home:null,away:null,venue:"Atlanta Mercedes-Benz",status:"scheduled",score:null,city:"Atlanta"},
  // --- 季军赛 + 决赛 ---
  { id:"m103",date:"2026-07-19",time:"23:00",stage:"thirdPlace",home:null,away:null,venue:"Miami Hard Rock",status:"scheduled",score:null,city:"Miami"},
  { id:"m104",date:"2026-07-20",time:"03:00",stage:"final",home:null,away:null,venue:"New York MetLife",status:"scheduled",score:null,city:"New York"},
];

// ============ 查询工具函数 ============
function getTeamById(id) { return TEAMS.find(t => t.id === id) || null; }
function getTeamByCode(code) { return TEAMS.find(t => t.fifaCode === code) || null; }
function getTeamsByGroup(group) { return TEAMS.filter(t => t.group === group); }
function getAllGroups() { return [...new Set(TEAMS.map(t => t.group))].sort(); }
function getMatchById(id) { return MATCHES.find(m => m.id === id) || null; }
function getMatchesByDate(date) { return MATCHES.filter(m => m.date === date); }
function getMatchesByGroup(group) { return MATCHES.filter(m => m.group === group); }
function getMatchesByStage(stage) { return MATCHES.filter(m => m.stage === stage); }
function getAllDates() { return [...new Set(MATCHES.map(m => m.date))].sort(); }
function getMatchGroups() { return [...new Set(MATCHES.filter(m=>m.group).map(m=>m.group))].sort(); }

// ============ 赛事信息 ============
const TOURNAMENT = {
  name: "2026 FIFA World Cup",
  nameCN: "2026年国际足联世界杯",
  startDate: "2026-06-12",
  endDate: "2026-07-20",
  hostCountries: ["USA", "Canada", "Mexico"],
  hostCountriesCN: ["美国", "加拿大", "墨西哥"],
  totalTeams: 48,
  totalMatches: 104,
  groups: ["A","B","C","D","E","F","G","H","I","J","K","L"],
};
