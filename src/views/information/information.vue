<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">ファンド情報</div>
          <div class="introduction-text-desc">Fund Information</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix main">
      <div class="commodity-box">
        <div class="commodity-box-content">
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
        <div class="repay">
          <p style="font-size: 28px;font-family:Meiryo;">償還ファンド</p>
          <br/>
          <router-link to="/oldfund" style="color: #000;cursor: pointer;font-family:Meiryo;font-size: 18px;">米国M&Aフォーカス株式ファンド</router-link>
        </div>
        <div class="commodity-box-more none">
          <!--        <a href="">MORE</a>-->
        </div>
        <div style="color: #000;cursor: pointer;font-family:Meiryo;font-size: 18px;">
          <p>旧日本アジア・アセット・マネジメントのファンドについては下記までお問合せください </p>
          <br>
          <p>お客様デスク 03-6230-9011（受付時間：営業日の9：00～17：00）</p>
        </div>
        <div class="commodity-btt"></div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header' // 引入头部组件
import Footer from '@/components/footer' // 引入底部组件
import * as api from '@/service/productservice'
export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    api.getList().then(res => {
      if (res.code === 200) {
        this.products = res.body
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#archive-header {
    width: 100%;
    background: url("../../assets/images/content.png") no-repeat;
    background-size: cover;
    padding-bottom: 30%;
    #archive-introduction {
        float: left;
        margin-top: 15%;
        margin-left: 20%;
        z-index: 2;
        .introduction-text-text {
            font-size: 40px;
            font-family: meiryo;
            font-weight: 500;
            color: rgba(255,255,255,1);
            line-height: 40px;
        }
        .introduction-text-desc {
            width: 600px;
            font-size: 28px;
            font-family: meiryo;
            font-weight: 600;
            color: rgba(255,255,255,1);
            line-height: 28px;
            margin-top: 20px;
        }
    }
}
#main {
    background: #fff;
    margin: 0 auto;
    padding: 0px 0px;
    .commodity-box {
        float: left;
        width: 100%;
        padding: 0px 0px;
        text-align: center;
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
        .repay{
          width: 900px;
          margin: auto auto 48px;
          text-align: left;
        }
        .commodity-btt {
            float: left;
            height: 89px;
        }
    }
}
.newAdd{
  margin-bottom: 50px;
}

.none{
  display: none;
}

@media only screen and (max-width: 750px){
  #archive-header {
    background: url('../../assets/images/content.png') no-repeat;
    background-size: cover;
    height: 280px;
    padding-bottom: 0;
      #archive-introduction {
        margin-top: 24px;
        margin-left: 24px;
        position: relative;
        z-index: 2;
        .introduction-text-desc {
            font-size: 24px;
            margin: 16px 0 0;
            font-weight: 400;
        }
      }
  }

  #main .commodity-box {
      float: none;
      padding-bottom: 200px;
      .commodity-box-content {
          margin-bottom: 0;
          ul {
              padding: 0 45px 12px;
              margin-top: 96px;
              li {
                  width: 100%;
                  height: auto;
                  float: none;
                  margin-right: 0;
                  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.14);
                  margin-bottom: 80px;
                  padding-bottom: 84px;
                  a{
                    .img-box {
                        float: none;
                    }
                    .titles-box {
                        float: none;
                        padding-left: 40px;
                        font-size: 20px;
                        margin-top: 48px;
                        margin-bottom: 24px;
                    }
                    .desc-box {
                        float: none;
                        padding-left: 40px;
                        padding-right: 40px;
                        font-size: 28px;
                        margin-top: 30px;
                        height: auto;
                        line-height: 60px;
                    }
                  }
              }
          }
      }
  }
}
</style>
