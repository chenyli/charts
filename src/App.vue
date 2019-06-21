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
            <a href="javascript:;" class="active">异常设备监控</a>
            <a href="javascript:;">故障设备监控</a>
          </div>
          <div class="content">
            <div class="head">
              <span class="col">异常时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
              <span class="icon-dot"></span>
            </div>
            <!-- 区域滚动 -->
            <iscroll-view class="scroll-view" :options="{mouseWheel: true}">
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
            </iscroll-view>
          </div>
        </div>
      </div>
      <!-- 点位 -->
      <div class="point panel">
        <div class="inner">
          <h3>点位分布统计</h3>
          <div class="chart">
            <div class="pie" ref="pie" id="pie"></div>
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
          
        </div>
      </div>
      <!-- 用户 -->
      <div class="users panel">
        <div class="inner">
          <h3>全国用户总量统计</h3>
        </div>
      </div>
    </div>
    <div class="column">
      <!-- 订单 -->
      <div class="order panel">
        <div class="inner">
          <!-- 筛选 -->
          <div class="filter">
            <a href="javascript::" class="active">365天</a>
            <a href="javascript::">90天</a>
            <a href="javascript::">30天</a>
            <a href="javascript::">24小时</a>
          </div>
          <!-- 数据 -->
          <div class="data">
            <div class="item">
              <h4>20,301,987</h4>
              <span>
                <i class="icon-dot" style="color: #ed3f35;"></i>
                订单量
              </span>
            </div>
            <div class="item">
              <h4>99,834</h4>
              <span>
                <i class="icon-dot" style="color: #eacf19;"></i>
                订单量
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
            <a href="javascript:;" class="active">年</a>
            <a href="javascript:;">季</a>
            <a href="javascript:;">月</a>
            <a href="javascript:;">周</a>
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
                <li class="active">
                  <span>北京</span>
                  <span>25,179</span>
                </li>
                <li>
                  <span>河北</span>
                  <span>23,252</span>
                </li>
                <li>
                  <span>上海</span>
                  <span>20,760</span>
                </li>
                <li>
                  <span>江苏</span>
                  <span>23,252</span>
                </li>
                <li>
                  <span>山东</span>
                  <span>20,760</span>
                </li>
              </ul>
              <ul class="sub">
                <li>
                  <span>可爱多</span>
                  <span>9,086</span>
                </li>
                <li>
                  <span>娃哈哈</span>
                  <span>8,341</span>
                </li>
                <li>
                  <span>喜之郎</span>
                  <span>7,467</span>
                </li>
                <li>
                  <span>八喜</span>
                  <span>6,080</span>
                </li>
                <li>
                  <span>小洋人</span>
                  <span>6,724</span>
                </li>
                <li>
                  <span>好多鱼</span>
                  <span>2,170</span>
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

  export default {
    methods: {
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
                length: 5,
                length2: 8
              },
              data: [
                {value: 20, name: '云南\n10%'},
                {value: 26, name: '北京\n17%'},
                {value: 24, name: '山东\n21%'},
                {value: 25, name: '河北\n19%'},
                {value: 20, name: '江苏\n30%'},
                {value: 25, name: '浙江\n22%'},
                {value: 30, name: '四川\n18%'},
                {value: 27, name: '湖北\n27%'}
              ]
            }
          ]
        }

        pie.setOption(option)
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
      this.pointChart();
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

    &:nth-child(2) {
      flex: 5;
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

  // 异常
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

    .scroll-view {
      width: 100%;
      position: absolute;
      top: 2.0rem;
      bottom: 0;
      overflow: hidden;
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
        // width: 3.2rem;
      }    
    }
  }

  // 点位
  .point {
    height: 14.167rem;

    .chart {
      display: flex;
      margin-top: 1rem;
    }

    .pie {
      width: 12rem;
      height: 9.667rem;
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
  }

  // 用户
  .users {
    height: 14.167rem;
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

    .item:first-child {
      margin-right: 5.167rem;
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }

    .item {
      width: 50%;
      margin-top: .85rem;

      &:nth-child(2n) {
        text-align: right;
      }
    }

    h4 {
      color: #fff;
      font-size: 1.333rem;
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

  // 榜单
  .top {
    height: 11.8rem;

    .inner {
      display: flex;
    }

    .all {
      display: flex;
      flex-direction: column;
      width: 6.25rem;
      color: #4c9bfd;
      font-size: 0.667rem;
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
        font-size: 2rem;
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

            &:hover, &.active {
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

  // Chrome 中文最小 12px 调整
  @media screen and (max-width: 1600px) {
    .top {
      span {
        transform: scale(0.9);
      }

      .province {

        i {
          // transform: scale(0.9);
        }

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

  }
</style>





