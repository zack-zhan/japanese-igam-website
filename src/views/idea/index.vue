<template>
  <div>
    <div id="archive-header-management">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction-management">
        <div id="management-desc" class="clearfix">
          <div class="text-en">Reborn</div>
          <div class="text-title">企業再生</div>
          <div class="text-descs">新しい企業価値をお客様と共に創造していきます</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix main">
      <div class="management-box">
          <div class="list-row-1">
              <div class="revolution-en">Revolution</div>
              <div class="revolution-title">革新的進化</div>
              <div class="revolution-desc"><p>先端技術やアイディアを活用し、 </p><p>新たな質の高い投資商品サービスの提供します</p></div>
          </div>
          <div class="list-row-2">
              <div class="responsibility-box">
                  <div class="responsibility-en" >Responsibility</div>
                  <div class="responsibility-title">受託者責任</div>
                  <div class="responsibility-desc"><p>お客様の資産を責任を持って運用し、</p> <p>お客様と良質な関係を構築していきます</p></div>
              </div>
          </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import Header from '@/components/header' // 引入头部组件
import Footer from '@/components/footer' // 引入底部组件
export default {
  mounted () {
    var en1 = new WOW({
      boxClass: 'text-en',
      animateClass: 'a-fadeinR',
      offset: 10,
      mobile: true,
      live: true
    })
    en1.init()
    var title1 = new WOW({
      boxClass: 'text-title',
      animateClass: 'a-fadeinR_1',
      offset: 10,
      mobile: true,
      live: true
    })
    title1.init()
    var descs1 = new WOW({
      boxClass: 'text-descs',
      animateClass: 'a-fadeinR_2',
      offset: 10,
      mobile: true,
      live: true
    })
    descs1.init()

    var row1 = new WOW({
      boxClass: 'list-row-1',
      animateClass: 'a-fadeinB',
      offset: 10,
      mobile: true,
      live: true
    })
    row1.init()
    var row2 = new WOW({
      boxClass: 'list-row-2',
      animateClass: 'a-fadeinB',
      offset: 10,
      mobile: true,
      live: true
    })
    row2.init()

    var en2 = new WOW({
      boxClass: 'revolution-en',
      animateClass: 'a-fadeinR_1',
      offset: 10,
      mobile: true,
      live: true
    })
    en2.init()
    var title2 = new WOW({
      boxClass: 'revolution-title',
      animateClass: 'a-fadeinR_2',
      offset: 10,
      mobile: true,
      live: true
    })
    title2.init()
    var desc2 = new WOW({
      boxClass: 'revolution-desc',
      animateClass: 'a-fadeinR_3',
      offset: 10,
      mobile: true,
      live: true
    })
    desc2.init()

    var en3 = new WOW({
      boxClass: 'responsibility-en',
      animateClass: 'a-fadeinR_1',
      offset: 10,
      mobile: true,
      live: true
    })
    en3.init()
    var title3 = new WOW({
      boxClass: 'responsibility-title',
      animateClass: 'a-fadeinR_2',
      offset: 10,
      mobile: true,
      live: true
    })
    title3.init()
    var desc3 = new WOW({
      boxClass: 'responsibility-desc',
      animateClass: 'a-fadeinR_3',
      offset: 10,
      mobile: true,
      live: true
    })
    desc3.init()
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#archive-header-management {
    width: 100%;
    background: url("../../assets/images/management.png") no-repeat;
    background-size: cover;
    padding-bottom: 52%;
    #archive-introduction-management {
        float: left;
        margin-top: 12.5%;
        margin-left: 30%;
        #management-desc {
            width: 439px;
            float: left;
            margin-left: 0px;
            font-family: Meiryo;
            .text-en {
              float: left;
              font-size: 60px;
              font-weight: bold;
              color: rgba(255,255,255,1);
              text-shadow: 0px 5px 13px rgba(0,0,0,0.30);
              margin-bottom: 30px;
            }
            .text-title {
                float: left;
                width: 100%;
                font-size: 28px;
                font-weight: bold;
                color: rgba(255,255,255,1);
                text-shadow: 0px 5px 13px rgba(0,0,0,0.30);
                margin-bottom: 20px;
            }
            .text-descs {
                float: left;
                width: 100%;
                font-size: 18px;
                font-weight: 600;
                color: rgba(255,255,255,1);
                text-shadow: 0px 5px 13px rgba(0,0,0,0.30);
            }
        }
    }
}
#main {
    background: #fff;
    margin: 0 auto;
    padding: 0px 0px;
    .management-box {
        float: left;
        width: 100%;
        .list-row-1 {
          float: left;
          width: 100%;
          background: url("../../assets/images/management_2.png") no-repeat;
          background-size: cover;
          padding-bottom: 33%;
          text-align: center;
          overflow: hidden;
          .revolution-en {
              width: 330px;
              margin: 0 auto;
              font-size: 60px;
              font-family: YuMin-Demibold;
              font-weight: bold;
              color: rgba(68,68,68,1);
              padding-top: 5%;
              margin-bottom: 30px;
          }
          .revolution-title {
              width: 145px;
              margin: 0 auto;
              font-size: 28px;
              font-family: YuMin-Demibold;
              font-weight: bold;
              color: rgba(68,68,68,1);
              margin-bottom: 20px;
          }
          .revolution-desc {
              width: 655px;
              margin: 0 auto;
              font-size: 18px;
              font-family: YuMin-Demibold;
              font-weight: bold;
              color: rgba(68,68,68,1);
              p {
                width: 420px;
                display: inline-block;
                font-size: 18px;
                font-family: YuMin-Demibold;
                font-weight: 600;
                color: #444444;
            }
          }
      }
      .list-row-2 {
          width: 100%;
          background: url("../../assets/images/ma_3.png") no-repeat;
          background-size: cover;
          padding-bottom: 10%;
          text-align: center;
          display: flex;
          .responsibility-box {
            float: left;
            width: 440px;
            height: 280px;
            margin-left: 54%;
            margin-top: 22%;
            background: rgba(0,0,0,0.2);
            .responsibility-en {
              width: 100px;
              padding-top: 29px;
              padding-left: 44px;
              font-size: 3em;
              font-family: YuMin-Demibold;
              font-weight: bold;
              color: #ffffff;
              line-height: 84px;
              text-align: left;
            }
            .responsibility-title {
                width: 200px;
                padding-left: 44px;
                font-size: 21px;
                font-family: YuMin-Demibold;
                font-weight: bold;
                color: rgba(255,255,255,1);
                line-height: 40px;
                text-align: left;
                margin-top: 10px;
            }
            .responsibility-desc {
              width: 360px;
              padding-left: 44px;
              font-size: 16px;
              font-family: YuMin-Demibold;
              font-weight: bold;
              color: rgba(255,255,255,1);
              text-align: left;
              margin-top: 10px;
              line-height: 20px;
          }
        }
      }
    }
}

