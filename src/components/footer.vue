<template>
  <div>
    <div class="footer">
        <div class="footer-top">
          <div class="title">
            <p style="font-family: ShipporiMincho"> 私たちは、多様化する資産運用ニーズに応え、 新たな金融商品・サービスを提供し続けています。</p>
          </div>
          <div class="details">
              <router-link to="/idea">企業理念</router-link>
          </div>
        </div>
        <div class="footer-btt">
          <div class="footer-content">
            <div class="column-1">
                <div class="column-desc">
                    <p>あいグローバル・アセット・マネジメント株式会社</p>
                    <p>金融商品取引業者 関東財務局長（金商）第414号</p>
                    <div style="float: left;display: block;width: 70px;">加入協会：</div>
                    <div style="float: left;width: 310px;"><p>一般社団法人 投資信託協会</p><p>一般社団法人 日本投資顧問業協会</p><p>一般社団法人 第二種金融商品取引業協会</p></div>
                </div>
                <div class="column-but">
                  <router-link to="/consult" class="column-a-but">
                    お問合せ
                  </router-link>
                </div>
            </div>
            <div class="column-2">
                <ul>
                    <li>
                      <router-link to="/idea">企業理念</router-link>
                    </li>
                    <li>
                      <router-link to="/greetings">会社案内</router-link>
                    </li>
                    <li>
                      <router-link to="/information">ファンド情報</router-link>
                    </li>
                    <li>
                      <router-link to="/list">新着情報</router-link>
                    </li>
                </ul>
            </div>
            <div class="column-4 none clearfix">
                <div class="column-desc">
                    <p>あいグローバル・アセット・マネジメント株式会社 </p>
                    <p>金融商品取引業者 関東財務局長（金商）第414号</p>
                    <div style="float: left;display: block;width: 148px;margin-top: 24px;">加入協会：</div>
                    <div style="float: left;width: 554px;margin-top: 24px;line-height: 48px;"><p>一般社団法人 投資信託協会</p><p>一般社団法人 日本投資顧問業協会</p><p>一般社団法人 第二種金融商品取引業協会</p></div>
                </div>
                <div class="column-but">
                    <router-link to="/consult" class="column-a-but">
                    お問合せ
                  </router-link>
                </div>
            </div>
            <div class="column-3 clearfix">
                <ul>
                    <li>TEL : 03-6230-9066（代表）</li>
                    <li>FAX : 03-6230-9077</li>
                    <li>
                        <div style="display: inline-block;vertical-align: top;">所在地 : </div>
                      <div style="display: inline-block; width: 200px;">
                        <p>〒106-6007</p>
                      </div>
                      <div class="footer-addr-phone" style="display: inline-block; width: 700px;">
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;東京都港区六本木 1-6-1  &nbsp;&nbsp; 泉ガーデンタワー7F</p>
                      </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="copyright">
              <div class="footer_logo"><img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/logo_butt.png"></div>
              <div class="footer-test1"><router-link to="/websiteMap">サイトマップ</router-link></div>
              <div class="footer-test2"><router-link to="/attention">サイトご利用上の注意</router-link> </div>
          </div>
