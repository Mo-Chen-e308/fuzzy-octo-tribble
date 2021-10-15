addLayer("O", { //初始元素之一 氧Oxygen
    name: "Oxygen", 
    symbol: "O",
    position: 1, 
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#BBFFFF",
	requires: new ExpantaNum(10),
    resource: "氧原子",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	exponent() {
		var Oxygen = new ExpantaNum(0)
		if(hasUpgrade("O",11)) Oxygen = Oxygen.add(0.4)
		if(hasUpgrade("O",12)) Oxygen = Oxygen.add(0.1)
		if(hasUpgrade("O",13)) Oxygen = Oxygen.add(0.1)
		return new ExpantaNum(0).add(Oxygen)},
	effectDescription(){return `(Oxygen)`},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",12)) var a = new ExpantaNum(0.01)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"有氧了！",
				description:"你一次可以<br>获取更多氧原子",
				cost:new ExpantaNum(1),
				//effect(){
				//		let eff = player.O.points.add(1).pow(0)
				//		return eff
				//	},
				//  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"更多氧！",
				description:"你一次可以获得比O11还多的氧原子",
				cost:new ExpantaNum(2),
				unlocked(){return hasUpgrade("O",11)},
				},
				13:{
				title:"超多氧！",
				description:"你一次可以获得比O12还多的氧原子",
				cost:new ExpantaNum(4),
				unlocked(){return hasUpgrade("O",12)},
				},
				14:{
				title:"发现！",
				description:"发现了一个新的<br>初始元素",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("O",13)},
				},
			}
})
addLayer("H", { //初始元素之一 氢Hydrogen
    name: "Hydrogen", 
    symbol: "H",
    position: 2, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#66B3FF",
	requires: new ExpantaNum(10),
    resource: "氢原子",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	exponent() {
		var Hydrogen = new ExpantaNum(0)
		if(hasUpgrade("H",11)) Hydrogen = Hydrogen.add(0.4)
		if(hasUpgrade("H",12)) Hydrogen = Hydrogen.add(0.1)
		if(hasUpgrade("H",13)) Hydrogen = Hydrogen.add(0.1)
		return new ExpantaNum(0).add(Hydrogen)},
	effectDescription(){return `(Hydrogen)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("O",14))},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",13)) var a = new ExpantaNum(0.01)
			
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"有氢了！",
				description:"你一次可以<br>获取更多氢原子",
				cost:new ExpantaNum(1),
				//effect(){
				//		let eff = player.C.points.add(1).pow(0)
				//		return eff
				//	},
				//  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"更多氢！",
				description:"你一次可以获得比H11还多的氢原子",
				cost:new ExpantaNum(2),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"超多氢！",
				description:"你一次可以获得比H12还多的氢原子",
				cost:new ExpantaNum(4),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"发现！",
				description:"发现了另一个<br>初始元素",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("H",13)},
				},
			}
})
addLayer("C", { //初始元素之一 炭Charcoal
    name: "Charcoal", 
    symbol: "C",
    position: 0, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#5B5B5B",
	requires: new ExpantaNum(10),
    resource: "炭原子",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	exponent() {
		var Charcoal = new ExpantaNum(0)
		if(hasUpgrade("C",11)) Charcoal = Charcoal.add(0.4)
		if(hasUpgrade("C",12)) Charcoal = Charcoal.add(0.1)
		if(hasUpgrade("C",13)) Charcoal = Charcoal.add(0.1)
		return new ExpantaNum(0).add(Charcoal)},
	effectDescription(){return `(Charcoal)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("H",14))},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",14)) var a = new ExpantaNum(0.01)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"有炭了！",
				description:"你一次可以<br>获取更多炭原子",
				cost:new ExpantaNum(1),
				//effect(){
				//		let eff = player.C.points.add(1).pow(0)
				//		return eff
				//	},
				//  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"更多炭！",
				description:"你一次可以获得比C11还多的炭原子",
				cost:new ExpantaNum(2),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"超多炭！",
				description:"你一次可以获得比C12还多的炭原子",
				cost:new ExpantaNum(4),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("C",13)},
				},
			}
})
addLayer("Cl", { //初始元素之一 氯Chlorine
    name: "Chlorine", 
    symbol: "Cl",
    position: 4, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#C2FF68",
	requires: new ExpantaNum(1e7),
    resource: "氯原子",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["NaCl",],
	exponent() {
		var Chlorine = new ExpantaNum(0)
		if(hasUpgrade("Cl",11)) Chlorine = Chlorine.add(0.4)
		if(hasUpgrade("Cl",12)) Chlorine = Chlorine.add(0.1)
		if(hasUpgrade("Cl",13)) Chlorine = Chlorine.add(0.1)
		return new ExpantaNum(0).add(Chlorine)},
	effectDescription(){return `(Chlorine)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("Na",14))&&player.Cl.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"有氯了！",
				description:"你一次可以<br>获取更多氯原子",
				cost:new ExpantaNum(1),
				//effect(){
				//		let eff = player.C.points.add(1).pow(0)
				//		return eff
				//	},
				//  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"更多氯！",
				description:"你一次可以获得比Na11还多的氯原子",
				cost:new ExpantaNum(2),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"超多氯！",
				description:"你一次可以获得比Na12还多的氯原子",
				cost:new ExpantaNum(4),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("Cl",13)},
				},
			}
})
addLayer("Na", { //初始元素之一 钠Sodium
    name: "Sodium", 
    symbol: "Na",
    position: 3, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#4EFEB3",
	requires: new ExpantaNum(1e7),
    resource: "钠原子",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["NaCl",],
	exponent() {
		var Sodium = new ExpantaNum(0)
		if(hasUpgrade("Na",11)) Sodium = Sodium.add(0.4)
		if(hasUpgrade("Na",12)) Sodium = Sodium.add(0.1)
		if(hasUpgrade("Na",13)) Sodium = Sodium.add(0.1)
		return new ExpantaNum(0).add(Sodium)},
	effectDescription(){return `(Sodium)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("NaCl",21))&&player.Na.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"有钠了！",
				description:"你一次可以<br>获取更多钠原子",
				cost:new ExpantaNum(1),
				//effect(){
				//		let eff = player.C.points.add(1).pow(0)
				//		return eff
				//	},
				//  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"更多钠！",
				description:"你一次可以获得比Na11还多的钠原子",
				cost:new ExpantaNum(2),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"超多钠！",
				description:"你一次可以获得比Na12还多的钠原子",
				cost:new ExpantaNum(4),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"发现！",
				description:"深度分解······",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("Na",13)},
				},
			}
})
addLayer("HCl", { //合成元素之一 盐酸 HCl Hydrochloric acid       //第二层    盐酸           HCl
    name: "Hydrochloric acid", 
    symbol: "HCl",
    position: 4, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#FFAF60",
	requires: new ExpantaNum(5e12),
    resource: "HCl",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["H","Cl"],
	exponent() {
		var HydrochloricAcid = new ExpantaNum(0)
		if(hasUpgrade("HCl",12)) HydrochloricAcid = HydrochloricAcid.add(0.4)
		if(hasUpgrade("HCl",13)) HydrochloricAcid = HydrochloricAcid.add(0.1)
		if(hasUpgrade("HCl",14)) HydrochloricAcid = HydrochloricAcid.add(0.1)
		return new ExpantaNum(0).add(HydrochloricAcid)},
	effectDescription(){return `(Hydrochloric Acid)(盐酸)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("NaOH",15))&&player.HCl.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];
				
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
			if(hasUpgrade("HCl",11)) eff = eff.mul(player.HCl.points**0.6+1)
			
        return eff
    },
    gainExp() { //获取改点数的指数
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"加成Reaction获取<br>并且减少Reaction获取需求<br>并且加成HCl获取",
				cost:new ExpantaNum(1),
				//effect(){
				//		let eff = player.HCl.points.add(1).pow(0)
				//			if (hasUpgrade('HCl',11) && player.HCl.points < 2500) eff = eff.mul((player.HCl.points**0.6)+1);
				//			if (hasUpgrade('HCl',11) && player.HCl.points > 2500) eff = eff.mul((2500**0.6+(player.HCl.points-2500)**0.1)+1);
				//		return eff
				//	},
				//  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"起飞了起飞了",
				description:"<br>每秒获得1%<br>可以重置的O<br>并且根据HCl<br>加成原子获取",
				cost:new ExpantaNum(10),
				//unlocked(){return hasUpgrade("C",11)},
				effect(){
						let eff = player.HCl.points.add(1).pow(0)
							if (hasUpgrade('HCl',12) && player.HCl.points < 2500) eff = eff.mul((player.HCl.points**0.8)+1);
							if (hasUpgrade('HCl',12) && player.HCl.points > 2500) eff = eff.mul((2500**0.8+(player.HCl.points-2500)**0.15)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				13:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的H",
				cost:new ExpantaNum(10),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的C",
				cost:new ExpantaNum(10),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的H₂O",
				cost:new ExpantaNum(100),
				//unlocked(){return hasUpgrade("C",11)},
				},
				21:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的CO₂",
				cost:new ExpantaNum(100),
				//unlocked(){return hasUpgrade("C",11)},
				},
				22:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的H₂CO₃",
				cost:new ExpantaNum(1000),
				//unlocked(){return hasUpgrade("C",11)},
				},
				23:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的NaCl",
				cost:new ExpantaNum(1000),
				//unlocked(){return hasUpgrade("C",11)},
				},
				24:{
				title:"起飞了起飞了！",
				description:"<br>每秒获得1%<br>可以重置的Na₂O",
				cost:new ExpantaNum(10000),
				//unlocked(){return hasUpgrade("C",11)},
				},
				25:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(10000),
				unlocked(){return hasUpgrade("HCl",24)},
				},
			}
})
addLayer("H2CO3", { //合成元素之一 碳酸 H2CO3 Carbonic acid       //第三层    碳酸           H2CO3
    name: "Carbonic Acid", 
    symbol: "H₂CO₃",
    position: 0, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#aa7700",
	requires: new ExpantaNum(30000),
    resource: "H₂CO₃",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["H2O","CO2"],
	exponent() {
		var CarbonicAcid = new ExpantaNum(0)
		if(hasUpgrade("H2CO3",12)) CarbonicAcid = CarbonicAcid.add(0.4)
		if(hasUpgrade("H2CO3",13)) CarbonicAcid = CarbonicAcid.add(0.1)
		if(hasUpgrade("H2CO3",14)) CarbonicAcid = CarbonicAcid.add(0.1)
		return new ExpantaNum(0).add(CarbonicAcid)},
	effectDescription(){return `(Carbonic Acid)(碳酸)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("H2O",15))&&player.H2CO3.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",22)) var a = new ExpantaNum(0.01)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据H₂CO₃加成<br>原子获取<br>",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.H2CO3.points.add(1).pow(0)
							if (hasUpgrade('H2CO3',11) && player.H2CO3.points < 2500) eff = eff.mul((player.H2CO3.points**0.6)+1);
							if (hasUpgrade('H2CO3',11) && player.H2CO3.points > 2500) eff = eff.mul((2500**0.6+(player.H2CO3.points-2500)**0.1)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"有污染了！",
				description:"<br>你一次可以<br>获取更多H₂CO₃",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"更多污染！",
				description:"<br>你一次可以获得比H₂CO₃12还多的H₂CO₃",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"超多污染！",
				description:"<br>你一次可以获得比H₂CO₃13还多的H₂CO₃",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"由于原子带有电子<br>所以你决定·····<br>没错！电解水！",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("H2CO3",14)},
				},
			}
})
addLayer("NaOH", { //合成元素之一 氢氧化钠 NaOH Sodium Hydroxide  //第二层    氢氧化钠       NaOH
    name: "Sodium Hydroxide", 
    symbol: "NaOH",
    position: 1, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#CA8EC2",
	requires: new ExpantaNum(1e8),
    resource: "NaOH",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["H2O","Na2O"],
	exponent() {
		var SodiumHydroxide = new ExpantaNum(0)
		if(hasUpgrade("NaOH",12)) SodiumHydroxide = SodiumHydroxide.add(0.4)
		if(hasUpgrade("NaOH",13)) SodiumHydroxide = SodiumHydroxide.add(0.1)
		if(hasUpgrade("NaOH",14)) SodiumHydroxide = SodiumHydroxide.add(0.1)
		return new ExpantaNum(0).add(SodiumHydroxide)},
	effectDescription(){return `(SodiumHydroxide)(氢氧化钠)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("Na2O",15))&&player.NaOH.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据NaOH加成<br>原子获取<br>",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.NaOH.points.add(1).pow(0)
							if (hasUpgrade('NaOH',11) && player.NaOH.points < 2500) eff = eff.mul((player.NaOH.points**0.6)+1);
							if (hasUpgrade('NaOH',11) && player.NaOH.points > 2500) eff = eff.mul((2500**0.6+(player.NaOH.points-2500)**0.1)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"氢氧化钠？",
				description:"<br>你一次可以<br>获取更多NaOH",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"氢氧化钠！",
				description:"<br>你一次可以获得比NaOH12还多的NaOH",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"太强了！",
				description:"<br>你一次可以获得比NaOH13还多的NaOH",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("H2CO3",14)},
				},
			}
})
addLayer("Na2CO3", { //合成元素之一 碳酸钠 Na2CO3 Sodium carbonate//第三层    碳酸钠         Na2CO3
    name: "Sodium Carbonate", 
    symbol: "<h5>Na₂CO₃",
    position: 1, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#93FF93",
	requires: new ExpantaNum(2e14),
    resource: "Na₂CO₃",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["C","Na","O"],
	exponent() {
		var SodiumCarbonate = new ExpantaNum(0)
		if(hasUpgrade("Na2O",12)) SodiumCarbonate = SodiumCarbonate.add(0.4)
		if(hasUpgrade("Na2O",13)) SodiumCarbonate = SodiumCarbonate.add(0.1)
		if(hasUpgrade("Na2O",14)) SodiumCarbonate = SodiumCarbonate.add(0.1)
		return new ExpantaNum(0).add(SodiumCarbonate)},
	effectDescription(){return `(SodiumCarbonate)(碳酸钠)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("HCl",25))&& player.Na2CO3.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		//if(hasUpgrade("HCl",24)) var a = new ExpantaNum(0.01)
			
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				//if (resettingLayer=="Na2CO3") keep.push("points","best","total","milestones","upgrades");
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据Na₂CO₃加成<br>原子获取<br>",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Na2CO3.points.add(1).pow(0)
							if (hasUpgrade('Na2CO3',11) && player.Na2CO3.points < 2500) eff = eff.mul((player.Na2CO3.points**0.65)+1);
							if (hasUpgrade('Na2CO3',11) && player.Na2CO3.points > 2500) eff = eff.mul((2500**0.65+(player.Na2CO3.points-2500)**0.15)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"有碳酸钠了！",
				description:"<br>你一次可以<br>获取更多Na₂CO₃",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"更多碳酸钠！",
				description:"<br>你一次可以获得比Na₂CO₃12还多的Na₂CO₃",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"超多碳酸钠！",
				description:"<br>你一次可以获得比Na₂CO₃13还多的Na₂CO₃",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("Na2CO3",14)},
				},
			}
})
addLayer("Na2O", { //合成元素之一 氧化钠 Na2O Sodium Oxide        //第三层    氧化钠         Na2O
    name: "Sodium Oxide", 
    symbol: "Na₂O",
    position: 3, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "skyblue",
	requires: new ExpantaNum(1e7),
    resource: "Na₂O",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["O","Na"],
	exponent() {
		var SodiumOxide = new ExpantaNum(0)
		if(hasUpgrade("Na2O",12)) SodiumOxide = SodiumOxide.add(0.4)
		if(hasUpgrade("Na2O",13)) SodiumOxide = SodiumOxide.add(0.1)
		if(hasUpgrade("Na2O",14)) SodiumOxide = SodiumOxide.add(0.1)
		return new ExpantaNum(0).add(SodiumOxide)},
	effectDescription(){return `(SodiumOxide)(氧化钠)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("Cl",14))&& player.Na2O.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",24)) var a = new ExpantaNum(0.01)
			
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据Na₂O加成<br>原子获取<br>",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Na2O.points.add(1).pow(0)
							if (hasUpgrade('Na2O',11) && player.Na2O.points < 2500) eff = eff.mul((player.Na2O.points**0.6)+1);
							if (hasUpgrade('Na2O',11) && player.Na2O.points > 2500) eff = eff.mul((2500**0.6+(player.Na2O.points-2500)**0.1)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"有氧化钠了！",
				description:"<br>你一次可以<br>获取更多Na₂O",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"更多氧化钠！",
				description:"<br>你一次可以获得比Na₂O12还多的Na₂O",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"超多氧化钠！",
				description:"<br>你一次可以获得比CO₂13还多的Na₂O",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("Na2O",14)},
				},
			}
})
addLayer("CO", { //合成元素之一 一氧化碳 CO Sodium Oxide        //第三层    一氧化碳         CO
    name: "Carbon Monoxide", 
    symbol: "CO",
    position: 0, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#4C4C4C",
	requires: new ExpantaNum(1e16),
    resource: "CO",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["C","O","H2O"],
	exponent() {
		var CarbonMonoxide = new ExpantaNum(0)
		if(hasUpgrade("CO",12)) CarbonMonoxide = CarbonMonoxide.add(0.4)
		if(hasUpgrade("CO",13)) CarbonMonoxide = CarbonMonoxide.add(0.1)
		if(hasUpgrade("CO",14)) CarbonMonoxide = CarbonMonoxide.add(0.1)
		return new ExpantaNum(0).add(CarbonMonoxide)},
	effectDescription(){return `(Carbon Monoxide)(一氧化碳)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("Na2CO3",15))&& player.Na2O.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		//if(hasUpgrade("HCl",24)) var a = new ExpantaNum(0.01)
			
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="NaOH") keep.push("best","total","milestones","upgrades");
				//if (resettingLayer=="H2CO3") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="Na2CO3") keep.push("points","best","total","milestones","upgrades");
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据CO加成<br>原子获取<br>",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.CO.points.add(1).pow(0)
							if (hasUpgrade('CO',11) && player.CO.points < 2500) eff = eff.mul((player.CO.points**0.6)+1);
							if (hasUpgrade('CO',11) && player.CO.points > 2500) eff = eff.mul((2500**0.6+(player.CO.points-2500)**0.1)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"真实的污染",
				description:"<br>你一次可以<br>获取更多CO",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"真·更多的污染",
				description:"<br>你一次可以获得比CO12还多的CO",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"真·超多污染！",
				description:"<br>你一次可以获得比CO13还多的CO",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("CO",14)},
				},
			}
})
addLayer("CO2", { //合成元素之一 二氧化碳CO2 Carbon dioxide       //第一层    二氧化碳       CO2
    name: "Carbon Dioxide", 
    symbol: "CO₂",
    position: 0, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#3C3C3C",
	requires: new ExpantaNum(1000),
    resource: "CO₂",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["O","C"],
	exponent() {
		var CarbonDioxide = new ExpantaNum(0)
		if(hasUpgrade("CO2",12)) CarbonDioxide = CarbonDioxide.add(0.4)
		if(hasUpgrade("CO2",13)) CarbonDioxide = CarbonDioxide.add(0.1)
		if(hasUpgrade("CO2",14)) CarbonDioxide = CarbonDioxide.add(0.1)
		return new ExpantaNum(0).add(CarbonDioxide)},
	effectDescription(){return `(Carbon Dioxide)(二氧化碳)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("H2O",15))&& player.CO2.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",21)) var a = new ExpantaNum(0.01)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据CO₂加成<br>原子获取<br>注：只重置三种基础元素点数",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.CO2.points.add(1).pow(0)
							if (hasUpgrade('CO2',11) && player.CO2.points < 2500) eff = eff.mul((player.CO2.points**0.6)+1);
							if (hasUpgrade('CO2',11) && player.CO2.points > 2500) eff = eff.mul((2500**0.6+(player.CO2.points-2500)**0.1)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"有污染了！",
				description:"<br>你一次可以<br>获取更多CO₂",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"更多污染！",
				description:"<br>你一次可以获得比CO₂11还多的CO₂",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"超多污染！",
				description:"<br>你一次可以获得比CO₂12还多的CO₂",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("CO2",14)},
				},
			}
})
addLayer("H2O", { //合成元素之一 水H2O Water                      //第一层    水             H2O
    name: "water", 
    symbol: "H₂O",
    position: 1, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#AAAAFF",
	requires: new ExpantaNum(100),
    resource: "H₂O",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["O","H"],
	exponent() {
		var water = new ExpantaNum(0)
		if(hasUpgrade("H2O",12)) water = water.add(0.4)
		if(hasUpgrade("H2O",13)) water = water.add(0.1)
		if(hasUpgrade("H2O",14)) water = water.add(0.1)
		return new ExpantaNum(0).add(water)},
	effectDescription(){return `(water)(水)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("C",14))&& player.H2O.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",15)) var a = new ExpantaNum(0.01)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据H₂O加成<br>原子获取<br>注：只重置三种基础元素点数",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.H2O.points.add(1).pow(0)
							if (hasUpgrade('H2O',11) && player.H2O.points < 2500) eff = eff.mul((player.H2O.points**0.6)+1);
							if (hasUpgrade('H2O',11) && player.H2O.points > 2500) eff = eff.mul((2500**0.6+(player.H2O.points-2500)**0.1)+1);
							//eff = softcap(eff,new ExpantaNum(10000),0.1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"有水了！",
				description:"作者不水！<br>你一次可以<br>获取更多H₂O",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"更多水！",
				description:"作者不水！<br>你一次可以获得比H₂O11还多的H₂O",
				cost:new ExpantaNum(5),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"超多水！",
				description:"作者不水！<br>你一次可以获得比H₂O12还多的H₂O",
				cost:new ExpantaNum(12),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(22),
				unlocked(){return hasUpgrade("H2O",14)},
				},
			}
})
addLayer("NaCl", { //合成元素之一 氯化钠NaCl Sodium Chloride      //第一层    氯化钠         NaCl
    name: "Sodium Chloride", 
    symbol: "NaCl",
    position: 2, 
    startData() { return {
        unlocked:false,
		points: new ExpantaNum(0),
    }},
    color: "#2828FF",
	requires: new ExpantaNum(1000000),
    resource: "NaCl",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	branches: ["H2O"],
	exponent() {
		var SodiumChloride = new ExpantaNum(0)
		if(hasUpgrade("NaCl",13)) SodiumChloride = SodiumChloride.add(0.4)
		if(hasUpgrade("NaCl",14)) SodiumChloride = SodiumChloride.add(0.1)
		if(hasUpgrade("NaCl",15)) SodiumChloride = SodiumChloride.add(0.1)
		return new ExpantaNum(0).add(SodiumChloride)},
	effectDescription(){return `(Sodium Chloride)(氯化钠)`},
		layerShown(){return player[this.layer].unlocked || (hasUpgrade("H2CO3",15))&& player.NaCl.points > 0},
//////////////////////////////////////////////////////////////////////////////
		passiveGeneration(){
		var a = new ExpantaNum(0)
		if(hasUpgrade("HCl",23)) var a = new ExpantaNum(0.01)
		
		return a   
         },
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];

				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取改点数的指数
        return new ExpantaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"终于！",
				description:"根据NaCl加成<br>原子获取<br>注：只重置三种基础元素点数",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.NaCl.points.add(1).pow(0)
							if (hasUpgrade('NaCl',11) && player.NaCl.points < 2500) eff = eff.mul((player.NaCl.points**0.6)+1);
							if (hasUpgrade('NaCl',11) && player.NaCl.points > 2500) eff = eff.mul((2500**0.6+(player.NaCl.points-2500)**0.1)+1);
						return eff
					},
				  effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"太棒了！",
				description:"<br>根据你的NaCl数量<br>获取更多Reaction<br>需求÷NaCl^0.5",
				cost:new ExpantaNum(3),
				//unlocked(){return hasUpgrade("C",11)},
				},
				13:{
				title:"有盐了！",
				description:"<br>你一次可以<br>获取更多NaCl",
				cost:new ExpantaNum(8),
				//unlocked(){return hasUpgrade("C",11)},
				},
				14:{
				title:"更多盐 ！",
				description:"<br>你一次可以获得比NaCl13还多的NaCl",
				cost:new ExpantaNum(16),
				//unlocked(){return hasUpgrade("C",11)},
				},
				15:{
				title:"超多盐！",
				description:"<br>你一次可以获得比CO₂14还多的NaCl",
				cost:new ExpantaNum(25),
				//unlocked(){return hasUpgrade("C",11)},
				},
				21:{
				title:"发现！",
				description:"你发现拥有的<br>两个元素可以<br>发生一些反应····",
				cost:new ExpantaNum(55),
				unlocked(){return hasUpgrade("NaCl",15)},
				},
			}
})
addLayer("R", { //side类型小节点(反应)“R” Reaction
    name: "Reaction", 
    symbol: "R",
    position: 0, 
    startData() { return {
        unlocked:true,
		points: new ExpantaNum(0),
    }},
    color: "write",
	requires:function(){
		let Rea = new ExpantaNum(100)
			if(player.H2O.points < 100000) Rea = Rea.mul(player.H2O.points**0.4+1)
			if(player.H2O.points > 99999) Rea = Rea.mul(player.H2O.points**0.3+1)
				if(player.CO2.points < 100000) Rea = Rea.mul(player.CO2.points**0.4+1)
				if(player.CO2.points > 99999) Rea = Rea.mul(player.CO2.points**0.3+1)
			if(player.NaCl.points < 100000) Rea = Rea.mul(player.NaCl.points**0.4+1)
			if(player.NaCl.points > 99999) Rea = Rea.mul(player.NaCl.points**0.3+1)
				if(player.H2CO3.points < 100000) Rea = Rea.mul(player.H2CO3.points**0.4+1)
				if(player.H2CO3.points > 99999) Rea = Rea.mul(player.H2CO3.points**0.3+1)
			if(player.NaCl.points < 100000) Rea = Rea.mul(player.NaCl.points**0.4+1)
			if(player.NaCl.points > 99999) Rea = Rea.mul(player.NaCl.points**0.3+1)
				if(player.Na2O.points < 100000) Rea = Rea.mul(player.Na2O.points**0.4+1)
				if(player.Na2O.points > 99999) Rea = Rea.mul(player.Na2O.points**0.3+1)
			if(player.NaOH.points < 100000) Rea = Rea.mul(player.NaOH.points**0.4+1)
			if(player.NaOH.points > 99999) Rea = Rea.mul(player.NaOH.points**0.3+1)
			if (hasUpgrade("NaCl",12))Rea = Rea.div(player.NaCl.points**0.45)
			if (hasUpgrade("HCl",11)) Rea = Rea.div(player.HCl.points**0.5)
		
		return Rea
	},
    resource: "Reaction",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	exponent:0,
	effectDescription(){return `(反应)<br>用你拥有的元素来合成新的元素！<br>获取反应的需求根据你拥有的元素变化！<br>`},
		//layerShown(){return player[this.layer].unlocked || (hasUpgrade("C",14))},
//////////////////////////////////////////////////////////////////////////////
/*
		passiveGeneration(){
		var a = new ExpantaNum(0)
		
		return a   
         },
*/		 
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
			if(hasUpgrade("HCl",11)) eff = eff.mul(player.HCl.points**0.5)
		
        return eff
    },
    gainExp() { //获取该点数的指数
        return new ExpantaNum(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
		clickables: {
			11: {
        display() {return "<h2>合成一个H₂O</h2><br>用2H和1O<br>和5个反应<br>合成一个H₂O<br>并解锁H₂O配方"},
		unlocked(){return hasUpgrade("C",14)|| player.H2O.points > 0},
		canClick() {
		var hh = player.H.points
		var oo = player.O.points
		var fy = player.R.points
		if ((hh >= 2)&&(oo >= 1)&&(fy >= 5))
		return true
		},
		onClick(){
		player.H.points = player.H.points.sub(2)
		player.O.points = player.O.points.sub(1)
		player.R.points = player.R.points.sub(5)
		player.H2O.points = player.H2O.points.add(1)
		},
		},
			12: {
        display() {return "<h2>合成一个CO₂</h2><br>用2O和1C<br>和10个反应<br>合成一个CO₂<br>并解锁CO₂配方"},
		unlocked(){return hasUpgrade("H2O",15)|| player.CO2.points > 0},
		canClick() {
		var CC = player.C.points
		var oo = player.O.points
		var fy = player.R.points
		if ((CC >= 1)&&(oo >= 2)&&(fy >= 10))
		return true
		},
		onClick(){
		player.C.points = player.C.points.sub(1)
		player.O.points = player.O.points.sub(2)
		player.R.points = player.R.points.sub(10)
		player.CO2.points = player.CO2.points.add(1)
		},
		},
			13: {
        display() {return "<h2>合成一个H₂CO₃</h2><br>用1CO₂和1H₂O<br>和20个反应<br>合成一个H₂CO₃<br>并解锁H₂CO₃配方"},
		unlocked(){return hasUpgrade("CO2",15)|| player.H2CO3.points > 0},
		canClick() {
		var fy = player.R.points 
		var CO = player.CO2.points
		var H2 = player.H2O.points
		if ((CO >= 1)&&(H2 >= 1)&&(fy >= 20))
		return true
		},
		onClick(){
		player.CO2.points = player.CO2.points.sub(1)
		player.H2O.points = player.H2O.points.sub(1)
		player.R.points = player.R.points.sub(20)
		player.H2CO3.points = player.H2CO3.points.add(1)
		},
		},
			14: {
        display() {return "<h2>合成一个NaCl</h2><br>用1e6原子和100H2O<br>和100个反应<br>合成一个NaCl<br>并解锁NaCl配方"},
		unlocked(){return hasUpgrade("H2CO3",15)|| player.NaCl.points > 0},
		canClick() {
		var fy = player.R.points 
		var H2 = player.H2O.points
		var yz = player.points
		if ((H2 >= 100)&&(fy >= 100)&&(yz >= 1e6))
		return true
		},
		onClick(){
		player.H2O.points = player.H2O.points.sub(100)
		player.R.points = player.R.points.sub(100)
		player.points = player.points.sub(1e6)
		player.NaCl.points = player.NaCl.points.add(1)
		},
		},
			15: {
        display() {return "<h2>分解一个NaCL</h2><br>用1e4C<br>和150个反应<br>获得一个Na<br>并解锁Na配方"},
		unlocked(){return hasUpgrade("NaCl",21)|| player.Na.points > 0},
		canClick() {
		var fy = player.R.points 
		var CC = player.C.points
		var NA = player.NaCl.points
		if ((CC >= 1e4)&&(fy >= 150)&&(NA >= 1))
		return true
		},
		onClick(){
		player.NaCl.points = player.NaCl.points.sub(1)
		player.R.points = player.R.points.sub(150)
		player.C.points = player.C.points.sub(1e4)
		player.Na.points = player.Na.points.add(1)
		},
		},
			21: {
        display() {return "<h2>分解一个NaCL</h2><br>用1e4C<br>和150个反应<br>获得一个Cl<br>并解锁Cl配方"},
		unlocked(){return hasUpgrade("Na",14)|| player.Cl.points > 0},
		canClick() {
		var fy = player.R.points 
		var CC = player.C.points
		var NA = player.NaCl.points
		if ((CC >= 1e4)&&(fy >= 150)&&(NA >= 1))
		return true
		},
		onClick(){
		player.NaCl.points = player.NaCl.points.sub(1)
		player.R.points = player.R.points.sub(150)
		player.C.points = player.C.points.sub(1e4)
		player.Cl.points = player.Cl.points.add(1)
		},
		},
			22: {
        display() {return "<h2>合成一个Na₂O</h2><br>用2Na和3O<br>和200个反应<br>合成一个Na₂O<br>并解锁Na₂O配方"},
		unlocked(){return hasUpgrade("Cl",14)|| player.Na2O.points > 0},
		canClick() {
		var fy = player.R.points 
		var NNA = player.Na.points
		var OO = player.O.points
		if ((NNA >= 2)&&(fy >= 200)&&(OO >= 3))
		return true
		},
		onClick(){
		player.Na.points = player.Na.points.sub(2)
		player.R.points = player.R.points.sub(200)
		player.O.points = player.O.points.sub(3)
		player.Na2O.points = player.Na2O.points.add(1)
		},
		},
			23: {
        display() {return "<h2>合成一个NaOH</h2><br>用2NaCl和1H2O<br>和500个反应<br>合成一个NaOH<br>并解锁NaOH配方"},
		unlocked(){return hasUpgrade("Na2O",14)|| player.NaOH.points > 0},
		canClick() {
		var fy = player.R.points 
		var NAC = player.NaCl.points
		var H2 = player.H2O.points
		if ((NAC >= 1)&&(fy >= 500)&&(H2 >= 1))
		return true
		},
		onClick(){
		player.NaCl.points = player.NaCl.points.sub(1)
		player.R.points = player.R.points.sub(500)
		player.H2O.points = player.H2O.points.sub(1)
		player.NaOH.points = player.NaOH.points.add(1)
		},
		},
			24: {
        display() {return "<h2>合成一个HCl</h2><br>用2H2Cl<br>和750个反应<br>合成一个HCl<br>并解锁HCl配方"},
		unlocked(){return hasUpgrade("NaOH",15)|| player.HCl.points > 0},
		canClick() {
		var fy = player.R.points 
		var HH = player.H.points
		var CCL = player.Cl.points
		if ((HH >= 2)&&(fy >= 750)&&(CCL >= 2))
		return true
		},
		onClick(){
		player.H.points = player.H.points.sub(2)
		player.R.points = player.R.points.sub(750)
		player.Cl.points = player.Cl.points.sub(2)
		player.HCl.points = player.HCl.points.add(1)
		},
		},
			25: {
        display() {return "<h2>合成一个Na₂CO₃</h2><br>用4Na2C2O<br>和2000个反应<br>合成一个Na₂CO₃<br>并解锁Na₂CO₃配方"},
		unlocked(){return hasUpgrade("HCl",25)|| player.Na2CO3.points > 0},
		canClick() {
		var fy = player.R.points 
		var NNA = player.Na.points
		var CC = player.C.points
		var OO = player.O.points
		if ((CC >= 2)&&(fy >= 2000)&&(NNA >= 4)&&(OO >= 2))
		return true
		},
		onClick(){
		player.O.points = player.O.points.sub(2)
		player.R.points = player.R.points.sub(2000)
		player.C.points = player.C.points.sub(2)
		player.Na.points = player.Na.points.sub(4)
		player.Na2CO3.points = player.Na2CO3.points.add(1)
		},
		},
		31: {
        display() {return "<h2>燃烧不充分<br>生成了一些CO</h2><br>用1e10C1e11O1e10H₂O<br>和10000个反应<br>反应一些CO<br>并解锁CO配方"},
		unlocked(){return hasUpgrade("Na2CO3",15)|| player.CO.points > 0},
		canClick() {
		var fy = player.R.points 
		var water = player.H2O.points
		var CC = player.C.points
		var OO = player.O.points
		if ((CC >= 1e100)&&(fy >= 10000)&&(water >= 1e10)&&(OO >= 1e11))
		return true
		},
		onClick(){
		player.O.points = player.O.points.sub(1e11)
		player.R.points = player.R.points.sub(10000)
		player.C.points = player.C.points.sub(1e10)
		player.H2O.points = player.H2O.points.sub(1e10)
		player.CO.points = player.CO.points.add(1)
		},
		},
		
		},
})
/*
addLayer("1", { //side类型小节点(反应)“R” Reaction
    name: "1", 
    symbol: "✦",
    position: -1, 
    startData() { return {
        unlocked:true,
		points: new ExpantaNum(0),
    }},
    color: "write",
	requires:function(){
		let Rea = new ExpantaNum(1)
		return Rea
	},
    resource: "Reaction",
	baseResource: "原子",
	baseAmount() {return player.points}, 
    type: "normal",
	exponent:0,
	effectDescription(){return `(反应)<br>用你拥有的元素来合成新的元素！<br>获取反应的需求根据你拥有的元素变化！<br>`},
		//layerShown(){return player[this.layer].unlocked || (hasUpgrade("C",14))},
//////////////////////////////////////////////////////////////////////////////

		passiveGeneration(){
		var a = new ExpantaNum(0)
		
		return a   
         },
		 
//////////////////////////////////////////////////////////////////////////////
doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
				// var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
			//if(t) player.T.milestones = [0,1,6];		
		}
		},
///////////////////////////////////////////////////////////////////////////////
    gainMult() { //获取该点数的加成
        var eff = player[this.layer].points.add(1).pow(0) 
		
        return eff
    },
    gainExp() { //获取该点数的指数
        return new ExpantaNum(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

})
*/
/*
*/