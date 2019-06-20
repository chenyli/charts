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
            <iscroll-view class="scroll-view">
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
        
      </div>
      <!-- 销售额 -->
      <div class="sales panel">
        <div class="inner">
          <h3>销售额统计</h3>
        </div>
      </div>
      <!-- 渠道&季度 -->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">
            <h3>渠道分布</h3>
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
          <h3>全国热榜</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 根据视口宽度计算 html 字号大小
  export default {
    methods: {
      setFont() {
        // 计算浏览器宽度
        const doc = document.documentElement
        const docWidth = doc.clientWidth
        // 限制边界
        if(docWidth < 1024) docWidth = 1024
        if(docWidth > 1920) docWidth = 1920
        // 设置 html 字号大小cons
        doc.style.fontSize = docWidth / 80 + 'px'
      }
    },
    created() {
      this.setFont()
      window.addEventListener('resize', () => {
        this.setFont()
      })
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
        width: 3rem;
      }    
    }
  }

  // 点位
  .point {
    height: 14.167rem;
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
  }

  // 销售额
  .sales {
    height: 10.333rem;
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
  }

  // 榜单
  .top {
    height: 11.8rem
  }
</style>
