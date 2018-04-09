import React, { Component } from 'react';
import echarts from 'echarts';

const getData = (count) => {
  var nameList = [
    '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯',
    '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦',
    '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严',
    '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻',
    '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚',
    '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤',
    '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史',
    '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤',
    '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐',
    '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余',
    '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧',
    '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄',
    '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈',
    '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝',
    '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻',
    '强', '贾', '路', '娄', '危'
  ];
  var legendData = [];
  var seriesData = [];
  var selected = {};
  for (var i = 0; i < 50; i++) {
    let name = Math.random() > 0.65
      ? makeWord(4, 1) + '·' + makeWord(3, 0)
      : makeWord(2, 1);
    legendData.push(name);
    seriesData.push({
      name: name,
      value: Math.round(Math.random() * 100000)
    });
    selected[name] = i < 6;
  }

  return {
    legendData: legendData,
    seriesData: seriesData,
    selected: selected
  };

  function makeWord(max, min) {
    var nameLen = Math.ceil(Math.random() * max + min);
    var name = [];
    for (var i = 0; i < nameLen; i++) {
      name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
    }
    return name.join('');
  }
}

var data = getData(50);
var bubbleData = [
  [[28604, 77, 17096869, 'Australia', 1990],
  [31163, 77.4, 27662440, 'Canada', 1990],
  [1516, 68, 1154605773, 'China', 1990],
  [13670, 74.7, 10582082, 'Cuba', 1990],
  [28599, 75, 4986705, 'Finland', 1990],
  [29476, 77.1, 56943299, 'France', 1990],
  [31476, 75.4, 78958237, 'Germany', 1990],
  [28666, 78.1, 254830, 'Iceland', 1990],
  [1777, 57.7, 870601776, 'India', 1990],
  [29550, 79.1, 122249285, 'Japan', 1990],
  [2076, 67.9, 20194354, 'North Korea', 1990],
  [12087, 72, 42972254, 'South Korea', 1990],
  [24021, 75.4, 3397534, 'New Zealand', 1990],
  [43296, 76.8, 4240375, 'Norway', 1990],
  [10088, 70.8, 38195258, 'Poland', 1990],
  [19349, 69.6, 147568552, 'Russia', 1990],
  [10670, 67.3, 53994605, 'Turkey', 1990],
  [26424, 75.7, 57110117, 'United Kingdom', 1990],
  [37062, 75.4, 252847810, 'United States', 1990]],
  [[44056, 81.8, 23968973, 'Australia', 2015],
  [43294, 81.7, 35939927, 'Canada', 2015],
  [13334, 76.9, 1376048943, 'China', 2015],
  [21291, 78.5, 11389562, 'Cuba', 2015],
  [38923, 80.8, 5503457, 'Finland', 2015],
  [37599, 81.9, 64395345, 'France', 2015],
  [44053, 81.1, 80688545, 'Germany', 2015],
  [42182, 82.8, 329425, 'Iceland', 2015],
  [5903, 66.8, 1311050527, 'India', 2015],
  [36162, 83.5, 126573481, 'Japan', 2015],
  [1390, 71.4, 25155317, 'North Korea', 2015],
  [34644, 80.7, 50293439, 'South Korea', 2015],
  [34186, 80.6, 4528526, 'New Zealand', 2015],
  [64304, 81.6, 5210967, 'Norway', 2015],
  [24787, 77.3, 38611794, 'Poland', 2015],
  [23038, 73.13, 143456918, 'Russia', 2015],
  [19360, 76.5, 78665830, 'Turkey', 2015],
  [38225, 81.4, 64715810, 'United Kingdom', 2015],
  [53354, 79.1, 321773631, 'United States', 2015]]
];


const pieOption = {
  title: {
    text: '同名数量统计',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    data: data.legendData,

    selected: data.selected
  },
  series: [
    {
      name: '姓名',
      type: 'pie',
      radius: '55%',
      center: ['40%', '50%'],
      data: data.seriesData,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
const lineOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};
const barOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar'
  }]
};
const bubbleOption = {
  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    offset: 0,
    color: '#f7f8fa'
  }, {
    offset: 1,
    color: '#cdd0d5'
  }]),
  title: {
    text: '1990 与 2015 年各国家人均寿命与 GDP'
  },
  legend: {
    right: 10,
    data: ['1990', '2015']
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    scale: true
  },
  series: [{
    name: '1990',
    data: bubbleData[0],
    type: 'scatter',
    symbolSize: function (data) {
      return Math.sqrt(data[2]) / 5e2;
    },
    label: {
      emphasis: {
        show: true,
        formatter: function (param) {
          return param.data[3];
        },
        position: 'top'
      }
    },
    itemStyle: {
      normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          offset: 0,
          color: 'rgb(251, 118, 123)'
        }, {
          offset: 1,
          color: 'rgb(204, 46, 72)'
        }])
      }
    }
  }, {
    name: '2015',
    data: bubbleData[1],
    type: 'scatter',
    symbolSize: function (data) {
      return Math.sqrt(data[2]) / 5e2;
    },
    label: {
      emphasis: {
        show: true,
        formatter: function (param) {
          return param.data[3];
        },
        position: 'top'
      }
    },
    itemStyle: {
      normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          offset: 0,
          color: 'rgb(129, 227, 238)'
        }, {
          offset: 1,
          color: 'rgb(25, 183, 207)'
        }])
      }
    }
  }]
};


export default class DataContentView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var myLineChart = echarts.init(document.getElementById('line-chart'));
    var myBarChart = echarts.init(document.getElementById('bar-chart'));
    var myPieChart = echarts.init(document.getElementById('pie-chart'));
    var myBubbleChart = echarts.init(document.getElementById('bubble-chart'));
    myLineChart.setOption(lineOption);
    myBarChart.setOption(barOption);
    myPieChart.setOption(pieOption);
    myBubbleChart.setOption(bubbleOption);
  }

  render() {
    return <div style={{ textAlign: "center" }}>
      <div id="line-chart" style={{ width: 600, height: 400, display: "inline-block" }}></div>
      <div id="bar-chart" style={{ width: 600, height: 400, display: "inline-block" }}></div>
      <div id="pie-chart" style={{ width: 600, height: 400, display: "inline-block" }}></div>
      <div id="bubble-chart" style={{ width: 600, height: 400, display: "inline-block" }}></div>
    </div>
  }
}