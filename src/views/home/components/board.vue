<template>
  <div>
    <div class="clear team"></div>
      <div class="team-box">
        <div class="team-box-top" data-wow-duration="1s">
          <span class="en"><i class="icon"></i>Board Member</span>
          <span class="ch">経営陣</span>
        </div>
        <div class="left-dian"></div>
        <div class="re-model"><img src="../../../assets/images/bg1_2.png"></div>
        <div class="left-model"><img src="../../../assets/images/bg1_2.png"></div>
        <div class="team-box-content">
          <!-- <router-link :to="{path:'boardDetails',query:{id:0}}">
              <div class="team-img team-img-1">
                  <div class="dj">
                      <div class="dj-name">岩居 雅彦</div>
                      <div class="dj-desc">投資顧問業界における33年間のキャリアを通じて、日本初の投資顧問会社による公的年金運用の一任受託の実現、…</div>
                  </div>
              </div>
          </router-link> -->

          <router-link :to="{path:'boardDetails',query:{id:0}}">
              <div class="team-img team-img-2">
                  <div class="dj">
                      <div class="dj-name">小手川 大助</div>
                      <div class="dj-desc">幾多の日本の国際交渉に携わった経験があり、かつては世界銀行シニアエコノミストやIMF日本政府代表理事…</div>
                  </div>
              </div>
          </router-link>

          <router-link :to="{path:'boardDetails',query:{id:1}}">
              <div class="team-img team-img-3">
                  <div class="dj">
                      <div class="dj-name">田中 英治</div>
                      <div class="dj-desc">投資家の目線に立ったわかりやすい投資信託を常に提供し続けています。日本初のインデックス・ファンドや…</div>
                  </div>
              </div>
          </router-link>

          <router-link :to="{path:'boardDetails',query:{id:2}}">
              <div class="team-img team-img-4">
                  <div class="dj">
                      <div class="dj-name">鄺 家恆</div>
                      <div class="dj-desc">中国語、英語、日本語を駆使し、香港を中心に世界中のビジネスパートナーとの連携をコントロールします…</div>
                  </div>
              </div>
          </router-link>

          <router-link :to="{path:'boardDetails',query:{id:3}}">
              <div class="team-img team-img-5">
                  <div class="dj">
                      <div class="dj-name">齋藤 正幸</div>
                      <div class="dj-desc">日本を代表する商社でのビジネス経験を活かし、信頼いただける会社を創り、維持します。長年にわたる海外…</div>
                  </div>
              </div>
          </router-link>
        </div>

        <div class="team-box-content1 swiper-container">
          <div class="swiper-wrapper">
            <!-- <router-link :to="{path:'boardDetails',query:{id:0}}" class="swiper-slide" style="width: 750px; margin-right: 30px;">
                <div class="team-item team-img-1">
                    <div class="dj">
                        <div class="dj-name">岩居 雅彦</div>
                        <div class="dj-desc">長年の資産運用業界における経験で、フロントの運用部門からミドルの企画・開発部門、バックの業務管理…</div>
                    </div>
                </div>
            </router-link> -->
            <router-link :to="{path:'boardDetails',query:{id:0}}" class="swiper-slide" style="width: 750px; margin-right: 30px;">
                <div class="team-item team-img-2">
                    <div class="dj">
                        <div class="dj-name">小手川 大助</div>
                        <div class="dj-desc">幾多の日本の国際交渉に携わった経験があり、かつては世界銀行シニアエコノミストやIMF日本政府代表理事…</div>
                    </div>
                </div>
              </router-link>
              <router-link :to="{path:'boardDetails',query:{id:1}}" class="swiper-slide" style="width: 750px; margin-right: 30px;">
                <div class="team-item team-img-3">
                    <div class="dj">
                        <div class="dj-name">田中 英治</div>
                        <div class="dj-desc">投資家の目線に立ったわかりやすい投資信託を常に提供し続けています。日本初のインデックス・ファンドや…</div>
                    </div>
                </div>
              </router-link>
              <router-link :to="{path:'boardDetails',query:{id:2}}" class="swiper-slide" style="width: 750px; margin-right: 30px;">
                <div class="team-item team-img-4">
                    <div class="dj">
                        <div class="dj-name">鄺 家恆</div>
                        <div class="dj-desc">中国語、英語、日本語を駆使し、香港を中心に世界中のビジネスパートナーとの連携をコントロールします…</div>
                    </div>
                </div>
            </router-link>
            <router-link :to="{path:'boardDetails',query:{id:3}}" class="swiper-slide" style="width: 750px; margin-right: 30px;">
              <div class="team-item team-img-5">
                  <div class="dj">
                      <div class="dj-name">齋藤 正幸</div>
                      <div class="dj-desc">日本を代表する商社でのビジネス経験を活かし、信頼いただける会社を創り、維持します。長年にわたる海外…</div>
                  </div>
                </div>
            </router-link>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        <div class="team-box-more a-fadeinB">
            <router-link to="/boardDetails">MORE</router-link>
        </div>
      </div>
      <div class="clear commodity"></div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import Swiper from 'swiper'
