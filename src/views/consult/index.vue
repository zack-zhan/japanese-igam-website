<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">お問合せ</div>
          <div class="introduction-text-desc">Contact Us</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="contact-box">
        <div class="contact-title">お電話によるお問合せ</div>
        <div class="contact-desc">
            お客様デスク
        </div>
        <div class="contact-info clearfix">
            <div class="contact-info-tel"><span class="icon iconfont icon-dianhua"></span>TEL：03-6230-9011</div>
            <div class="contact-info-time">（受付時間：営業日の9：00～17：00）</div>
        </div>
        <div class="contact-email">
            <div class="contact-email-text">メールによるお問合せ</div>
            <div class="contact-emaitl-bt">
                <router-link to="/inquiryForm"><img :src="email"><div class="contact-emaitl-bt-text">お問合せフォーム</div></router-link>
            </div>
        </div>
        <div class="contact-btt-text">
            <div><span>当社では、お客さまのお問合せ等の内容を詳細に把握し、お客さまサービスの向上・改善につなげるため、お客さまとの電話内容を録音させていただく場合があります。あらかじめご了承くださいますようよろしくお願いいたします。当社の個人情報の取扱いに関しましては、</span><router-link style="color: rgba(51,71,156,1)" to="/policydetail?id=d2b4b89ed5e94587aeb919e3f254ce4e">「個人情報保護方針」</router-link><span>をご参照ください。</span></div>
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
import email from '@/assets/images/email.png'
export default {
  data () {
    return {
      email: email
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
            font-family: "Noto Sans SC";
            font-weight: 500;
            color: rgba(255,255,255,1);
            line-height: 40px;
        }
        .introduction-text-desc {
            width: 600px;
            font-size: 28px;
            font-family: "Noto Sans SC";
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
    text-align: center;
    .contact-box {
        max-width: 1040px;
        margin: auto;
        padding-top: 100px;
        .contact-title {
            width: 100%;
            font-size: 30px;
            font-family: "Noto Sans SC";
            font-weight: bold;
            color: rgba(28,28,28,1);
            height: 70px;
        }
        .contact-desc {
            width:112px;
            height:27px;
            font-size: 18px;
            font-family: "Noto Sans SC";
            color: rgba(28,28,28,1);
            border:1px solid rgba(51,71,156,1);
            margin: 0 auto;
            line-height: 27px;
        }
        .contact-info {
            width: 100%;
            float: left;
            .contact-info-text {
                float: left;
                font-size: 20px;
                font-family: "Noto Sans SC";
                color: rgba(28,28,28,1);
                margin-top: 20px;
                width: 120px;
                height: 35px;
            }
            .contact-info-tel {
                height:60px;
                font-size:60px;
                font-family: "Noto Sans SC";
                font-weight: bold;
                color:rgba(51,71,156,1);
                line-height:60px;
                margin-top: 10px;
                .icon-dianhua{
                    font-size: 60px;
                    color:rgba(51,71,156,1);
                }
            }
            .contact-info-time {
                float: left;
                width: 100%;
                height:21px;
                font-size:22px;
                font-family: "Noto Sans SC";
                color:rgba(28,28,28,1);
                line-height:21px;
                text-decoration: underline ;
                margin-top: 10px;
            }
        }
        .contact-email {
            float: left;
            width: 100%;
            margin-top: 64px;
            height: 95px;
            .contact-email-text {
                float: left;
                width: 100%;
                font-size:30px;
                font-family: "Noto Sans SC";
                font-weight: bold;
                color:rgba(28,28,28,1);
                height: 31px;
            }
            .contact-emaitl-bt {
                float: left;
                width: 100%;
                margin-top: 16px;
                a {
                    display: block;
                    width: 200px;
                    height: 48px;
                    line-height: 48px;
                    background: rgba(51,71,156,1);
                    font-size: 16px;
                    font-family: "Noto Sans SC";
                    font-weight: normal;
                    color: rgba(255,255,255,1);
                    text-align: center;
                    margin: 10px auto;
                    img {
                        margin-top: 12px;
                        float: left;
                        margin-left: 25px;
                    }
                    .contact-emaitl-bt-text {
                        float: left;
                        margin-left: 6px;
                    }
                }
            }
        }
        .contact-btt-text {
            margin-top: 64px;
            margin-bottom: 100px;
            float: left;
            width: 1040px;
            background:rgba(51,71,156,0.06);
            font-family: Meiryo;
            font-size: 14px;
            div{
                line-height: 30px;
                font-size:22px;
                font-family: Meiryo;
                color:rgba(28,28,28,1);
                text-align: left;
                margin: 32px;
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
}
</style>
