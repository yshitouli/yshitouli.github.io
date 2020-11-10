
/* 数据计算 */

/**
 * 获取 支出或者收入所有集合
 * 
 * @param { Array } list 所有的集合
 * @param { String } flag 条件（支出|收入）
 * @return { Array } 支出或收入的所有集合
 */
function getFlag(list, flag) {
	let allList = [];
	list.forEach(item => {
		if(item.flag===flag && item.money>0) {
			allList.push(item);
		}
	});
	/* allList = allList.sort(function(a, b) {
		return a.time.year - b.item.year;
	}); */
	return allList;
}

/**
 * 获取 某一年 所有 数据项
 * @param { Array } list 总集合
 * @param { Number } year 要获取的 年份
 * @return { Array } 返回当年的所有 项
 */
function getYearAll(list, year) {
	let yearData = [];
	list.forEach(item => {
		if(item.time.year==year && item.money>0) {
			yearData.push(item);
		}
	});
	/* yearData = yearData.sort(function(a, b) {
		return a.time.year - b.time.year;
	}); */
	return yearData;
}

/**
 * 获取 某一年 某月 数据项
 * @param { Array } list 总集合
 * @param { Number } year 要获取的 年份
 * @param { Number } year 要获取的 月份
 * @return { Array } 返回当月的所有 项
 */
function getMonthAll(list, year, month) {
	let yearData = getYearAll(list, year);
	let monthData = [];
	yearData.forEach(item => {
		if(item.time.month==month && item.money>0) {
			monthData.push(item);
		}
	});
	/* monthData = monthData.sort(function(a, b) {
		return a.time.year - b.time.year;
	}); */
	return monthData;
}

/**
 * 获取 某年或者某月或者全部的 某类集合
 * @param { Array } list 年集合|月集合|总集合
 * @param { String } type 要获取的类别
 * @return { Array } 该类集合
 */
function getType(list, type) {
	let typeData = [];
	list.forEach(item => {
		if(item.type===type && item.money>0) {
			typeData.push(item);
		}
	});
	return typeData;
}

/**
 * 计算总和
 * @param {*} list 要计算的集合
 * @return { Number } 总和
 */
function computeSum(list) {
	let sum = 0;
	list.forEach(item => {
		sum += Number(item.money);
	});
	return sum.toFixed(2);
}


module.exports = {
	getFlag,
	getYearAll,
	getMonthAll,
	getType,
	computeSum
}



