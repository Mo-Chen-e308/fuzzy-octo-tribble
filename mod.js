﻿let modInfo = {
	name: " The QwQ Tree",
	id: "QwQ树",
	author: "陌尘",
	pointsName: "QwQ",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2.6",
	name: "",
}

let changelog = `<h1>更新日志:</h1><br>
	<h2>v0.0.0.1</h2><br>
		- Q节点新增3个升级<br>
		- 增加了Q节点<br>
	<h2>v0.0.0.2</h2><br>
	    - 修复了若干bug.<br>
	<h2>v0.0.0.3</h2><br>
		- 修复了若干bug.<br>
		- 改善Q11 Q12 Q13的加成.<br>
	<h2>v0.0.0.4</h2><br>
		- 新添Q14~Q25…………的框架<br>
	<h2>v0.0.0.5</h2><br>
		- 新添Q14~Q15的内容及加成<br>
	<h2>v0.0.0.6</h2><br>
		- 添加Q21的内容<br>
		- 新添加Q节点的挑战<br>
	<h2>v0.0.0.7</h2><br>
		- 新添T W节点<br>
		- 修复了若干bug<br>
		- Q节点挑战改善<br>
		- 暂时删除Q24 Q25<br>
	<h2>v0.0.0.8</h2><br>
		- 删除Q节点挑战<br>
		- 新增T节点挑战(<br>
		- 新增T节点升级效果<br>
	<h2>v0.0.0.9</h2><br>
		- 删除T节点挑战<br>
		- 新增T节点里程碑<br>
		- 修复若干bug 改善若干升级效果<br>
	<h2>v0.0.1.0</h2><br>
		- 重置Q T节点升级<br>
		- 重新制作Q T节点升级效果<br>
		- 修复很多很多很多很多bug<br>
	<h2>v0.0.1.1</h2><br>
		- 修复好多好多好多好多bug<br>
		- 修复了3Q点买Q11会不生产QwQ的bug<br>
	<h2>v0.0.1.3</h2><br>
		- 不要问我v0.0.1.2去哪了<br>
		- 修复了很多很多bug<br>
	<h2>v0.0.1.7</h2><br>
		- 不要问我v0.0.1.4~v0.0.1.6去哪了<br>
		- T节点更新了好多里程碑<br>
		- T节点更新了T13~T23升级<br>
		- 新增W节点框架<br>
	<h2>v0.0.2.4</h2><br>
		- 别问我v0.0.1.8~v0.0.2.3去哪了<br>
		- 新增W节点升级W11~W31<br>
		- 改善好多好多好多好多升级<br>
		- 修了很多很多很多很多bug<br>
		- 添加(？^层框架<br>
		- 记得别刷太多小心崩掉！<br>
	<h2>v0.0.2.6</h2><br>
		- 别问我v0.0.2.5去哪了<br>
		- 添加点数获取软上限<br>
		- 测试过后微调需求数量等<br>
		- 正在考虑加加成软上限<br>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		`
	

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
	    if(!canGenPoints())
			return new ExpantaNum
	
	
	//let gain = new ExpantaNum(0.5)
    //if(hasUpqrade('Q',11)) gain  = new ExpantaNum(0.6)
	//if(hasUpqrade('Q',12)) gain  = new ExpantaNum(0.65)
	//if(hasUpqrade('Q',13)) gain  = new ExpantaNum(0.85)  //gain.QwQ(upgradeEffect('Q',11))
    return gain

}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new ExpantaNum(1)
	let gain = new ExpantaNum()
		let eff = player[this.layer].points.add(1).pow(0) 
			var a = player.T.points
			var b = player.Q.points	
			var c = player.W.points	
			
			///////////////////////////////////////////////
			//softcap:new ExpantaNum(1e20)
			//softcapPower:new ExpantaNum(1000)
			//softcap(5, 10, 0.5)
			//gain = powsoftcap(gain,1e20,10)
			//gain = powsoftcap(gain,e("20"),e(10))
			////////////////////////////////////////////
			
			
			if (hasUpgrade('Q',11)) eff = eff.mul((b**0.3)+1)
			if (hasUpgrade('Q',12)) eff = eff.mul((b**0.085)+1)
			if (hasUpgrade('Q',13)) eff = eff.mul((b**0.09)+1)
			if (hasUpgrade('Q',15)) eff = eff.mul((b**0.095)+1)
			if (hasUpgrade('Q',21)) eff = eff.mul((b**0.1)+1)

			//if (hasUpgrade('Q',11)) eff = player[this.layer].points.add(1).pow(0.2265);
			//if (hasUpgrade('Q',12)) eff = player[this.layer].points.add(1).pow(0.3375);
			//if (hasUpgrade('Q',13)) eff = player[this.layer].points.add(1).pow(0.4485);
			//if (hasUpgrade('Q',15)) eff = player[this.layer].points.add(1).pow(0.4695);
			//if (hasUpgrade('Q',21)) eff = player[this.layer].points.add(1).pow(0.4805);
			if (hasUpgrade('T',11)) eff = eff.mul((a**0.3)+1)
			if (hasUpgrade('T',12)) eff = eff.mul((a**0.075)+1)
			if (hasUpgrade('T',13)) eff = eff.mul((a**0.185)+1)
			if (hasUpgrade('T',15)) eff = eff.mul((a**0.215)+1)
			//if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1)
				
			if (hasUpgrade('W',11)) eff = eff.mul((c**0.3)+1)
			if (hasUpgrade('W',12)) eff = eff.mul((c**0.0285)+1)
			if (hasUpgrade('W',13)) eff = eff.mul((c**0.0785)+1)
			if (hasUpgrade('W',31)) eff = eff.mul((b**0.1245)+1)
			
			///////////////////////////////////////////////////
			//var a = new Decimal(1e100)
			//	a = powsoftcap(a,Decimal(1e10),10) //返回1e19,即为1e10 * 1e90^(1/10)
			//if (inChallenge('a',11)) eff = eff.mul(0.001))
			if (inChallenge('a',11)) eff = player[this.layer].points.add(1).pow(0.238);
			//if (hasChallenge('a',11)) eff = player[this.layer].points.add(1).pow(0.5);
			eff = softcap(eff,new ExpantaNum(1e6),0.95)
			eff = softcap(eff,new ExpantaNum(1e8),0.85)
			eff = softcap(eff,new ExpantaNum(1e10),0.75)
			eff = softcap(eff,new ExpantaNum(1e12),0.65)
			
 
			//////////////////////////////////////////////////////////////////
		return eff
			
			//let Qjc = player.Q.points.add(1).pow(0);
			//if (hasUpgrade('T',11)) Qjc = player.Q.points.add(1).pow(0.75);
			//if (hasChallenge('T',11)) eff = player[this.layer].points.add(1).pow(0.5);
			
			//if (inChallenge('T',11)) eff = player[this.layer].points.add(1).pow(0.238);
			
			
			//return Qjc
		
		//if (inChallenge('Q',11)) gain = gain.mul(0.35)
			
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){return"已添加软上限"},
	function(){return"芜湖？(你翅膀掉了)"},
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