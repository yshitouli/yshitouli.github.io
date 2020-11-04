
/* 共同的js */

window.onload = function() {
	let divObj = document.querySelectorAll(".box ul li div"); //获取所有金额盒子
	for(let i=0; i<divObj.length; i++) { //循环所有金额盒子
		let pObj = divObj[i].querySelectorAll("p"); //获取当前盒子的 全部p 标签
		let pCount = pObj.length; //盒子有多少个 p 标签
		pBorder(pObj, Math.floor((pCount-1)/3)*3); //计算多少个 p 需要加 borderBottom，并调用函数
	}

	mouthSum(".one");

	yearSum();
}


/**
 * 给 p 标签加 borderBottom
 * @param { Array } pObj p元素数组对象
 * @param { Number } l 元素个数
 */
function pBorder(pObj, l) {
	for(let i=1; i<=l; i++) { //循环所有 p
		pObj[i-1].style.borderBottom = "0.1rem solid #0000FF";
	}
}


/**
 * 计算每个月的 支出与收入 的总和
 * @param { String } mouth 月数类名
 */
function mouthSum(mouth) {
	let bObj = document.querySelectorAll(mouth+" ul li p b"); //获取所有的 收入 盒子
	let strongObj = document.querySelectorAll(mouth+" ul li p strong"); //获取所有的 支出 盒子
	let sumB = 0;
	let sumS = 0;

	for(let i=0; i<bObj.length; i++) { //循环每个 收入
		sumB += Number(bObj[i].innerText); //累加每个 收入
	}
	document.querySelector(mouth+" .monthSum div p b").innerText = sumB.toFixed(2); //将计算得到的值放入到对应标签中

	for(let i=0; i<strongObj.length; i++) { //循环每个 支出
		sumS += Number(strongObj[i].innerText); //累加每个 支出
	}
	document.querySelector(mouth+" .monthSum div p strong").innerText = sumS.toFixed(2); //将计算得到的值放入到对应标签中
}



function yearSum() {
	let bObj = document.querySelectorAll(".monthSum b"); //获取所有的 收入 盒子
	let strongObj = document.querySelectorAll(".monthSum strong"); //获取所有的 支出 盒子
	let sumB = 0;
	let sumS = 0;

	for(let i=0; i<bObj.length; i++) { //循环每个 收入
		sumB += Number(bObj[i].innerText); //累加每个 收入
	}
	document.querySelector(".yearSum b").innerText = sumB.toFixed(2); //将计算得到的值放入到对应标签中

	for(let i=0; i<strongObj.length; i++) { //循环每个 支出
		sumS += Number(strongObj[i].innerText); //累加每个 支出
	}
	document.querySelector(".yearSum strong").innerText = sumS.toFixed(2); //将计算得到的值放入到对应标签中
}