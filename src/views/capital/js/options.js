import echarts from 'echarts'
var sqds_category = ['双创便利店', '跨境优品', '智慧冷链', '民情通便利店',
    '心喜宜家裕华店', '迈绿达农产品', '豫兰粮油旗舰店', '兰州欣海天然绿色食品', '佳家乐家政服务',
    '油条司令', '兰飞酱猪蹄', '快乐星汉堡店', '艾梵希美容美发', '三维年货铺', '华兰美烧烤', '三合居串串香火锅店',
    '朝亮蔬菜水果店', '百花香温馨花店', '顶牛拉面'];

var data =
    [
        [28604, 77, 17099, '双创便利店', '2020年6月'],
        [31163, 77.4, 2440, '跨境优品', '2020年6月'],
        [1516, 68, 1605773, '智慧冷链', '2020年6月'],
        [13670, 74.7, 10082, '民情通便利店', '2020年6月'],
        [28599, 75, 49805, '心喜宜家裕华店', '2020年6月'],
        [29476, 77.1, 569499, '迈绿达农产品', '2020年6月'],
        [31476, 75.4, 789237, '豫兰粮油旗舰店', '2020年6月'],
        [28666, 78.1, 254830, '兰州欣海天然绿色食品', '2020年6月'],
        [1777, 57.7, 870776, '佳家乐家政服务', '2020年6月'],
        [29550, 79.1, 129285, '油条司令', '2020年6月'],
        [2076, 67.9, 201954, '兰飞酱猪蹄', '2020年6月'],
        [12087, 72, 42954, '快乐星汉堡店', '2020年6月'],
        [24021, 75.4, 33934, '艾梵希美容美发', '2020年6月'],
        [43296, 76.8, 4240375, '三维年货铺', '2020年6月'],
        [10088, 70.8, 381958, '华兰美烧烤', '2020年6月'],
        [19349, 69.6, 1475652, '三合居串串香火锅店', '2020年6月'],
        [10670, 67.3, 53905, '朝亮蔬菜水果店', '2020年6月'],
        [26424, 75.7, 57117, '百花香温馨花店', '2020年6月'],
        [37062, 75.4, 252810, '顶牛拉面', '2020年6月']
    ]
    ;

var wy_data = [];
for (var i = 0; i < 5; i++) {   // 五个类别         '物业', '电费', '停车', '燃气', '水费'
    var _data = [];
    for (var j = 0; j < 30; j++) {
        if (i === 0) { // 物业
            _data.push(2000 + randomNum(1900, 2100));       // 2000 * 30
        }
        if (i === 1) { // 电费
            _data.push(1333 + randomNum(1000, 1666));       // 2000 * 20
        }
        if (i === 2) { // 停车
            _data.push(10000 + randomNum(500, 2000));    // 1000 * 300
        }
        if (i === 3) { // 燃气
            _data.push(666 + randomNum(333, 999));          // 2000 * 10
        }
        if (i === 4) { // 水费
            _data.push(2000 + randomNum(500, 3500));        // 2000 * 30
        }
    }
    wy_data.push(_data);
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}


var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

var app = {};

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}',
    fontSize: 16,
    color: "#fff",
    rich: {
        name: {
        }
    },

};

