<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">会社案内</div>
          <div class="introduction-text-desc">About Us</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="informaction-box">
        <div class="informaction-box-content">
          <div class="tab">
            <ul>
              <li v-for="(item,index) in tab" :key="index" :class="{action:index === 0}" @click="click(index)">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="content-text" align="left">
            <div class="content-text-first-pc">
                <p class="MsoNormal about-us-phone-li-first-title" style="text-align:center;">
                    ご挨拶
                </p>
                <p class="MsoNormal">
                    2018年、あいグローバル・アセット・マネジメントは、お客様の多様な資産運用ニーズにお応えできる運用会社として誕生しました。
                </p>
                <p class="MsoListParagraph" style="margin-left:42.55pt;">
                    <br>
                </p>
                <p class="MsoNormal">
                    当社は、3つのRを基本理念として掲げています。
                </p>
                <p class="MsoListParagraph" style="margin-left:10pt;">
                    ・&nbsp;&nbsp;REBORN（企業再生）
                </p>
                <p class="MsoListParagraph" style="margin-left:10pt;">
                    ・&nbsp;&nbsp;REVOLUTION（革新的進化）
                </p>
                <p class="MsoListParagraph" style="margin-left:10pt;">
                    ・&nbsp;&nbsp;RESPONSIBILITY（受託者責任）
                </p>
                <p class="MsoNormal">
                    この理念に基づき、従来型の金融サービスにとどまらず、より進化した資産運用サービスや商品をお届けしてまいります。
                </p>
                <p class="MsoNormal">
                    <br>
                </p>
                <p class="MsoNormal">
                    投資家の皆様が求める投資機会を得られるようお手伝いをする、との役割を果たすため当社は、
                </p>
                <p class="MsoNormal">
                    業界内外のリソースを活用し、高度な専門性を有した国内外の資産運用手法の発掘・開発から商品化までを手掛けます。
                </p>
                <p class="MsoNormal">
                    確度の高い情報を収集し、その活用に努めます。
                </p>
                <p class="MsoNormal">
                    運用に当たってはリスク管理を徹底させ、最良のパフォーマンスを追求します。
                </p>
                <p class="MsoNormal">
                    そして、
                </p>
                <p class="MsoNormal">
                    当社の経営資源であるグローバル・ネットワークを最大限に活用しつつ、アセット・マネジメント・ビジネスの在り方の変革に努めます。
                </p>
                <p class="MsoNormal">
                    <br>
                </p>
                <p class="MsoNormal">
                    お客様の声を傾聴する。様々な分野の潮流の変化をしっかりと認識する。革新を目指す。 ―― この想いを大切に、そして「利他」の心を以って、当社は皆様にサービスを提供してまいります。
                </p>
                <p class="MsoNormal">
                    <br>
                </p>
                <p class="MsoNormal">
                    新たな価値創造を可能にするアセット・マネジメント会社、あいグローバル・アセット・マネジメントを、なにとぞよろしくお願い申し上げます。
                </p>
                <p class="MsoNormal">
                    <br>
                </p>
                <p class="MsoNormal" align="right" style="text-align:right;">
                    あいグローバル・アセット・マネジメント株式会社
                </p>
                <p class="MsoNormal" align="right" style="margin-left:189.0pt;text-align:right;">
                    代表取締役社長 田中 英治
                </p>
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
export default {
  data () {
    return {
      tab: [ 'ご挨拶', '会社概要・沿革', '各種方針', '財務状況', '電子公告' ]
    }
  },
  methods: {
    click (index) {
      if (index === 1) {
        this.$router.push('/synopsis')
      } else if (index === 2) {
        this.$router.push('/policy')
      } else if (index === 3) {
        this.$router.push('/finance')
      } else if (index === 4) {
        this.$router.push('/notice')
      }
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
    .informaction-box {
        background-color: rgba(250,250,250,1);
        float: left;
        width: 100%;
        padding: 0px 0px;
        position: relative;
        text-align: center;
        padding-bottom: 200px;
        .informaction-box-content {
            float: left;
            width: 100%;
            .tab {
                float: left;
                width: 100%;
                font-size: 14px;
                ul {
                    list-style: none;
                    display: inline-block;
                    margin-top: 100px;
                    margin-bottom: 1.75em;
                    li {
                        float: left;
                        margin-right: 66px;
                        height: 36px;
                        display: block;
                        font-family: meiryo;
                        padding-bottom: 10px;
                        cursor: pointer;
                        span {
                            line-height: 40px;
                            font-size: 18px;
                        }
                    }
                    .action {
                        border-bottom: 4px solid rgba(51,71,156,1);
                        color: #33479C;
                    }
                }
            }
            .content-text {
                max-width: 1000px;
                color: #1C1C1C;
                margin: 50px auto 0 auto;
                .about-us-phone-li-first-title{
                  margin-bottom: 50px;
                }
                .content-text-first-pc{
                    p{
                      line-height: 25px;
                      font-size: 16px;
                      }
                }
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
  #main .informaction-box {
      background: #ffffff;
      .informaction-box-content {
          float: none;
          .tab {
              float: none;
              ul {
                margin-left: 0;
                width: 100%;
                margin-top: 96px;
                margin-bottom: 64px;
                li{
                    line-height: 84px;
                    width: 19%;
                    height: auto;
                    margin: 0;
                    text-align: center;
                    span {
                        font-size: 24px;
                        display: inline-block;
                        height: 84px;
                    }
                }
                .action {
                    border-bottom: none;
                    span{
                      border-bottom: 4px solid rgba(51,71,156,1);
                      line-height: 80px;
                      font-weight: bold;
                      color: rgba(0,0,0,1);
                    }
                }
            }
          }
          .content-text {
            margin: 0;
            padding: 0 24px;
            font-size: 28px;
            font-weight: 400;
            .about-us-phone-li-first-title {
                display: none;
            }
            .content-text-first-pc{
              p{
                font-size: 28px;
                line-height: 50px;
              }
            }
        }
      }
  }
}
</style>