export default {
  mounted () {
    var wowTitle = new WOW({
      boxClass: 'team-box-top',
      animateClass: 'a-fadein',
      offset: 10,
      mobile: true,
      live: true
    })
    wowTitle.init()

    var wowTeamImg1 = new WOW({
      boxClass: 'team-img-5',
      animateClass: 'team-img-left-tor-1',
      offset: 0,
      mobile: true,
      live: true
    })
    wowTeamImg1.init()
    var wowTeamImg2 = new WOW({
      boxClass: 'team-img-4',
      animateClass: 'team-img-left-tor-2',
      offset: 0,
      mobile: true,
      live: true
    })
    wowTeamImg2.init()
    var wowTeamImg3 = new WOW({
      boxClass: 'team-img-3',
      animateClass: 'team-img-left-tor-3',
      offset: 0,
      mobile: true,
      live: true
    })
    wowTeamImg3.init()
    var wowTeamImg4 = new WOW({
      boxClass: 'team-img-2',
      animateClass: 'team-img-left-tor-4',
      offset: 0,
      mobile: true,
      live: true
    })
    wowTeamImg4.init()
    var wowTeamImg5 = new WOW({
      boxClass: 'team-img-1',
      animateClass: 'team-img-left-tor-5',
      offset: 0,
      mobile: true,
      live: true
    })
    wowTeamImg5.init()

    var wowMore = new WOW({
      boxClass: 'team-box-more',
      animateClass: 'a-fadeinB',
      offset: 0,
      mobile: true,
      live: true
    })
    wowMore.init()

    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    swiper.init()
  }
}
</script>

<style lang="scss" scoped>
.team-img-1{
  background: url('../../../assets/images/s1.png') center center / 200px 360px no-repeat; visibility: visible;
}
.team-img-2{
  background: url('../../../assets/images/s2.png') center center / 200px 360px no-repeat; visibility: visible;
}
.team-img-3{
  background: url('../../../assets/images/s3.png') center center / 200px 360px no-repeat; visibility: visible;
}
.team-img-4{
  background: url('../../../assets/images/s4.png') center center / 200px 360px no-repeat; visibility: visible;
}
.team-img-5{
  background: url('../../../assets/images/s5.png') center center / 200px 360px no-repeat; visibility: visible;
}
    .team {
        float: left;
        width: 100%;
        margin-top: 111px;
    }
    .team-box {
      max-width: 1440px;
      margin: 0 auto;
      text-align: center;
      .team-box-top {
        display: inline-block;
        text-align: center;
        color: #0A253B;
        .en{
          float: left;
          width: 100%;
          font-size: 50px;
          font-family:ShipporiMincho-Regular;
          font-weight: 400;
          color: rgba(28,28,28,1);
          line-height: 56px;
          letter-spacing: 1px;
          .icon {
            display: inline-block;
            width: 8px;
            height: 38px;
            background: rgba(51,71,156,1);
            margin-right: 16px;
          }
        }
        .ch {
          float: left;
          width: 100%;
          font-size: 24px;
          font-family: meiryo;
          font-weight: 500;
          color: rgba(10,37,59,1);
          line-height: 36px;
          letter-spacing: 1px;
          margin-top: 20px;
        }
      }
      .left-dian {
        position: absolute;
        margin-left: 60px;
        width: 260px;
        height: 285px;
        background: url("../../../assets/images/bg1_3.png");
      }
      .re-model {
          position: absolute;
          margin-left: 1200px;
          margin-top: 400px;
          overflow: hidden;
      }
      .left-model {
        position: absolute;
        display: block;
        margin-top: 535px;
        margin-left: -150px;
        height: 250px;
        overflow: hidden;
      }
      .team-box-content {
          display: inline-block;
          width: 1030px;
          margin-top: 129px;
          position: relative;
          left: 100px;
          .team-img:hover{
            transform: scale(1.2);
            box-shadow: 0px 10px 16px #333333, 2px 2px 5px #333333;
          }
          .team-img:hover .dj{
            display: block;
          }
          .team-img {
            float: left;
            width: 200px;
            height: 360px;
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
        }
        .dj {
          display: none;
          margin-top: 180px;
          height: 50%;
          width: 100%;
          color: rgba(255,255,255,1);
          background: url("../../../assets/images/Rectangle@2x.png") no-repeat;
          .dj-name {
              float: left;
              width: 100%;
              font-size: 28px;
              font-family: Meiryo;
              font-weight: 600;
              text-align: left;
              padding-left: 8px;
              margin-bottom: 10px;
          }
          .dj-desc {
              font-size: 14px;
              font-family: meiryo;
              font-weight: 500;
              line-height: 25px;
              text-align: left;
              padding-left: 8px;
          }
        }
      }
      .team-box-content1{
        display: none;
      }
      .team-box-more a {
          display: inline-block;
          width: 100px;
          height: 48px;
          line-height: 48px;
          margin-top: 57px;
          background-color: #33479C;
          color: #FFFFFF;
          font-family: meiryo;
      }
    }
    .commodity {
        float: left;
        width: 100%;
        margin-top: 183px;
    }

@media only screen and (max-width: 750px){
  .team {
    margin-top: 48px;
    float: none;
  }
  .team-box .left-dian, .team-box .re-model, .team-box .left-model, .team-box .team-box-content {
    display: none;
  }
  .team-box .team-box-more a {
      width: 80%;
      height: 96px;
      line-height: 96px;
      margin-top: 0px;
      font-size: 24px;
      letter-spacing: 2px;
  }
  .team-box .team-box-content1 {
      display: block;
      margin-top: 40px;
      overflow: hidden;
      position: relative;
      padding-bottom: 100px;
      .team-item {
        position: relative;
        height: 750px;
        width: 500px;
        margin: 0 auto;
        background-size: cover !important;
        .dj {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #FFFFFF;
          text-align: left;
          .dj-name {
            font-size: 35px;
            padding: 0 20px 20px;
            position: relative;
            font-family: Meiryo;
          }
          .dj-desc {
              font-size: 22px;
              line-height: 1.7;
              letter-spacing: 2px;
              padding: 0 20px 20px;
              font-family: Meiryo;
          }
      }
    }
    .swiper-pagination {
      bottom: 58px;
    }
  }
  .commodity {
    margin-top: 96px;
  }
}
</style>

<style scoped>
.swiper-pagination >>> .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 10px;
  outline: none;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: rgba(51, 71, 156, 1);
}
</style>
