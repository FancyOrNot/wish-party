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
        <span class="details">节目内容</span>
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
    <ms-side></ms-side>
  </div>
</template>

<script>
  import MsSide from '@/components/Side'
  export default {
    name: 'Process',
    data() {
      return {
        showSide: false,
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
        ],
        onlineList: [
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          }
        ],
        offlineList: [
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          },
          {
            headPortrait: '/static/img/09.d088597.jpg',
            personalName: '小一'
          }
        ]
      }
    },
    components: {
      MsSide
    }
  }
</script>

<style lang="scss" scoped>

  @import '../assets/scss/layout.scss';
  .main {
    background: url("../assets/images/program-bg.png") no-repeat center / 100% #f2e7ed;
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
        .sort,
        .pgmtime {
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
    .side {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      z-index: 2;
      .side-content {
        float: left;
        width: 85%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        .personal {
          width: 100%;
          height: 15%;
          text-align: center;
          img {
            width: 50%;
            margin-top: 40px;
            border-radius: 50%;
          }
          .personal-name {
            font-size: 35px;
            color: #fff;
          }
        }
        .interactive,
        .process {
          height: 4.5%;
          text-align: center;
          button {
            width: 90%;
            height: 70px;
            font-size: 30px;
            border: none;
            color: #ffffff;
            background-color: #12589b;
            border-radius: 640px;
          }
        }
        .interactive {
          button {
            background: url("../assets/images/interactive-icon.png") no-repeat 13% 50% / 12% #12589b;
          }
        }
        .process {
          margin-bottom: 30px;
          button {
            background: url("../assets/images/process-icon.png") no-repeat 13% 50% / 10% #12589b;
          }
        }
        .member {
          height: 73%;
          text-align: center;
          .member-title {
            height: 1.5%;
            font-size: 30px;
            color: #fff;
          }
          input {
            width: 90%;
            height: 3.5%;
            font-size: 30px;
            line-height: 3.5%;
            text-align: center;
            border: none;
            border-radius: 50px;
            background-color: #84827e;
          }
          .member-list {
            height: 92%;
            overflow: auto;
            .online,
            .offline {
              height: 50px;
              line-height: 50px;
              img {
                width: 45px;
                height: 45px;
                border-radius: 50%;
              }
              .member-icon {
                display: inline-block;
                width: 45px;
                height: 45px;
              }
              .personal-name {
                color: #fff;
                font-size: 35px;
                vertical-align: middle;
              }
            }
            .online {
              .member-icon {
                background: url("../assets/images/activation.png") no-repeat center / 75%;
              }
            }
            .offline {
              .member-icon {
                background: url("../assets/images/not-active.png") no-repeat center / 75%;
              }
            }
          }
        }
      }
      .icon {
        float: left;
        margin-top: 225%;
        width: 15%;
        height: 8%;
        background: url("../assets/images/side-icon.png") no-repeat;
      }
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity .2s
      }
      .fade-enter,
      .fade-leave-to
      {
        opacity: 0;
        transform: translateX(-100%);
      }
    }
  }
</style>

