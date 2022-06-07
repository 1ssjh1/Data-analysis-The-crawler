/****** PLACE YOUR CUSTOM STYLES HERE ******/

var legal_person_data = {
    "uploadData": [{ "count": 23.84 }, { "count": 24.43 }, { "count": 33.12 }, { "count": 33.12 }],
    "updateData": [{ "count": 22.65 }, { "count": 25.88 }, { "count": 20.47 }, { "count": 20.35 }],
    "viewData": [{ "count": 21.16 }, { "count": 22.82 }, { "count": 12.40 }, { "count": 12.40 }]
};
var people_data = {
    "uploadData": [{ "count": 32.54 }, { "count": 41.85 }, { "count": 56.58 }, { "count": 59.12 }, ],
    "updateData": [{ "count": 22.31 }, { "count": 29.36 }, { "count": 49.88 }, { "count": 43.43 }, ],
    "viewData": [{ "count": 20.94 }, { "count": 26.36 }, { "count": 35.23 }, { "count": 33.31 }, ]
};
var picture_data = {
    "uploadData": [{ "count": 37.81 }, { "count": 47.70 }, { "count": 8.81 }, { "count": 8.81 }],
    "updateData": [{ "count": 48.89 }, { "count": 92.36 }, { "count": -14.85 }, { "count": -11.99 }],
    "viewData": [{ "count": 35.47 }, { "count": 43.27 }, { "count": -13.86 }, { "count": -5.33 }]
};

var Tpl1 = '<li>' +
    '<p class="data-count">29.61</p>' +
    '<span class="data-name">三年复合</span>' +
    '</li>' +
    '<li>' +
    '<p class="data-count">9.68</p>' +
    '<span class="data-name">三年行业平均</span>' +
    '</li>' +
    '<li>' +
    '<p class="data-count">11.35</p>' +
    '<span class="data-name">三年行业中值</span>' +
    '</li>';
var Tpl2 = '<li>' +
    '<p class="data-count">3971</p>' +
    '<span class="data-name">三年复合</span>' +
    '</li>' +
    '<li>' +
    '<p class="data-count">1141</p>' +
    '<span class="data-name">三年行业平均</span>' +
    '</li>' +
    '<li>' +
    '<p class="data-count">3753</p>' +
    '<span class="data-name">三年行业中值</span>' +
    '</li>';
var Tpl3 = '<li>' +
    '<p class="data-count">0.69</p>' +
    '<span class="data-name">PEG</span>' +
    '</li>' +
    '<li>' +
    '<p class="data-count">0.62</p>' +
    '<span class="data-name">PEG行业平均</span>' +
    '</li>' +
    '<li>' +
    '<p class="data-count">0.57</p>' +
    '<span class="data-name">PEG行业中值</span>' +
    '</li>';
$('.com-screen-content .use-data').html(Tpl1);
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));
//var myChart4 = echarts.init(document.getElementById('main4'));
var myChart5 = echarts.init(document.getElementById('main5'));
var myChart6 = echarts.init(document.getElementById('main6'));
var myChart7 = echarts.init(document.getElementById('main7'));

getNowFormatDate();
init_myChart1();
init_myChart2();
init_myChart3(legal_person_data);
init_myChart5();
init_myChart6();
init_myChart7();


function init_myChart3(data) {

    var uploadCnt = [];
    var updateCnt = [];

    var viewCnt = [];
    if (data.uploadData != null) {
        for (var i = 0; i < data.uploadData.length; i++) {
            uploadCnt.push(data.uploadData[i].count);
        }
    }
    if (data.updateData != null) {
        for (var i = 0; i < data.updateData.length; i++) {
            updateCnt.push(data.updateData[i].count);
        }
    }

    if (data.viewData != null) {
        for (var i = 0; i < data.viewData.length; i++) {
            viewCnt.push(data.viewData[i].count);
        }
    }
    option = {

        tooltip: {
            trigger: 'axis',
            formatter: function(params, ticket, callback) {
                var res = '';
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
                }
                return res;
            },
            transitionDuration: 0,
            backgroundColor: 'rgba(83,93,105,0.8)',
            borderColor: '#535b69',
            borderRadius: 8,
            borderWidth: 2,
            padding: [5, 10],
            axisPointer: {
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    color: '#ffff00'
                }
            }
        },
        legend: {
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 10,
            top: '16',
            right: '10',
            data: ['安井食品', '平均值', '中值'],
            textStyle: {
                fontSize: 14,
                color: '#a0a8b9'
            }
        },
        grid: {
            top: '46',
            left: '13%',
            right: '10',
            //bottom: '10%',
            containLabel: false
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                fontSize: 14
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#a0a8b9'
                }
            },
            axisTick: {
                show: false
            },
            data: ['23E', '22E', 'TTM', '21A'],
            offset: 10
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#a0a8b9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#2b3646'
                }
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: '安井食品',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#1cc840'
                }
            },
            data: uploadCnt
        }, {
            name: '中值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#eb5690'
                }
            },
            data: viewCnt
        }, {
            name: '平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#43bbfb'
                }
            },
            data: updateCnt
        }]
    };
    myChart3.setOption(option);
}