@media only screen and (max-width: 750px){
  #archive-header-management{
    padding-bottom: 0;
    height: 520px;
    font-family: Meiryo;
    #archive-introduction-management {
        float: none;
        width: 80%;
        margin: 0 auto;
        position: relative;
        #management-desc {
          float: none;
          padding-top: 32px;
          text-align: center;
          width: 100%;
          .text-en {
            float: none;
            line-height: 88px;
            margin-bottom: 0;
          }
          .text-title {
              font-size: 36px;
              line-height: 44px;
              font-weight: 400;
              margin-top: 30px;
          }
          .text-descs {
            font-size: 24px;
            line-height: 28px;
            font-weight: 400;
            margin-top: 24px;
        }
      }
    }
  }
  #main .management-box {
    .list-row-1 {
      padding-bottom: 0;
      height: 520px;
      .revolution-en {
          padding-top: 32px;
          line-height: 88px;
      }
      .revolution-title {
          width: 100%;
          font-weight: 400;
          font-size: 36px;
          margin-top: 48px;
          line-height: 44px;
      }
      .revolution-desc {
          margin-top: 32px;
          p {
            width: 100%;
            height: 29px;
            line-height: 29px;
            font-size: 24px;
            font-weight: 400;
            line-height: 1;
        }
      }
    }
    .list-row-2 {
        background: url('../../assets/images/jingying_3@2x.png') no-repeat;
        background-size: cover;
        padding-bottom: 0;
        text-align: center;
        display: inline-block;
        height: 520px;
        .responsibility-box {
            float: none;
            margin: 32px auto 0;
            height: 308px;
            width: 480px;
            .responsibility-en {
                padding: 0;
                width: 100%;
                text-align: center;
                font-size: 60px;
                line-height: 88px;
            }
            .responsibility-title {
                padding: 0;
                width: 100%;
                font-size: 36px;
                text-align: center;
                margin-top: 48px;
                font-weight: 400;
            }
            .responsibility-desc {
                padding: 0;
                width: 90%;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                margin: 34px auto 0;
                font-weight: 400;
            }
        }
    }
  }
}
</style>
