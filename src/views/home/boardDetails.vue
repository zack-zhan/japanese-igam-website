<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">経営陣</div>
          <div class="introduction-text-desc">Board Member</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="tema-list-box clearfix">
        <div class="list-row clearfix">
          <div class="team-list-left-top"><img src="../../assets/images/bg1_3.png"></div>
          <div class="team-list-reg-top"><img src="../../assets/images/bg1_3.png"></div>
          <div class="team-list-left-bot"><img src="../../assets/images/bg2_2.png"></div>
          <div class="team-list-reg-bot"><img src="../../assets/images/bg1_2.png"></div>
          <div class="list-row-photo-phone none">
              <!-- <img id="photo1-1" class="photo" src="../../assets/images/Img@2x (3).png" v-if="num === 0"> -->
              <img id="photo1-2" class="photo" src="../../assets/images/Img@2x (1).png" v-if="num === 0">
              <img id="photo1-3" class="photo" src="../../assets/images/Img@2x (2).png" v-if="num === 1">
              <img id="photo1-4" class="photo" src="../../assets/images/Img@2x (4).png" v-if="num === 2">
              <img id="photo1-5" class="photo" src="../../assets/images/Img@2x.png" v-if="num === 3">
          </div>
          <div class="list-row-introduction left clearfix">
                    <div class="introduction-info clearfix" v-for="(item,index) in list1" :key="index" v-show="index === num">
                        <div class="name">
                            {{item.name}}
                        </div>
                        <div class="title left">
                            {{item.title}}
                        </div>
                        <div class="introduction left">
                            <p>{{item.content1}}</p>
                            <p>{{item.content2}}</p>
                            <p>{{item.content3}}</p>
                        </div>
                    </div>
                    <div class="sb-switch">
                        <div class="sb-switch-box">
                            <div id="last" class="letft" @click="leftBtn"> &lt; </div>
                            <div id="next" class="letft letft-phone" @click="rightBtn"> &gt; </div>
                        </div>
                    </div>
                    <div class="sb">
                        <ul class="clearfix">
                          <!-- <li :class="{action:num === 0}" @mouseenter="hover(0)">
                            <img width="68px" height="68px" src="../../assets/images/5@2x.png">
                          </li> -->
                          <li :class="{action:num === 0}" @mouseenter="hover(0)">
                            <img width="68px" height="68px" src="../../assets/images/4@2x.png">
                          </li>
                          <li :class="{action:num === 1}" @mouseenter="hover(1)">
                            <img width="68px" height="68px" src="../../assets/images/3@2x.png">
                          </li>
                          <li :class="{action:num === 2}" @mouseenter="hover(2)">
                            <img width="68px" height="68px" src="../../assets/images/2@2x.png">
                          </li>
                          <li :class="{action:num === 3}" @mouseenter="hover(3)">
                            <img width="68px" height="68px" src="../../assets/images/1@2x.png">
                          </li>
                        </ul>
                    </div>
          </div>
          <!-- <div class="list-row-photo left" v-show="num === 0">
              <img class="photo a-fadein" src="../../assets/images/p1.png">
          </div> -->
          <div class="list-row-photo left" v-show="num === 0">
              <img class="photo a-fadein" src="../../assets/images/p2.png">
          </div>
          <div class="list-row-photo left" v-show="num === 1">
              <img class="photo a-fadein" src="../../assets/images/p3.png">
          </div>
          <div class="list-row-photo left" v-show="num === 2">
              <img class="photo a-fadein" src="../../assets/images/p4.png">
          </div>
          <div class="list-row-photo left" v-show="num === 3">
              <img class="photo a-fadein" src="../../assets/images/p5.png">
          </div>
        </div>
      </div>
      <div class="question-box">
        <div class="question-box-contact-us"></div>
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
      num: 0,
      list1: [
        // {name: '岩居 雅彦', title: '取締役', content1: '『オペレーションのスペシャリスト', content2: '長年の資産運用業界における経験で、フロントの運用部門からミドルの企画・開発部門、バックの業務管理部門まで、全て精通しています。', content3: 'その手腕をかわれて、大手外資系投信会社の社長も務めあげました。'},
        {name: '小手川 大助', title: '取締役', content1: '『日本金融政策のスペシャリスト』', content2: ' 幾多の日本の国際交渉に携わった経験があり、かつては世界銀行シニアエコノミストやIMF日本政府代表理事を務めました。', content3: ' 現在も、日本のために世界中を駆け回っています。'},
        {name: '田中 英治', title: '代表取締役社長', content1: '『投資啓発のスペシャリスト』', content2: '投資家の目線に立ったわかりやすい投資信託を常に提供し続けています。', content3: ' 日本初のインデックス・ファンドや日本最大級の運用資産額を誇った「グローバル・ソブリン・オープン」の生みの親であり、日本全国での投資啓発の講演活動は20年、3,000回以上に及びます。'},
        {name: '鄺 家恆', title: '取締役', content1: '『グローバルな交渉、調整のスペシャリスト』', content2: ' 中国語、英語、日本語を駆使し、香港を中心に世界中のビジネスパートナーとの連携をコントロールします。', content3: 'グループを統率する若きリーダーでもあります。'},
        {name: '齋藤 正幸', title: '取締役', content1: '『ガバナンス、リーガル、コンプライアンスのスペシャリスト』', content2: '  日本を代表する商社でのビジネス経験を活かし、信頼いただける会社を創り、維持します。', content3: '長年にわたる海外業務経験は、海外との業務推進においてもいかんなく発揮されています。'}
      ]
    }
  },
  methods: {
    hover (index) {
      this.num = index
    },
    leftBtn () {
      if (this.num > 0) {
        this.num = this.num - 1
      } else {
        this.num = 3
      }
    },
    rightBtn () {
      if (this.num < 3) {
        this.num = this.num + 1
      } else {
        this.num = 0
      }
    }
  },
  mounted () {
    console.log(this.$route.query.id, '0')
    if (this.$route.query.id) {
      this.num = parseInt(this.$route.query.id)
    } else {
      this.num = 0
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
    .tema-list-box {
        max-width: 1440px;
        margin: auto;
        .list-row {
            float: left;
            width: 100%;
            height: 700px;
            margin-top: 100px;
            position: relative;
            .team-list-left-top {
                position: absolute;
                width: 200px;
            }
            img {
                    max-width: 100%;
                    height: auto;
            }
            .team-list-reg-top {
                position: absolute;
                margin-left: 1238px;
                margin-top: 100px;
                width: 200px;
                height: 130px;
                overflow: hidden;
            }
            .team-list-left-bot {
                position: absolute;
                width: 400px;
                overflow: hidden;
                height: 400px;
                margin-top: 500px;
                margin-left: -100px;
            }
            .team-list-reg-bot {
                position: absolute;
                padding-left: 1300px;
                padding-top: 700px;
            }
            .list-row-introduction {
                float: left;
                width: 40%;
                padding-left: 10%;
                margin-top: 170px;
                position: relative;
                height: 100%;
                .name {
                    float: left;
                    font-size: 56px;
                    font-family: meiryo;
                    color: rgba(0,0,0,1);
                    width: 100%;
                    margin-top: 50px;
                }
                .title {
                    float: left;
                    width: 100%;
                    font-size: 16px;
                    font-family: meiryo;
                    font-weight: 500;
                    color: rgba(0,0,0,1);
                    height: 60px;
                    line-height: 60px;
                }
                .introduction {
                    float: left;
                    width: 420px;
                    font-size: 14px;
                    font-family: meiryo;
                    font-weight: 500;
                    color: rgba(0,0,0,1);
                    height: 164px;
                    line-height: 18px;
                    p{
                      margin-bottom: 24px;
                    }
                }
                .sb-switch {
                    float: right;
                    width: 100%;
                    margin-top: 10px;
                    .sb-switch-box {
                        text-align: center;
                        float: left;
                        cursor: pointer;
                        #last:hover {
                            background-color: rgba(51,71,156,1);
                            color: #FFFFFF;
                        }
                        #next:hover {
                            background-color: rgba(51,71,156,1);
                            color: #FFFFFF;
                        }
                        .letft {
                            float: left;
                            width: 48px;
                            height: 48px;
                            line-height: 48px;
                            margin-right: 10px;
                        }
                    }
                }
                .sb {
                    float: left;
                    width: 100%;
                    margin-top: 18px;
                    .action {
                        opacity: 1;
                        filter: alpha(opacity=1);
                    }
                    li {
                      float: left;
                      margin-right: 20px;
                      opacity: 0.5;
                      filter: alpha(opacity=50);
                  }
                }
            }
            .list-row-photo {
                float: left;
                width: 50%;
                height: 432px;
                margin-top: 220px;
                display: block;
                background: linear-gradient(135deg,rgba(82,144,216,1) 0%,rgba(22,64,143,1) 100%);
                img {
                    margin-left: 15%;
                    margin-top: -198px;
                }
            }
        }
    }
    .question-box {
        max-width: 1000px;
        margin: auto;
        .question-box-contact-us {
            padding-bottom: 164px;
            float: left;
            width: 100%;
            padding-top: 100px;
        }
    }
}