function init_myChart2() {
    var data = {
        "uploadData": [{ "count": 25.61 }, { "count": 29.97 }, { "count": 34.84 }, { "count": 42.59 }, { "count": 52.67 }, { "count": 69.65 }, { "count": 92.72 }],
        "updateData": [{ "count": 1.283 }, { "count": 1.774 }, { "count": 2.024 }, { "count": 2.703 }, { "count": 3.733 }, { "count": 6.038 }, { "count": 6.823 }],
        "viewData": [{ "count": 1.045 }, { "count": 1.619 }, { "count": 1.793 }, { "count": 2.428 }, { "count": 3.353 }, { "count": 5.569 }, { "count": 5.598 }]
    };
    var uploadCnt = [];
    var updateCnt = [];

    var viewCnt = [];
    if (data.uploadData != null) {
        for (var i = 0; i < data.uploadData.length; i++) {
            uploadCnt.push(data.uploadData[i].count);
        }
    }
    if (data.updateData != null) {
        for (var i = 0; i < data.updateData.length; i++) {
            updateCnt.push(data.updateData[i].count);
        }
    }

    if (data.viewData != null) {
        for (var i = 0; i < data.viewData.length; i++) {
            viewCnt.push(data.viewData[i].count);
        }
    }
    option = {

        tooltip: {
            trigger: 'axis',
            formatter: function(params, ticket, callback) {
                var res = '';
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
                }
                return res;
            },
            transitionDuration: 0,
            backgroundColor: 'rgba(83,93,105,0.8)',
            borderColor: '#535b69',
            borderRadius: 8,
            borderWidth: 2,
            padding: [5, 10],
            axisPointer: {
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    color: '#ffff00'
                }
            }
        },
        legend: {
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 10,
            top: '5px',
            right: '7%',
            bottom: "12%",
            data: ['营业总收入(亿元)', '归属净利润(亿元)', '扣除非净利润(亿元)'],
            textStyle: {
                fontSize: 14,
                color: '#a0a8b9'
            }
        },
        grid: {
            top: '20',
            left: '9%',
            right: '7%',
            bottom: '12%',
            containLabel: false
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                fontSize: 14
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#a0a8b9'
                }
            },
            axisTick: {
                show: false
            },
            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            offset: 10
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#a0a8b9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#2b3646'
                }
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: '营业总收入(亿元)',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#1cc840'
                }
            },
            data: uploadCnt
        }, {
            name: '归属净利润(亿元)',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#eb5690'
                }
            },
            data: viewCnt
        }, {
            name: '扣除非净利润(亿元)',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#43bbfb'
                }
            },
            data: updateCnt
        }]
    };
    myChart2.setOption(option);
}

function init_myChart1() {
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#8fc31f', '#f35833', '#00ccff', '#ffcc00', '#f5e965', '#a74faf', '#ff9668'],

        series: [{
            name: '主盈构成',
            type: 'pie',
            radius: '40%',
            center: ['50%', '50%'],
            data: [
                { value: 37.51, name: '鱼制品' },
                { value: 23.10, name: '肉制品' },
                { value: 22.15, name: '面米制品' },
                { value: 15.41, name: '菜肴' },
                { value: 16.0, name: '农副产品' },
                { value: 0.03, name: '休闲食品' },
                { value: 0.19, name: '其他' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        //	                            position:'inside',
                        formatter: '{b} : {c} ({d}%)',
                        fontSize: 14, //文字的字体大小
                    }
                },
                labelLine: { show: true }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
}

function init_myChart5() {

    //var XData=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
    //var yData=[1243,2315,1164,3021,3521,4121,2001,1983,2541,2612,2331,1992];
    var XData = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];
    var yData = [60.89, 59.47, 47.91, 55.12, 51.73, 48.09, 41.36];
    option = {
        backgroundColor: "",
        xAxis: {
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            data: XData,
            axisLabel: {
                formatter: function(value) {
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 1; //每项显示文字个数
                    var valLength = value.length + 3; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                },
                interval: 0,
                fontSize: 14,
                fontWeight: 100,
                textStyle: {
                    color: '#9faeb5',

                }
            },
            axisLine: {
                lineStyle: {
                    color: '#4d4d4d'
                }
            }
        },
        yAxis: {
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },

            axisLabel: {
                textStyle: {
                    color: '#9faeb5',
                    fontSize: 16,
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#4d4d4d'
                }
            }
        },
        "tooltip": {
            "trigger": "axis",
            transitionDuration: 0,
            backgroundColor: 'rgba(83,93,105,0.8)',
            borderColor: '#535b69',
            borderRadius: 8,
            borderWidth: 2,
            padding: [5, 10],
            formatter: function(params, ticket, callback) {
                var res = '';
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
                }
                return res;
            },
            axisPointer: {
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    color: '#ffff00'
                }
            }
        },
        series: [{
            name: '负债比率',
            type: "bar",
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#00d386' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0076fc' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: 15,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10
                    }
                }
            },
            data: yData,
            barWidth: 16,
        }, {
            name: '折线',
            type: 'line',
            itemStyle: { /*设置折线颜色*/
                normal: {
                    /* color:'#c4cddc'*/
                }
            },
            data: yData
        }]
    };
    myChart5.setOption(option);
}
//刷新myChart5数据



