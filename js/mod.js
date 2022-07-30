let modInfo = {
	name: "Tree",
	id: "eieeeeee",
	author: "陌尘_",
	pointsName: "点数",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2",
	name: "",
}

let changelog = ``

let winText = `恭喜通关!您已经完成了这个游戏.`

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

	if(hasUpgrade("p",11)) eff=eff.mul(upgradeEffect("p",11))
	if(hasUpgrade("p",12)) eff=eff.mul(upgradeEffect("p",12))
	if(hasUpgrade("p",13)) eff=eff.mul(upgradeEffect("p",13))
	if(hasUpgrade("p",21)) eff=eff.mul(upgradeEffect("p",21))
	eff=eff.pow(layers.p.clickables[11].gain())
	hasUpgrade("g",13)?hasMilestone("g",3)?eff=eff.mul(player.g.total.pow(2).mul(2).max(1)):eff=eff.mul(player.g.total.pow(2).max(1)):eff=eff.mul(player.g.total.mul(3).max(1))
	if(hasUpgrade("g",12)) eff=eff.mul(upgradeEffect("g",12))
	if(hasChallenge("g",11))eff=eff.mul(50)
	if(hasUpgrade("g",23)) eff=eff.mul(upgradeEffect("g",23))
	if(hasUpgrade("g",25)) eff=eff.mul(upgradeEffect("g",25))
	if(hasMilestone("g",3))eff=eff.pow(1.05)
	if(hasChallenge("g",12))eff=eff.mul(10)

	if(inChallenge("g",11))eff=eff.pow(0.25)
	if(inChallenge("g",12))eff=eff.pow(0.15)
	
	return eff
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
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