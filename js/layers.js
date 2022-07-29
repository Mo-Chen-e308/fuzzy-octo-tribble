addLayer("p", {
    symbol: "P",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new ExpantaNum(0),
        ck11:new ExpantaNum(0),
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
        return mult
    },
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
        return exp
    },
    row: 1,
    layerShown(){return true},
    upgrades: {
        11: {
            title:"11",
            description: "根据重置点增加点数获取",
            cost(){return new ExpantaNum(1)},
            unlocked(){return true},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.p.points
                    hasUpgrade("p",25)?eff=eff.add(1).pow(0.4):eff = eff.add(1).pow(0.5)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        12: {
            title:"12",
            description: "每购买一个升级,点数获取翻倍",
            cost(){return new ExpantaNum(4)},
            unlocked(){return hasUpgrade(this.layer,11)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var haspup = player.p.upgrades.length
                var eff = n(2)
                if(hasUpgrade("p",15)) eff=eff.add(upgradeEffect("p",15))
                eff = eff.pow(haspup)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        13: {
            title:"13",
            description: "根据点数增加点数获取",
            cost(){return new ExpantaNum(8)},
            unlocked(){return hasUpgrade(this.layer,12)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.points
                    hasUpgrade("p",22)?eff=eff.logBase(6).max(1):eff = eff.log10().max(1)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        14: {
            title:"14",
            description: "点数增加重置点的获取",
            cost(){return new ExpantaNum(25)},
            unlocked(){return hasUpgrade(this.layer,13)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = player.points
                    eff = eff.pow(0.05).mul(0.2)
                return eff
            },
            effectDisplay(){return "+"+format(upgradeEffect(this.layer,this.id))},
            },
        15: {
            title:"15",
            description: "每购买一个升级'12'的基数+0.05",
            cost(){return new ExpantaNum(60)},
            unlocked(){return hasUpgrade(this.layer,14)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var haspup = n(player.p.upgrades.length).mul(0.05)
                var eff = n(0)
                    eff = eff.add(haspup)
                return eff
            },
            effectDisplay(){return "+"+format(upgradeEffect(this.layer,this.id))},
            },
        21: {
            title:"21",
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
            title:"22",
            description: "改善'13'的公式",
            cost(){return new ExpantaNum(540)},
            unlocked(){return hasUpgrade(this.layer,21)},
            style() {return {'height':'120px','width':'120px'}},
            },
        23: {
            title:"23",
            description: "每购买两个升级,'12'的基数增加0.1",
            cost(){return new ExpantaNum(2160)},
            unlocked(){return hasUpgrade(this.layer,22)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var haspup = n(player.p.upgrades.length).div(2).floor().mul(0.1)
                var eff = n(0)
                eff=eff.add(haspup)
                return eff
            },
            effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"×"},
            },
        24: {
            title:"24",
            description: "根据'14'效果的平方来增加重置点的获取",
            cost(){return new ExpantaNum(5120)},
            unlocked(){return hasUpgrade(this.layer,23)},
            style() {return {'height':'120px','width':'120px'}},
            effect(){
                var eff = upgradeEffect("p",14)
                hasUpgrade("p",25)?eff=eff.pow(1.5):eff=eff.pow(2)
                return eff
            },
            effectDisplay(){return "+"+format(upgradeEffect(this.layer,this.id))},
            },
        25: {
            title:"25",
            description: "改善'11'和'24'公式",
            cost(){return new ExpantaNum(20480)},
            unlocked(){return hasUpgrade(this.layer,24)},
            style() {return {'height':'120px','width':'120px'}},
            },
        },
    clickables:{
        11:{
            title(){return "<h2>增量升级</h2><br>等级:"+format(player.p.ck11,0)+"/10<br>将你的点数获取×"+format(this.gain(),2)+"<br>消耗:"+format(this.cost(),2)},
            canClick(){return player.p.ck11.lt(10)&&player.p.points.gte(this.cost())},
            unlocked(){return hasUpgrade("p",21)},
            style() {return {'height':'175px','width':'175px'}},
            gain(){
                var gain = n(1)
                gain=gain.add(player.p.ck11.mul(0.2))
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
    exponent:1,
    baseAmount(){return player.p.points},
    baseResource:"点数",
    gainMult() {
        mult = new ExpantaNum(1)

        return mult
    },
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
        return exp
    },
    row: 2,
    effectDescription(){return "这使你的点数获取×"+format(player.g.points.add(1).pow(2))},
    layerShown(){return player.p.unlocked},

})
