
/* 数据计算 */

/**
 * 获取指定集合
 * @param { Array } list 原始集合
 * @param { String } [flag] 支出|收入
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
				list.forEach(item => {
					
				});
			}
		} else {
			// list和year，返回某年所有的 收支
			year = flag;
			flag = "";
			month = 0;
			type = "";
			list.forEach(item => {
					
			});
		}
	} else if(arguments.length === 3) {
		if(typeof(flag)==="string") {
			if(typeof(year)==="number") {
				// list、flag和year，返回某年所有的 支出或收入
				month = 0;
				type = "";
				list.forEach(item => {
					
				});
			} else {
				// list、flag和type，返回某类所有的 支出或收入
				type = year;
				year = 0;
				month = 0;
				list.forEach(item => {
					
				});
			}
		} else {
			if(typeof(year)==="number") {
				// list、year和month，返回某年某月的所有 收支
				month = year;
				year = flag;
				flag = "";
				type = "";
				list.forEach(item => {
					
				});
			} else {
				// list、year和type，返回某年某类的所有 收支
				type = year;
				year = flag;
				flag = "";
				month = 0;
				list.forEach(item => {
					
				});
			}
		}
	} else if(arguments.length === 4) {
		if(typeof(flag) === "string") {
			if(typeof(month) === "number") {
				// list、flag、year和month，返回某年某月的所有 支出或收入
				type = "";
				list.forEach(item => {
					
				});
			} else {
				// list、flag、year和type，返回某年某类的所有 支出或收入
				type = month;
				month = 0;
				list.forEach(item => {
					
				});
			}
		} else {
			// list、year、month和type，返回某年某月某类的所有 收支
			type = month;
			month = year;
			year = flag;
			flag = "";
			list.forEach(item => {
					
			});
		}
	}
	// 5个参数，返回某年某月某类所有的 支出或收入
	list.forEach(item => {
					
	});
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


module.exports = {
	getList,
	computeSum
}