export default {
    aleftboxtmidd: {
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#2C8179' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#18C4B9' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#ACBF95' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#7CBF2B' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#508097' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#1C3979' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#4d72d9' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#75489F' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        backgroundColor: 'rgba(1,202,217,.2)',
        title: [{
            text: '设备数量',
            textStyle: {
                color: '#a0b3c7',
                fontWeight: 'normal',
                fontSize: 14
            },
            top: 'top',
            left: '15%'
        }, {
            text: '运行状态',
            textStyle: {
                color: '#a0b3c7',
                fontWeight: 'normal',
                fontSize: 14
            },
            top: 'top',
            left: '65%'
        }],
        grid: {
            left: 10,
            right: 40,
            top: 20,
            bottom: 0,
            containLabel: true
        },
        legend: {
            x: 'center',
            y: '70%',
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,.7)'
            },
            data: ['门禁设备', '安防设备', '在线设备', '离线设备']
        },
        calculable: true,
        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: [5, 50],
                center: ['25%', '40%'],
                roseType: 'area',

                itemStyle: {
                    // normal: {
                    //     color: new echarts.graphic.LinearGradient(
                    //         1, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: '#76c4bf'
                    //         }, {
                    //             offset: 1,
                    //             color: '#ACBF95'
                    //         }]
                    //     )
                    // }
                },

                data: [{
                    value: 540,
                    name: '门禁设备'
                }, {
                    value: 480,
                    name: '安防设备'
                }]
            }, {
                name: '面积模式',
                type: 'pie',
                radius: [5, 50],
                center: ['75%', '40%'],
                roseType: 'area',

                data: [
                    { value: 1027, name: '在线设备' },
                    { value: 3, name: '离线设备' },

                ]
            }
        ]
    },
    aleftboxtbott: {
        color: ['#7ecef4'],
        backgroundColor: 'rgba(1,202,217,.2)',
        title: {
            top: 5,
            left: 20,
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,.6)'
            },
            text: '环比类型：月环比'
        },
        legend: {
            right: 10,
            top: 5,
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,.6)'
            },
            data: ['2020年5月', '2020年6月']
        },
        grid: {
            left: 20,
            right: 20,
            top: 30,
            bottom: 2,
            containLabel: true
        },

        xAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                color: "rgba(255,255,255,0)"
            },
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',

            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                color: "rgba(255,255,255,.5)"
            },
            data: ['用水量 (m³)', '用电量 (°)', '水费 (元)', '电费 (元)']
        },
        series: [{
            name: '2020年5月',
            type: 'bar',
            barWidth: 15,
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(77,114,217,.7)'
                        }, {
                            offset: 1,
                            color: 'rgba(117,72,159,.7'
                        }]
                    )
                }
            },
            data: [18203, 23489, 29034, 39098]
        }, {
            name: '2020年6月',
            type: 'bar',
            barWidth: 15,
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(230,253,139,.7)'
                        }, {
                            offset: 1,
                            color: 'rgba(41,220,205,.7)'
                        }]
                    )
                }
            },
            data: [19203, 24489, 30034, 40098]
        }]
    },
    mainleft: {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    },
    mainright: {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                //图例文字的样式
                color: "#fff",
                fontSize: 12
            }
        },
        // 图例
        legend: {
            type: "scroll",
            // orient: "vertical",
            top: 0,
            left: "center",
            data: [], //图例数据从后台获取
            textStyle: {
                //图例文字的样式
                color: "#fff",
                fontSize: 12
            }
        },
        // 直角坐标系内绘图网格
        grid: {
            left: "3%",
            right: "4%",
            bottom: "25%",
            containLabel: true
        },
        //图表展示数据从后台获取
        series: [],
    },
    colonyRate: {
        // title: {
        //     text: '折线图堆叠',
        //     textStyle: {
        //         color: 'rgba(255,255,255,1)'
        //     },
        // },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}%'
            // formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%'
        },
        color: ['#3CB371', '#DC143C', '#EE7621'],
        legend: {
            data: ['长沙FI集群HDFS使用率'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
            top: 'top'

        },
        grid: {
            left: '3%',
            right: '4%',
            top: "15%",
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                color: '#fff',
                formatter: '{value} %'//纵坐标百分比
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
        },
        series: [
            {
                name: '长沙FI集群HDFS使用率',
                type: 'line',
                stack: '总量',
                data: [10, 20, 18, 54, 40, 45, 70]
            }
        ]
    },
    fileState: {
        tooltip: {
            trigger: 'axis'
        },
        color: ['#3CB371', '#DC143C', '#EE7621'],
        legend: {
            data: ['长沙FI集群文件数', '长沙FI集群文件平均大小'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
            top: 'top'

        },
        grid: {
            left: '3%',
            right: '4%',
            top: "15%",
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name: '长沙FI集群文件数',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '长沙FI集群文件平均大小',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    },
    colony: {
        tooltip: { //弹窗组件
            formatter: "{a} <br/>{b} : {c}%",
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        series: [{
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: '{value}%', textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontSize: '14'
                },
            },
            data: [{
                value: 45, name: '完成率'
            }],
            radius: "80",
            label: {
                //  饼图图形上的文本标签
                normal: {
                    // normal 是图形在默认状态下的样式
                    show: true,
                    position: "center",
                    color: "#fff",
                    fontSize: 12,
                    formatter: "{a}", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                },
                emphasis: {
                    show: true,
                    position: "top",
                },
            },
            axisLine: {
                lineStyle: {
                    width: 10, // 这个是修改宽度的属性
                    color: [[0.45, 'rgb(255,141,26)'], [1, '#fff']]
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                },
            },
            pointer: {//point为设置指针箭头的效果
                //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                //当鼠标经过时会显示 箭头中间会显示一条白色的区域，这个区域可以通过css调整  如#map canvas[data-zr-dom-id=_zrender_hover_]{display: none!important;}
                show: true,
                //指针长度
                length: '60%',
                width: 4,
                color: "rgb(255,141,26)"
            },
            splitLine: {           // 分隔线
                length: 14,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 4,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                show: true
            }
        }]

    },
    arightboxbott: {
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#2C8179' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#18C4B9' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#ACBF95' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#7CBF2B' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#508097' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#1C3979' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#4d72d9' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#75489F' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        title: [{
            top: 125,
            left: 80,
            textStyle: {
                fontSize: 18,
                color: 'rgba(255,255,255,.6)'
            },
            text: '楼栋\n信息'
        }, {
            top: 125,
            right: 80,
            textStyle: {
                fontSize: 18,
                color: 'rgba(255,255,255,.6)'
            },
            text: '业主\n信息'
        }],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            left: 10,
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,.7)'
            },
            data: ['A区业主', 'B区业主', 'A区楼栋', 'B区楼栋']
        },
        grid: {

            containLabel: true
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['75%', '55%'],
            avoidLabelOverlap: false,
            label: {
                // show: false,
                position: 'inner',
                formatter: '{b} {c} 户'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 2335, name: 'A区业主' },
                { value: 810, name: 'B区业主' },
            ]
        }, {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['25%', '55%'],
            avoidLabelOverlap: false,
            label: {
                // show: false,
                position: 'inner',
                formatter: '{b} {c} 栋'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 22, name: 'A区楼栋' },
                { value: 9, name: 'B区楼栋' }
            ]
        }]
    },
    bussinessOne: {
        title: {
            text: '调度整体运行情况',
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        color: ["rgb(156,220,136) ", "rgb(224,111,108)", "rgb(50,211,235)", "rgb(229,142,94)"],
        legend: {
            data: ['运行成功', '运行失败', '运行中', '未运行'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['总调度', '普通接口', '重点接口', '模型', '普通指标', '普通报表', '普通同步', '集市同步', '出库接口', '入库接口'],
                axisLabel: {
                    color: '#fff'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: '运行成功',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 221, 234, 140, 259, 221]
            },
            {
                name: '运行失败',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 231, 231, 450, 359, 342]
            },
            {
                name: '运行中',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 344, 231, 145, 159, 223]
            },
            {
                name: '未运行',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [98, 77, 101, 99, 40, 100, 310, 140, 409, 345]
            }
        ]
    },
    bussinessTwo: {
        title: {
            text: '业务运行情况',
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        color: ["rgb(156,220,136) ", "rgb(224,111,108)", "rgb(50,211,235)", "rgb(229,142,94)"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['运行成功', '运行失败', '运行中', '未运行'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['业务发展彩信通报', '季度销售彩信通报', '一经前驱调度', '手机经分调度'],
                axisLabel: {
                    color: '#fff'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: '运行成功',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334]
            },
            {
                name: '运行失败',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234]
            },
            {
                name: '运行中',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154]
            },
            {
                name: '未运行',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [98, 77, 101, 99]
            }
        ]
    },
    bussinessTiwce: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['2012', '2013', '2014', '2015', '2016']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '运行成功',
                type: 'bar',
                data: [320, 332, 301, 334, 10, 309, 289, 238, 372],

            },
            {
                name: '运行失败',
                type: 'bar',
                stack: '广告',

                data: [120, 132, 101, 134, 362, 423, 293, 172, 301]
            },
            {
                name: '运行中',
                type: 'bar',
                stack: '广告',

                data: [220, 182, 191, 234, 372, 167, 384, 224, 591]
            },
            {
                name: '未运行',
                type: 'bar',
                stack: '广告',

                data: [150, 232, 201, 154, 829, 233, 123, 342, 447]
            },
        ]
    },
    bussinessLeft: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            // data: ['总调度', '普通接口', '重点接口', '模型', '普通指标', '普通报表', '普通同步', '集市同步', '出库接口', '入库接口', '业务发展彩信通报', '季度销售彩信通报', '一经前驱调度', '手机经分调度'],
            data: ['运行成功', '运行失败', '运行中', '未运行'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            top: "15%",
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                // data: ['运行成功', '运行失败', '运行中', '未运行'],
                data: ['总调度', '普通接口', '重点接口', '模型', '普通指标', '普通报表', '普通同步', '集市同步', '出库接口', '入库接口'],
                axisLabel: {
                    color: '#fff'
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#fff'
                }
            },

        ],
        series: [
            {
                name: '运行成功',
                type: 'bar',
                data: [320, 332, 301, 334, 10, 309, 289, 238, 372],

            },
            {
                name: '运行失败',
                type: 'bar',
                stack: '广告',

                data: [120, 132, 101, 134, 362, 423, 293, 172, 301]
            },
            {
                name: '运行中',
                type: 'bar',
                stack: '广告',

                data: [220, 182, 191, 234, 372, 167, 384, 224, 591]
            },
            {
                name: '未运行',
                type: 'bar',
                stack: '广告',

                data: [150, 232, 201, 154, 829, 233, 123, 342, 447]
            },
        ]
    },
    bussinessRight: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['接口', '模型', '标签', '指标', '报表'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            top: "15%",
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['成功', '运行', '异常', '未启动'],
                axisLabel: {
                    color: '#fff'
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#fff'
                }
            },

        ],
        series: [
            {
                name: '接口',
                type: 'bar',
                data: [320, 332, 301, 334]
            },
            {
                name: '模型',
                type: 'bar',
                stack: '广告',
                data: [120, 132, 101, 134]
            },
            {
                name: '标签',
                type: 'bar',
                stack: '广告',
                data: [220, 182, 191, 234]
            },
            {
                name: '指标',
                type: 'bar',
                stack: '广告',
                data: [150, 232, 201, 154]
            },
            {
                name: '报表',
                type: 'bar',
                data: [862, 1018, 964, 1026],
            }
        ]
    },
    interface: {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                //图例文字的样式
                color: "#fff",
                fontSize: 12
            }
        },
        // 图例
        legend: {
            type: "scroll",
            // orient: "vertical",
            top: 0,
            left: "center",
            data: [], //图例数据从后台获取
            textStyle: {
                //图例文字的样式
                color: "#fff",
                fontSize: 12
            }
        },
        // 直角坐标系内绘图网格
        grid: {
            left: '3%',
            right: '4%',
            top: "0%",
            bottom: '3%',
            containLabel: true
        },
        //图表展示数据从后台获取
        series: [{
            data: [
                //第一个圆环图
                {
                    name: "彩信通报",
                    label: {
                        normal: {
                            show: true,
                        },
                    },
                    data: [
                        {
                            name: "运行成功",
                            value: "37",
                        },
                        {
                            name: "运行失败",
                            value: "5",
                        },
                        {
                            name: "运行中",
                            value: "24",
                        },
                        {
                            name: "未运行",
                            value: "15",
                        },
                    ],
                },
                //第二个圆环图
                {
                    name: "一经前区",
                    label: {
                        normal: {
                            show: true,
                        },
                    },
                    data: [
                        {
                            name: "运行成功",
                            value: "37",
                        },
                        {
                            name: "运行失败",
                            value: "5",
                        },
                        {
                            name: "运行中",
                            value: "24",
                        },
                        {
                            name: "未运行",
                            value: "15",
                        },
                    ],
                },
                //第三个圆环图
                {
                    name: "网格前区",
                    label: {
                        normal: {
                            show: true,
                        },
                    },
                    data: [
                        {
                            name: "运行成功",
                            value: "37",
                        },
                        {
                            name: "运行失败",
                            value: "5",
                        },
                        {
                            name: "运行中",
                            value: "24",
                        },
                        {
                            name: "未运行",
                            value: "15",
                        },
                    ],
                },
                {
                    name: "重点报表",
                    label: {
                        normal: {
                            show: true,
                        },
                    },
                    data: [
                        {
                            name: "运行成功",
                            value: "37",
                        },
                        {
                            name: "运行失败",
                            value: "5",
                        },
                        {
                            name: "运行中",
                            value: "24",
                        },
                        {
                            name: "未运行",
                            value: "15",
                        },
                    ],
                },
            ]
        }],
    },
    target: {
        color: ['#3CB371', '#DC143C', '#EE7621'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['请求总数', '已响应且成为目标客户数', '超时数'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            top: "15%",
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name: '请求总数',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '已响应且成为目标客户数',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '超时数',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    },
    message: {
        tooltip: {
            trigger: 'axis'
        },
        color: ['#3CB371', '#DC143C', '#EE7621', '#00EE00'],
        legend: {
            data: ['当天活动数', '已取活动数', '当天短信数', '已取短信数'],
            textStyle: {
                color: 'rgba(255,255,255,1)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name: '当天活动数',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '已取活动数',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '当天短信数',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '已取短信数',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    }
}