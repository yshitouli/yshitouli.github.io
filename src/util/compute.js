
/* 数据计算 */
let { inOut } = require("../config");

/**
 * 获取指定集合
 * @param { Array } list 原始集合
 * @param { String } [flag] 支出 | 收入
 * @param { Number } [year] 年
 * @param { Number } [month] 月(有月，则必须有年)
 * @param { String } [type] 收支类型
 * @return { Array } 返回指定的集合
 */
function getList(list, flag, year, month, type) {
	let arr = [];
	if(arguments.length === 1) {
		// list，返回所有的数据，不含空
		flag = "";
		year = 0;
		month = 0;
		type = "";
		console.log("接收到【全部数据】集合");
		list.forEach(item => {
			if(item.money != 0) {
				arr.push(item);
			}
		});
	} else if(arguments.length === 2) {
		if(typeof(flag)==="string") {
			if(["income","expend"].indexOf(flag)!=-1) {
				// list和flag，返回所有 支出或收入
				year = 0;
				month = 0;
				type = "";
				console.log(`接收到【${inOut.FLAG[flag]}】集合`)
				list.forEach(item => {
					if(item.flag===flag && item.money!=0) {
						arr.push(item);
					}
				});
			} else {
				// list和type，返回某类所有的 收支
				type = flag;
				flag = "";
				year = 0;
				month = 0;
				console.log(`接收到【${inOut.ALLTYPE[type]}】类的所有集合`);
				list.forEach(item => {
					if(item.type===type && item.money!=0) {
						arr.push(item);
					}
				});
			}
		} else {
			// list和year，返回某年所有的 收支
			year = flag;
			flag = "";
			month = 0;
			type = "";
			console.log(`接收到【${year}】年所有的集合`);
			list.forEach(item => {
				if(item.time.year===year && item.money!=0) {
					arr.push(item);
				}
			});
		}
	} else if(arguments.length === 3) {
		if(typeof(flag)==="string") {
			if(typeof(year)==="number") {
				// list、flag和year，返回某年所有的 支出或收入
				month = 0;
				type = "";
				console.log(`接收到【${year}】年的【${inOut.FLAG[flag]}】集合`);
				list.forEach(item => {
					if(item.flag===flag && item.time.year===year && item.money!=0) {
						arr.push(item);
					}
				});
			} else {
				// list、flag和type，返回某类所有的 支出或收入
				type = year;
				year = 0;
				month = 0;
				console.log(`接收到【${inOut.ALLTYPE[type]}】类的【${inOut.FLAG[flag]}】集合`);
				list.forEach(item => {
					if(item.flag===flag && item.type===type && item.money!=0) {
						arr.push(item);
					}
				});
			}
		} else {
			if(typeof(year)==="number") {
				// list、year和month，返回某年某月的所有 收支
				month = year;
				year = flag;
				flag = "";
				type = "";
				console.log(`接收到【${year}】年【${month}】月的所有集合`);
				list.forEach(item => {
					if(item.time.year===year && item.time.month===month && item.money!=0) {
						arr.push(item);
					}
				});
			} else {
				// list、year和type，返回某年某类的所有 收支
				type = year;
				year = flag;
				flag = "";
				month = 0;
				console.log(`接收到【${year}】年【${inOut.ALLTYPE[type]}】类的所有集合`);
				list.forEach(item => {
					if(item.time.year===year && item.type===type && item.money!=0) {
						arr.push(item);
					}
				});
			}
		}
	} else if(arguments.length === 4) {
		if(typeof(flag) === "string") {
			if(typeof(month) === "number") {
				// list、flag、year和month，返回某年某月的所有 支出或收入
				type = "";
				console.log(`接收到【${year}】年【${month}】月的【${inOut.FLAG[flag]}】集合`);
				list.forEach(item => {
					if(item.flag===flag && item.time.year===year && item.time.month===month && item.money!=0) {
						arr.push(item);
					}
				});
			} else {
				// list、flag、year和type，返回某年某类的所有 支出或收入
				type = month;
				month = 0;
				console.log(`接收到【${year}】年【${inOut.ALLTYPE[type]}】类的【${inOut.FLAG[flag]}】集合`);
				list.forEach(item => {
					if(item.flag===flag && item.time.year===year && item.type===type && item.money!=0) {
						arr.push(item);
					}
				});
			}
		} else {
			// list、year、month和type，返回某年某月某类的所有 收支
			type = month;
			month = year;
			year = flag;
			flag = "";
			console.log(`接收到【${year}】年【${month}】月【${inOut.ALLTYPE[type]}】类的所有集合`);
			list.forEach(item => {
				if(item.time.year===year && item.time.month===month && item.type===type && item.money!=0) {
					arr.push(item);
				}
			});
		}
	} else {
		// 5个参数，返回某年某月某类所有的 支出或收入
		console.log(`接收到【${year}】年【${month}】月【${inOut.ALLTYPE[type]}】类的【${inOut.FLAG[flag]}】集合`);
		list.forEach(item => {
			if(item.flag===flag && item.time.year===year && item.time.month===month && item.type===type && item.money!=0) {
				arr.push(item);
			}
		});
	}
	return arr;
}

/**
 * 计算总和
 * @param { list } list 要计算的集合
 * @return { Number } 总和
 */
function computeSum(list) {
	let sum = 0;
	list.forEach(item => {
		sum += Number(item.money);
	});
	return sum.toFixed(2);
}


/**
 * 获取集合中有哪些年份
 * @param { Array } list 去除空的原始 集合
 * @return { Array } 年份集合
 */
function getYear(list) {
	let arr = [];
	list.forEach(item => {
		if(arr.indexOf(item.time.year) === -1) {
			arr.push(item.time.year);
		}
	});
	return arr;
}

/**
 * 获取某年中有多少个月份
 * @param { Array } list 某年的所有集合
 * @return { Array } 月份集合
 */
function getMonth(list) {
	let arr = [];
	list.forEach(item => {
		if(arr.indexOf(item.time.month) === -1) {
			arr.push(item.time.month);
		}
	});
	return arr;
}


/**
 * 获取某年某月多少天
 * @param {*} year 年
 * @param {*} month 月
 * @return { Array } 日期数组
 */
function getDays(year, month) {
	let arr = [];
	if([1,3,5,7,8,10,12].indexOf(month) != -1) {
		for(let i=1; i<=31; i++) {
			arr.push(i);
		}
	} else if([4,6,9,11].indexOf(month) != -1) {
		for(let i=1; i<=30; i++) {
			arr.push(i);
		}
	} else if(month === 2) {
		if((year%4==0&&year%100!=0)||year%400==0) {
			for(let i=1; i<=29; i++) {
				arr.push(i);
			}
		} else {
			for(let i=1; i<=28; i++) {
				arr.push(i);
			}
		}
	}
	return arr;
}


module.exports = {
	getList,
	computeSum,
	getYear,
	getMonth,
	getDays
}