function init_myChart6() {
    var data = {


        "uploadData": [{ "count": 271.1, "areaName": "2015" }, { "count": 275.9, "areaName": "2016" }, { "count": 296.0, "areaName": "2017" }, { "count": 330.2, "areaName": "2018" }, { "count": 350.2, "areaName": "2019" }, { "count": 330.3, "areaName": "2020" }, { "count": 308.0, "areaName": "2021" }]
    };
    var uploadCnt = [];
    var updateCnt = [];
    //var collectionCnt = [];
    //var dailyCnt = [];
    var viewCnt = [];
    var areaNameS = [];
    if (data.uploadData) {
        for (var i = 0; i < data.uploadData.length; i++) {
            uploadCnt.push(data.uploadData[i].count);
            areaNameS.push(data.uploadData[i].areaName);
        }
    }
    if (data.updateData) {
        for (var i = 0; i < data.updateData.length; i++) {
            updateCnt.push(data.updateData[i].count);
        }
    }
    if (data.viewData) {
        for (var i = 0; i < data.viewData.length; i++) {
            viewCnt.push(data.viewData[i].count);
        }
    }
    option = {
        "tooltip": {
            "trigger": "axis",
            transitionDuration: 0,
            backgroundColor: 'rgba(83,93,105,0.8)',
            borderColor: '#535b69',
            borderRadius: 8,
            borderWidth: 2,
            padding: [5, 10],
            formatter: function(params, ticket, callback) {
                var res = '';
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
                }
                return res;
            },
            axisPointer: {
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    color: '#ffff00'
                }
            }
        },
        "grid": {
            "top": '40',
            "left": '30',
            "right": '10',
            "bottom": '40',

            textStyle: {
                color: "#fff"
            }
        },
        "legend": {
            right: '24',
            top: "24",
            itemWidth: 8,
            itemHeight: 12,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            "data": ['总资产周转天数(天)'],

        },
        "calculable": true,
        xAxis: [{
            'type': 'category',
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false,
                lineStyle: {
                    color: '#868c96'
                }
            },
            "axisLabel": {
                "interval": 0,
                fontSize: 14,
                formatter: function(value) {
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 2; //每项显示文字个数
                    var valLength = value.length; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                }



            },
            "splitArea": {
                "show": false
            },
            'data': areaNameS,
            splitLine: {
                show: false
            }
        }],
        "yAxis": [{
            "type": "value",
            offset: -14,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "show": false,
                lineStyle: {
                    color: '#868c96'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                fontSize: 14

            },
            "splitArea": {
                "show": false
            }
        }],

        "series": [{
            "name": "总资产周转天数(天)",
            "type": "bar",

            "barGap": "10%",
            itemStyle: { //图形样式
                normal: {
                    "color": '#4a4df0'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10
                    }
                }
            },
            "data": uploadCnt,
            barWidth: 14,
        }, {
            name: '折线',
            type: 'line',
            itemStyle: { /*设置折线颜色*/
                normal: {
                    color: '#c7b198'
                }
            },
            data: [271.1, 275.9, 296.0, 330.2, 350.2, 330.2, 308.0],

        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart6.setOption(option);
}

