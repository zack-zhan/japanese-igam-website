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
              <li v-for="(item,index) in tab" :key="index" :class="{action:index === 1}" @click="click(index)">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="content-text" align="left">
            <div class="entry-content">
                <div class="tlt_main">会社概要</div>
                <table class="philosophy" summary="gaiyo">
                    <tbody>
                    <tr>
                        <th>社名</th>
                        <td><p style="line-height: 30px;">あいグローバル・アセット・マネジメント株式会社</p>
                            <p style="line-height: 30px;">（英文名）i Global Asset Management Co., Ltd.</p></td>
                    </tr>
                    <tr>
                        <th>設立年月日</th>
                        <td>1999年9月17日</td>
                    </tr>
                    <tr>
                        <th>代表取締役社長</th>
                        <td>田中 英治</td>
                    </tr>
                    <tr>
                        <th>所在地</th>
                        <td><p style="line-height: 24px">〒106-6007  東京都港区六本木1-6-1  泉ガーデンタワー7F</p>
                            <p style="line-height: 24px">TEL : 03-6230-9066（代表）</p>
                            <p style="line-height: 24px">FAX : 03-6230-9077</p>
                        </td>
                    </tr>
                    <tr>
                        <th>資本金</th>
                        <td>3億6,500万円（2019年9月30日現在）</td>
                    </tr>
                    <tr>
                        <th>主要株主</th>
                        <td>iホールディングス株式会社</td>
                    </tr>
                    <tr>
                        <th>金融商品取引業者登録番号</th>
                        <td>関東財務局長（金商）第414号</td>
                    </tr>
                    <tr>
                        <th>加入協会</th>
                        <td><p style="line-height: 24px">一般社団法人  投資信託協会</p>
                            <p style="line-height: 24px"> 一般社団法人  日本投資顧問業協会</p>
                            <p style="line-height: 24px">一般社団法人  第二種金融商品取引業協会</p>
                    </td></tr>
                    <tr>
                        <th>業務内容</th>
                        <td>投資運用業、投資助言・代理業、第二種金融商品取引業、これに付随する業務</td>
                    </tr>

                    </tbody>
                </table>
                <div class="space20"></div>
                <div class="tlt_main">沿革</div>
                <table class="philosophy" summary="gaiyo">
                    <tbody>
                    <tr>
                        <th>1999年9月</th>
                        <td><p style="">米ユナイテッド・アセット・マネジメント・コーポレーションの子会社 として『ユナイテッド投信株式会社』を設立</p></td>
                    </tr>
                    <tr>
                        <th>2005年10月</th>
                        <td>ユーエイエム　ジャパン　インクから投資顧問業に係る営業権を譲り受け、社名を『ユナイテッド投信投資顧問株式会社』に変更</td>
                    </tr>
                    <tr>
                        <th>2013年7月</th>
                        <td>社名を『日本アジア・アセット・マネジメント株式会社』に変更</td>
                    </tr>
                    <tr>
                        <th>2018年5月</th>
                        <td>iホールディングス株式会社の子会社となる</td>
                    </tr>
                    <tr>
                        <th>2018年10月</th>
                        <td>社名を『あいグローバル・アセット・マネジメント株式会社』に変更</td>
                    </tr>
                    </tbody>
                </table>
                <div class="space20"></div>
                <div class="entry-content-desc">
                  <!-- 当社は、一般社団法人投資信託協会（以下、「協会」という。）の定款の施行に関する規則第10条第1項第17号イの規定に基づき、別紙様式第21号の「正会員の財務状況等に関する届出書（以下、「協会報告書面」という。）」を協会に提出し、当社の「ホームページ」に当該協会報告書面を掲載するとともに、協会「ホームページ」に当社の当該掲載箇所への直接のリンク先を登録しております。当社が、関東財務局長に提出した特定有価証券の有価証券報告書及び半期報告書は、EDINETにて閲覧が可能です。なお、協会報告書面中の監査報告書/中間監査報告書は、監査報告書/中間監査報告書の原本に記載された事項を電子化したものであり、その原本は当社が別途保管しております。 -->
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
export default {
  data () {
    return {
      tab: [ 'ご挨拶', '会社概要・沿革', '各種方針', '財務状況', '電子公告' ]
    }
  },
  methods: {
    click (index) {
      if (index === 0) {
        this.$router.push('/greetings')
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
                margin: 250px auto 0 auto;
                .entry-content {
                    float: left;
                    width: 100%;
                    .tlt_main {
                        float: left;
                        height: 54px;
                        width: 989px;
                        line-height: 54px;
                        display: flex;
                        border: 1px solid #dcdcdc;
                        border-bottom: 0px;
                        padding-left: 10px;
                        background: rgba(250,251,252,1);
                        font-size: 14px;
                        font-family: meiryo;
                        font-weight: bold;
                        color: rgba(0,0,0,1);
                    }
                    .philosophy {
                        float: left;
                        width: 100%;
                        border-width: 1px 1px 0 1px;
                        background: #FFFFFF;
                        border: 1px solid rgba(51,51,51,0.1);
                        tbody {
                            font-size: 14px;
                            font-family: meiryo;
                            color: rgba(28,28,28,1);
                            line-height: 17px;
                            th {
                                width: 130px;
                                padding: 10px 4px 10px 10px;
                                border-right: 1px #dcdcdc solid;
                                line-height: 54px;
                                text-align: left;
                                vertical-align: top;
                                font-weight: 500;
                                border: 1px solid rgba(51,51,51,0.1);
                            }
                            td {
                                width: 520px;
                                text-align: left;
                                padding: 10px 10px;
                                vertical-align: top;
                                line-height: 54px;
                                border: 1px solid rgba(51,51,51,0.1);
                            }
                        }
                    }
                    .space20{
                      float: left;
                      width: 100%;
                      height: 20px;
                    }
                    .entry-content-desc {
                        float: left;
                        width: 99%;
                        margin-top: 44px;
                        margin-bottom: 88px;
                        font-size: 12px;
                        font-family: meiryo;
                        font-weight: 500;
                        color: rgba(50,60,71,1);
                        line-height: 20px;
                    }
                }
            }
        }
    }
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
                      line-height: 40px;
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
            .entry-content {
                float: none;
                .tlt_main {
                  width: 668px;
                  font-size: 28px;
                  padding-left: 32px;
                  height: 108px;
                  line-height: 108px;
                  font-weight: 400;
              }
              .philosophy {
                  float: none;
                  background: #ffffff;
                  margin-bottom: 96px;
                  tbody tr th {
                    font-size: 28px;
                    width: 33%;
                    padding: 36px 24px;
                    line-height: 34px;
                    vertical-align: middle;
                }
                tbody tr td {
                    width: 67%;
                    font-size: 28px;
                    padding: 36px 24px;
                    line-height: 34px;
                    p {
                      line-height: 1.3 !important;
                    }
                }
              }
              .space20{
                display: none;
              }
              .entry-content-desc {
                  font-size: 24px;
                  line-height: 50px;
                  float: none;
                  width: 100%;
              }
            }
          }
      }
    }
}
</style>
