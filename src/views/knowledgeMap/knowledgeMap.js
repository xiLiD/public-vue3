var option = {
    title: {
        text: '决策链查询'
    },
    tooltip: {

    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true
            },
            color: ['#000', "#ddd"],
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300,
                itemStyle: {
                    color: "#ddd",
                }
            }, {
                name: '节点2',
                x: 800,
                y: 300,
                itemStyle: {
                    color: "#ccc"
                }
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 500
            }],
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                lineStyle: {
                    width: 5,
                    curveness: 0.2
                }
            }, {
                source: '节点2',
                target: '节点1',
                label: {
                    show: true,
                    formatter: '数字'
                }
            }, {
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }],
            lineStyle: {
                color: "#56717D",
                opacity: 0.9,
                width: 5,
                curveness: 0
            }
        }
    ]
};
export default option
