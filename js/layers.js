addLayer("T", { //次于Q节点 1层
    name: "TAT", 
    symbol: "T", 
    position: 3, 
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
				var d = player.Tb.points
					if(!inChallenge('ab',21)){
						if (!inChallenge('ab',11)){
							if(!inChallenge('Tb',11)){
					if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1);
					if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
					if (!inChallenge('ab',12)){
					if (hasUpgrade('Tb',12)) eff = eff.mul((d**0.25)+1)};
					if (hasChallenge('a',12)) eff = eff.add(1).pow(1.2)}}};
					
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
	

   ////////////////////////////////////////////////////////////
   	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var b = new ExpantaNum(0)
			  if(!inChallenge('ab',21)){
        if(hasUpgrade("W",15)) var b = new ExpantaNum(0.01)//return 0.01
		if(hasUpgrade("W",22)) var b = new ExpantaNum(0.05)//return 0.05
		if (!inChallenge('ab',12)){
		if(hasUpgrade("Tb",13)) var b = new ExpantaNum(0.1)//return 0.1
		if(hasUpgrade("Tb",22)) var b = new ExpantaNum(0.2)//return 0.2
		if(hasUpgrade("Wb",13)) var b = new ExpantaNum(0.4)//return 0.4
			  if(hasUpgrade("Wb",22)) var b = new ExpantaNum(0.6)}}//return 0.6
		//if(hasMilestone("T",5)) return 0.05
       
        return b
    },
   //////////////////////////////////////////////
	doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					  var t = hasMilestone('T',6)
					  var r = hasMilestone('Tb',1)
					  var k = hasUpgrade('Tb',31)
					//  var d = hasMilestone('W',4)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)
		if(t) player.T.milestones = [0,1,6];
		if(r) player.T.milestones = [0,1,2,3,4,5,6];
		if(k) player.T.upgrades = [11,12,13,14,15]};		
		
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
						if(!inChallenge('ab',21)){
						if (!inChallenge('ab',11)){
						  if(!inChallenge('Tb',11)){
							if (hasUpgrade('T',11)) eff = eff.mul((a**0.3)+1)
							if (hasUpgrade('T',12)) eff = eff.mul((a**0.075)+1)
							if (hasUpgrade('T',13)) eff = eff.mul((a**0.185)+1)
							if (hasUpgrade('T',15)) eff = eff.mul((a**0.215)+1)
						}}}
							
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
							if(!inChallenge('ab',21)){
							if(!inChallenge('Tb',11)){
							if (hasUpgrade('T',14)) eff = eff.mul((a**0.15)+1);
							if (hasUpgrade('T',23)) eff = eff.mul((a**0.2)+1);
							}}
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

	},

})
addLayer("W", { //次于T节点 1层
    name: "WwW", 
    symbol: "W", 
    position: 1, 
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
				var y = player.Wb.points
				if(!inChallenge('ab',21)){
					if (!inChallenge('ab',11)){
						if (!inChallenge('Wb',11)){
					if (hasUpgrade('W',14)) eff = eff.mul((c**0.15)+1);
					if (!inChallenge('ab',12)){
					if (hasUpgrade('Wb',12)) eff = eff.mul((y**0.35)+1)};
					if (hasChallenge('a',21)) eff = eff.add(1).pow(1.2);
				}}}
					
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

///////////////////////////////////////////////////////////////////////////////////////////////
	   doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var a = hasMilestone('W',1)
					var b = hasMilestone('W',2)
					var c = hasMilestone('W',3)
					var d = hasMilestone('W',4)
					var e = hasMilestone('W',5)
					var u = hasMilestone('Tb',3)
					var o = hasMilestone('Wb',1)
					var oo = hasMilestone('Wb',3)
				    var k = hasUpgrade('Tb',31)
					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
					var c = hasMilestone('W',3)
					var d = hasMilestone('W',4)
					var e = hasMilestone('W',5)
			if(e) player.W.milestones = [0,1,5];
			if(e) player.T.milestones = [0,1,2,6];
			if(u) player.W.milestones = [0,1,2,6];
			if(oo)player.W.milestones = [0,1,2,3,4,5];
			if(o) player.W.upgrades = [11,12,13,14,15];
			if(k) player.T.upgrades = [11,12,13,14,15];
		if(a) player.T.upgrades = [11];
		if(b) player.T.upgrades = [11,12,13];
		if(c) player.T.upgrades = [11,12,13,14,15];
		if(d) player.T.upgrades = [11,12,13,14,15,21,22,23];
		//if(b) player.Q.upgrades = [11,12,13,14,15];

																};
		},
		
		  ////////////////////////////////////////////////////////////
   	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var c = new ExpantaNum(0)
			  if(!inChallenge('ab',21)){
        if(hasUpgrade("W",23)) var c = new ExpantaNum(0.01)//return 0.01
		if (!inChallenge('ab',12)){
		if(hasUpgrade("Tb",23)) var c = new ExpantaNum(0.05)//return 0.05
			  if(hasUpgrade("Wb",23)) var c = new ExpantaNum(0.2)}}//return 0.20

       
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
						if(!inChallenge('ab',21)){
						if (!inChallenge('ab',11)){
							if (!inChallenge('Wb',11)){
							if (hasUpgrade('W',11)) eff = eff.mul((c**0.5)+1)
							if (hasUpgrade('W',12)) eff = eff.mul((c**0.275)+1)
							if (hasUpgrade('W',13)) eff = eff.mul((c**0.385)+1)
						}}}
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
							if(!inChallenge('ab',21)){
								if (hasUpgrade('W',14)) eff = eff.mul((c**0.15)+1)
							}
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
			requirementDescription: "10,000 W点",
			effectDescription: "重置时保留T12 T13升级",
			done() {
			return player.W.points.gte(10000)},
				},
		3: {
			requirementDescription: "10,000,000 W点",
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
addLayer("a", { //次于T\W节点 2层 (挑战层)
    name: "awa", 
    symbol: "a", 
    position: 1, 
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
	effectDescription(){return `(awa)<br>注：为了不触发bug 请不要获取a点(无任何用处)<br>需要做挑战
	时点获得a点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasUpgrade("T",31)&&(hasUpgrade("W",31)))},
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
		challenges: {
		11: {
			name: "珍惜你的QwQ点数！<h1>1.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其42%<br>注：重置所有 里程碑/升级保留除外",
			//unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.T.points.gte(1e6) && player.W.points.gte(5e4)},
			goalDescription:"1e6(1,000,000) T点<br>5e4(50,000) W点",
			rewardDescription: "无<h6>用来开启ac12<h6>QwQ获取^2",
			},
		12: {
			name: "珍惜你的QwQ点数！<h1>2.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其38%<br>注：重置所有 里程碑/升级保留除外",
			unlocked() {return hasChallenge("a",11)&&hasChallenge("Tb",11)&&hasChallenge("Wb",11)},
			canComplete: function() {return player.T.points.gte(1e28) && player.W.points.gte(1e19)},
			goalDescription:"1e28 T点1e19 W点",
			rewardDescription: "无<h6>用来开启ac22<h6>T点获取^1.2",
			},
		21: {
			name: "珍惜你的QwQ点数！<h1>3.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其32%<br>注：重置所有 里程碑/升级保留除外",
			unlocked() {return hasChallenge("a",12)},
			canComplete: function() {return player.T.points.gte(1e31) && player.W.points.gte(5e19)},
			goalDescription:"1e31 T点 5e19 W点",
			rewardDescription: "无<h6>用来开启ab节点<h6>W获取1.2",
			},
		22: {
			name: "珍惜你的QwQ点数！<h1>4.0",
			challengeDescription: "不管你每秒获得多少QwQ点数<br>它总是变为其25%<br>注：重置所有 里程碑/升级保留除外",
			unlocked() {return hasChallenge("a",21)},
			canComplete: function() {return player.T.points.gte(2e38) && player.W.points.gte(5e24)},
			goalDescription:"2e38 T点 5e24 W点",
			rewardDescription: "无<h6>QwQ获取^2",
			},
					},
		
		
})
addLayer("ab", { //a节点的额外挑战节点 1层
    name: "awab", 
    symbol: "ab", 
    position: 2, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#79FF79",
	requires: new ExpantaNum(0),
    resource: "ab点", 
	baseResource: "a点", 
	baseAmount() {return player.ab.points}, 
    type: "normal", 
	exponent: 0.5, 
	branches: ["a"],
	effectDescription(){return `(WwWb)<br>awa的额外挑战节点<br>注：为了不触发bug 请不要获取ab点(无任何用处)<br>需要做挑战
	时点获得ab点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge('a',22))},
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
				challenges: {
		11: {
			name: "珍惜你的升级！<h1>1.0",
			challengeDescription: "T和W节点升级无效<br>虽然显示xxx×但并无效果",
			//unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.Q.points.gte(1e40)},
			goalDescription:"1e40 Q点",
			rewardDescription: "无<h6>用来开启abc12<h6>QwQ获取^2",
			},
		12: {
			name: "珍惜你的升级！<h1>2.0",
			challengeDescription: "Tb和Wb节点升级无效<br>虽然显示xxx×但并无效果",
			unlocked() {return hasChallenge("ab",11)},
			canComplete: function() {return player.Q.points.gte(1e37)},
			goalDescription:"1e37 Q点",
			rewardDescription: "无<h6>用来开启ac21<h6>QwQ获取^2",
			},
		21: {
			name: "珍惜你的升级！<h1>3.0",
			challengeDescription: "W和T和Wb和Tb节点升级无效<br>虽然显示xxx×但并无效果",
			unlocked() {return hasChallenge("ab",12)},
			canComplete: function() {return player.Q.points.gte(1e31)},
			goalDescription:"1e31 Q点",
			rewardDescription: "无<h6>用来开启Qb节点<h6>QwQ获取^1.5",
			},
					},
		
		
		
})
addLayer("Tb", { //T节点的额外升级节点 2层
    name: "TATb", 
    symbol: "Tb", 
    position: 2, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#BE77FF",
	requires: new ExpantaNum(1000000000),
    resource: "Tb点", 
	baseResource: "T点", 
	baseAmount() {return player.T.points}, 
    type: "normal", 
	exponent: 0.5, 
	branches: ["T"],
	effectDescription(){return `(TATb)<br>注：TAT的升级节点(额外) `},
    gainMult() {
       // mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
			//eff = softcap(eff,new ExpantaNum(1e40),0.1)
			var d = player.Tb.points
			if(!inChallenge('ab',21)){
			if (!inChallenge('ab',12)){
			if (hasUpgrade('Tb',11)) eff = eff.mul((d**0.35)+1)}};
			if (!hasUpgrade('Qb',21)) {if (player.Tb.points > new ExpantaNum(1e40)) eff = eff.pow(0.5)};
			if (hasUpgrade('Qb',21)) {if (player.Tb.points > new ExpantaNum(1e50)) eff = eff.pow(0.5)};
				
		return eff
       //return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge('a',11))},
//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
milestones: {
		0: {
			requirementDescription: "1 Tb点",
			effectDescription: "您获得了第一个Tb点",
			done() {
			return player.Tb.points.gte(1)},
				},
		1: {
			requirementDescription: "10 Tb点",
			effectDescription: "重置保留T节点所有里程碑",
			done() {
			return player.Tb.points.gte(10)},
				},
		2: {
			requirementDescription: "100 Tb点",
			effectDescription: "开启Tb节点的第一排升级",
			done() {
			return player.Tb.points.gte(100)},
				},
		3: {
			requirementDescription: "1000 Tb点",
			effectDescription: "保留W节点里程碑1 2 3",
			done() {
			return player.Tb.points.gte(1000)},
				},
		4: {
			requirementDescription: "100,000 Tb点",
			effectDescription: "开启Tb节点的第二排升级",
			done() {
			return player.Tb.points.gte(100000)},
				},
			},
			////////////////////////////////////////////
			upgrades:{
				11:{
				title:"还是加成？",
				description:"根据Tb加成Tb获取",
				cost:new ExpantaNum(50),
				unlocked(){return hasMilestone("Tb",2)},
				effect(){
						let eff = player.Tb.points.add(1).pow(0) 
							var d = player.Tb.points
							if(!inChallenge('ab',21)){
							if (!inChallenge('ab',12)){
							if (hasUpgrade('Tb',11)) eff = eff.mul((d**0.35)+1)}};
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"还是加成!",
				description:"根据Tb加成T获取",
				cost:new ExpantaNum(500),
				unlocked(){return hasUpgrade("Tb",11)},
				},
				13:{
				title:"又是加成？",
				description:"每秒获得10%<br>可以重置的T点",
				cost:new ExpantaNum(2500),
				unlocked(){return hasUpgrade("Tb",12)},
				},
				14:{
				title:"又是加成!",
				description:"根据Tb加成Q获取",
				cost:new ExpantaNum(12500),
				unlocked(){return hasUpgrade("Tb",13)},
				},
				15:{
				title:"这是·····？",
				description:"获取一个挑战",
				cost:new ExpantaNum(30000),
				unlocked(){return hasUpgrade("Tb",14)},
				},
				21:{
				title:"什么玩意？",
				description:"每秒获得<br>可重置Q点的50%",
				cost:new ExpantaNum(50000),
				unlocked(){return hasMilestone("Tb",4)&& hasChallenge('Tb',11)},
				},
				22:{
				title:"什么东西？",
				description:"每秒获得<br>可重置T点的20%",
				cost:new ExpantaNum(80000),
				unlocked(){return hasUpgrade("Tb",21)},
				},
				23:{
				title:"什么鬼？",
				description:"每秒获得<br>可重置W点的5%",
				cost:new ExpantaNum(100000),
				unlocked(){return hasUpgrade("Tb",22)},
				},
				31:{
				title:"懂了！",
				description:"重置保留T<br>第一排升级",
				cost:new ExpantaNum(5e7),
				unlocked(){return hasChallenge("Tb",11)},
				},
			},
	/////////////////////////////////////////////////////////////////////
			challenges: {
		11: {
			name: "珍惜你的T层升级！",
			challengeDescription: "重置你的QTW层所有东西<br>(里程碑/挑战保留除外)<br>T层级升级无效",
			unlocked() {return hasUpgrade("Tb",15)},
			canComplete: function() {return player.T.points.gte(1e6) && player.W.points.gte(1e4)},
			goalDescription:"1e6(1,000,000)T点 1e4(10,000)W点",
			rewardDescription: "无<h6>用来开启Tb第二排升级<br>解锁第二排升级<h6>QwQ获取^1.5",
			},
					},
				
		
})
addLayer("Wb", { //W节点的额外升级节点 2层
    name: "WwWb", 
    symbol: "Wb", 
    position: 0, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#66B3FF",
	requires: new ExpantaNum(1000000),
    resource: "Wb点", 
	baseResource: "W点", 
	baseAmount() {return player.W.points}, 
    type: "normal", 
	exponent: 0.5, 
	branches: ["W"],
	effectDescription(){return `(WwWb)<br>注：WwW的升级节点(额外) `},
    gainMult() {
       // mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
			var y = player.Wb.points
			if(!inChallenge('ab',21)){
			if (!inChallenge('ab',12)){
			if (hasUpgrade('Wb',11)) eff = eff.mul((y**0.45)+1)}};
			if (!hasUpgrade('Qb',22)) {if (player.Tb.points > new ExpantaNum(1e30)) eff = eff.pow(0.5)};
			if (hasUpgrade('Qb',22)) {if (player.Tb.points > new ExpantaNum(1e40)) eff = eff.pow(0.5)};
				
		return eff
       // return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 2, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge('a',11))},
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
milestones: {
		0: {
			requirementDescription: "1 Wb点",
			effectDescription: "您获得了第一个Wb点",
			done() {
			return player.Wb.points.gte(1)},
				},
		1: {
			requirementDescription: "5 Wb点",
			effectDescription: "重置保留w节点第一排升级",
			done() {
			return player.Wb.points.gte(5)},
				},
		2: {
			requirementDescription: "50 Wb点",
			effectDescription: "开启Tb节点的第一排升级",
			done() {
			return player.Wb.points.gte(50)},
				},
		3: {
			requirementDescription: "5000 Wb点",
			effectDescription: "重置保留w节点所有里程碑",
			done() {
			return player.Wb.points.gte(5000)},
				},
		4: {
			requirementDescription: "500,000 Wb点",
			effectDescription: "开启Wb节点的第二排升级",
			done() {
			return player.Wb.points.gte(500000)},
				},
			},
/////////////////////////////////////////////////////////////////////////////////////////////
		upgrades:{
				11:{
				title:"还是加成？",
				description:"根据Wb加成Wb获取",
				cost:new ExpantaNum(3),
				unlocked(){return hasMilestone("Wb",2)},
				effect(){
						let eff = player.Wb.points.add(1).pow(0) 
						var y = player.Wb.points
						if(!inChallenge('ab',21)){
						if (!inChallenge('ab',12)){
						if (hasUpgrade('Wb',11)) eff = eff.mul((y**0.45)+1)}};
							
							
							//if (hasUpgrade('T',15)) eff = eff.mul((a**0.215)+1)
						return eff
					},
					effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"}
				},
				12:{
				title:"还是加成!",
				description:"根据Wb加成W获取",
				cost:new ExpantaNum(30),
				unlocked(){return hasUpgrade("Wb",11)},
				},
				13:{
				title:"又是加成？",
				description:"每秒获得40%<br>可以重置的T点",
				cost:new ExpantaNum(800),
				unlocked(){return hasUpgrade("Wb",12)},
				},
				14:{
				title:"又是加成!",
				description:"根据Wb加成Q获取",
				cost:new ExpantaNum(3000),
				unlocked(){return hasUpgrade("Wb",13)},
				},
				15:{
				title:"这是·····？",
				description:"获取一个挑战",
				cost:new ExpantaNum(8000),
				unlocked(){return hasUpgrade("Wb",14)},
				},
				21:{
				title:"什么玩意？",
				description:"每秒获得<br>可重置Q点的100%",
				cost:new ExpantaNum(12000),
				unlocked(){return hasMilestone("Wb",4)&& hasChallenge('Wb',11)},
				},
				22:{
				title:"什么东西？",
				description:"每秒获得<br>可重置T点的60%",
				cost:new ExpantaNum(25000),
				unlocked(){return hasUpgrade("Wb",21)},
				},
				23:{
				title:"什么鬼？",
				description:"每秒获得<br>可重置W点的20%",
				cost:new ExpantaNum(50000),
				unlocked(){return hasUpgrade("Wb",22)},
				},
				31:{
				title:"懂了！",
				description:"重置保留W所有升级",
				cost:new ExpantaNum(5e7),
				unlocked(){return hasChallenge("Wb",11)},
				},
			},
	/////////////////////////////////////////////////////////////////////
			challenges: {
		11: {
			name: "珍惜你的W层升级！",
			challengeDescription: "重置你的QTW层所有东西<br>(里程碑/挑战保留除外)<br>W层级升级无效",
			unlocked() {return hasUpgrade("Wb",15)},
			canComplete: function() {return player.T.points.gte(1e20) && player.W.points.gte(1e8)},
			goalDescription:"1e20 T点 1e8(100,000,000)W点",
			rewardDescription: "无<h6>用来开启Wb第二排升级<br>解锁第二排升级<h6>QwQ获取^1.5<h6>保留T所有升级",
			},
					},
				
})
var z = new ExpantaNum(1)
var zz = new ExpantaNum(1)
var zzz = new ExpantaNum(1)
addLayer("Qb", { //次于Tb/Wb/Q节点 2层 
    name: "QwQb", 
    symbol: "Qb", 
    position: 3, 
    startData() { return {
        unlocked:false,//false
		points: new ExpantaNum(0),
    }},
    color: "#A6FFFF",
	requires: new ExpantaNum(1e72),
    resource: "Qb点", 
	baseResource: "Q点", 
	baseAmount() {return player.Q.points}, 
    type: "normal", 
	exponent: 0.3, 
	branches: ["Q"],
	//effectDescription(){return `(awa)<br>注：为了不触发bug 请不要获取a点(无任何用处)<br>需要做挑战
	//时点获得a点才能开始(我也不知道为啥)<br>点开始挑战之后需要刷新一下才能显示(至少我这边这样) `},
   gainMult() {
       // mult = new ExpantaNum(1)
		var eff = player[this.layer].points.add(1).pow(0) 
			var QBD = player.Wb.points
			if (QBD > new ExpantaNum(1000)) eff = eff.pow(0.5);
				
		return eff
       // return mult
    },
    gainExp() { 
        return new ExpantaNum(1)
    },
    row: 1, 
	//hotkeys: [
    //    {key: "a", description: "a: Reset for s points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	//],
	layerShown(){return player[this.layer].unlocked || (hasChallenge("ab",21))},
//////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
	upgrades:{
		//var z = new ExpantaNum(1000)
				11:{
				title:"提升！",
				description:"QwQ获取提高^1.7<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				//canAfford(){return hasupgrade('Qb',12)}
				onPurchase(){z = z.mul(8)},
				},
				12:{
				title:"提升！",
				description:"QwQ获取提高^1.8<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				13:{
				title:"提升！",
				description:"QwQ获取提高^1.9<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				14:{
				title:"提升！",
				description:"QwQ获取提高^2<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				15:{
				title:"开启Qb第二排",
				description:"<br><br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",11)&&hasUpgrade("Qb",12)&&hasUpgrade("Qb",13)&&hasUpgrade("Qb",14)},
				onPurchase(){z = z.mul(8)},
				},
				21:{
				title:"移除！",
				description:"将Tbe40软上限<br>延迟到e50<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				22:{
				title:"移除！",
				description:"将Wbe30软上限<br>延迟到e40<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				23:{
				title:"移除！",
				description:"将QwQ点数e108软上限延迟到e124<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				24:{
				title:"移除！",
				description:"将QwQ点数e124软上限延迟到e140<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				onPurchase(){z = z.mul(8)},
				},
				25:{
				title:"开启Qb第三排",
				description:"<br><br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",21)&&hasUpgrade("Qb",22)&&hasUpgrade("Qb",23)&&hasUpgrade("Qb",24)},
				onPurchase(){z = z.mul(8)},
				},
				31:{
				title:"保留Wb全部升级",
				description:"不能与Qb12<br>同时拥有<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z*zz)},
				//canAfford(){return hasupgrade('Qb',12)}
				onPurchase(){z = z.mul(8) , zz = zz.mul(1e308)},
				},
				32:{
				title:"保留Tb全部升级",
				description:"不能与Qb11<br>同时拥有<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z*zz)},
				onPurchase(){z = z.mul(8) , zz = zz.mul(1e308)},
				},
				33:{
				title:"保留Wb里程碑",
				description:"不能与Qb14<br>同时拥有<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z*zzz)},
				onPurchase(){z = z.mul(8) , zzz = zzz.mul(1e308)},
				},
				34:{
				title:"保留Tb里程碑",
				description:"不能与Qb13<br>同时拥有<br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z*zzz)},
				onPurchase(){z = z.mul(8) , zzz = zzz.mul(1e308)},
				},
				35:{
				title:"开启Qb41",
				description:"暂未设定<br><br><br>价格增长：8×",
				cost(){return new OmegaNum(100).mul(z)},
				unlocked(){return hasUpgrade("Qb",31)&&hasUpgrade("Qb",32)&&hasUpgrade("Qb",33)&&hasUpgrade("Qb",34)},
				onPurchase(){z = z.mul(8)},
				},
	},


		///////////////////////////////////////////////////////////////

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

	   //1 = 100%  0.1 = 10%  0.01 = 1% 0.001 = 0.1%
		  passiveGeneration(){
			  var a = new ExpantaNum(0)
			  if(!inChallenge('ab',21)){
        if(hasUpgrade("T",21)) var a = new ExpantaNum(0.005)//return 0.005
		if(hasUpgrade("T",22)) var a = new ExpantaNum(0.015)//return 0.015
		if(hasMilestone("T",5)) var a = new ExpantaNum(0.05)//return 0.05
		if(hasUpgrade("W",21)) var a = new ExpantaNum(0.1)//return 0.1
		if(hasUpgrade("Q",31)) var a = new ExpantaNum(0.2)
		if (!inChallenge('ab',12)){
		if(hasUpgrade("Tb",21)) var a = new ExpantaNum(0.5)//return 0.5
		if(hasUpgrade("Wb",21)) var a = new ExpantaNum(1)}}
		//return 1
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
			var d = player.Tb.points
			var y = player.Wb.points
				if (hasUpgrade('Q',14)) eff = eff.mul((b**0.135)+1);
				if(!inChallenge('ab',21)){
				if (!inChallenge('ab',12)){
				if (hasUpgrade('Tb',14)) eff = eff.mul((d**0.2)+1);
				if (hasUpgrade('Wb',14)) eff = eff.mul((y**0.3)+1)}};
				//if (hasUpgrade('T',11)) eff = eff = eff.mul(b^0.025)
				//if (hasUpgrade('T',12)) eff = eff = eff.mul(b^0.035)
				
				
				
			return eff
        //return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
doReset(resettingLayer) {
        let keep = [];
				//if (resettingLayer=="bm") keep.push("points","best","total","milestones","upgrades");
					var aa = hasMilestone('Q',0)
					var a = hasMilestone('T',1)
					var b = hasMilestone('T',2)
					var c = hasMilestone('T',3)
					var d = hasMilestone('T',4)
					var e = hasUpgrade('Q',22)
					var f = hasChallenge('Q',11)
					var k = hasUpgrade('Tb',31)
					var h = hasChallenge('Wb',11)
					var g = hasUpgrade('Wb',31)
					var w = hasUpgrade('Qb',11)
					var ww = hasUpgrade('Qb',12)

					//var c = player.Q.points = new ExpantaNum(3)
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer, keep)
		if(aa) player.Q.milestones = [0];
		if(a) player.Q.upgrades = [11,12,13];
		if(b) player.Q.upgrades = [11,12,13,14,15];
		if(c) player.Q.upgrades = [11,12,13,14,15,21,23];
		if(f) player.Q.upgrades = [11,12,13,14,15,21,22,23];
		if(f) player.Q.challenges = [11];
		if(w)player.Wb.upgrades = [11,12,13,14,15,21,22,23,31];
		if(ww)player.Tb.upgrades = [11,12,13,14,15,21,22,23,31];
		if(d) player.Q.points = new ExpantaNum(10);
		if(k) player.T.upgrades = [11,12,13,14,15];
		if(h) player.T.upgrades = [11,12,13,14,15,21,22,23,31];
		if(g) player.W.upgrades = [11,12,13,14,15,21,22,23,31];
		if(e) player.Q.upgrades = [11,12,13,14,15,21,22,23]};
		//////////////////////////////////////////////////
            //layerDataReset(this.layer, keep)
		//if(aa) player.Q.milestones = [0];
													
		
		
		},  
