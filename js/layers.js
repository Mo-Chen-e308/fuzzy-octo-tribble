addLayer("T", { //次于Q节点 1层
    name: "TAT", 
    symbol: "T", 
    position: 2, 
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
	effectDescription(){return `(TAT)`},
    gainMult() {
        //mult = new ExpantaNum(1)
			var eff = player[this.layer].points.add(1).pow(0) 
				var b = player.Q.points
				var a = player.T.points
					if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1);
					if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
					
			return eff
        //return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	hotkeys: [
        {key: "t", description: "t: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("Q",23))},
	
//////////////////////////////////////////////////////////////////////
    //passiveGeneration(){
       //if(hasUpgrade("T",)) return 1
        //if(hasMilestone("a",21)) return 1
       //if(hasMilestone("a",20) || (hasMilestone("a",33) && player.a.upgrades.length > 0)) return 0.1
       // return 0
   // },
   ////////////////////////////////////////////////////////////
   	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var b = new ExpantaNum(0)
        if(hasUpgrade("W",15)) var b = new ExpantaNum(0.01)//return 0.01
		if(hasUpgrade("W",22)) var b = new ExpantaNum(0.05)//return 0.05
		//if(hasMilestone("T",5)) return 0.05
       
        return b
    },
   //////////////////////////////////////////////
	doReset(resettingLayer) {
        let keep = [];
			//if (hasMilestone("T", 1)) keep.push("upgrades");
				//if (resettingLayer=="T") keep.push("best","total","milestones","upgrades");
				//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					  var t = hasMilestone('T',6)
					//  var d = hasMilestone('W',4)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
		if(t) player.T.milestones = [0,1,6]};
	//	if(e) player.T.milestones = [0,1,2,6];
		
		
		},
		
	//////////////////////////////////////////////////////////////////////////////////
			upgrades:{
				11:{
				title:"加成？",
				description:"T点倍增<br>QwQ获取",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
						var a = player.T.points
							if (hasUpgrade('T',11)) eff = eff.mul((a**0.3)+1)
							if (hasUpgrade('T',12)) eff = eff.mul((a**0.075)+1)
							if (hasUpgrade('T',13)) eff = eff.mul((a**0.185)+1)
							if (hasUpgrade('T',15)) eff = eff.mul((a**0.215)+1)
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				12:{
				title:"真的？",
				description:"改善T11的加成",
				cost:new ExpantaNum(3),
				unlocked(){return hasUpgrade("T",11)},
			       },
				13:{
				title:"好东西？",
				description:"再次改善<br>T11的加成",
				unlocked(){return hasUpgrade("T",12)},
				cost:new ExpantaNum(9),
			       },
				14:{
				title:"这有用吗？",
				description:"根据T点<br>倍增T点获得",
				cost:new ExpantaNum(27),
				unlocked(){return hasUpgrade("T",13)},
				effect(){
						var eff = player.T.points.pow(0)
							var b = player.Q.points
							var a = player.T.points
							if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1);
							if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
						return eff
					},
				   effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
			       },
				15:{
				title:"这是什么？",
				description:"改善T11的加成",
				cost:new ExpantaNum(81),
				unlocked(){return hasUpgrade("T",14)},
			       },
				21:{
				title:"这个好！",
				description:"每秒获得0.5%<br>的可以重置的Q点",
				cost:new ExpantaNum(243),
				unlocked(){return hasUpgrade("T",15)},
			       },
				22:{
				title:"这个也好！",
				description:"每秒获得1.5%<br>的可以重置的Q点",
				cost:new ExpantaNum(486),
				unlocked(){return hasUpgrade("T",21)},
					},
				23:{
				title:"这个还好！",
				description:"改善T14的效果",
				cost:new ExpantaNum(972),
				unlocked(){return hasUpgrade("T",22)},
			       },
				31:{
				title:"这个更好！",
				description:"每秒.....<br>别想了,这是开W节点的",
				cost:new ExpantaNum(2916),
				unlocked(){return hasUpgrade("T",23)},
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
		3: {
			requirementDescription: "25 T点",
			effectDescription: "保留Q节点全部升级",
		done() {
			return player.T.points.gte(25)},
				},
		4: {
			requirementDescription: "50 T点",
			effectDescription: "重置时以10Q点开始",
		done() {
			return player.T.points.gte(50)},
				},
		5: {
			requirementDescription: "1000 T点",
			effectDescription: "每秒获得5%的Q点",
			unlocked(){return hasUpgrade("T",22)},
		done() {
			return player.T.points.gte(1000)},
				},
		6: {
			requirementDescription: "8000 T点",
			effectDescription: "重置时保留T里程碑 1 2<br>也保留本里程碑",
		done() {
			return player.T.points.gte(8000)},
				},
		//7: {
		//	requirementDescription: "8000 T点",
		//	effectDescription: "重置时保留T里程碑 1 2<br>也保留本里程碑",
		//	unlocked(){return hasUpgrade("T",00)},
		//done() {
		//	return player.T.points.gte(1e999999999999999999999999999)},
		//		},
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
addLayer("W", { //次于T节点 1层(挑战层)(？
    name: "WwW", 
    symbol: "W", 
    position: 0, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#97CBFF",
    requires: new ExpantaNum(10000),
    resource: "W点", 
    baseResource: "Q点", 
    baseAmount() {return player.Q.points}, 
    type: "normal", 
    exponent: 0.4, 
	branches: ["Q"],
	effectDescription(){return `(WwW)`},
    gainMult() {
        //mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
				var b = player.Q.points
				var a = player.T.points
				var c = player.W.points
					if (hasUpgrade('W',14)) eff = eff.mul((c**0.15)+1);
					//if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
					
			return eff
        //return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	hotkeys: [
        {key: "w", description: "w: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("T",31))},
//////////////////////////////////////////////////////////////////////////////////////////
/*		doReset(resettingLayer) {
        let keep = [];
			//if (hasMilestone("T", 1)) keep.push("upgrades");
				//if (resettingLayer=="W") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					  //var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            //layerDataReset(this.layer,keep)
			player.T.points = new ExpantaNum(2)
			player.T.upgrades = [11,12,13]
			player.T.milestones = [0,1,2,3,4,6]

			};
		},
*/
///////////////////////////////////////////////////////////////////////////////////////////////
	   doReset(resettingLayer) {
        let keep = [];
			//if (hasMilestone("T", 1)) keep.push("upgrades");
				//if (resettingLayer=="T") keep.push("best","total","milestones","upgrades");
				//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var a = hasMilestone('W',1)
					var b = hasMilestone('W',2)
					//var c = hasMilestone('W',3)
					//var d = hasMilestone('W',4)
					//var e = hasMilestone('W',5)
					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
					var c = hasMilestone('W',3)
					var d = hasMilestone('W',4)
					var e = hasMilestone('W',5)
			if(e) player.W.milestones = [0,1,5];
			if(e) player.T.milestones = [0,1,2,6];
		if(a) player.T.upgrades = [11];
		if(b) player.T.upgrades = [11,12,13];
		if(c) player.T.upgrades = [11,12,13,14,15];
		if(d) player.T.upgrades = [11,12,13,14,15,21,22,23];
		//if(b) player.Q.upgrades = [11,12,13,14,15];
		//if(c) player.Q.upgrades = [11,12,13,14,15,21,22,23];
		//if(d) player.Q.points = new ExpantaNum(10)
																};
		
		
		},
		
		  ////////////////////////////////////////////////////////////
   	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var c = new ExpantaNum(0)
        if(hasUpgrade("W",23)) var c = new ExpantaNum(0.01)//return 0.01
		//if(hasUpgrade("W",22)) return 0.05
		//if(hasMilestone("T",5)) return 0.05
       
        return c
    },
   //////////////////////////////////////////////
		///////////////////////////////////////////////////////////////
		upgrades:{
				11:{
				title:"什么？",
				description:"W点倍增<br>QwQ获取",
				cost:new ExpantaNum(1),
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
						var c = player.W.points
							if (hasUpgrade('W',11)) eff = eff.mul((c**0.5)+1)
							if (hasUpgrade('W',12)) eff = eff.mul((c**0.275)+1)
							if (hasUpgrade('W',13)) eff = eff.mul((c**0.385)+1)
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"重复？",
				description:"改善W11<br>对QwQ的加成",
				cost:new ExpantaNum(5),
				unlocked(){return hasUpgrade("W",11)},
					},
				13:{
				title:"卧槽？",
				description:"再次改善W11<br>对QwQ的加成",
				cost:new ExpantaNum(64),
				unlocked(){return hasUpgrade("W",12)},
					},
				14:{
				title:"卧槽！",
				description:"根据W点<br>倍增W点获取",
				cost:new ExpantaNum(144),
				unlocked(){return hasUpgrade("W",13)},
				effect(){
						let eff = player.Q.points.add(1).pow(0) 
							var c = player.W.points
								if (hasUpgrade('W',14)) eff = eff.mul((c**0.15)+1)
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
					},
				15:{
				title:"重复！",
				description:"每秒获得1%的<br>可以重置的T点",
				cost:new ExpantaNum(800),
				unlocked(){return hasUpgrade("W",14)},
					},
				21:{
				title:"还真是！",
				description:"每秒获得10%<br>可重置的Q点",
				cost:new ExpantaNum(2500),
				unlocked(){return hasUpgrade("W",15)},
					},
				22:{
				title:"就这？",
				description:"每秒获得5%的<br>可以重置的T点",
				cost:new ExpantaNum(6000),
				unlocked(){return hasUpgrade("W",21)},
					},
				23:{
				title:"没错！",
				description:"每秒获得1%的<br>可以重置的W点",
				cost:new ExpantaNum(10000),
				unlocked(){return hasUpgrade("W",22)},
					},
				31:{
				title:"就这！",
				description:"大幅提升Q11加成<br>是不是快把Q11忘记了",
				cost:new ExpantaNum(25000),
				unlocked(){return hasUpgrade("W",23)},
					},
				
	},
	///////////////////////////////////////////////////////////////
		milestones: {
		0: {
			requirementDescription: "1 W点",
			effectDescription: "您获得了第一个Q点",
			done() {
			return player.W.points.gte(1)},
				},
		1: {
			requirementDescription: "100 W点",
			effectDescription: "重置时保留T11升级",
			done() {
			return player.W.points.gte(100)},
				},
		2: {
			requirementDescription: "10000 W点",
			effectDescription: "重置时保留T12 T13升级",
			done() {
			return player.W.points.gte(10000)},
				},
		3: {
			requirementDescription: "10000000 W点",
			effectDescription: "重置时保留T节点第一排升级",
			done() {
			return player.W.points.gte(10000000)},
				},
		4: {
			requirementDescription: "1e9 W点",
			effectDescription: "重置时保留T节点第二排升级",
			done() {
			return player.W.points.gte(1e9)},
				},
		5: {
			requirementDescription: "1e12 W点",
			effectDescription: "重置时保留W里程碑1 2 和T里程碑3<br>并且保留此里程碑",
			done() {
			return player.W.points.gte(1e12)},
				},
			
			
					},
		
})
addLayer("a", { //次于T\W节点 2层
    name: "awa", 
    symbol: "a", 
    position: 0, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#93FF93",
	requires: new ExpantaNum(0),
    resource: "a点", 
	baseResource: "a点", 
	baseAmount() {return player.a.points}, 
    type: "normal", 
	exponent: NaN, 
	branches: ["W","T"],
	effectDescription(){return `(awa)<br>注：为了不触发bug 请不要获取a点(无任何用处)<br>需要做挑
	战时点获得a点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	hotkeys: [
        {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("T",31)&&(hasUpgrade("W",31)))},
//////////////////////////////////////////////////////////////////////////////////////////
/*		doReset(resettingLayer) {
        let keep = [];
			//if (hasMilestone("T", 1)) keep.push("upgrades");
				//if (resettingLayer=="W") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					  //var t = hasMilestone('T',6)
        if (layers[resettingLayer].row > this.row) {
            //layerDataReset(this.layer,keep)
			player.T.points = new ExpantaNum(2)
			player.T.upgrades = [11,12,13]
			player.T.milestones = [0,1,2,3,4,6]

			};
		},
*/
///////////////////////////////////////////////////////////////////////////////////////////////
	/*   doReset(resettingLayer) {
        let keep = [];
			//if (hasMilestone("T", 1)) keep.push("upgrades");
				//if (resettingLayer=="T") keep.push("best","total","milestones","upgrades");
				//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var a = hasMilestone('T',6)
					//var b = hasMilestone('T',2)
					//var c = hasMilestone('T',3)
					//var d = hasMilestone('T',4)
					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
		if(a) player.T.upgrades = [0,1,6];
		//if(b) player.Q.upgrades = [11,12,13,14,15];
		//if(c) player.Q.upgrades = [11,12,13,14,15,21,22,23];
		//if(d) player.Q.points = new ExpantaNum(10)
																};
		
		
		},
		*/
		///////////////////////////////////////////////////////////////
		challenges: {
		11: {
			name: "珍惜你的QwQ点数！",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其35%<br>注：重置所有 里程碑/升级保留除外",
			//unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.T.points.gte(1e6) && player.W.points.gte(1e5)},
			goalDescription:"1e6(1000000) T点 1e5(100000) W点",
			rewardDescription: "无<h6>用来开启ac12<h6>点数获取^1.5",
			},
					},
		
		
})
addLayer("Q", { //主节点    0层
    name: "QwQ", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized节点名字
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
    }},
    color: "#BBFFFF",
	
	//branches(){“QwQ”}
	
	requires: new ExpantaNum(10),
    resource: "Q点", // Name of prestige currency
	baseResource: "QwQ",
	baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	exponent: 0.55,
	effectDescription(){return `(QwQ)`},
			//doReset(resettingLayer) {
			//let keep = [];
			//if (resettingLayer=="s") keep.push("points","best","total","milestones","upgrades");
			//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
			//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
			//if (layers[resettingLayer].row > this.row) layerDataReset("$", keep)
			//						},
		 //if(hasMilestone("a",21)) return 1  1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
       //if(hasMilestone("a",20) || (hasMilestone("a",33) && player.a.upgrades.length > 0)) return 0.1
	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var a = new ExpantaNum(0)
        if(hasUpgrade("T",21)) var a = new ExpantaNum(0.005)//return 0.005
		if(hasUpgrade("T",22)) var a = new ExpantaNum(0.015)//return 0.015
		if(hasMilestone("T",5)) var a = new ExpantaNum(0.05)//return 0.05
		if(hasUpgrade("W",21)) var a = new ExpantaNum(0.1)//return 0.1
		return a
       
        
    },
	/////////////////////////////////////////////////
	//softcap:new ExpantaNum(1), 
    //softcapPower:new ExpantaNum(0.5), 
	////////////////////////////////////////////////////////////////////////////
    gainMult() { // Calculate the multiplier for main currency from bonuses
        //mult = new ExpantaNum(1)
			var eff = player[this.layer].points.add(1).pow(0) 
			var b = player.Q.points
			var a = player.T.points
				if (hasUpgrade('Q',14)) eff = eff.mul((b**0.135)+1);
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
			//if (hasMilestone("T",1)) keep.push("Milestone");
				//if (resettingLayer=="W") keep.push("best","total","milestones","upgrades");
				//if (resettingLayer=="a") keep.push("points","best","total","milestones","upgrades");
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var aa = hasMilestone('Q',0)
					var a = hasMilestone('T',1)
					var b = hasMilestone('T',2)
					var c = hasMilestone('T',3)
					var d = hasMilestone('T',4)

					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
		if(aa) player.Q.milestones = [0];
		if(a) player.Q.upgrades = [11,12,13];
		if(b) player.Q.upgrades = [11,12,13,14,15];
		if(c) player.Q.upgrades = [11,12,13,14,15,21,22,23];
		if(d) player.Q.points = new ExpantaNum(10)};
		//////////////////////////////////////////////////
            //layerDataReset(this.layer, keep)
		//if(aa) player.Q.milestones = [0];
													
		
		
		},
		
			//if (hasUpgrade('Q',11)) player.Q.upgrades = [11]
			
            //player.Q.upgrades = [11,12,13]
			//var c = player.Q.points = new ExpantaNum(2)
			//if (layers[resettingLayer].row = this.row) {
          //  layerDataReset(this.layer, keep)
			//if(c) player.Q.points = new ExpantaNum(1)};
        
		
		
    
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
							if (hasUpgrade('Q',12)) eff = eff.mul((b**0.085)+1)
							if (hasUpgrade('Q',13)) eff = eff.mul((b**0.09)+1)
							if (hasUpgrade('Q',15)) eff = eff.mul((b**0.095)+1)
							if (hasUpgrade('Q',21)) eff = eff.mul((b**0.1)+1)
							if (hasUpgrade('W',31)) eff = eff.mul((b**0.5)+1)


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
							if (hasUpgrade('Q',14)) eff = eff.mul((b**0.135)+1);
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
							if (hasMilestone('Q',0)) eff = eff.mul((b**0.001)+0.001)
			return eff},
		done() {
			return player.Q.points.gte(1)},
			
			
			},
	},
	 hotkeys: [
        {key: "q", description: "q: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
		////
})
/*





























*/