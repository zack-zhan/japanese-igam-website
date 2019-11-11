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
    <div id="main" class="clearfix  main">
      <div class="content-box clearfix">
        <div class="box-title">
          <div class="box-title-left">
            <img :src="product.headImageUrl">
          </div>
          <div class="box-title-re">
            <div class="title-re-tag">ダウンロード</div>
            <div class="title-re-list">
              <ul>
                <li v-for="(item,index) in appendixList" :key="index" :style="item.type === 1 ? '' : 'border:none;height: 20px;'">
                  <a v-if="item.type===1" :href="item.content"><img style="margin-right: 16px;" src="../../assets/images/pdf-icon.png">{{item.title}}</a>
                  <p v-else>{{item.content}}</p>
                </li>
              </ul>
            </div>
            <div class="jijia">
              <router-link to="/price">基準価額 -&gt;</router-link>
            </div>
          </div>
        </div>
        <div class="box-description">
          <div class="titlebar_pc">
            <div :class="num === 0?'active':''" @click="btn(0)">基準価額</div>
            <div :class="num === 1?'active':''" @click="btn(1)">ファンドのリスク</div>
            <div :class="num === 2?'active':''" @click="btn(2)">手数料</div>
          </div>
          <div class="titlebar_mobile">
            <div :class="num === 0?'active':''" @click="btn(0)">基準価額</div>
            <div :class="num === 1?'active':''" @click="btn(1)">ファンドのリスク</div>
            <div :class="num === 2?'active':''" @click="btn(2)">手数料</div>
          </div>
          <div class="box-description-content" v-if="num === 0">
            <div class="date">基準日：{{( price.date ? formatDate(price.date) : '-' )}}</div>
            <div class="fond-infomaction-list">
              <table>
                <thead>
                <tr>
                  <th>純資産総額（円）</th>
                  <th>基準価額（円）</th>
                  <th>前日比（円）</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{{(Math.round(price.netAssets/1000000)/100)}}億</td>
                  <td>{{(Math.round(price.basePrice * 100)/100)}}</td>
                  <td>{{(Math.round(price.lastDayRate * 100)/100)}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="box-charts">
              <div class="box-charts-header">
                <div class="box-charts-mo">
                  <ul>
                    <li data-id="1" :class="(dataType === 1 ? 'action' : '')" @click="dataType=1">1ヶ月</li>
                    <li data-id="2" :class="(dataType === 2 ? 'action' : '')" @click="dataType=2">3ヶ月</li>
                    <li data-id="3" :class="(dataType === 3 ? 'action' : '')" @click="dataType=3">6ヶ月</li>
                    <li data-id="4" :class="(dataType === 4 ? 'action' : '')" @click="dataType=4">1年</li>
                    <li data-id="5" :class="(dataType === 5 ? 'action' : '')" @click="dataType=5">3年</li>
                    <li data-id="6" :class="(dataType === 6 ? 'action' : '')" @click="dataType=6">5年</li>
                    <li data-id="7" :class="(dataType === 7 ? 'action' : '')" @click="dataType=7">10年</li>
                  </ul>
                </div>
                <div class="box-charts-rg">
                  <input type="checkbox" v-model="netAssets"/>
                  <label>純資産総額表示</label>
                </div>
              </div>
              <chart class="box-charts-main" :options="options"/>
            </div>
          </div>
          <div class="box-description-content" v-if="num === 1">
            <img :src="product.riskImageUrl" alt="" width="200%" height="1790" class="size-large wp-image-4939">
<!--            <div style="margin-top:50px;">-->
<!--              <p>当サイトに掲載されている情報は、あいグローバル・アセット・マネジメント株式会社のご案内等のほか、主に投資信託及び運用サービスに関する情報の提供を目的としたものであり、投資信託の勧誘を目的としたものではありません。なお、事前の予告なしに当サイトの内容が変更または廃止される場合がありますのであらかじめご了承ください。</p>-->
<!--              <p> 当サイトは、信頼できると考えられる情報に基づいて作成しておりますが、情報の正確性、信頼性、完全性を保証するものではありません。また、当サイトに記載している各事項は、現時点または過去の実績を示したものであり、将来の成果を示唆または保証するものではありません。 </p>-->
<!--            </div>-->
<!--            <div style="margin-top:50px;">マネジメント株式会社のご案内等のほか、主に投資信託及び運用サービスに関する情報の提供を目的としたものであり、投資信託の勧誘を目的としたものでは </div>-->
          </div>
          <div class="box-description-content" v-if="num === 2">
            <img :src="product.feeImageUrl" alt="" width="200%" height="670" class="size-large wp-image-5680">
          </div>
        </div>
        <div class="kongbai"></div>
        <div class="box-description">
          <div class="box-description-title-1">販売会社一覧</div>
          <div class="box-description-content-1">
            <ul>
              <li v-for="(item,index) in corporationList" :key="index"><a :href="item.url">{{item.corporationName}}</a></li>
            </ul>
          </div>
        </div>
        <div class="box-description">
          <div class="box-description-content">
            <p>本サイトは、ファンドの商品性格および運用状況等についてお伝えすることを目的として、あいグローバル・アセット・マネジメント株式会社が作成したものです。</p>
            <p>特定の商品の勧誘や売買の推奨等を目的としたものではありません。</p>
            <p>本サイトは信頼できると考えられる情報に基づいて作成しておりますが、情報の正確性、完全性を保障するものではありません。</p>
            <p>本サイトに記載している各事項は、現時点または過去の実績を示したものであり、将来の成果を示唆または保証するものではありません。</p>
            <p>本サイトの記載内容、数値等については、作成時点のものであり事前の連絡なしに変更されることがあります。</p>
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
import * as api from '@/service/productservice'
import * as priceapi from '@/service/productpriceservice'
import * as appendixapi from '@/service/productappendixservice'
import * as corporationapi from '@/service/productcorporationservice'
export default {
  mounted () {
    if (!this.$route.query.id) {
      this.$router.push('/home')
    }
    this.initPage(this.$route.query.id)
  },
  data () {
    return {
      product: {},
      originData: [],
      basicpriceList: [],
      pureequityList: [],
      dateList: [],
      appendixList: [],
      corporationList: [],
      maxNum: 0,
      minNum: 0,
      list: [],
      num: 0,
      price: {
        netAssets: 0,
        basePrice: 0,
        data: '',
        lastDayRate: 0
      },
      dataType: 1,
      netAssets: false
    }
  },
  components: {
    Header,
    Footer
  },
  watch: {
    dataType (value) {
      let desDate
      switch (value) {
        case 1: {
          desDate = this.addMonth(this.today, -1)
          break
        }
        case 2: {
          desDate = this.addMonth(this.today, -3)
          break
        }
        case 3: {
          desDate = this.addMonth(this.today, -6)
          break
        }
        case 4: {
          desDate = this.addYear(this.today, -1)
          break
        }
        case 5: {
          desDate = this.addYear(this.today, -3)
          break
        }
        case 6: {
          desDate = this.addYear(this.today, -5)
          break
        }
        case 7: {
          desDate = this.addYear(this.today, -10)
          break
        }
      }
      this.list = this.originData.filter(x => {
        const theDate = new Date(x.date)
        return desDate <= theDate
      })
      this.dateList = this.list.map(x => this.formatDate(x.date))
      this.basicpriceList = this.list.map(x => x.basePrice)
      let maxValue = 0
      this.pureequityList = this.list.map(x => {
        const num = parseInt(x.netAssets) / 100000000
        const value = num.toString().substring(0, 5)
        return value
      })
      this.pureequityList.map(x => {
        maxValue = Math.max(x, maxValue)
      })
      this.maxNum = Math.floor(maxValue) * 5
    },
    '$route': {
      handler (val) {
        this.initPage(val.query.id)
      }
    }
  },
  methods: {
    initPage (productId) {
      api.getOne(productId).then(res => {
        if (res.code === 200) {
          this.product = res.body
        }
      })
      priceapi.getLastDayPrice(productId).then(res => {
        if (res.code === 200) {
          this.price = res.body
          console.log(res.body, '--')
        }
      })
      priceapi.getListByProductId(productId).then(res => {
        if (res.code === 200) {
          this.originData = res.body
          this.list = this.originData.filter(x => {
            const theDate = new Date(x.date)
            const date = this.addMonth(this.today, -1)
            return date <= theDate
          })
          this.basicpriceList = this.list.map(x => x.basePrice)
          let maxValue = 0
          this.pureequityList = this.list.map(x => {
            const num = parseInt(x.netAssets) / 100000000
            const value = num.toString().substring(0, 5)
            if (num > maxValue) {
              maxValue = num
            }
            return value
          })
          this.dateList = this.list.map(x => this.formatDate(x.date))
          this.maxNum = Math.floor(maxValue) * 5
        }
      })
      appendixapi.getList(productId).then(res => {
        if (res.code === 200) {
          this.appendixList = res.body
        }
      })
      corporationapi.getList(productId).then(res => {
        if (res.code === 200) {
          this.corporationList = res.body
        }
      })
    },
    btn (index) {
      this.num = index
    },
    get_thousand_num (num) {
      return (num || 0).toString().replace(/\d+/, function (n) {
        var len = n.length
        if (len % 3 === 0) {
          return n.replace(/(\d{3})/g, ',$1').slice(1)
        } else {
          return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1')
        }
      })
    },
    addMonth (date, num) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      const day = date.getDate()
      const desMonth = month + num
      const yearDiff = desMonth % 12 === 0 ? desMonth / 12 - 1 : Math.floor(desMonth / 12)
      year = year + yearDiff
      month = desMonth % 12 === 0 ? 12 : desMonth % 12
      month = month < 0 ? month + 12 : month
      const desDate = new Date(year, month - 1, day)
      return desDate
    },
    addYear (date, num) {
      return new Date(date.getFullYear() + num, date.getMonth(), date.getDate())
    },
    formatDate (dateStr) {
      return dateStr.replace('T00:00:00', '')
    }
  },
  computed: {
    options () {
      const that = this
      return {
        title: {
          text: ''
        },
        color: ['#1890FF', '#2FC25B'],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            let jz = that.get_thousand_num(params[0].value)
            const array = [`日付：${that.$charts.format.formatTime('yyyy/M/d', params[0].name)}`, `基準価額：${jz}円`]
            if (that.netAssets) {
              array.push(`純資産総額：${params[1].value}億円`)
            }
            return array.join('<br/>')
          }
        },
        legend: {
          data: ['意向', '预购']
        },
        toolbox: {
          show: false
        },
        calculable: true,
        xAxis: [{
          data: that.dateList
        }],
        yAxis: [{
          type: 'value',
          name: '基準価額(円)',
          min: this.minBasicPrice,
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        }, {
          type: 'value',
          name: '純資産額(億円)',
          axisLabel: {
            formatter: '{value}'
          },
          max: this.maxNum,
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dashed'
            }
          }
        }],
        series: that.netAssets ? [{
          name: '基準価額',
          type: 'line',
          stack: '基準価額',
          areaStyle: {color: 'rgba(24,144,255,0.06)'},
          data: that.basicpriceList
        }, {
          name: '純資産総額',
          type: 'line',
          stack: '純資産総額',
          yAxisIndex: 1,
          areaStyle: {color: 'rgba(47,194,91,0.06)'},
          data: that.pureequityList
        }
        ] : [{
          name: '基準価額',
          type: 'line',
          stack: '基準価額',
          areaStyle: {color: 'rgba(24,144,255,0.06)'},
          data: that.basicpriceList
        }]
      }
    },
    today () {
      let date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      date = new Date(year, month, day)
      // date = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
      return date
    },
    minBasicPrice () {
      if (this.basicpriceList && this.basicpriceList.length > 0) {
        let minValue = this.basicpriceList[0]
        this.basicpriceList.map(x => {
          minValue = Math.min(x, minValue)
        })
        minValue = Math.floor(minValue / 100.1) * 100
        return minValue
      }
      return 0
    }
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
    .content-box {
      /*float: left;*/
      /*width: 100%;*/
      max-width: 1440px;
      margin: 0px auto;
      margin-top: 200px;
      .box-title {
        width: 100%;
        height: 650px;
        display: flex;
        .box-title-left {
          float: left;
          padding-left: 0px;
          width: 805px;
          height: 467px;
          background-size: 100%;
          -webkit-background-size: 100%;
          position: relative;
        }
        .box-title-re {
          float: left;
          margin-left: 175px;
          margin-top: 150px;
          width: 20%;
          height: 650px;
          position: relative;
          .title-re-tag {
            float: left;
            font-size: 16px;
            font-family: meiryo;
            color: rgba(155,155,155,1);
            line-height: 21px;
            width: 100%;
          }
          .title-re-list {
            float: left;
            margin-top: 36px;
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
              width: 20%;
              li {
                float: left;
                width: 100%;
                height: 48px;
                margin: 0;
                padding: 0;
                margin-right: 20px;
                margin-bottom: 20px;
                p {
                  font-family: Meiryo;
                  font-size: 14px;
                  line-height: 24px;
                  font-weight: 500;
                  white-space: nowrap;
                  margin-bottom:40px;
                  margin-left: 13px;
                }
                a {
                  width: 240px;
                  font-size: 18px;
                  font-family: meiryo;
                  font-weight: 500;
                  color: rgba(28,28,28,1);
                  display: inline-block;
                }
              }
            }
          }
          .notice_web {
            float: left;
          }
          .jijia {
            float: left;
            width: 137px;
            height: 48px;
            a {
              display: block;
              width: 137px;
              height: 48px;
              background: rgba(51,71,156,1);
              font-size: 14px;
              font-family: meiryo;
              color: rgba(255,255,255,1);
              line-height: 48px;
              text-align: center;
            }
          }
        }
      }
      .box-description {
        float: left;
        width: 100%;
        .titlebar_pc{
          width: 200px;
          margin-top: 60px;
          float: left;
          div{
            border-bottom:1px solid rgba(221,221,221,1);
            line-height: 48px;
            float: right;
            text-align: center;
            position: relative;
            cursor: pointer;
          }
          div:nth-child(1),div:nth-child(3){
            width: 104px;
          }
          div:nth-child(2){
            width: 180px;
            margin: 30px 0;
          }
          .active{
            background:rgba(51,71,156,1);
            color: #fff;
          }
          .active::before{
            display:block;
            content:'';
            border-width:6px;
            border-style:solid;
            border-color:transparent transparent transparent rgba(51,71,156,1);
            position:absolute;
            top: 19px;
            right: -12px;
          }
        }
        .box-description-title {
          max-width: 1000px;
          margin: 0 auto;
          font-size: 28px;
          font-family: meiryo;
          font-weight: 500;
          color: rgba(0,0,0,1);
          line-height: 28px;
          box-sizing: border-box;
          border-left: 10px solid rgba(51,71,156,1);
          padding-left: 16px;
          margin-top: 100px;
        }
        .box-description-content {
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 60px;
          padding-bottom: 100px;
          border-bottom: 1px solid #DDDDDD;
          font-size: 12px;
          font-family: IPAeMincho;
          font-weight: 500;
          color: #444444;
          line-height: 20px;
          img {
            max-width: 100%;
            height: auto;
          }
          div{
            font-size:20px;
            font-family:Meiryo;
            color:rgba(28,28,28,1);
            line-height:32px;
          }
          .box-charts{
            float: left;
            width: 100%;
            margin-top: 60px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 13px 0px rgba(0,0,0,0.14);
            margin-bottom: 72px;
            .box-charts-main{
              float: left;
              margin-top: 16px;
              width: 100%;
              height: 520px;
            }
            .box-charts-header{
              float: left;
              width: 100%;
              margin-top: 16px;
              font-family: IPAeMincho;
              .box-charts-mo{
                float: left;
                width: 70%;
                margin-left: 30px;
                ul{
                  list-style: none;
                  li{
                    list-style: none;
                    float: left;
                    width: 60px;
                    text-align: center;
                    margin-bottom: 10px;
                    cursor: pointer;
                    font-size: 14px;
                  }
                  .action{
                    background:rgba(51,71,156,1);
                    border-radius:2px;
                    color:rgba(255,255,255,1);
                  }
                }
              }
              .box-charts-rg {
                input{
                  vertical-align: middle;
                }
                label {
                  cursor: pointer;
                  font-size: 14px;
                }
              }
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
              th,td {
                padding-left: 6px;
                text-align: center;
              }
              .green {
                color: rgba(47, 194, 91, 1);
              }
            }
          }
        }
        .box-description-title-1 {
          max-width: 1000px;
          margin: 0 auto;
          font-size: 28px;
          font-family: Meiryo;
          font-weight: 500;
          color: rgba(0,0,0,1);
          line-height: 28px;
          box-sizing: border-box;
          border-left: 10px solid rgba(51,71,156,1);
          padding-left: 16px;
        }
        .box-description-content-1 {
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 64px;
          padding-bottom: 40px;
          border-bottom: 1px solid #DDDDDD;
          display: flex;
          ul {
            width: 100%;
            li {
              float: left;
              width: 20%;
              text-align: center;
              a {
                font-size: 24px;
                font-family: meiryo;
                font-weight: bold;
                color: rgba(199,199,204,1);
                line-height: 42px;
              }
              a:hover {
                color: rgba(51,71,156,1);
              }
            }
          }
        }
      }
      .kongbai {
        float: left;
        width: 100%;
        height: 100px;
      }
    }
  }

  .titlebar_mobile{
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

    #main .content-box {
      margin-top: 120px;
      padding-bottom: 100px;
      .box-title {
        display: block;
        background: #ffffff;
        height: auto;
        .box-title-left {
          float: none;
          width: 100%;
          height: auto;
          padding: 0 24px;
          background: white;
          box-sizing: border-box;
          img {
            width: 702px;
          }
        }
        .box-title-re {
          width: 702px;
          height: auto;
          margin: 0 24px;
          padding-top: 96px;
          float: none;
          box-sizing: border-box;
          .title-re-tag {
            float: none;
            font-size: 28px;
            margin-bottom: 32px;
            line-height: 41px;
          }
          .title-re-list {
            float: none;
            ul {
              width: 100%;
              li {
                float: none;
                line-height: 96px;
                height: 96px;
                padding-left: 20px;
                border:1px solid rgba(221,221,221,1);
                box-sizing: border-box;
                a {
                  font-size: 32px;
                  width: 100%;
                  img {
                    width: 44px;
                    display: inline-block;
                    vertical-align: text-top;
                  }
                }
              }
            }
          }
          .notice_web{
            font-size: 28px !important;
            p{
              margin-bottom: 20px;
            }
          }
          .jijia {
            display: none;
            width: 606px;
            height: 96px;
            font-size: 24px;
            margin-top: 96px;
            a {
              width: 600px;
              height: 96px;
              line-height: 96px;
              font-size: 24px;
            }
          }
        }
      }
      .box-description {
        padding-top: 100px;
        background: #ffffff;
        .box-description-title-1 {
          margin: 0 12px;
          border-left: 6px solid rgba(51,71,156,1);
          font-size: 48px;
          line-height: 48px;
        }
        .box-description-content-1 {
          border: none;
          padding: 96px 24px 0;
          ul li {
            width: 50%;
            a {
              font-size: 36px;
              font-weight: 400;
              height: 80px;
              line-height: 80px;
            }
          }
        }
        .box-description-content {
          margin: 0 24px;
          font-size: 24px;
          font-weight: 400;
          line-height: 48px;
          letter-spacing: 1px;
          border-bottom: none;
          padding: 96px 0 100px;
          .date{
            font-size: 28px;
          }
        }
        .titlebar_pc{
          display: none;
        }
        .titlebar_mobile{
          display: block;
          width: 100%;
          margin: 0 5%;
          div{
            width: 20%;
            height: 50px;
            float: left;
            text-align: center;
            font-size: 28px;
            margin: 0 5%;
          }
          div:nth-child(2){
            width: 30%;
            margin: 0;
          }
          .active{
            color:#33479C;
            border-bottom: 2px solid #33479C;
          }
        }
        .box-description-content .fond-infomaction-list table {
          th{
            font-size: 24px;
          }
          td{
            font-size: 32px;
          }
        }
      }
    }
  }
</style>
