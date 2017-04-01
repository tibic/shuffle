var tempArrNum = shuffle.card.number.slice(0);
var nameList = [];


// 生成名字数组
for(var k=0;k<shuffle.card.number.length;k++){
	var list = 'array' + shuffle.card.number[k];
	nameList.push(list);
}

for(var l=0;l< nameList.length;l++){
	nameList[l] = [];
}

// 执行随机
for (var i = shuffle.times - 1; i >= 0; i--) {
	startTest();
};

function startTest(){
	var res = shuffle.testFun(tempArrNum);
	// 统计各个位置出现的次数
	for(var j = 0;j < shuffle.card.number.length;j++){
		for (var i = 0; i < res.length; i++) {
			if(res[i] == shuffle.card.number[j]){
				if(nameList[j][i] == undefined){
					nameList[j][i] = 1;
				} else {
					nameList[j][i]+= 1;
				}
				break;
			}
		}
	}
}


var myChart = echarts.init(document.getElementById('myChart'));

var option = {
    title: {
        text: '洗牌算法',
        subtext: '次数'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['0','1','2','3','5','6','7','8','9','10','11','12']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: shuffle.card.number
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 次'
        }
    },
    series: [
        
    ]
};

var seriesObj = {
    name: '1',
    type:'line',
    data: '',
    markPoint: {
        data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
        ]
    }
}
// 深度克隆
function deepClone (obj) {  
    if(typeof obj !== "object" && typeof obj !== 'function') {
        return obj;        //原始类型直接返回
    }
    var o = isArray(obj) ? [] : {}; 
    for(i in obj) {  
        if(obj.hasOwnProperty(i)){ 
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i]; 
        } 
    } 
    return o;
}
function isArray (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';  
}

for (var m = 0; m < nameList.length; m++) {
	var cloneSeriesObj = deepClone(seriesObj);
	cloneSeriesObj.name = m;
	cloneSeriesObj.data = nameList[m];
	option.series.push(cloneSeriesObj);
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

function indexFun(arr,str){
	return arr.indexOf(str) + 1;
}


