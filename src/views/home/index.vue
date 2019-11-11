<template>
  <div>
    <div class="new-site-header">
      <!-- 头部 -->
      <Header></Header>

      <div class="introduction animated fadeInUp">
          <div class="text-desc">
              <span class="ch">夢はみるものではなく かなえるものだ</span>
              <span class="en">We don't dream, We make dreams come true.</span>
          </div>
      </div>
    </div>
    <div class="main">
      <Board></Board>
      <Information></Information>
      <News></News>

      <div class="related-laws">
        <div class="related-left-model">
            <img src="../../assets/images/bg2_2.png">
        </div>
        <div class="related-re-model">
          <img src="../../assets/images/bg2_4.png">
        </div>
        <div class="related-laws-box section">
            <div class="informaction_desc">
                <p><span>当サイトについて&nbsp;</span></p>
                <p>当サイトに掲載されている情報は、あいグローバル・アセット・マネジメント株式会社のご案内等のほか、主に投資信託及び運用サービスに関する情報の提供を目的としたものであり、投資信託の勧誘を目的としたものではありません。なお、事前の予告なしに当サイトの内容が変更または廃止される場合がありますのであらかじめご了承ください。 当サイトは、信頼できると考えられる情報に基づいて作成しておりますが、情報の正確性、信頼性、完全性を保証するものではありません。また、当サイトに記載している各事項は、現時点または過去の実績を示したものであり、将来の成果を示唆または保証するものではありません。サイト内に記載されている情報の著作権は、あいグローバル・アセット・マネジメント株式会社に帰属し、無断で転用・複製・転載等をすることはできません。</p>
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
import Board from './components/board' // 引入董事会部位组件
import Information from './components/information' // 引入情报部位组件
import News from './components/news' // 引入新闻部位组件
import Footer from '@/components/footer' // 引入底部组件
export default {
  components: {
    Header,
    Board,
    Information,
    News,
    Footer
  },
  mounted () {
    var wow = new WOW({
      boxClass: 'informaction_desc',
      animateClass: 'a-fadein',
      offset: 10,
      mobile: true,
      live: true
    })
    wow.init()
  }
}
</script>

<style lang="scss" scoped>
.new-site-header{
    float: left;
    width: 100%;
    height: 0;
    padding-bottom: 80%;
    background: url("../../assets/images/500282427.jpg") no-repeat;
    background-color: black;
    background-size: cover;
    -webkit-background-size: 100%;
    position: relative;

  .introduction{
    float: left;
    width: 100%;
    margin-top: 23%;
    position: absolute;
    // z-index: 2;
    text-align: center;
    .text-desc{
      font-family:IPAexMincho;
      .ch{
          width: 100%;
          margin-top: 38px;
          font-size: 3rem;
          color: #FFFFFF;
          font-weight: lighter;
          display: inline-block;
          font-family: ShipporiMincho;
          line-height: 80px;
      }
      .en{
          width: 100%;
          margin-top: 20px;
          font-size: 20px;
          color: #FFFFFF;
          font-weight: lighter;
          display: inline-block;
      }
    }
  }
}
.main{
  background: #fff;
  margin: 0 auto;
  padding: 0px 0px;

  .related-laws {
    float: left;
    width: 100%;
    height: 135px;
    padding: 52px 0 44px 0;
    position: relative;
    .related-left-model {
      position: absolute;
      margin-left: -600px;
      margin-top: -300px;
    }
    .related-re-model {
      position: absolute;
      margin-left: 94%;
      margin-top: 0px;
      img{
        width: 114px;
        height: 332px;
      }
    }
    .related-laws-box {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      .informaction_desc {
        float: left;
        width: 100%;
        padding-bottom: 100px;
        p{
          font-size:12px;
          font-family:IPAexGothic;
          line-height: 20px;
        }
      }
    }
  }
}

@media only screen and (max-width: 750px){
  .new-site-header {
    background: url("../../assets/images/banner1.png") no-repeat;
    height: 520px;
    float: none;
    padding-bottom: 0;
    .introduction {
        float: none;
        margin-top: 110px;
        .text-desc .ch {
          font-size: 28px;
          margin-top: 0;
          font-weight: 400;
          line-height: 60px;
      }
      .text-desc .en {
          font-size: 24px;
          margin-top: 10px;
          font-weight: 400;
      }
    }
  }
  .main .related-laws{
    height: 560px;
    .related-re-model{
      display: none;
    }
    .related-laws-box {
      background: #ffffff;
      margin-top: 0 ;
      margin-bottom: 0 ;
      .informaction_desc {
          float: none;
          padding: 0 24px ;
          width: auto;
          p{
            font-size: 24px;
            color: #0E1726;
            font-family: 'IPAexGothic';
            line-height: 40px;
          }
      }
    }
  }
}
</style>
