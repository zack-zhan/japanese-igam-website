<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
    </div>
    <div id="main" class="clearfix main">
      <div class="fond-infomaction-box">
        <div class="fond-infomaction-head">基準価額</div>
        <div class="fond-infomaction-content">
          <div class="fond-infomaction-desc">
            <p>
                ※ 基準価額の数値は通常当日の午後7時までに更新されますが、速報値です。
            </p>
            <p style="margin-left: 19px;">
                確定値およびチャートは翌朝までに更新されます。チャートは分配金を考慮していません。
            </p>
          </div>
          <div class="fond-infomaction-list">
            <table>
              <thead>
                <tr>
                  <th>ファンド名</th>
                  <th>基準価額（円）</th>
                  <th>前日比（円）</th>
                  <th>更新日</th>
                  <th>チャート</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in priceList" :key="index">
                  <td><router-link :to="(`/fundinfo?id=${item.productId}`)">{{item.productName}}</router-link></td>
                  <td style="text-align:center;padding-right:16px;">{{(parseFloat(item.basePrice) === 0 ? '-' : item.basePrice)}}</td>
                  <td style="text-align:center;padding-right:16px;" :class="parseFloat(item.lastDayRate) > 0 ? 'red' : parseFloat(item.lastDayRate) < 0 ? 'green' : ''">{{parseFloat(item.lastDayRate) === 0 ? '-' : item.lastDayRate}}</td>
                  <td>{{item.lastDate}}</td>
                  <td><router-link :to="(`/fundinfo?id=${item.productId}`)"><img :src="tabicon"></router-link></td>
                </tr>
              </tbody>
            </table>

            <div class="fond-infomaction-list-phone none">
                <div class="title">ファンド名</div>
                <div v-for="(item,index) in priceList" :key="index" class="fond-infomaction-list-phone-item">
                    <router-link :to="(`/fundinfo?id=${item.productId}`)">
                        <div class="name" style="line-height: 75px;">{{item.productName}}</div>
                        <div class="infor-chart">
                            <router-link :to="(`/fundinfo?id=${item.productId}`)">
                              <img :src="tabicon">
                            </router-link>
                        </div>
                    </router-link>
                    <div class="infor-details">
                        <div class="infor-details-item">
                            <div class="infor-details-name">基準価額（円）</div>
                            <div class="infor-details-number">{{(parseFloat(item.basePrice) === 0 ? '-' : item.basePrice)}}</div>
                        </div>
                        <div class="infor-details-item">
                            <div class="infor-details-name">前日比（円）</div>
                            <div :class="parseFloat(item.lastDayRate) > 0 ? 'infor-details-number red' : parseFloat(item.lastDayRate) < 0 ? 'infor-details-number green' : 'infor-details-number'">
                              {{parseFloat(item.lastDayRate) === 0 ? '-' : item.lastDayRate}}
                            </div>
                        </div>
                        <div class="infor-details-item">
                            <div class="infor-details-name">更新日</div>
                            <div class="infor-details-number">{{item.lastDate}}</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header' // 引入头部组件
import Footer from '@/components/footer' // 引入底部组件
import tabicon from '@/assets/images/tabicon.png'
import * as api from '@/service/productpriceservice'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      priceList: [],
      tabicon: tabicon
    }
  },
  mounted () {
    api.getLastDayPriceList().then(res => {
      if (res.code === 200) {
        res.body.map(item => {
          item.basePrice = parseFloat(item.basePrice).toLocaleString()
        })
        this.priceList = res.body
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#archive-header {
    position: relative;
    width: 100%;
    background: url("../../assets/images/content.png") no-repeat;
    background-size: cover;
    padding-bottom: 30%;
}
#main {
    background: #fff;
    margin: 0 auto;
    padding: 0px 0px;
    .fond-infomaction-box {
        max-width: 1000px;
        margin: auto;
        .fond-infomaction-head {
            width: 100%;
            margin-top: 92px;
            font-size: 40px;
            font-family: meiryo;
            color: rgba(0,0,0,1);
            line-height: 48px;
        }
        .fond-infomaction-content {
            width: 100%;
            .fond-infomaction-desc {
                float: left;
                width: 100%;
                font-size: 14px;
                font-family: IPAeMincho;
                color: rgba(28,28,28,1);
                line-height: 24px;
                margin-top: 64px;
                p{
                  font-family: Meiryo;
                }
            }
            .fond-infomaction-list {
                float: left;
                width: 100%;
                margin-top: 36px;
                background: rgba(255,255,255,1);
                box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.14);
                margin-bottom: 100px;
                table {
                    width: 100%;
                    thead, tbody {
                        font-size: 14px;
                        font-family: meiryo;
                        color: rgba(28,28,28,1);
                        line-height: 17px;
                    }
                    thead {
                        background: rgba(250,251,252,1);
                        text-align: left;
                    }
                    tr {
                      border-bottom: 1px solid rgba(51,51,51,0.1);
                      height: 66px;
                      line-height: 66px;
                      box-sizing: border-box;
                    }
                    th,td{
                      text-align: left;
                      padding-left: 6px;
                    }
                    img {
                        position: relative;
                        top: 8px;
                        right: -20px;
                        // display: block;
                        // margin-left: 20px;
                        // margin-top: 15px;
                    }
                }
            }
        }
    }
}

.none{
  display: none;
}
.green{
  color: rgba(47, 194, 91, 1);
}
.red{
  color: red;
}

@media only screen and (max-width: 750px){
  #archive-header {
    background: url('../../assets/images/content.png') no-repeat;
    background-size: cover;
    height: 280px;
    padding-bottom: 0;
  }

  #main .fond-infomaction-box {
    background-color: #ffffff;
    padding: 0 24px 200px;
    .fond-infomaction-head {
        width: 100%;
        padding-top: 96px;
        margin: 0;
        font-size: 36px;
        color: #1C1C1C;
        line-height: 70px;
        font-weight: 400;
    }
    .fond-infomaction-content {
      .fond-infomaction-desc {
          float: none;
          font-size: 24px;
          margin-top: 32px;
          line-height: 48px;
          padding-bottom: 96px;
      }
      .fond-infomaction-list table {
          display: none;
      }
      .fond-infomaction-list-phone {
          display: block;
          .title {
              height: 108px;
              font-size: 28px;
              font-family: IPAexGothic;
              color: rgba(28,28,28,1);
              line-height: 108px;
              padding-left: 24px;
              background: #FAFBFC;
          }
          .fond-infomaction-list-phone-item {
              position: relative;
              border-top: 1px solid #EAEAEA;
              a {
                  display: inline-block;
                  width: 100%;
                  height: 108px;
                  .name {
                      width: 500px;
                      height: 108px;
                      font-size: 28px;
                      font-family: IPAexGothic;
                      color: rgba(51,71,156,1);
                      line-height: 1.4;
                      padding: 15px 0 15px 30px;
                  }
                  .infor-chart {
                      position: absolute;
                      top: 30px;
                      right: 24px;
                      img {
                          width: 48px;
                      }
                  }
              }
              .infor-details {
                  margin-left: 110px;
                  border-top: 1px solid #EAEAEA;
                  padding: 30px 24px 50px 0;
                  font-size: 24px;
                  font-family: IPAexGothic;
                  color: #777777;
                  .infor-details-item {
                      margin: 10px 0;
                      height: 42px;
                      .infor-details-name {
                          width: 39%;
                          display: inline-block;
                          vertical-align: top;
                      }
                      .infor-details-number {
                          width: 59%;
                          display: inline-block;
                          text-align: right;
                      }
                  }
              }
          }
      }
    }
  }
}
</style>
