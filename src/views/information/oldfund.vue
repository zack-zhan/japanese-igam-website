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
            <img src="../../assets/images/pr2.png">
          </div>
          <div class="box-title-re">
            <div class="title-re-tag">ダウンロード</div>
            <div class="title-re-list">
              <ul>
                <li><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/%28500023%29_moku_2.pdf"><img style="margin-right: 16px;" src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/pdf-icon.png">交付運用報告書</a></li>
                <li><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/%28500023%29_un_all.pdf"><img style="margin-right: 16px;" src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/pdf-icon.png">運用報告書(全体版)</a></li>
                <li><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/%28500023%29_rep_m0131.pdf"><img style="margin-right: 16px;" src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/pdf-icon.png">月次レポート</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style="font-family:meiyro;font-size:18px;margin-left: 65px;">
          <p>＜償還ファンド＞<span style="color:#FF0000;">※本ファンドは償還いたしました。</span></p>
          <p style="margin-top:28px;">償還価額：9,833.89円（税込み・1万口当たり）</p>
          <p>償還日：2019年4月10日</p>
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
export default {
  data () {
    return {
      originData: [],
      basicpriceList: [],
      pureequityList: [],
      maxNum: 0,
      list: [],
      num: 0,
      dataType: 1,
      netAssets: false
    }
  },
  components: {
    Header,
    Footer
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
      margin: 200px auto;
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
        .titlebar{
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
</style>
