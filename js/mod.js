let modInfo = {
	name: "The Cap Tree",
	id: "nThe Cap Tree",
	author: "陌尘",
	pointsName: "点数",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num:  "0.2.1",
	name: "",
}

let changelog = `<h1>更新日志:</h1><br>
	<h3>v0.0.1</h3><br>
		- 添加Q节点及其升级.<br><br>
	<h3>v0.0.2</h3><br>
		- 添加更多Q节点及其升级.<br><br>
	<h3>v0.0.6</h3><br>
		- 添加T节点用于记录时间(或许以后会有用处.<br><br>
	<h3>v0.0.8</h3><br>
		- T节点暂时作为成就节点.<br><br>
	<h3>v0.1.2</h3><br>
		- 添加N节点及其加成.<br><br>
	<h3>v0.1.3</h3><br>
		- T节点添加一些里程碑及奖励.<br><br>
	<h3>v0.1.7</h3><br>
		- 增加更多Q节点升级.<br><br>
	<h3>v0.1.7.1</h3><br>
		- 正式命名为The Cap Tree<br><br>
	<h3>v0.1.9.4</h3><br>
		- 修改一些显示bug.<br><br>
	<h3>v0.2.1</h3><br>
		- 根据某玩家反馈调整某升级公式.<br>
		- 该版本为第一次公测版本.<br><br>
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
	let eff = new ExpantaNum(1)
	
	if(hasUpgrade("q",11)) eff = eff.mul( player.q.points.pow(0.18) )
	if(hasAchievement("T",14)) eff = eff.mul(1.5)
	if(hasAchievement("T",24)) eff = eff.mul(1.5)
	if(hasAchievement("T",34)) eff = eff.mul(1.75)
	
	var p = player.q.points.floor()
		if(p.div(3).floor().eq(p.div(3))) eff = eff.pow(1.1)
	if(hasUpgrade("q",14)) eff = eff.pow(1.05)
	
if(player.q.y.gt(0)&&player.q.z.eq(0)) eff = eff.mul(player.q.y.pow(0.01).max(1))
if(player.q.y.gt(0)&&player.q.z.neq(0)) eff = eff.mul(player.q.y.pow(0.01).mul(player.q.z.pow(0.075)))
if(player.n.total.gt(0)) eff = eff.mul(n(1.15).pow(player.n.total))
			
	eff = eff.max(1)
	return eff
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){return"当前版本endgame 为约 10 中微子"},
	function(){return"作者 陌尘 QQ3168704134"},
]

// Determines when the game "ends"
function isEndgame() {
	return player.n.points.gte(10)
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