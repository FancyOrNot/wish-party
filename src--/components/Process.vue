<template>
  <div class="main">
    <div class="top">
      <img class="logo" src="../assets/images/logo1.png" alt="">
      <h2>渠道无忧2018年会盛典</h2>
    </div>
    <div class="content">
      <p class="table-top">
        <span class="sort">排序</span>
        <span class="pgmtime">时间</span>
        <span class="details">节目内容33</span>
      </p>
      <p class="table-body" v-for="item in processList">
        <span class="sort">{{item.sort}}</span>
        <span class="pgmtime">{{item.pgmtime}}</span>
        <span class="details">{{item.details}}</span>
      </p>
      <p class="table-bottom">
        <span class="sort"></span>
        <span class="pgmtime"></span>
        <span></span>
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Process',
    data() {
      return {
        processList: [
          {
            sort: '01',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '02',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '03',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '04',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '05',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '06',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '07',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '08',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '09',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '10',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '11',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {
            sort: '12',
            pgmtime: '19:00-19:20',
            details: '签到入场就坐'
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    background: url("../assets/images/program-bg.png") no-repeat center / 100% #f2e7ed;
    overflow: hidden;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      overflow: auto;
    }
    .top {
      width: 100%;
      height: 24%;
      text-align: center;
      .logo {
        margin-top: 70px;
        width: 20%;
      }
      h2 {
        font-size: 60px;
        color: #b92823;
      }
    }
    .content {
      height: 70%;
      width: 80%;
      margin: 0 auto;
      border: 2px solid #19548c;
      border-radius: 30px;
      p {
        height: 4%;
        font-size: 30px;
        border-bottom: 2px solid #19548c;
        span {
          display: inline-block;
          height: 100%;
          text-align: center;
        }
        .sort, .pgmtime {
          border-right: 2px solid #19548c;
        }
        .sort {
          width: 15%;
        }
        .pgmtime {
          width: 30%;
        }
        .details {
          width: 50%;
        }
      }
      .table-bottom {
        border: none;
        height: 4%;
        font-size: 30px;
        span {
          display: inline-block;
          height: 100%;
          text-align: center;
        }
      }
    }
  }
</style>