<!--          <div class="copyright2">&copy;Copyright2018 あいグローバル・アセット・マネジメント株式会社.All Rights Reserved.</div>-->
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .footer {
    float: left;
    width: 100%;
    margin: auto 0;
    .footer-top {
        float: left;
        width: 100%;
        height: 320px;
        background: url("../assets/images/banner_s_2@1x.png") no-repeat;
        height: 0;
        padding-bottom: 22.22%;
        background-size: cover;
        -webkit-background-size: 100%;
        .title {
          display: block;
          padding-top: 5%;
          text-align: center;
          height: 49px;
          font-size: 22px;
          font-family:IPAexMincho;
          font-weight: 500;
          color: rgba(248,248,248,1);
          line-height: 24px;
          letter-spacing: 1px;
          margin: auto;
      }
      .details {
          display: block;
          padding-top: 2%;
          margin: 0 auto;
          text-align: center;
          a {
            display: inline-block;
            width: 270px;
            height: 48px;
            line-height: 48px;
            background: rgba(51,71,156,1);
            font-size: 14px;
            font-family: meiryo;
            font-weight: normal;
            color: rgba(255,255,255,1);
            margin-left: 2%;
        }
      }
    }
    .footer-btt {
        float: left;
        width: 100%;
        height: 280px;
        background: rgba(38,39,49,1);
        .footer-content {
          max-width: 1000px;
          margin: 0 auto;
          margin-top: 54px;
          .column-1 {
            float: left;
            width: 380px;
            .column-desc {
                font-size: 14px;
                font-family: Meiryo;
                font-weight: 500;
                color: #CCCCCC;
                line-height: 25px;
            }
            .column-but {
                float: left;
                margin-top: 30px;
                a {
                  display: inline-block;
                  width: 130px;
                  height: 48px;
                  line-height: 48px;
                  background: rgba(51,71,156,1);
                  text-align: center;
                  color: #CCCCCC;
                  font-size: 14px;
              }
            }
          }
          .column-2 {
              float: left;
              width: 115px;
              margin-left: 80px;
              li {
                float: left;
                width: 100%;
                line-height: 32px;
                font-size: 14px;
                a {
                      color: #CCCCCC;
                  }
              }
          }
          .column-3 {
              float: left;
              width: 330px;
              margin-left: 80px;
              li {
                  cursor: auto;
                  color: #9b9b9b;
                  line-height: 32px;
                  font-size: 14px;
              }
          }
      }
    }
    .footer-copyright {
        float: left;
        width: 100%;
        background-color: rgba(38,39,49,1);
        border-top: 1px solid rgba(50,60,71,1);;
        .copyright {
          max-width: 1000px;
          height: 80px;
          margin: auto;
          color: #ffffff;
          .footer_logo {
            float: left;
            margin-top: 24px;
        }
        .footer-test1 {
            float: left;
            margin-left: 296px;
            margin-top: 40px;
            color: #CCCCCC;
            font-size: 14px;
        }
        .footer-test2 {
            float: left;
            margin-left: 64px;
            margin-top: 40px;
            color: #CCCCCC;
            font-size: 14px;
        }
      }
      .copyright2{
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size:12px;
        font-family:IPAexGothic;
        color:rgba(204,204,204,1);
      }
    }
  }
  .none{
    display: none;
  }
  @media only screen and (max-width: 750px){
    .footer .footer-top {
        float: none;
        background: url('../assets/images/banner@2x.png') no-repeat;
        height: 360px;
        padding-bottom: 0;
        position: relative;
        .title {
            padding: 48px 24px 0;
            font-size: 28px;
            line-height: 48px;
            height: auto;
            font-weight: 400;
        }
        .details {
            position: absolute;
            top: 206px;
            left: 0;
            padding: 0;
            text-align: center;
            width: 100%;
            a {
                width: 606px;
                margin: 0 auto;
                height: 96px;
                line-height: 96px;
                font-size: 24px;
            }
        }
    }
    .footer .footer-btt {
        height: auto;
        .footer-content {
            margin: 0;
            .column-1 {
                display: none;
            }
            .column-2 {
                float: none;
                width: auto;
                margin: 0;
                ul {
                  margin: 0;
                  padding: 56px 24px 0;
                  li {
                    float: none;
                    line-height: 96px;
                    border-bottom: 1px solid #2F3742;
                    font-size: 24px;
                    margin: 0;
                }
              }
            }
            .column-4 {
              display: block;
              background: rgba(38,39,49,1);
              padding: 96px 24px 0;
              color: #CCCCCC;
              .column-desc {
                  font-size: 24px;
                  letter-spacing: 2px;
                  line-height: 44px;
              }
              .column-but {
                  width: 352px;
                  float: left;
                  margin-top: 64px;
                  height: 96px;
                  line-height: 96px;
                  background: rgba(51,71,156,1);
                  text-align: center;
                  font-size: 24px;
                  color: #fff;
              }
          }
          .column-3 {
              float: none;
              margin: 0;
              padding: 96px 0 0;
              width: 100%;
              ul {
                  margin: 0;
                  padding-left: 24px;
                  line-height: 28px;
                  li {
                    color: #CCCCCC;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
              }
          }
        }
    }
    .footer .footer-copyright {
        border: none;
        margin-top: -1px;
        // height: 552px;
        .copyright {
          height: 330px;
            margin: 96px 0;
            .footer_logo {
                float: none;
                margin-left: 24px;
                img {
                    width: 562px;
                    height: 64px;
                }
            }
          .footer-test1 {
              float: none;
              margin: 64px 24px 0;
              color: #CCCCCC;
              text-align: left;
              border-bottom: 1px solid #2F3742;
              font-size: 24px;
              a {
                line-height: 96px;
                display: inline-block;
                width: 100%;
            }
          }
          .footer-test2 {
              float: none;
              margin: 0 24px 0;
              color: #CCCCCC;
              text-align: left;
              border-bottom: 1px solid #2F3742;
              font-size: 24px;
              line-height: 96px;
              a {
                line-height: 96px;
                display: inline-block;
                width: 100%;
            }
          }
        }
    }
  }
</style>
