<template>
  <div class="viewport" id="app">
    <div class="column">
      <!-- 概览 -->
      <div class="overview panel">
        <div class="inner">
          <div class="item">
            <h4>2,190</h4>
            <span>
              <i class="icon-dot" style="color: #006cff"></i>
              设备总数
            </span>
          </div>
          <div class="item">
            <h4>190</h4>
            <span>
              <i class="icon-dot" style="color: #6acca3"></i>
              季度新增
            </span>
          </div>
          <div class="item">
            <h4>3,001</h4>
            <span>
              <i class="icon-dot" style="color: #6acca3"></i>
              运营设备
            </span>
          </div>
          <div class="item">
            <h4>108</h4>
            <span>
              <i class="icon-dot" style="color: #ed3f35"></i>
              异常设备
            </span>
          </div>
        </div>
      </div>
      <!-- 监控 -->
      <div class="monitor panel">
        <div class="inner">
          <!-- Tab切换 -->
          <div class="tabs">
            <a href="javascript:;" @click="setMarquee('marquee', 0)" :class="{active: tabIndex == 0}">异常设备监控</a>
            <a href="javascript:;" @click="setMarquee('marquee1', 1)" :class="{active: tabIndex == 1}">故障设备监控</a>
          </div>
          <div class="content" v-show="tabIndex == 0">
            <div class="head">
              <span class="col">故障时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
              <span class="icon-dot"></span>
            </div>
            <!-- 区域滚动 -->
            <div class="marquee-view">
              <div class="marquee" ref="marquee">
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">11北京市昌平西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190601</span>
                  <span class="col">北京市昌平区城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">北京市昌平区建路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000006</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="content" v-show="tabIndex == 1">
            <div class="head">
              <span class="col">异常时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
              <span class="icon-dot"></span>
            </div>
            <!-- 区域滚动 -->
            <div class="marquee-view">
              <div class="marquee" ref="marquee1">
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 点位 -->
      <div class="point panel">
        <div class="inner">
          <h3>点位分布统计</h3>
          <div class="chart">
            <div class="pie" ref="pie"></div>
            <div class="data">
              <div class="item">
                <h4>120,899</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  点位总数
                </span>
              </div>
              <div class="item">
                <h4>248</h4>
                <span>
                  <i class="icon-dot" style="color: #eacf19"></i>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <!-- 地图 -->
      <div class="map">
        <!-- 标题 -->
        <h3>
          <span class="icon-cube"></span>
          设备数据统计
        </h3>
        <div class="chart">
          <div class="geo" ref="geo"></div>
        </div>
      </div>
      <!-- 用户 -->
      <div class="users panel">
        <div class="inner">
          <h3>全国用户总量统计</h3>
          <div class="chart">
            <div class="bar" ref="bar"></div>
            <div class="data">
              <div class="item">
                <h4>120,899</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  用户总量
                </span>
              </div>
              <div class="item">
                <h4>248</h4>
                <span>
                  <i class="icon-dot" style="color: #eacf19"></i>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <!-- 网页时钟 -->
      <div class="clock">
        <i class="icon-clock"></i>
        <span>{{now}}</span>
      </div>
      <!-- 订单 -->
      <div class="order panel">
        <div class="inner">
          <!-- 筛选 -->
          <div class="filter">
            <a href="javascript:;" @click="switchTab('orderIndex', 'day365')" :class="{active: orderIndex == 'day365'}">365天</a>
            <a href="javascript:;" @click="switchTab('orderIndex', 'day90')" :class="{active: orderIndex == 'day90'}">90天</a>
            <a href="javascript:;" @click="switchTab('orderIndex', 'day30')" :class="{active: orderIndex == 'day30'}">30天</a>
            <a href="javascript:;" @click="switchTab('orderIndex', 'day1')" :class="{active: orderIndex == 'day1'}">24小时</a>
          </div>
          <!-- 数据 -->
          <div class="data">
            <div class="item">
              <h4>{{computedOrderData.orders}}</h4>
              <span>
                <i class="icon-dot" style="color: #ed3f35;"></i>
                订单量
              </span>
            </div>
            <div class="item">
              <h4>{{computedOrderData.amount}}</h4>
              <span>
                <i class="icon-dot" style="color: #eacf19;"></i>
                销售额(万元)
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 销售额 -->
      <div class="sales panel">
        <div class="inner">
          <div class="caption">
            <h3>销售额统计</h3>
            <a href="javascript:;" @click="salesChart('year')" :class="{active: lineData.type == 'year'}">年</a>
            <a href="javascript:;" @click="salesChart('quarter')" :class="{active: lineData.type == 'quarter'}">季</a>
            <a href="javascript:;" @click="salesChart('month')" :class="{active: lineData.type == 'month'}">月</a>
            <a href="javascript:;" @click="salesChart('week')" :class="{active: lineData.type == 'week'}">周</a>
          </div>
          <div class="chart">
            <div class="label">单位:万</div>
            <div class="line" ref="line"></div>
          </div>
        </div>
      </div>
      <!-- 渠道&季度 -->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">
            <h3>渠道分布</h3>
            <div class="data">
              <div class="item">
                <h4>39 <small>%</small></h4>
                <span>
                  <i class="icon-plane"></i>
                  机场
                </span>
              </div>
              <div class="item">
                <h4>28 <small>%</small></h4>
                <span>
                  <i class="icon-bag"></i>
                  商场
                </span>
              </div>
            </div>
            <div class="data">
              <div class="item">
                <h4>20 <small>%</small></h4>
                <span>
                  <i class="icon-train"></i>
                  地铁
                </span>
              </div>
              <div class="item">
                <h4>13 <small>%</small></h4>
                <span>
                  <i class="icon-bus"></i>
                  火车站
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="quarter panel">
          <div class="inner">
            <h3>一季度销售进度</h3>
            <div class="chart">
              <div class="box">
                <div class="gauge" ref="gauge"></div>
                <div class="label">75<small> %</small></div>
              </div>
              <div class="data">
                <div class="item">
                  <h4>1,321</h4>
                  <span>
                    <i class="icon-dot" style="color: #6acca3"></i>
                    销售额(万元)
                  </span>
                </div>
                <div class="item">
                  <h4>150%</h4>
                  <span>
                    <i class="icon-dot" style="color: #ed3f35"></i>
                    同比增长
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <!-- 排行榜 -->
      <div class="top panel">
        <div class="inner">
          <div class="all">
            <h3>全国热榜</h3>
            <ul>
              <li>
                <i class="icon-cup1" style="color: #d93f36;"></i>
                可爱多
              </li>
              <li>
                <i class="icon-cup2" style="color: #68d8fe;"></i>
                娃哈啥
              </li>
              <li>
                <i class="icon-cup3" style="color: #4c9bfd;"></i>
                喜之郎
              </li>
            </ul>
          </div>
          <div class="province">
            <h3>各省热销 <i class="date">近30日</i></h3>
            <div class="data">
              <ul class="sup">
                <li :class="{active: hotIndex == 0}" @mouseover="hotTab(0)">
                  <span>北京</span>
                  <span>25,179 <s class="icon-up"></s></span>
                </li>
                <li :class="{active: hotIndex == 1}" @mouseover="hotTab(1)">
                  <span>河北</span>
                  <span>23,252 <s class="icon-down"></s></span>
                </li>
                <li :class="{active: hotIndex == 2}" @mouseover="hotTab(2)">
                  <span>上海</span>
                  <span>20,760 <s class="icon-up"></s></span>
                </li>
                <li :class="{active: hotIndex == 3}" @mouseover="hotTab(3)">
                  <span>江苏</span>
                  <span>23,252 <s class="icon-down"></s></span>
                </li>
                <li :class="{active: hotIndex == 4}" @mouseover="hotTab(4)">
                  <span>山东</span>
                  <span>20,760 <s class="icon-up"></s></span>
                </li>
              </ul>
              <ul class="sub">
                <li :key="key" v-for="(hot, key) in hotData">
                  <span>{{hot.name}}</span>
                  <span>{{hot.num}} <s class="icon-up"></s></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入 echarts 图表库
  import echarts from 'echarts'

  import china from './china'

  import $ from 'jquery'

  export default {
    data() {
      return {
        tabIndex: 0,
        orderIndex: 'day365',
        orderData: {
          day365: {orders: '20,301,987', amount: '99834'},
          day90: {orders: '301,987', amount: '9834'},
          day30: {orders: '1,987', amount: '3834'},
          day1: {orders: '987', amount: '834'}
        },
        hotIndex: 0,
        hotData: [
          {name: '可爱多', num: '9,086'},
          {name: '娃哈哈', num: '8,341'},
          {name: '喜之郎', num: '7,407'},
          {name: '八喜', num: '6,080'},
          {name: '小洋人', num: '6,724'},
          {name: '好多鱼', num: '2,170'},
        ],
        lineData: {
          type: 'year',
          year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ],
          quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
          ],
          month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
          ],
          week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
          ]
        },
        now: '2019-06-24 14:50:23'
      }
    },
    computed: {
      computedOrderData() {
        return this.orderData[this.orderIndex]
      }
    },
    methods: {
      switchTab(index, value) {
        this[index] = value
      },

      hotTab(index) {
        this.hotIndex = index
        
        this.hotData.sort(function() {
          return 0.5 - Math.random()
        })
      },

      loop(ms, cb) {
        let i = 0
        setInterval(() => {
          i++
          cb(i)
        }, ms)
      },

      async setMarquee(ref, index) {
        this.tabIndex = index

        const el = $(this.$refs[ref])

        await this.$nextTick()

        const h = el.attr('data-height') || el.height()

        el.css('transform', 'translateY(0)')

        if(!el.attr('data-height')) {
          el.attr('data-height', h)
          const childs = el.children().clone()
          el.append(childs)
        }

        setTimeout(() => {
          el.css('transform', 'translateY(' + -h + 'px)')
        })
      
        el.on('webkitTransitionEnd', () => {
          el.css({
            transition: 'none',
            transform: 'translateY(0)'
          })

          setTimeout(() => {
            el.css({
              transition: '',
              transform: 'translateY(' + -h + 'px)'
            })
          })
        })

      },

      // 根据视口宽度计算 html 字号大小
      setFont() {
        // 计算浏览器宽度
        let doc = document.documentElement
        let docWidth = doc.clientWidth
        // 限制边界
        if(docWidth < 1024) docWidth = 1024
        if(docWidth > 1920) docWidth = 1920
        // 设置 html 字号大小cons
        doc.style.fontSize = docWidth / 80 + 'px'
      },

      // 点位分布统计
      pointChart() {
        const pie = echarts.init(this.$refs.pie)

        const option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          calculable: true,
          color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
          series: [
            {
              name: '点位分布',
              type:'pie',
              radius: ['10%', '70%'],
              center: ['48%', '50%'],
              roseType: 'radius',
              label: {
                fontSize: 11,
              },
              labelLine: {
                length: 8,
                length2: 12
              },
              data: [
                {value: 20, name: '云南\n10%'},
                {value: 26, name: '北京\n17%'},
                {value: 24, name: '山东\n21%'},
                {value: 25, name: '河北\n19%'},
                {value: 20, name: '江苏\n30%'},
                {value: 25, name: '浙江\n22%'},
                {value: 30, name: '四川\n18%'},
                {value: 42, name: '湖北\n27%'}
              ]
            }
          ]
        }

        pie.setOption(option)
      },

      // 用户统计
      userChart() {
        const bar = echarts.init(this.$refs.bar)

        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{c}',
            position: 'top',
            padding: [4, 10],
            backgroundColor: '#0b2860'
          },
          grid: {
            show: true,
            left: '8%',
            top: '8%',
            right: '5%',
            bottom: '12%',
            borderColor: 'rgba(0, 240, 255, 0.3)'
          },
          xAxis: {
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'
            ],
            axisLabel: {
              textStyle: {
                color: '#4996f5',
                fontSize: 11
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            z: 10
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                color: 'rgba(0, 240, 255, 0.3)'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#4996f5'
              }
            }
          },
          series: [
            {
              type: 'bar',
              itemStyle: {
                color: 'rgba(37, 64, 101, 0.2)'
              },
              barGap: '-100%',
              barCategoryGap: '40%',
              data: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500],
              animation: false,
              z: 1
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#00fffb'},
                      {offset: 1, color: '#0061ce'}
                    ]
                  )
                }
              },
              data: [
                {name: '上海', value: 2100},
                {name: '广州', value: 1900},
                {name: '北京', value: 1700},
                {name: '深圳', value: 1560},
                {name: '合肥', value: 1400},
                {
                  name: '',
                  value: 1200,
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textStyle: {
                      color: 'rgba(0, 0, 0, 0)'
                    }
                  },
                  itemStyle: {color: '#254065'},
                  emphasis: {
                    itemStyle: {color: '#254065'}
                  }
                },
                {
                  name: '......',
                  value: 1200,
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textStyle: {
                      color: 'rgba(0, 0, 0, 0)'
                    }
                  },
                  itemStyle: {color: '#254065'},
                  emphasis: {
                    itemStyle: {color: '#254065'}
                  }
                },
                {
                  name: '',
                  value: 1200,
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textStyle: {
                      color: 'rgba(0, 0, 0, 0)'
                    }
                  },
                  itemStyle: {color: '#254065'},
                  emphasis: {
                    itemStyle: {color: '#254065'}
                  }
                },
                {name: '杭州', value: 900},
                {name: '厦门', value: 750},
                {name: '济南', value: 600},
                {name: '成都', value: 480},
                {name: '重庆', value: 240}
              ],
              z: 2
            }
          ]
        }

        bar.setOption(option)
      },

      // 销售进度统计
      progressChart() {
        const gauge = echarts.init(this.$refs.gauge)

        const data = [
          {
            value: 100,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {offset: 0, color: '#00c9e0'},
                  {offset: 1, color: '#005fc1'}
                ]
              }
            }
          },
          {
            value: 100,
            itemStyle: {
              color: '#12274d'
            }
          }
        ]
 
        // 计算 data 中 value 的总和
        var a = 0;
        for(var i=0; i<data.length; i++) {
          a += data[i].value
        }

        //添加新的元素到data中，并设置其颜色样式为白色
        data.push({
          value: a,
          name: '__other',
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)'
          }
        });

        const option = {
          series : [
            {
              name: '销售进度',
              type: 'pie',
              hoverOffset: 0,
              label: {
                show: false
              },
              startAngle: 180,
              radius:  ['130%', '150%'],
              center: ['50%', '80%'],
              data: data,
              itemStyle: {

              }
            }
          ]
        }

        gauge.setOption(option)
      },

      // 销售额统计
      salesChart(type) {

        this.lineData.type = type

        const line = echarts.init(this.$refs.line)

        const data = this.lineData[type]

        const option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#4c9bfd',
            },
            right: '8%',
            data:['总销售额', '实际销售额']
          },
          grid: {
            show: true,
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            borderColor: '#012f4a'
          },
          xAxis: {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#4996f5'
              }
            },
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value',
            offset: 3,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#012f4a'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#4996f5'
              }
            },
          },
          series: [
            {
              name:'总销售额',
              type:'line',
              smooth: true,
              itemStyle: {
                color: '#00f2f1'
              },
              data: data[0]
            },
            {
              name:'实际销售额',
              type:'line',
              smooth: true,
              itemStyle: {
                color: '#ed3f35'
              },
              data: data[1]
            }
          ]
        }

        line.setOption(option)
      },

      // 设备统计
      deviceChart() {
        const geo = echarts.init(this.$refs.geo)

        echarts.registerMap('china', china)

        const chinaGeoCoordMap = {
          '黑龙江': [127.9688, 45.368],
          '内蒙古': [110.3467, 41.4899],
          "吉林": [125.8154, 44.2584],
          '北京市': [116.4551, 40.2539],
          "辽宁": [123.1238, 42.1216],
          "河北": [114.4995, 38.1006],
          "天津": [117.4219, 39.4189],
          "山西": [112.3352, 37.9413],
          "陕西": [109.1162, 34.2004],
          "甘肃": [103.5901, 36.3043],
          "宁夏": [106.3586, 38.1775],
          "青海": [101.4038, 36.8207],
          "新疆": [87.9236, 43.5883],
          "西藏": [91.11, 29.97],
          "四川": [103.9526, 30.7617],
          "重庆": [108.384366, 30.439702],
          "山东": [117.1582, 36.8701],
          "河南": [113.4668, 34.6234],
          "江苏": [118.8062, 31.9208],
          "安徽": [117.29, 32.0581],
          "湖北": [114.3896, 30.6628],
          "浙江": [119.5313, 29.8773],
          "福建": [119.4543, 25.9222],
          "江西": [116.0046, 28.6633],
          "湖南": [113.0823, 28.2568],
          "贵州": [106.6992, 26.7682],
          "云南": [102.9199, 25.4663],
          "广东": [113.12244, 23.009505],
          "广西": [108.479, 23.1152],
          "海南": [110.3893, 19.8516],
          '上海': [121.4648, 31.2891]
        }

        const chinaDatas = [
          [
            {name: '黑龙江', value: 2300}
          ],
          [
            {name: '内蒙古', value: 4300}
          ],
          [
            {name: '吉林', value: 5300}
          ],
          [
            {name: '辽宁', value: 6300 }
          ],
          [
            {name: '山西', value: 600}
          ],
          [
            {name: '陕西', value: 7300}
          ],
          [
            {name: '甘肃', value: 8300}
          ],
          [
            {name: '宁夏', value: 9300}
          ],
          [
            {name: '青海', value: 2300}
          ],
          [
            {name: '新疆', value: 1300}
          ],
          [
            {name: '西藏', value: 8300}
          ],
          [
            {name: '四川', value: 4500}
          ],
          [
            {name: '重庆', value: 900}
          ],
          [
            {name: '山东', value: 6880}
          ],
          [
            {name: '河南', value: 9300}
          ],
          [
            {name: '江苏', value: 1300}
          ],
          [
            {name: '安徽', value: 8100}
          ],
          [
            {name: '湖北', value: 7300}
          ],
          [
            {name: '浙江', value: 1230}
          ],
          [
            {name: '福建', value: 1300}
          ],
          [
            {name: '江西', value: 1120}
          ],
          [
            {name: '湖南', value: 1345}
          ],
          [
            {name: '贵州', value: 4325}
          ],
          [
            {name: '广西', value: 5432}
          ],
          [
            {name: '海南', value: 6212}
          ],
          [
            {name: '上海', value: 7432}
          ]
        ]

        const convertData = (data) => {
          const res = [];
          for(let i = 0; i < data.length; i++) {
            let dataItem = data[i]
            let fromCoord = chinaGeoCoordMap[dataItem[0].name]
            let toCoord = [116.4551, 40.2539]
            if(fromCoord && toCoord) {
              res.push([{
                coord: fromCoord,
                value: dataItem[0].value
              }, {
                coord: toCoord,
              }])
            }
          }
          return res
        }

        const series = [
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 5, //图标大小
            },
            lineStyle: {
              normal: {
                width: 1, //尾迹线条宽度
                opacity: 0, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
              }
            },
            data: convertData(chinaDatas)
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function(params){//圆环显示文字
                  return params.data.name
                },
                fontSize: 11
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function(val) {
              return 2 + val[2] / 2000; //圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#f00'
              }
            },
            data: chinaDatas.map(function(dataItem) {
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              };
            }),
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                //offset:[5, 0],
                color: '#f00',
                formatter: '{b}',
                textStyle: {
                  color: "#0ff"
                }
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'pin',
            symbolSize: 30,
            itemStyle: {
              normal: {
                show: true,
                color: '#0ff'
              }
            },
            data: [{
              name: '北京市',
              value: chinaGeoCoordMap['北京市'].concat([10]),
            }],
          }
        ]

        const option = {
          visualMap: { //图例值控制
            min: 0,
            max: 10000,
            itemHeight: 100,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            zoom: 1.2,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true, //是否允许缩放
            itemStyle: {
              normal: {
                color: '#1b497d', //地图背景色
                borderColor: '#3c81b2', //省市边界线00fcff 516a89
                borderWidth: 1
              },
              emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
              }
            }
          },
          series: series
        }

        geo.setOption(option)
      }
    },
    created() {
      // 设置 html 字号
      this.setFont()
      // 根据窗口变化设置 html 定号
      window.addEventListener('resize', () => {
        this.setFont()
      })
    },
    mounted() {
      this.pointChart()
      this.userChart()
      this.progressChart()
      this.deviceChart()

      this.setMarquee('marquee', 0)

      // 销售额统计
      this.salesChart('year')
      const date = ['year', 'quarter', 'month', 'week']
      this.loop(5000, (i) => {
        this.salesChart(date[i % 4])
      })
      
      const range = ['day365', 'day90', 'day30', 'day1']
      this.loop(5000, (i) => {
        this.orderIndex = range[i % 4]
      })

      this.loop(3000, (i) => {
        this.hotTab(i % 5)
      })

      setInterval(() => {
        const date = new Date()
        this.now = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      }, 1000)
    }
  }
