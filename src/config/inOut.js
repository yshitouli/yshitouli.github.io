
// 关于收入支出的配置

// 收入类型
const INCOMETYPE = [
	{ type: "wages", explain: "工资：工作收入" },
	{ type: "sideline", explain: "副业：兼职，天降横财" },
	{ type: "finance", explain: "金融：投资理财、金融信贷等" },
	{ type: "other", explain: "其他：转账、红包等" }
]
// 支出类型
const EXPENDTYPE = [
	{ type: "cloth", explain: "衣着：服饰、鞋帽、背包、首饰、化妆品等" },
	{ type: "restaurant", explain: "餐饮：菜米油盐、三餐、零食" },
	{ type: "hous", explain: "住房：房租、水、电、煤气、天然气、物业等" },
	{ type: "traffic", explain: "交通：公交、地铁、打车、火车、高铁、飞机、油等" },
	{ type: "life", explain: "生活：生活日用品" },
	{ type: "communication", explain: "通信：话费、快递费" },
	{ type: "electron", explain: "电子：手表、电脑、手机等电子产品、及周边配件" },
	{ type: "amusement", explain: "娱乐：电影、游戏等娱乐活动" },
	{ type: "travel", explain: "旅游：景区门票、期间住宿等" },
	{ type: "healthcare", explain: "医疗健康：体检、看病、药、健身器材等" },
	{ type: "culturalEducation", explain: "文化教育：学费、书本、培训等" },
	{ type: "finance", explain: "金融：投资理财，金融信贷等" },
	{ type: "other", explain: "其他：转账、红包、送礼等" }
];
// 年份
const YEAR = ["2020", "2021"];
// 月份
const MONTH = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export default {
	INCOMETYPE,
	EXPENDTYPE,
	YEAR,
	MONTH
}