.none{
  display: none;
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

  #main .tema-list-box .list-row {
      height: auto;
      .team-list-left-top {
          left: 380px;
          z-index: 1;
      }
      .team-list-left-bot, .team-list-reg-top, .team-list-reg-bot {
          display: none;
      }
      .list-row-photo {
          float: none;
          display: none;
      }
      .list-row-photo-phone {
          display: block;
          z-index: 10;
          position: relative;
      }
      .list-row-introduction {
          float: none;
          display: block;
          width: calc(100% - 48px);
          margin: 0 24px;
          margin-top: 0;
          padding: 0;
          position: relative;
          .name {
              font-size: 48px;
              margin-top: 96px;
              line-height: 50px;
          }
          .title {
              font-size: 24px;
              margin-top: 32px;
              margin-bottom: 48px;
          }
          .introduction {
              width: 95%;
              font-size: 28px;
              height: auto;
              line-height: 48px;
          }
          .sb-switch {
              position: absolute;
              top: -104px;
              right: 0px;
              display: inline-block;
              width: auto;
              z-index: 99;
              margin-top: 0;
              .sb-switch-box .letft {
                  height: 96px;
                  width: 96px;
                  line-height: 96px;
                  font-size: 28px;
                  margin: 0;
                  font-weight: 600;
              }
              .sb-switch-box .letft-phone {
                  background-color: rgba(51,71,156,1);
                  color: #FFFFFF;
              }
          }
          .sb {
              margin-top: 96px;
              ul {
                  margin-bottom: 0;
                  li {
                      width: 20%;
                      margin: 0;
                      img {
                          height: 100px !important;
                          width: 100px !important;
                      }
                  }
              }
          }
      }
  }
}
</style>