</script>

<style lang="less">

  .viewport {
    min-width: 1024px;
    max-width: 1920px;
    padding: 3.667rem 0.833rem 0;
    margin: 0 auto;
    display: flex;
    background-image: url(./assets/images/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .column {
    flex: 3;
    position: relative;

    &:nth-child(2) {
      flex: 4;
      margin: 1.333rem 0.833rem 0;
    }
  }

  .panel {
    box-sizing: border-box;
    border: 2rem solid red;
    border-width: 2.1rem 2.8rem 1rem 5.2rem;
    border-image: url(./assets/images/border.png) 46% 12% 22% 24%;
    margin-bottom: 0.833rem;
    position: relative;

    .inner {
      padding: 1rem 1.5rem;
      position: absolute;
      left: -5.2rem;
      top: -2.1rem;
      right: -2.8rem;
      bottom: -1rem;
    }

    h3 {
      font-size: 0.833rem;
      color: #fff;
    }
  }
  
  // 概览
  .overview {
    height: 4.583rem;

    .inner {
      display: flex;
      justify-content: space-between;
    }

    h4 {
      color: #fff;
      padding-left: 0.2rem;
      font-size: 1.167rem;
      margin-bottom: 0.333rem;
    }

    span {
      display: block;
      color: #4c9bfd;
      font-size: 0.667rem;
    }
  }

  // 异常/故障
  .monitor {
    height: 20rem;

    .inner {
      display: flex;
      padding: 1rem 0;
      flex-direction: column;
    }

    .tabs {
      display: flex;
      padding: 0 1.5rem;
      margin-bottom: 0.75rem;

      a {
        padding: 0 1.125rem;
        color: #1950c4;
        font-size: 0.75rem;
      
        &:first-child {
          padding-left: 0;
          border-right: 0.083rem solid #00f2f1;
        }

        &.active {
          color: #fff;
        }
      }
    }

    .content {
      flex: 1;
      position: relative;
    }

    .head, .row {
      display: flex;
      justify-content: space-between;
      line-height: 1;

      .icon-dot {
        display: none;
        position: absolute;
        left: 0.64rem;
      }
    }

    .head {
      font-size: 0.583rem;
      padding: 0.5rem 1.5rem;
      color: #68d8fe;
      background-color: rgba(255, 255, 255, 0.1);
    }

    .marquee-view {
      width: 100%;
      position: absolute;
      top: 2.0rem;
      bottom: 0;
      overflow: hidden;
    }

    .marquee {
      transition: transform 30s linear;
    }

    .row {
      font-size: 0.5rem;
      padding: 0.458rem 1.5rem;
      color: #61a8ff;
      cursor: pointer;
      position: relative;

      &:hover {
        color: #68d8fe;
        background-color: rgba(255, 255, 255, 0.1);

        .icon-dot {
          display: block;
        }
      }
    }

    .col {
      display: block;

      &:nth-child(1) {
        width: 3.8rem;
      }

      &:nth-child(2) {
        width: 8.4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &:nth-child(3) {
        width: 3.2rem;
      }    
    }
  }

  // 点位
  .point {
    height: 14.167rem;

    .chart {
      display: flex;
      margin-top: 1rem;
      justify-content: space-between;
    }

    .pie {
      width: 13rem;
      height: 10rem;
      margin-left: -0.4rem;
    }

    .data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 7rem;
      padding: 1.5rem 1.25rem;
      box-sizing: border-box;
      background-image: url(./assets/images/rect.png);
      background-size: cover;
    }

    h4 {
      margin-bottom: 0.5rem;
      font-size: 1.167rem;
      color: #fff;
    }

    span {
      display: block;
      color: #4c9bfd;
      font-size: 0.667rem;
    }
  }

  // 地图
  .map {
    height: 24.1rem;
    margin-bottom: 0.833rem;
    display: flex;
    flex-direction: column;

    h3 {
      line-height: 1;
      padding: 0.667rem 0;
      margin: 0;
      font-size: 0.833rem;
      color: #fff;
    }

    .icon-cube {
      color: #68d8fe;
    }

    .chart {
      flex: 1;
      background-color: rgba(255, 255, 255, 0.05);
    }

    .geo {
      width: 100%;
      height: 100%;
    }
  }

  // 用户
  .users {
    height: 14.167rem;
    display: flex;

    .chart {
      display: flex;
      margin-top: 1rem;
    }

    .bar {
      width: 24.5rem;
      height: 10rem;
      // background-color: #fff;
    }

    .data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 7rem;
      padding: 1.5rem 1.25rem;
      box-sizing: border-box;
      background-image: url(./assets/images/rect.png);
      background-size: cover;
    }

    h4 {
      margin-bottom: 0.5rem;
      font-size: 1.167rem;
      color: #fff;
    }

    span {
      display: block;
      color: #4c9bfd;
      font-size: 0.667rem;
    }
  }
  
  // 订单
  .order {
    height: 6.167rem;

    .filter {
      display: flex;

      a {
        display: block;
        height: 0.75rem;
        line-height: 1;
        padding: 0 0.75rem;
        color: #1950c4;
        font-size: 0.75rem;
        border-right: 0.083rem solid #00f2f1;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: none;
        }

        &.active {
          color: #fff;
          font-size: 0.833rem;
        }
      }
    }

    .data {
      display: flex;
      margin-top: 0.833rem;
    }

    .item {
      width: 50%;
    }

    h4 {
      font-size: 1.167rem;
      color: #fff;
      margin-bottom: 0.417rem;
    }

    span {
      display: block;
      color: #4c9bfd;
      font-size: 0.667rem;
    }
  }

  // 销售额
  .sales {
    height: 10.333rem;

    .caption {
      display: flex;
      line-height: 1;
    }

    h3 {
      height: 0.75rem;
      padding-right: 0.75rem;
      border-right: 0.083rem solid #00f2f1;
    }

    a {
      padding: 0.167rem;
      font-size: 0.667rem;
      margin: -0.125rem 0 0 0.875rem;
      border-radius: 0.125rem;
      color: #0bace6;

      &.active {
        background-color: #4c9bfd;
        color: #fff;
      }
    }

    .inner {
      display: flex;
      flex-direction: column;
    }

    .chart {
      flex: 1;
      padding-top: 0.6rem;
      position: relative;
    }

    .label {
      position: absolute;
      left: 1.75rem;
      top: 0.75rem;
      color: #4996f5;
      font-size: 0.583rem;
    }

    .line {
      width: 100%;
      height: 100%;
    }
  }

  // 渠道&季度
  .wrap {
    display: flex;
  }

  .channel, .quarter {
    flex: 1;
    height: 9.667rem;
  }
  
  // 渠道
  .channel {
    margin-right: 0.833rem;
    
    .data {
      overflow: hidden;
    }

    .item {
      margin-top: .85rem;

      &:first-child {
        float: left;
      }

      &:last-child {
        float: right;
      }
    }

    h4 {
      color: #fff;
      font-size: 1.333rem;
      margin-bottom: 0.2rem;
    }

    small {
      font-size: 50%;
    }

    span {
      display: block;
      color: #4c9bfd;
      font-size: 0.583rem;
    }
  }

  // 季度销售
  .quarter {
    
    .inner {
      display: flex;
      flex-direction: column;
      margin: 0 -0.25rem;
    }

    .chart {
      flex: 1;
      padding-top: 0.75rem;
    }

    .box {
      position: relative;
    }

    .label {
      transform: translate(-50%, -30%);
      color: #fff;
      font-size: 1.25rem;
      position: absolute;
      left: 50%;
      top: 50%;

      small {
        font-size: 50%;
      }
    }

    .gauge {
      height: 3.5rem;
    }

    .data {
      display: flex;
      justify-content: space-between;
    }

    .item {
      width: 50%;
    }

    h4 {
      color: #fff;
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }

    span {
      display: block;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #4c9bfd;
      font-size: 0.583rem;
    }
  }

  // 榜单
  .top {
    height: 11.8rem;

    .inner {
      display: flex;
    }

    .all {
      display: flex;
      flex-direction: column;
      width: 7rem;
      color: #4c9bfd;
      font-size: 0.6rem;
      vertical-align: middle;

      ul {
        padding-left: 0.5rem;
        margin-top: 0.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      li {
        overflow: hidden;
      }

      [class^="icon-"] {
        font-size: 1.5rem;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
    }

    .province {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #fff;

      i {
        padding: 0 0.5rem;
        margin-top: 0.208rem;
        float: right;
        font-style: normal;
        font-size: 0.583rem;
        color: #0bace6;
        background-image: url(./assets/images/line.png);
        background-repeat: no-repeat;
        background-size: contain;
      }

      s {
        display: inline-block;
        transform: scale(0.8);
        text-decoration: none;
      }

      .icon-up {
        color: #dc3c33;
      }

      .icon-down {
        color: #36be90;
      }

      .data {
        flex: 1;
        display: flex;
        margin-top: 0.6rem;
      }

      ul {
        flex: 1;
        line-height: 1;
        margin-bottom: 0.25rem;

        li {
          display: flex;
          justify-content: space-between;
        }

        span {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        &.sup {
          font-size: 0.583rem;

          li {
            color: #4995f4;
            padding: 0.5rem;

            &.active {
              color: #a3c6f2;
              background-color: rgba(10, 67, 188, .2);
            }
          }
        }

        &.sub {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          font-size: 0.5rem;
          background-color: rgba(10, 67, 188, .2);

          li {
            color: #52ffff;
            padding: 0.417rem 0.6rem;
          }
        }
      }
    }
  }

  .clock {

    i {
      margin-right: 5px;
      font-size: 0.833rem;
    }

    position: absolute;
    top: -1.5rem;
    right: 1.667rem;
    font-size: 0.833rem;
    color: #0bace6;
  }

  // Chrome 中文最小 12px 调整
  @media screen and (max-width: 1600px) {
    .top {
      span {
        transform: scale(0.9);
      }

      .province {

        ul.sup {
          li {
            padding: 0.4rem 0.5rem;
          }
        }

        ul.sub {

          li {
            padding: 0.23rem 0.5rem;
          }
        }
      }
    }
    
    .quarter {

      span {
        transform: scale(0.9);
      }
    }
  }
</style>





