
/* 数据计算 */
import { expend, income } from '../data/data.js';

/**
 * 获取 某一年 所有 支出
 * @param { Number } year 要获取的 年份
 * @return { Array } 返回当年的所有 支出项
 */
function getYearAllExpend(year) {
	let yearData = [];
	for(let i=0; i<expend.length; i++) {
		if(expend[i].time.year === year) {
			yearData.push(expend[i]);
		}
	}
	return yearData;
}

/**
 * 计算 某年 总支出
 * @param { Number } year 要计算的 年份
 * @return { Number } 返回当年的 支出总和
 */
function conputeYearAllExpend(year) {
	let yearData = getYearAllExpend(year);
	let sum = 0;
	for(let i=0; i<yearData.length; i++) {
		sum += Number(yearData[i].money);
	}
	return Number(sum.toFixed(2));
}

/**
 * 计算 某年 某类 总支出
 * @param { Number } year 要计算的 年份
 * @param { String } type 要计算的 类型
 * @return { Number } 返回当年此类的 支出总和
 */
function conputeYearTypeExpend(year, type) {
	let yearData = getYearAllExpend(year);
	let sum = 0;
	for(let i=0; i<yearData.length; i++) {
		if(yearData[i].type === type) {
			sum += Number(yearData[i].money);
		}
	}
	return Number(sum.toFixed(2));
}


/**
 * 获取 某一月 所有 支出
 * @param { Number } year 要获取的 年份
 * @param { Number } month 要获取的 月份
 * @return { Array } 返回当月的所有 支出项
 */
function getMonthAllExpend(year, month) {
	let monthData = []
	for(let i=0; i<expend.length; i++) {
		if(expend[i].time.year===year && expend[i].time.month===month) {
			monthData.push(expend[i]);
		}
	}
	return monthData;
}

/**
 * 计算 某月 总支出
 * @param { Number } year 要计算的 年份
 * @param { Number } month 要计算的 月份
 * @return { Number } 返回当前月份的总支出
 */
function conputeMonthAllExpend(year, month) {
	let monthData = getMonthAllExpend(year, month);
	let sum = 0;
	for(let i=0; i<monthData.length; i++) {
		sum += Number(monthData[i].money);
	}
	return Number(sum.toFixed(2));
}

/**
 * 计算 某月 某类 支出总和
 * @param { Number } year 要计算的 年份
 * @param { Number } month 要计算的 月份
 * @param { String } type 要计算的 支出类型
 * @return { Number } 返回当前 月份该类型的 支出总和
 */
function conputeMonthTypeExpend(year, month, type) {
	let monthData = getMonthAllExpend(year, month);
	let sum = 0;
	for (let i=0; i<monthData.length; i++) {
		if(monthData[i].type === type) {
			sum += Number(monthData[i].money);
		}
	}
	return Number(sum.toFixed(2));
}




/**
 * 获取 某一年 所有 收入
 * @param { Number } year 要获取的 年份
 * @return { Array } 返回当年的所有 收入项
 */
function getYearAllIncome(year) {
	let yearData = [];
	for(let i=0; i<expend.length; i++) {
		if(expend[i].time.year === year) {
			yearData.push(expend[i]);
		}
	}
	return yearData;
}

/**
 * 计算 某年 总收入
 * @param { Number } year 要计算的 年份
 * @return { Number } 返回当年的 收入总和
 */
function conputeYearAllIncome(year) {
	let yearData = getYearAllIncome(year);
	let sum = 0;
	for(let i=0; i<yearData.length; i++) {
		sum += Number(yearData[i].money);
	}
	return Number(sum.toFixed(2));
}

/**
 * 计算 某年 某类 总收入
 * @param { Number } year 要计算的 年份
 * @param { String } type 要计算的 类型
 * @return { Number } 返回当年此类的 收入总和
 */
function conputeYearTypeIncome(year, type) {
	let yearData = getYearAllIncome(year);
	let sum = 0;
	for(let i=0; i<yearData.length; i++) {
		if(yearData[i].type === type) {
			sum += Number(yearData[i].money);
		}
	}
	return Number(sum.toFixed(2));
}


/**
 * 获取 某一月 所有 收入
 * @param { Number } year 要获取的 年份
 * @param { Number } month 要获取的 月份
 * @return { Array } 返回当月的所有 收入项
 */
function getMonthAllIncome(year, month) {
	let monthData = []
	for(let i=0; i<expend.length; i++) {
		if(expend[i].time.year===year && expend[i].time.month===month) {
			monthData.push(expend[i]);
		}
	}
	return monthData;
}

/**
 * 计算 某月 总收入
 * @param { Number } year 要计算的 年份
 * @param { Number } month 要计算的 月份
 * @return { Number } 返回当前月份的总收入
 */
function conputeMonthAllIncome(year, month) {
	let monthData = getMonthAllIncome(year, month);
	let sum = 0;
	for(let i=0; i<monthData.length; i++) {
		sum += Number(monthData[i].money);
	}
	return Number(sum.toFixed(2));
}

/**
 * 计算 某月 某类 收入总和
 * @param { Number } year 要计算的 年份
 * @param { Number } month 要计算的 月份
 * @param { String } type 要计算的 收入类型
 * @return { Number } 返回当前 月份该类型的 收入总和
 */
function conputeMonthTypeIncome(year, month, type) {
	let monthData = getMonthAllIncome(year, month);
	let sum = 0;
	for (let i=0; i<monthData.length; i++) {
		if(monthData[i].type === type) {
			sum += Number(monthData[i].money);
		}
	}
	return Number(sum.toFixed(2));
}



export default {
	getYearAllExpend,
	conputeYearAllExpend,
	conputeYearTypeExpend,
	getMonthAllExpend,
	conputeMonthAllExpend,
	conputeMonthTypeExpend,
	getYearAllIncome,
	conputeYearAllIncome,
	conputeYearTypeIncome,
	getMonthAllIncome,
	conputeMonthAllIncome,
	conputeMonthTypeIncome
}



