
// 用户权限说明

// 默认用户
const DEFAULTUSER = [
	{userName: "maxStone", power: 0, explain: "可编辑，可查看所有"},
	{userName: "cxrStone", power: 11, explain: "只读，可以查看我的 支出、收入、简历等"},
	{userName: "stone", power: 12, explain: "只读、可以查看我的简历"}
];
// 权限说明
const POWER = [
	{ num: -1, explain: "只读" },
	{ num: 0, explain: "最大权限，可读可编辑" },
	{ num: 11, explain: "只读" },
	{ num: 12, explain: "只读" }
];
// 大权限包含小权限的所有权力
// 当权限 >=0 时，权限值越小，用户权利越大
// 预留 [1,10] 10 个权限值，11之后皆为只读，读取内容不同
// 当权限 ==-1 时，仅查看无关紧要的信息，无用户登录状态可为 -1

module.exports = {
	DEFAULTUSER,
	POWER
}