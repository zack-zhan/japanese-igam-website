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
              <li v-for="(item,index) in tab" :key="index" :class="{action:index === 3}" @click="click(index)">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="content-text" align="left">
            <div class="entry-content">
                <div class="tlt_main">財務状況</div>
                <table class="philosophy" summary="gaiyo">
                    <tbody>
                    <tr>
                        <th>2019年6月28日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20190628.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    <tr>
                        <th>2018年12月20日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20181220.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    <tr>
                        <th>2018年6月29日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20180629.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    <tr>
                        <th>2017年12月27日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20171227.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    <tr>
                        <th>2017年6月30日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20170630.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    <tr>
                        <th>2016年12月27日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20161227_2.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    <tr>
                        <th>2016年6月30日</th>
                        <td><a href="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20160630.pdf">正会員の財務状況等に関する届出書</a></td>
                    </tr>
                    </tbody>
                </table>
                <div class="space20"></div>
                <div class="entry-content-desc">
                    当社は、一般社団法人投資信託協会（以下、「協会」という。）の定款の施行に関する規則第10条第1項第17号イの規定に基づき、別紙様式第21号の「正会員の財務状況等に関する届出書（以下、「協会報告書面」という。）」を協会に提出し、当社のホームページに当該協会報告書面を掲載するとともに、協会ホームページに当社の当該掲載箇所への直接のリンク先を登録しております。当社が、関東財務局長に提出した特定有価証券の有価証券報告書及び半期報告書は、EDINETにて閲覧が可能です。なお、協会報告書面中の監査報告書/中間監査報告書は、監査報告書/中間監査報告書の原本に記載された事項を電子化したものであり、その原本は当社が別途保管しております。
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
      } else if (index === 1) {
        this.$router.push('/synopsis')
      } else if (index === 2) {
        this.$router.push('/policy')
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
                            a{
                                color: rgba(51,71,156,1);
                            }
                            a:hover{
                              color:#000;
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
                  font-size: 26px;
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
