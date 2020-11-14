
// 关于收入支出的配置


// 收入或者支出
/* const FLAG = [
	{ keyCode: "income", keyWord: "收入" },
	{ keyCode: "expend", keyWord: "支出" }
]; */
const FLAG = {
	income: "收入",
	expend: "支出"
};

// 收入类型
const INCOMETYPE = [
	{ type: "wages", keyWord: "工资", explain: "工作收入" },
	{ type: "sideline", keyWord: "副业", explain: "兼职，天降横财" },
	{ type: "finance", keyWord: "金融", explain: "投资理财、金融信贷等" },
	{ type: "other", keyWord: "其他", explain: "转账、红包等" }
]
// 支出类型
const EXPENDTYPE = [
	{ type: "cloth", keyWord: "衣着", explain: "服饰、鞋帽、背包、首饰、化妆品等" },
	{ type: "restaurant", keyWord: "餐饮", explain: "菜米油盐、三餐、零食" },
	{ type: "hous", keyWord: "住房", explain: "房租、水、电、煤气、天然气、物业等" },
	{ type: "traffic", keyWord: "交通", explain: "公交、地铁、打车、火车、高铁、飞机、油等" },
	{ type: "life", keyWord: "生活", explain: "生活日用品" },
	{ type: "communication", keyWord: "通信", explain: "话费、快递费" },
	{ type: "electron", keyWord: "电子", explain: "手表、电脑、手机等电子产品、及周边配件" },
	{ type: "amusement", keyWord: "娱乐", explain: "电影、游戏等娱乐活动" },
	{ type: "travel", keyWord: "旅游", explain: "景区门票、期间住宿等" },
	{ type: "healthcare", keyWord: "医疗健康", explain: "体检、看病、药、健身器材等" },
	{ type: "culturalEducation", keyWord: "文化教育", explain: "学费、书本、培训等" },
	{ type: "finance", keyWord: "金融", explain: "投资理财，金融信贷等" },
	{ type: "other", keyWord: "其他", explain: "转账、红包、送礼等" }
];
// 所有的类型
const ALLTYPE = {
	wages: "工资",
	sideline: "副业",
	cloth: "衣着",
	restaurant: "餐饮",
	hous: "住房",
	traffic: "交通",
	life: "生活",
	communication: "通信",
	electron: "电子",
	amusement: "娱乐",
	travel: "旅游",
	healthcare: "医疗健康",
	culturalEducation: "文化教育",
	finance: "金融",
	other: "其他"
};

module.exports =  {
	FLAG,
	INCOMETYPE,
	EXPENDTYPE,
	ALLTYPE
}