addLayer("p", {
    symbol: "P",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
        ck11:new ExpantaNum(0),
        ck12:new ExpantaNum(0),
    }},
    color: "#FFFF93",
    resource: "重置点",
    type: "normal",
    requires:new ExpantaNum(10),
    exponent:0.5,
    baseAmount(){return player.points},
    baseResource:"点数",
    gainMult() {
        mult = new ExpantaNum(1)
        if(hasUpgrade("p",14))mult=mult.add(upgradeEffect("p",14))
        if(hasUpgrade("p",24))mult=mult.add(upgradeEffect("p",24))
        if(hasUpgrade("g",11))mult=mult.mul(upgradeEffect("g",11))
        if(hasUpgrade("g",21))mult=mult.mul(upgradeEffect("g",21))
        return mult
    },
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
        if(hasUpgrade("g",22))exp=exp.add(upgradeEffect("g",22))
        return exp
    },
    row: 1,
    layerShown(){return true},
    doReset(resettingLayer) {
        let keep = [];
				if (hasMilestone("g",1)) keep.push("upgrades");
        if (layers[resettingLayer].row > this.row) {
            layerDataReset(this.layer,keep)	
		}
	},
    passiveGeneration(){
		var a = new ExpantaNum(0)
			if(hasMilestone("g",2)) a = 0.1
            if(hasMilestone("g",3)) a = 1
		return a 
	},
    upgrades: {
        11: {
            title:"p11",
            description: "根据重置点增加点数获取",
            cost(){return new ExpantaNum(1)},
            unlocked(){return true},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.p.points
                    hasUpgrade("p",25)?eff=eff.add(1).pow(0.4):eff = eff.add(1).pow(0.5)
                    inChallenge("g",11)?eff=eff.pow(2):eff=eff
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        12: {
            title:"p12",
            description:"每购买一个p节点升级点数获取翻倍<br>'p25'忽略不记",
            cost(){return new ExpantaNum(4)},
            unlocked(){return hasUpgrade(this.layer,11)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var haspup = n(player.p.upgrades.length)
                var eff = n(2)
                if(hasUpgrade("p",25)) haspup=haspup.sub(1)
                if(hasUpgrade("g",24)&&hasUpgrade("p",25))haspup=haspup.add(1)
                if(hasUpgrade("p",15)) eff=eff.add(upgradeEffect("p",15))
                eff = eff.pow(haspup)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        13: {
            title:"p13",
            description: "根据点数增加点数获取",
            cost(){return new ExpantaNum(8)},
            unlocked(){return hasUpgrade(this.layer,12)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.points
                    hasUpgrade("p",22)?eff=eff.logBase(7).max(1):eff = eff.log10().max(1)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        14: {
            title:"p14",
            description: "点数增加重置点的获取倍率",
            cost(){return new ExpantaNum(25)},
            unlocked(){return hasUpgrade(this.layer,13)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.points
                    eff = eff.pow(0.04).mul(0.15)
                return eff
            },
            effectDisplay(){return "+×"+format(upgradeEffect(this.layer,this.id))},
            },
        15: {
            title:"p15",
            description: "每购买一个升级'p12'的底数+0.05",
            cost(){return new ExpantaNum(60)},
            unlocked(){return hasUpgrade(this.layer,14)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var haspup = n(player.p.upgrades.length).mul(0.05)
                var eff = n(0)
                if(hasUpgrade("p",23)) eff=eff.add(upgradeEffect("p",23))
                    eff = eff.add(haspup)
                return eff
            },
            effectDisplay(){return "+"+format(upgradeEffect(this.layer,this.id))},
            },
        21: {
            title:"p21",
            description: "点数获取×1.2<br>解锁一个可重复购买项",
            cost(){return new ExpantaNum(150)},
            unlocked(){return hasUpgrade(this.layer,15)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = n(1.2)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        22: {
            title:"p22",
            description: "改善'p13'的公式",
            cost(){return new ExpantaNum(540)},
            unlocked(){return hasUpgrade(this.layer,21)},
            style() {return {'height':'120px','width':'120px'}},
            },
        23: {
            title:"p23",
            description: "每购买两个升级,'p15'的效果增加0.025",
            cost(){return new ExpantaNum(2160)},
            unlocked(){return hasUpgrade(this.layer,22)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var haspup = n(player.p.upgrades.length)
                var eff = n(0)
                eff=eff.add(haspup.div(2).floor().mul(0.025))
                return eff
            },
            effectDisplay(){return "+"+format(upgradeEffect(this.layer,this.id))},
            },
        24: {
            title:"p24",
            description(){return "根据重置该层的时间来增加重置点的获取倍率<br>"+"时间:"+formatTime(player.p.resetTime)},
            cost(){return new ExpantaNum(5120)},
            unlocked(){return hasUpgrade(this.layer,23)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = n(player.p.resetTime)
                hasUpgrade("p",25)?eff=eff.mul(0.025):eff=eff.mul(0.015)
                return eff.mul(0.1).max(0.01)
            },
            effectDisplay(){return "+×"+format(upgradeEffect(this.layer,this.id))},
            },
        25: {
            title:"p25",
            description: "改善<br>'p11'和'p24'<br>公式",
            cost(){return new ExpantaNum(20480)},
            unlocked(){return hasUpgrade(this.layer,24)},
            style() {return {'height':'120px','width':'120px'}},
            },
        },
    clickables:{
        11:{
            title(){return "<h2>增量升级</h2><br>等级:"+format(player.p.ck11,0)+"/10<br>将你的点数获取^"+format(this.gain(),2)+"<br>消耗:"+format(this.cost(),2)},
            canClick(){return player.p.ck11.lt(10)&&player.p.points.gte(this.cost())},
            unlocked(){return hasUpgrade("p",21)},
            style() {return {'height':'175px','width':'175px'}},
            gain(){
                var gain = n(1)
                gain=gain.add(player.p.ck11.mul(0.02))
                return gain
            },
            cost(){
                var cost = n(100)
                cost=cost.mul(n(2).pow(player.p.ck11))
                return cost
            },
            onClick(){
            player.p.points=player.p.points.sub(this.cost())
            player.p.ck11=player.p.ck11.add(1)
            },
        },
        12:{
            title(){return "<h2>获取升级</h2><br>等级:"+format(player.p.ck12,0)+"/20<br>将声望点获取需求降低"+format(this.gain(),2)+"×<br>消耗:"+format(this.cost(),2)},
            canClick(){return player.p.ck12.lt(20)&&player.p.points.gte(this.cost())},
            unlocked(){return hasUpgrade("g",12)},
            style() {return {'height':'175px','width':'175px'}},
            gain(){
                var gain = n(1)
                gain=gain.add(player.p.ck12.mul(0.08))
                return gain
            },
            cost(){
                var cost = n(1000)
                cost=cost.mul(n(3).pow(player.p.ck12))
                return cost
            },
            onClick(){
            player.p.points=player.p.points.sub(this.cost())
            player.p.ck12=player.p.ck12.add(1)
            },
        },
    },
})
addLayer("g", {
    symbol: "G",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new ExpantaNum(0),
        ck11:new ExpantaNum(0),
    }},
    color: "green",
    branches: "p",
    resource: "声望点",
    type: "static",
    requires:new ExpantaNum(100000),
    exponent(){
        var exp=n(0)
        hasUpgrade("g",13)?exp=n(1.5):exp=n(1.75)
        return exp
    },
    baseAmount(){return player.p.points},
    baseResource:"重置点",
    canBuyMax() {if(hasMilestone("g",2)) return true},
    gainMult() {
        mult = new ExpantaNum(1)
        if(hasUpgrade("g",12))mult=mult.div(player.p.ck12.mul(0.08).add(1))
        if(hasUpgrade("g",14))mult=mult.div(upgradeEffect("g",14))
        return mult
    },
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
        return exp
    },
    row: 2,
    effectDescription(){ if(hasMilestone("g",0)) return"你总共有"+ player.g.total +"声望点,这使你的点数获取×"+ (hasUpgrade("g",13)?hasMilestone("g",3)?format(player.g.total.pow(2).mul(2).max(1)):format(player.g.total.pow(2).max(1)):format(player.g.total.mul(3).max(1)))},
    layerShown(){return player.p.unlocked},
    upgrades: {
        11: {
            title:"g11",
            description: "如果你的重置点为2的倍数,那么获取重置点翻倍",
            cost(){return new ExpantaNum(1)},
            unlocked(){return true},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = n(1)
                player.p.points.div(2).floor().eq(player.p.points.div(2))?eff=eff.add(1):eff=eff
                if(inChallenge("g",11))eff=n(1)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        12: {
            title:"g12",
            description: "解锁一个p节点可重复购买项,点数获取×1.2",
            cost(){return new ExpantaNum(2)},
            unlocked(){return hasUpgrade(this.layer,11)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = n(1.2)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        13: {
            title:"g13",
            description: "改善里程碑0的增益并且改善获取声望点公式",
            cost(){return new ExpantaNum(4)},
            unlocked(){return hasUpgrade(this.layer,12)},
            style() {return {'height':'120px','width':'120px'}},
            },
        14: {
            title:"g14",
            description: "根据重置点减少声望点获取需求",
            cost(){return new ExpantaNum(5)},
            unlocked(){return hasUpgrade(this.layer,13)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.p.points
                hasChallenge("g",11)?eff=eff.pow(0.13).max(1):eff=eff.pow(0.1).max(1)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
         15: {
            title:"g15",
            description: "解锁一个声望挑战",
            cost(){return new ExpantaNum(6)},
            unlocked(){return hasUpgrade(this.layer,14)},
            style() {return {'height':'120px','width':'120px'}},
            },
        21: {
            title:"g21",
            description: "根据声望点加成重置点的获取倍率",
            cost(){return new ExpantaNum(8)},
            unlocked(){return hasUpgrade(this.layer,15)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.g.points
                eff=eff.pow(0.75).max(1)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        22: {
            title:"g22",
            description: "每购买两个g节点升级,重置点的获取指数+0.02",
            cost(){return new ExpantaNum(9)},
            unlocked(){return hasUpgrade(this.layer,21)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var hasgup = n(player.g.upgrades.length)
                var eff = n(0)
                eff=eff.add(hasgup.div(2).floor().mul(0.02))
                return eff
            },
            effectDisplay(){return "+"+format(upgradeEffect(this.layer,this.id))},
            },
        23: {
            title:"g23",
            description: "每购买一个g节点升级,点数获取×3",
            cost(){return new ExpantaNum(9)},
            unlocked(){return hasUpgrade(this.layer,22)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var hasgup = n(player.g.upgrades.length)
                var eff = n(0)
                if(hasUpgrade("g",24)&&hasUpgrade("p",25))hasgup=hasgup.add(1)
                eff=eff.add(n(3).pow(hasgup))
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        24: {
            title:"g24",
            description: "将'p25'计入'p12中',同时也计入'g23'中",
            cost(){return new ExpantaNum(12)},
            unlocked(){return hasUpgrade(this.layer,23)},
            style() {return {'height':'120px','width':'120px'}},
            },
        25: {
            title:"g25",
            description: "点数翻倍获取,解锁一个挑战",
            cost(){return new ExpantaNum(13)},
            unlocked(){return hasUpgrade(this.layer,24)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = n(2)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        },
    milestones: {
		0: {
			requirementDescription: "0：1 声望点",
			effectDescription: "只是一个里程碑,仅此而已.<br>效果:根据你的声望点加成点数获取",
			done() {return player.g.points.gte(1)},
			},
		1: {
			requirementDescription: "1：4 声望点",
			effectDescription: "保留p节点升级",
			done() {return player.g.points.gte(4)},
			},
		2: {
			requirementDescription: "2：7 声望点",
			effectDescription: "你可以最大获取声望点了.<br>每秒获得可获得重置点的10%",
			done() {return player.g.points.gte(7)},
			},
		3: {
			requirementDescription: "3：14 声望点",
			effectDescription: "里程碑0的增益翻倍,每秒获取100%可获取的重置点,并且点数再^1.05",
			done() {return player.g.points.gte(14)},
			},
		},
    challenges: {
        11: {
            name: "<h1>究级折损</h1>",
            challengeDescription: "<h4>重置p层,点数获取^0.25,改善'p11'公式,并且禁用'g11'</h4>",
            canComplete(){return player.points.gte("1e5")},
            goalDescription(){return format(ExpantaNum("1e5"))+"点数"},
            rewardDescription(){return `改善'g14'公式,并且点数获取×50`},
            unlocked(){return hasUpgrade("g",15)},
            onEnter(){layerDataReset("p")},
            //onComplete(){player.p.digitCapacity = n(5)},
        },
        12: {
            name: "<h1>究级折损<sup>2</sup></h1>",
            challengeDescription: "<h4>重置p层,点数获取^0.15,</h4>",
            canComplete(){return player.points.gte("3e5")},
            goalDescription(){return format(ExpantaNum("3e5"))+"点数"},
            rewardDescription(){return `解锁新的层级,并且点数获取×10`},
            unlocked(){return hasUpgrade("g",25)},
            onEnter(){layerDataReset("p")},
            //onComplete(){player.p.digitCapacity = n(5)},
        },
    },
})
addLayer("sg", {
    symbol: "SG",
    position: 2,
    startData() { return {
        unlocked: false,
		points: new ExpantaNum(0),
        ck11:new ExpantaNum(0),
    }},
    color: "green",
    branches: "g",
    resource: "超级声望点",
    type: "normal",
    requires:new ExpantaNum(1e21),
    exponent(){return 1},
    baseAmount(){return player.p.points},
    baseResource:"重置点",
    //canBuyMax() {if(hasMilestone("g",2)) return true},
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
        return exp
    },
    row: 2,
    //effectDescription(){ if(hasMilestone("g",0)) return"你总共有"+ player.g.total +"声望点,这使你的点数获取×"+ (hasUpgrade("g",13)?hasMilestone("g",3)?format(player.g.total.pow(2).mul(2).max(1)):format(player.g.total.pow(2).max(1)):format(player.g.total.mul(3).max(1)))},
    layerShown(){return player.g.unlocked},
    
})