///////////////////////////////////////////////////////////////////////
	upgrades:{
				11:{
				title:"加成？",
				description:"根据Q点<br>加成QwQ获取",
				cost:new ExpantaNum(3),
				
					effect(){
						let eff = player[this.layer].points.add(1).pow(0) 
							var b = player.Q.points	
							if (hasUpgrade('Q',11)) eff = eff.mul((b**0.3)+1)
							if (hasUpgrade('Q',12)) eff = eff.mul((b**0.085)+1)
							if (hasUpgrade('Q',13)) eff = eff.mul((b**0.09)+1)
							if (hasUpgrade('Q',15)) eff = eff.mul((b**0.095)+1)
							if (hasUpgrade('Q',21)) eff = eff.mul((b**0.1)+1)
							if (hasUpgrade('W',31)) eff = eff.mul((b**0.5)+1)
	
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
				cost:new ExpantaNum(1e10),
				unlocked(){return hasChallenge('a',11)},
			       },
				23:{
				title:"开始！",
				description:"解锁一个<br>新的节点",
				cost:new ExpantaNum(0),
				unlocked(){return hasUpgrade("Q",21)},
			       },
				31:{
				title:"太强了！",
				description:"每秒获得20%<br>可重置的Q点",
				cost:new ExpantaNum(1e13),
				unlocked(){return hasUpgrade("Q",23)&&(hasChallenge('a',11))&&(hasChallenge('Q',11))},
			       },
	},
/////////////////////////////////////////////////////////////////////////////////////
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

	challenges: {
		11: {
			name: "挂机游戏",
			challengeDescription: '因为该挑战出了错误,所以只要您获得重置点或者购买升级就会退出挑战！<br>只重置QwQ点',
			unlocked() {return hasUpgrade("Q",22)},
			canComplete: function() {return player.points.gte(1500)},//150
			goalDescription:"1500 QwQ点",
			rewardDescription: "解锁另外两个节点",
			},
					},

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