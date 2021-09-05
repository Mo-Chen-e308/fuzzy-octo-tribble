let modInfo = {
	name: "The Chemistry Tree",
	id: "化学树",
	author: "陌尘",
	pointsName: "原子",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "v0.2.1-beta-1.1",
	name: "",
}

let changelog = `<h1>更新日志：</h1><br>
	<h3>v0.0.1</h3><br>
		- 新添O、C、H节点<br>
		- 添加好多升级<br>
	<h3>v0.0.3</h3><br>
		- 不要问我v0.0.2去哪了<br>
		- 搭建了H2O的框架及某些升级<br>
	<h3>v0.0.7</h3><br>
		- 不要问我v0.0.4~v0.0.6去哪了<br>
		- 新增CO2节点及升级<br>
		- 优化某些升级<br>
		- 芜湖~<br>
	<h3>v0.0.8</h3><br>
		- 新增H2CO3的节点及升级<br>
		- 搭建NaCl的框架<br>
		- 电解水！<br>
		- 预计软上限在e9原子开始<br>
	<h3>v0.0.9</h3><br>
		- 新增NaCl层升级<br>
		- 新增R节点一堆按钮<br>
		- 搭建Na框架<br>
		- 搭建Cl框架<br>
	<h3>v0.1.2</h3><br>
		- 不要问我v0.1.0~v0.1.1去哪了<br>
		- 新增Na2O框架<br>
		- 优化某些升级<br>
		- 改善COH层级的加成效果<br>
	<h3>v0.1.5</h3><br>
		- 不要问我v0.1.3~v0.1.4去哪了<br>
		- 预计v0.2公测一波<br>
		- 新增NaOH层的框架<br>
		- 芜湖~<br>
	<h3>v0.2</h3><br>
		-不要问我v0.1.6~v0.1.9去哪了<br>
		- 加了软上限！！！<br>
		- 加了软上限！！！<br>
		- 加了软上限！！！<br>
		- 加了软上限！！！<br>
		- 加了软上限！！！<br>
		- 新增NaOH层升级<br>
	<h3>v0.2.1-beta-1.1</h3><br>
		- 修复了不能获取CO2的bug
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new ExpantaNum(0)
	//let gain = new ExpantaNum(1)
	let eff = player[this.layer].points.add(1).pow(0) 
/////////////////////////////////////////////////////////////////////////////////////////////////
	if (hasUpgrade('O',11)) eff = eff.mul(2);
	if (hasUpgrade('H',11)) eff = eff.mul(2);
	if (hasUpgrade('C',11)) eff = eff.mul(2);
/////////////////////////////////////////////////////////////////////////////////////////////////
		if (hasUpgrade('H2O',11)) eff = eff.mul((player.H2O.points**0.6)+1);
			if (player.H2O.points > 1e6 && hasUpgrade('H2O',11)) eff = eff.pow(0.95);
/////////////////////////////////////////////////////////////////////////////////////////////////
		if (hasUpgrade('CO2',11)) eff = eff.mul((player.CO2.points**0.65)+1);
			if (player.CO2.points > 1e5 && hasUpgrade('CO2',11)) eff = eff.pow(0.9);
/////////////////////////////////////////////////////////////////////////////////////////////////
		if (hasUpgrade('NaCl',11)) eff = eff.mul((player.NaCl.points**0.7)+1);
			if (player.NaCl.points > 1e5 && hasUpgrade('NaCl',11)) eff = eff.pow(0.9);
/////////////////////////////////////////////////////////////////////////////////////////////////
		if (hasUpgrade('H2CO3',11)) eff = eff.mul((player.H2CO3.points**0.75)+1);
			if (player.CO2.points > 1e4 && hasUpgrade('H2CO3',11)) eff = eff.pow(0.85);
/////////////////////////////////////////////////////////////////////////////////////////////////
		if (hasUpgrade('Na2O',11)) eff = eff.mul((player.Na2O.points**0.65)+1);
			if (player.Na2O.points > 1e4 && hasUpgrade('Na2O',11)) eff = eff.pow(0.9);
/////////////////////////////////////////////////////////////////////////////////////////////////
		if (hasUpgrade('NaOH',11)) eff = eff.mul((player.NaOH.points**0.75)+1);
			if (player.NaOH.points > 1e4 && hasUpgrade('NaOH',11)) eff = eff.pow(0.85);
			
			
			eff = softcap(eff,new ExpantaNum(1e8),0.95)
			eff = softcap(eff,new ExpantaNum(1e9),0.85)
			eff = softcap(eff,new ExpantaNum(1e10),0.75)
			eff = softcap(eff,new ExpantaNum(1e15),0.6)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			//eff = softcap(eff,new ExpantaNum(1e9),0.98)
			
			
			
	
	
	return eff
	//return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){return"v0.0.1还未添加软上限"},
	function(){return"v0.1.5已经添加软上限"},
	function(){return"作者陌尘QQ3168704134(2021.9.1已开学)"},
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}