function init_myChart7() {


    var colorList = [
        '#ff2600',
        '#ffc000',
        '#00ad4e',
        '#0073c2',
        '#165868',
        '#e76f00',
        '#316194',
        '#723761',
        '#00b2f1',
        '#4d6022',
        '#4b83bf',
        '#f9c813',
        '#0176c0'
    ];
    var xData = ["2015", "2016", "2017", "1208", "2019", "2020", "2021"];
    var yData = [15.36, 17.00, 16.27, 22.25, 23.66, 32.25, 33.12];
    option = {
        color: colorList,
        "tooltip": {
            "trigger": "axis",
            transitionDuration: 0,
            backgroundColor: 'rgba(83,93,105,0.8)',
            borderColor: '#535b69',
            borderRadius: 8,
            borderWidth: 2,
            padding: [5, 10],
            formatter: function(params, ticket, callback) {
                var res = '';
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
                }
                return res;
            },
            axisPointer: {
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    color: '#ffff00'
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },

            }
        },
        grid: {
            "borderWidth": 0,
            "top": '40',
            "left": '30',
            "right": '10',
            "bottom": '40',
            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            'type': 'category',
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false,
                lineStyle: {
                    color: '#868c96'
                }
            },
            "axisLabel": {
                "interval": 0,
                fontSize: 14,
                formatter: function(value) {
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 2; //每项显示文字个数
                    var valLength = value.length; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                }
            },
            "splitArea": {
                "show": false
            },
            'data': xData,
            splitLine: {
                show: false
            },

        }],
        yAxis: [{
                "type": "value",
                offset: -14,
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    "show": false,
                    lineStyle: {
                        color: '#868c96'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
                    fontSize: 14

                },
                "splitArea": {
                    "show": false
                }
            }

        ],
        series: [{
                name: '营业收入同比增长比率',
                type: 'bar',
                data: yData,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff2600',
                                '#ffc000',
                                '#00ad4e',
                                '#0073c2',
                                '#165868',
                                '#e76f00',
                                '#316194',
                                '#723761',
                                '#00b2f1',
                                '#4d6022',
                                '#4b83bf',
                                '#f9c813',
                                '#0176c0'
                            ];
                            return colorList[params.dataIndex]
                        },

                    }
                },
                barWidth: 14,
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "#ffc72b",
                            fontSize: 10
                        }
                    }
                },
            },
            {
                name: '折线',
                type: 'line',
                itemStyle: { /*设置折线颜色*/
                    normal: {
                        color: '#d3d5fd'
                    }
                },
                data: yData
            }

        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option);
}
//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var Hour = date.getHours(); // 获取当前小时数(0-23)
    var Minute = date.getMinutes(); // 获取当前分钟数(0-59)
    var Second = date.getSeconds(); // 获取当前秒数(0-59)
    var show_day = new Array("15", "16", "17", "18", "19", "20", "21");
    var day = date.getDay();
    if (Hour < 10) {
        Hour = "0" + Hour;
    }
    if (Minute < 10) {
        Minute = "0" + Minute;
    }
    if (Second < 10) {
        Second = "0" + Second;
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = '<div><p>' + year + '年' + month + '月' + strDate + '号</p><p>' + show_day[day] + '</p></div>';
    var HMS = Hour + ':' + Minute + ':' + Second;
    var temp_time = year + '-' + month + '-' + strDate + ' ' + HMS;
    $('.nowTime li:nth-child(1)').html(HMS);
    $('.nowTime li:nth-child(2)').html(currentdate);
    //$('.topRec_List li div:nth-child(3)').html(temp_time);
    setTimeout(getNowFormatDate, 1000); //每隔1秒重新调用一次该函数
}
var resourceDataType = $('.data-label li.active').data('type'); //用于切换基础库
function urlType() {
    resourceDataType = $('.data-label li.active').data('type');
    if (resourceDataType == 1) {
        init_myChart3(legal_person_data);
        $('.com-screen-content .use-data').html(Tpl1);
    } else if (resourceDataType == 2) {
        init_myChart3(people_data);
        $('.com-screen-content .use-data').html(Tpl2);
    } else if (resourceDataType == 3) {
        init_myChart3(picture_data);
        $('.com-screen-content .use-data').html(Tpl3);
    }
}
var num = 0;
//    资源类型定时器
function resourceType() {
    $('.data-label li').eq(num).addClass('active').siblings().removeClass('active');
    //$('.active-data-label').html($('.canvas-pic-two .data-label li.active').html());
    urlType();
    num++;
    if (num >= 3) {
        num = 0;
    }
}

//    资源类型点击切换
$('.data-label').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.active-data-label').html($('.data-label li.active').html());
    urlType();
});
var oTimer = setInterval(resourceType, 3000);
//    hover清除定时器
$('.data-label').hover(function() {
    clearInterval(oTimer);
}, function() {
    oTimer = setInterval(resourceType, 3000);
});

/*function resize(){
	window.addEventListener("resize", () => { 
  	this.myChart1.resize;
	this.myChart2.resize;
	this.myChart3.resize;
	this.myChart5.resize;
	this.myChart6.resize;
	this.myChart7.resize;
});
}*/

setInterval(function() {
    window.onresize = function() {
        this.myChart1.resize;
        this.myChart2.resize;
        this.myChart3.resize;
        this.myChart5.resize;
        this.myChart6.resize;
        this.myChart7.resize;
    }
}, 200)

//myChart7.resize();