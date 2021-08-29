addLayer("T", { //次于Q节点 1层
    name: "TAT", 
    symbol: "T", 
    position: 0, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#d3a4ff",
    requires: new ExpantaNum(1000),//1000 
    resource: "T点", 
    baseResource: "Q点", 
    baseAmount() {return player.Q.points}, 
    type: "normal", 
    exponent: 0.5, 
	branches: ["Q"],
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	hotkeys: [
        {key: "T", description: "T: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("Q",23))},
	
//////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"加成！",
				description:"T点倍增<br>QwQ获取",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
						var a = player.T.points
							if (hasUpgrade('T',11)) eff = eff = eff.mul(a**0.3)
							if (hasUpgrade('T',12)) eff = eff = eff.mul(a**0.075)
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				12:{
				title:"加成！",
				description:"改善T11的加成",
				cost:new ExpantaNum(3),
			       },
			},

////////////////////////////////////////////////////////
	milestones: {
		0: {
			requirementDescription: "1 T点",
			effectDescription: "您获得了第一个T点",
		done() {
			return player.T.points.gte(1)},
			
			
			},
		1: {
			requirementDescription: "2 T点",
			effectDescription: "保留Q11~Q13升级",
		done() {
			return player.T.points.gte(2)},
			
			
			},
		2: {
			requirementDescription: "6 T点",
			effectDescription: "保留Q节点第一排升级",
		done() {
			return player.T.points.gte(6)},
				},
	},
				/*challenges: {
		11: {
			name: "珍惜你的QwQ点数！",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其35%<br>注：重置Q点保留升级",
			unlocked() {return hasUpgrade("T",12)},
			canComplete: function() {return player.Q.points.gte(150)},//150
			
			
				onEnter(){
				player[this.layer].points = new ExpantaNum(0)
								},
			goalDescription:"150 Q点",
			rewardDescription: "提升Q11加成0.2265(Q11)→0.3375(Q12)→0.4485(Q13)→<br>→0.4695(Q15)→0.4805(Q22)→0.5(qc11)",
			},
					},
					*/
})
addLayer("W", { //次于T节点 2层
    name: "WaW", 
    symbol: "W", 
    position: 0, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#97CBFF",
    requires: new ExpantaNum(100000),
    resource: "W点", 
    baseResource: "T点", 
    baseAmount() {return player.T.points}, 
    type: "normal", 
    exponent: 0.5, 
	branches: ["Q"],
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	hotkeys: [
        {key: "W", description: "W: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("T",23))},
})
addLayer("Q", { //主节点    0层
    name: "QwQ", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized节点名字
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#cceee5",
	
	//branches(){“QwQ”}
	
	requires: new ExpantaNum(10),
    resource: "Q点", // Name of prestige currency
	baseResource: "QwQ",
	baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.55,
			//doReset(resettingLayer) {
			//let keep = [];
			//if (resettingLayer=="s") keep.push("points","best","total","milestones","upgrades");
			//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
			//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
			//if (layers[resettingLayer].row > this.row) layerDataReset("$", keep)
			//						},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        //mult = new ExpantaNum(1)
			var eff = player[this.layer].points.pow(0)
			var b = player.Q.points
			var a = player.T.points
				if (hasUpgrade('Q',14)) eff = eff = eff.mul(b**0.135);
				//if (hasUpgrade('T',11)) eff = eff = eff.mul(b^0.025)
				//if (hasUpgrade('T',12)) eff = eff = eff.mul(b^0.035)
				
				
				
			return eff
        //return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
	/*
    //layerShown(){return player.v.total.gte(1)},
    //clickables: {
        //part1
        //11: {
        //    canClick(){return true},
        //    display() {return `Update the game<br />You've updated ${Utimeformat(player.u.updtime)}.<br /><br />Now you are doing:${updtxt[player.u.doing]}`},
        //    onClick(){player.u.doing = "upd"}
        //},
    //},
    upgrades: {
        11: {
            description: "next update is in 5 hours。",
            cost(){return new OmegaNum(5)},
            unlocked(){return true},
            currencyDisplayName:"hours of update time"
        },
    },
    challenges: {
        11: {
            name: "AntiLooperrrr",
            challengeDescription: "因为挑战出了bug，devU13被禁用了。刷新后的第一帧时间计数x100。",
            canComplete(){return player.points.gte(1e10)},
            goalDescription(){return format(ExpantaNum(1e10))+"点数"},
            rewardDisplay(){return `你永远保留dev11的效果，同时“刷新后的第一帧时间计数x100。”被保留。`},
            unlocked(){return hasUpgrade("dev",15)}
        },
    },
    //inportant!!!
    //update(diff){
    //}
	//let gain = new ExpantaNum(0.5)
	//if(hasUpqrade('Q',11)) gain  = new ExpantaNum(0.6)
	//return gain */
doReset(resettingLayer) {
        let keep = [];
			//if (hasMilestone("T", 1)) keep.push("upgrades");
				//if (resettingLayer=="T") keep.push("best","total","milestones","upgrades");
				//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var a = hasMilestone('T',1)
					var b = hasMilestone('T',2)
					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
		if(a) player.Q.upgrades = [11,12,13];
		if(b) player.Q.upgrades = [11,12,13,14,15]};
			//if (hasUpgrade('Q',11)) player.Q.upgrades = [11]
			
            //player.Q.upgrades = [11,12,13]
			//var c = player.Q.points = new ExpantaNum(2)
			//if (layers[resettingLayer].row = this.row) {
          //  layerDataReset(this.layer, keep)
			//if(c) player.Q.points = new ExpantaNum(1)};
        
		
		
    },
///////////////////////////////////////////////////////////////////////
	upgrades:{
				11:{
				title:"加成？",
				description:"根据Q点<br>加成QwQ获取",
				cost:new ExpantaNum(3),
				
					effect(){
						let eff = player[this.layer].points.add(1).pow(0) 
						
							
							//if (hasUpgrade('Q',11)&&(player.Q.points == new ExpantaNum(0))) player.Q.points = new ExpantaNum(1)
						var b = player.Q.points	
		
							if (hasUpgrade('Q',11)) eff = eff.mul((b**0.3)+1)
							if (hasUpgrade('Q',12)) eff = eff.mul((b**0.085)+0.0012)
							if (hasUpgrade('Q',13)) eff = eff.mul((b**0.09)+0.0013)
							if (hasUpgrade('Q',15)) eff = eff.mul((b**0.095)+0.0014)
							if (hasUpgrade('Q',21)) eff = eff.mul((b**0.1)+0.0015)


							//if (hasUpgrade('T',11)) eff = player[this.layer].points.add(1).pow(0.2);
							//if (hasUpgrade('T',12)) eff = player[this.layer].points.add(1).pow(0.3);
							
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"加成！",
				description:"改善Q11的加成<br>注：这是有加成的<br>直接在Q11上显示",
				cost:new ExpantaNum(12),
				unlocked(){return hasUpgrade("Q",11)},
				},
				13:{
				title:"起飞了？",
				description:"再改善Q11的加成<br>注：同Q12",
				cost:new ExpantaNum(36),
				unlocked(){return hasUpgrade("Q",12)},
			       },
				14:{
				title:"起飞了！",
				description:"根据Q点倍增<br>获取Q点的数量<br>(效果可以看成÷)",
				cost:new ExpantaNum(72),//96
				unlocked(){return hasUpgrade("Q",13)},
					effect(){
						var eff = player.points.pow(0)
							var b = player.Q.points
							if (hasUpgrade('Q',14)) eff = eff.mul((b**0.135)+0.01);
						return eff
							},
						effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				15:{
				title:"芜湖~",
				description:"没什么用<br>用来开启Q21",
				cost:new ExpantaNum(100),
				unlocked(){return hasUpgrade("Q",14)},
			       },
				21:{
				title:"芜湖~~",
				description:"再次提升！<br>Q11的效果",
				cost:new ExpantaNum(200),
				unlocked(){return hasUpgrade("Q",15)},
			       },
				22:{
				title:"挑战？",
				description:"解锁一个挑战",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",21)},
			       },
				23:{
				title:"开始！",
				description:"解锁一个<br>新的节点",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",22)},
			       },
/////////////////////////////////////////////////////////////////////////////////////
				24:{
				title:"24",
				description:"1",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",233)},
			       },
				25:{
				title:"开始！",
				description:"解锁一个新的节点<br>Q15没用不可能的<br>微小改善Q11",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",244)},
			       },
				31:{
				title:"<h1>测试",
				description:"",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",00)},
			       },
			},
//////////////////////////////////////////////////////////////////////////////////////
			//可重复购买项
	clickables:{
		11: {
			display() {return "<h3>购买</h3><br>极小的加成<br>QwQ的获取"},
			unlocked(){return hasUpgrade("Q",00)},
			
			},
				},
/////////////////////////////////////////////////////////////////////////////////////
			//挑战
/*
	challenges: {
		11: {
			name: "珍惜你的QwQ点数！",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其35%<br>注：重置Q点保留升级",
			unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.Q.points.gte(150)},//150
			
			
				onEnter(){
				player[this.layer].points = new ExpantaNum(0)
								},
			goalDescription:"150 Q点",
			rewardDescription: "提升Q11加成0.2265(Q11)→0.3375(Q12)→0.4485(Q13)→<br>→0.4695(Q15)→0.4805(Q22)→0.5(qc11)",
			},
					},
*/
//////////////////////////////////////////////////////////////////////////////////////
			//里程碑
	milestones: {
		0: {
			requirementDescription: "1 Q点",
			effectDescription: "您获得了第一个Q点",
			effect(){
						var eff = player.points.pow(0)
							var b = player.Q.points
							if (hasMilestone('Q',0)) eff = eff = eff.mul((b**0.001)+0.001)
			return eff},
		done() {
			return player.Q.points.gte(1)},
			
			
			},
	},
	 hotkeys: [
        {key: "Q", description: "Q: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
		////
})
/*





























*/