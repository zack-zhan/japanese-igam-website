<template>
  <div>
    <div class="commodity-box">
        <div class="commodity-box-bg">
          <div class="commodity-box-top" data-wow-duration="1s">
            <span class="en"><i class="icon"></i>Fund Information</span>
            <span class="ch">ファンド情報</span>
          </div>
          <div class="commodity-box-content" data-wow-duration="1s">
            <ul>
              <li v-for="(item,index) in products" :key="index">
                <router-link :to="`/fundinfo?id=${item.id}`">
                  <div class="img-box">
                    <img width="100%" height="100%" :src="item.productImageUrl">
                  </div>
                  <div class="titles-box">
                    {{item.summary}}
                  </div>
                  <div class="desc-box">
                    {{item.description}}
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="team-box-content1 swiper-container1">
            <div class="swiper-wrapper">
              <router-link v-for="(item,index) in products" :key="index" :to="`/fundinfo?id=${item.id}`" class="swiper-slide" style="width: 750px; margin-right: 30px;">
              <div class="team-item">
                  <div class="img-box">
                    <img width="100%" height="100%" :src="item.productImageUrl">
                  </div>
                  <div class="titles-box">
                    {{item.summary}}
                  </div>
                  <div class="desc-box">
                    {{item.description}}
                  </div>
              </div>
              </router-link>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination1"></div>
          </div>
        </div>
        <div class="commodity-box-more" data-wow-duration="1s">
            <router-link to="/information">MORE</router-link>
        </div>
        <div class="commodity-btt"></div>
      </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import * as api from '@/service/productservice'
import Swiper from 'swiper'
export default {
  data () {
    return {
      products: []
    }
  },
  mounted () {
    const wowTitle = new WOW({
      boxClass: 'commodity-box-top',
      animateClass: 'a-fadein',
      offset: 10,
      mobile: true,
      live: true
    })
    wowTitle.init()

    const wowContent = new WOW({
      boxClass: 'commodity-box-content',
      animateClass: 'a-fadein',
      offset: 10,
      mobile: true,
      live: true
    })
    wowContent.init()

    const wowMore = new WOW({
      boxClass: 'commodity-box-more',
      animateClass: 'a-fadeinB',
      offset: 0,
      mobile: true,
      live: true
    })
    wowMore.init()

    api.getList().then(res => {
      if (res.code === 200) {
        this.products = res.body.filter(x => x.isShowHome === 1)
        this.$nextTick(() => {
          this.doSwiper()
        })
      }
    })
  },
  methods: {
    doSwiper () {
      var swiper1 = new Swiper('.swiper-container1', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination1',
          clickable: true
        }
      })
      swiper1.init()
    }
  }
}
</script>

<style lang="scss" scoped>
    .commodity-box {
        float: left;
        width: 100%;
        padding: 0px 0px;
        text-align: center;
        .commodity-box-bg {
          background-image: url("../../../assets/images/body.png");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 650px;
        .commodity-box-top {
            text-align: center;
            color: #0A253B;
            display: inline-block;
            .en {
              float: left;
              width: 100%;
              font-size: 50px;
              font-family: Meiryo;
              font-weight: 400;
              color: rgba(255,255,255,1);
              line-height: 56px;
              letter-spacing: 1px;
              .icon {
                display: inline-block;
                width: 8px;
                height: 38px;
                background: rgba(51,71,156,1);
                margin-right: 16px;
            }
          }
          .ch {
              float: left;
              width: 100%;
              font-size: 24px;
              font-family: meiryo;
              font-weight: 500;
              color: #FFFFFF;
              line-height: 24px;
              letter-spacing: 1px;
              margin-top: 20px;
          }
        }
        .commodity-box-content {
            float: left;
            width: 100%;
            margin-bottom: 5%;
            position: relative;
            ul {
              list-style: none;
              padding-left: 45px;
              padding-right: 0px;
              margin: 100px 0px 0px 0px;
              display: inline-block;
              li:hover{
                transform:translateY(-50px);
              }
              li {
                float: left;
                width: 303px;
                height: 512px;
                background: rgba(255,255,255,1);
                box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.14);
                margin-right: 45px;
                letter-spacing: normal;
                transition: All 0.4s ease-in-out;
                -webkit-transition: All 0.4s ease-in-out;
                -moz-transition: All 0.4s ease-in-out;
                -o-transition: All 0.4s ease-in-out;
                .img-box {
                  float: left;
                  width: 100%;
                }
                .titles-box {
                  float: left;
                  padding-left: 20px;
                  text-align: left;
                  font-size: 12px;
                  font-family: meiryo;
                  font-weight: 500;
                  color: rgba(0,0,0,1);
                  line-height: 30px;
                  margin-top: 10px;
              }
                .desc-box {
                  float: left;
                  padding-left: 20px;
                  padding-right: 20px;
                  text-align: left;
                  font-size: 14px;
                  font-family: meiryo;
                  font-weight: 500;
                  color: rgba(158,158,158,1);
                  line-height: 30px;
                  height: 69px;
              }
            }
          }
        }
        .team-box-content1{
          display: none;
        }
      }
      .commodity-box-more a {
            display: inline-block;
            width: 100px;
            height: 48px;
            line-height: 48px;
            background-color: #33479C;
            color: #FFFFFF;
            font-size: 12px;
            font-family: meiryo;
            font-weight: 500;
            letter-spacing: 1px;
      }
      .commodity-btt {
          float: left;
          height: 89px;
      }
    }

    @media only screen and (max-width: 750px){
      .commodity-box {
          float: none;
          padding-bottom: 96px;
          .commodity-box-bg {
            background-image: none;
            .commodity-box-top .en {
                color: rgba(28,28,28,1);
                font-size: 48px;
                line-height: 1;
            }
            .commodity-box-top .ch {
                color: rgba(28,28,28,1);
                font-size: 28px;
                margin-top: 26px;
                line-height: 1;
            }
            .commodity-box-content {
                display: none;
            }
            .team-box-content1 {
                display: block;
                margin-top: 40px;
                overflow: hidden;
                position: relative;
                padding-bottom: 100px;
                .team-item {
                  position: relative;
                  height: 750px;
                  width: 500px;
                  margin: 0 auto;
                  background-size: cover !important;
                  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.14);
                  .titles-box {
                      padding: 0 20px;
                      font-size: 20px;
                      font-family:IPAexMincho;
                      color:rgba(0,0,0,1);
                      line-height:30px;
                  }
                  .desc-box {
                      padding: 0 15px;
                      font-size: 24px;
                      font-family:IPAexMincho;
                      color:rgba(119,119,119,1);
                      line-height:30px;
                  }
              }
              .swiper-pagination1 {
                margin-top: 30px;
              }
            }
          }
          .commodity-box-more{
            margin-top: 450px;
          }
          .commodity-box-more a {
              width: 606px;
              height: 96px;
              line-height: 96px;
              font-size: 24px;
              letter-spacing: 2px;
          }
      }
    }
</style>

<style scoped>
.swiper-pagination1 >>> .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 10px;
  outline: none;
}
.swiper-pagination1 >>> .swiper-pagination-bullet-active {
  background: rgba(51, 71, 156, 1);
}
</style>
