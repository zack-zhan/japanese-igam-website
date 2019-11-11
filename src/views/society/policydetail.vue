<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
    </div>
    <div id="main" class="clearfix  main">
      <div class="related-laws-content-box">
        <div class="related-laws-content-text">
          <div class="return">
              <a href="javascript:history.back(-1)"><img style="max-width: 100%;height: 2rem;" :src="returnIcon"></a>
          </div>
          <div class="title">{{policy.title}}</div>
          <div class="content" v-html="policy.content">
<!--            <div class="c_box">-->
<!--              <div>1. お客様本位の業務運営に関する方針の策定・公表</div>-->
<!--              <div style="margin-left:16px;">当社は、経営理念である「お客様の大切な資産の運用を担う者として、受託者責任に基づき、常にお客様の利益を最優先して業務を遂行」することを経営の柱と位置づけており、ここに「お客様本位の業務運営を実現するための方針」を定め、公表いたします。</div>-->
<!--              <div style="margin-left:16px;">また、今後の当社の本方針に対する取り組みをより一層向上させるため、本方針は適宜見直してまいります。</div>-->
<!--            </div>-->
<!--            <div class="c_box">-->
<!--              <div>2. お客様の最善の利益の追求</div>-->
<!--              <div style="margin-left:16px;">当社は、お客様へ良質なサービスを提供し、最善の利益を図るため、資産運用商品のラインナップを整えるとともに、各々の商品性に応じた最善および最適な運用成果を目指します。</div>-->
<!--            </div>-->
<!--            <div class="c_box">-->
<!--              <div>3. 利益相反の適切な管理</div>-->
<!--              <div style="margin-left:16px;">当社は、お客様の利益を害するおそれのある行為を未然に防ぐとともに、利益相反のおそれのある取引等を適切な方法により管理するために、利益相反管理基本方針を策定し、本方針に従い適切に利益相反管理を実施いたします。</div>-->
<!--            </div>-->
<!--            <div class="c_box">-->
<!--              <div>4. 手数料等の明確化</div>-->
<!--            <div style="margin-left:16px;">当社は、お客様にご負担いただく資産運用商品の購入時手数料、運用管理費用（信託報酬）、およびその他の費用・手数料（以下、「手数料等」といいます。）について、当該手数料等がどのようなサービスの対価に関するものかを含め、お客様がより容易に理解できるよう、目論見書等の開示方法の改善に努めます。</div>-->
<!--            </div>-->
<!--            <div class="c_box">-->
<!--              <div>5. 重要な情報の分かりやすい提供</div>-->
<!--            <div style="margin-left:16px;">当社は、資産運用商品の内容について、お客様が容易に理解できるよう、目論見書、販売用資料、ホームページ等の記載内容に工夫を凝らし、分かりやすい情報提供に努めます。</div>-->
<!--            </div>-->
<!--            <div class="c_box">-->
<!--              <div>6. お客様にふさわしいサービスの提供</div>-->
<!--              <div style="margin-left:16px;">当社は、お客様のニーズを満たす高品質の商品・サービスの提供に努め、その信頼に応えることが当社の使命と考え、幅広いお客様のニーズに応える資産運用商品の開発・提供に努めます。</div>-->
<!--            </div>-->
<!--            <div class="c_box">-->
<!--              <div>7. 役職員に対する適切な動機づけの枠組み等</div>-->
<!--            <div style="margin-left:16px;">当社は、独立性を確保するとともに、透明性の高いガバナンス態勢の構築および実効性あるリスク管理態勢、コンプライアンス態勢の確保を徹底しております。</div>-->
<!--            <div style="margin-left:16px;">また、高度な専門性を有した人材の育成に努めており、従業員を業界団体等が主催するフィデューシャリー・デューティーに関するセミナー等へ積極的に参加させることなどを通じて、会社全体としてフィデューシャリー・デューティーの徹底を図ってまいります。</div>-->
<!--            </div>-->
          </div>
<!--          <div class="footer">以上</div>-->
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
import returnIcon from '@/assets/images/return.png'
import * as api from '@/service/policyservice'
export default {
  data () {
    return {
      returnIcon: returnIcon,
      policy: {}
    }
  },
  mounted () {
    if (!this.$route.query.id) {
      this.$router.push('/home')
    }
    const id = this.$route.query.id
    api.getOne(id).then(res => {
      if (res.code === 200) {
        this.policy = res.body
      }
    })
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
            .title{
              font-size: 19px;
              font-weight: bold;
              text-align: center;
              margin-top: 10px;
            }
            .content{
              margin-top: 40px;
              .c_box{
                margin-bottom: 30px;
                div{
                    line-height: 25px;
                  }
              }
            }
            .footer{
              text-align: right;
              margin-top: 40px;
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
  }

  #main .related-laws-content-box {
    background: #ffffff;
    margin: 0;
    .related-laws-content-text {
        background: #ffffff;
        margin-bottom: 0;
        padding: 48px 24px 200px;
        .return a {
            img{
              width: 96px;
              height: 96px !important;
              display: inline-block;
              margin: 0;
            }
        }
        .title{
          font-size: 32px;
          line-height: 48px;
          font-weight: 400;
        }
        .content .c_box div{
          font-size: 32px;
          line-height: 48px;
          margin: 0 !important;
          text-indent: 0 !important;
        }
        .footer{
          font-size: 32px;
          line-height: 48px;
        }
    }
  }
}
</style>
