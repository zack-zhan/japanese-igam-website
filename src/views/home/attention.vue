<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">サイトご利用上の注意</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="related-laws-content-box">
        <div class="related-laws-content-text" style="padding-top: 96px;">
          <p>
              <br>
          </p>
          <p class="MsoNormal">
              サイトご利用上の注意
          </p>
          <p class="MsoListParagraph" style="margin-left:18.0pt;">
              <br>
          </p>
          <p class="MsoListParagraph" style="margin-left:21.0pt;text-indent:-21.0pt;">
              １．免責事項
          </p>
          <p class="MsoListParagraph" style="text-indent:-28px;margin-left:21pt;">
              <span>&nbsp; &nbsp;・当社は、当サイトに掲載されている情報に関しては、万全を期してはおりますが、その正確性、確実性を保証するものではありません。</span>
          </p>
          <p class="MsoListParagraph" style="text-indent:-28px;margin-left:21pt;">
              <span>&nbsp;&nbsp; ・万一、当サイトに記載されている情報を用いたことによりお客様またはその他の方が何らかの被害を被った場合でも、当社および当社に情報を提供している第三者は一切責任を負うものではありません。</span>
          </p>
          <p class="MsoListParagraph" style="text-indent:-28px;margin-left:21pt;">
              <span>&nbsp; &nbsp;・また、当サイトに掲載されている情報などは、予告なく変更、廃止されることがありますので、予めご了承ください。</span>
          </p>
          <p class="MsoListParagraph" style="text-indent:-28px;margin-left:21pt;">
              <span>&nbsp; &nbsp;・当サイトに記載されている事項は、当社のご案内、その他の情報の提供を目的としたものであり、投資勧誘を目的としたものではありません。情報のご利用にあたっては、お客様ご自身の判断でなさるようお願い致します。</span>
          </p>
          <p class="MsoListParagraph" style="text-indent:-28px;margin-left:21pt;">
              <span>&nbsp; &nbsp;・当サイト中の運用実績等に関するグラフ、数値等はあくまでも過去の実績であり、将来の運用成果等を保証するものではありません。</span>
          </p>
          <p class="MsoListParagraph" style="text-indent:-28px;margin-left:21pt;">
              <span>&nbsp;&nbsp; ・当サイトに掲載されている目論見書および運用報告書等は情報提供を目的としたものであり、投資信託取得の際は、販売会社より投資信託説明書（目論見書）をお渡ししますので、詳細をご確認ください。</span>
          </p>
          <p class="MsoNormal">
              <br>
          </p>
          <p class="MsoNormal">
              ２．著作権等
          </p>
          <p class="MsoNormal" style="margin-left:21.0pt;text-indent:-21.0pt;">
              &nbsp; &nbsp;・著作権については、当サイトに掲載されている内容の著作権は、すべて当社に帰属します。著作権法により認められている場合を除き、本ホームページの内容の全部または、一部を転用、複製等することはできません。
          </p>
          <p class="MsoNormal">
              <br>
          </p>
          <p class="MsoNormal">
              ３．当ホームページからのリンク
          </p>
          <p class="MsoNormal" style="margin-left:21.0pt;">
              当サイトからアクセス可能な、第三者が運営するサイトの掲載内容の正確性、信頼性等については、それぞれ各社の責任で管理されているものであり、こうした第三者サイトの利用により生じたいかなるトラブル・損害等に関しても、当社は責任を負うものではありません。予めご了承ください。
          </p>
          <p class="MsoNormal">
              <br>
          </p>
          <p class="MsoNormal">
              ４．推奨ブラウザ
          </p>
          <p class="MsoNormal" style="margin-left:21.0pt;">
              推奨環境については、当サイトはウィンドウズ版Microsoft
              Internet Explorer10以上またはマッキントッシュ版7.0以上のブラウザでのご利用を前提にしております。
          </p>
          <p class="MsoNormal" style="margin-left:21.0pt;">
              当サイトをご覧になるための通信回線の敷設、ハードウェアの設置、ソフトウェアの用意およびインストールなど、必要な設定はすべてお客様がご自身の責任のもとで行うことになります。また、これからの費用はすべてお客様のご負担となります。
          </p>
          <p class="MsoNormal" style="margin-left:21.0pt;">
              なお、通信機器、通信回線等の障害等によって生じた本情報の伝達遅延および誤謬等に関しましても、当社は責任を負うものではありません。
          </p>
          <p>
              <br>
          </p>
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
  mounted () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
    .related-laws-content-box {
        margin-top: 64px;
        float: left;
        width: 100%;
        .related-laws-content-text {
            max-width: 1000px;
            margin: auto;
            margin-bottom: 100px;
            p{
              line-height: 24px;
              font-size: 14px;
            }
        }
    }
}
p {
  font-family: Meiryo;
}

@media only screen and (max-width: 750px){
  #archive-header {
    background: url('../../assets/images/content.png') no-repeat;
    background-size: cover;
    height: 280px;
    padding-bottom: 0;
      #archive-introduction {
        float: none;
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

  #main .related-laws-content-box {
    margin-top: 0;
    .related-laws-content-text {
        background: #ffffff;
        margin-bottom: 0;
        padding: 0 24px;
        padding-bottom: 200px;
        p{
          font-size: 24px;
          line-height: 48px;
        }
    }
  }
}
</style>
