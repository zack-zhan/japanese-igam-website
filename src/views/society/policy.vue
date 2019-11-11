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
              <li v-for="(item,index) in tab" :key="index" :class="{action:index === 2}" @click="click(index)">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="content-text" align="left">
            <div class="related-laws-box">
                <div class="related-laws-list">
                    <ul>
                        <li v-for="(item,index) in policyList" :key="index">
                          <router-link v-if="item.type===0" :to="(`/policydetail?id=${item.id}`)">{{item.title}}</router-link>
                          <a v-else :href="item.content">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="space20"></div>
                <div class="entry-content-desc">
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
import * as api from '@/service/policyservice'
export default {
  data () {
    return {
      tab: [ 'ご挨拶', '会社概要・沿革', '各種方針', '財務状況', '電子公告' ],
      policyList: []
    }
  },
  methods: {
    click (index) {
      if (index === 0) {
        this.$router.push('/greetings')
      } else if (index === 1) {
        this.$router.push('/synopsis')
      } else if (index === 3) {
        this.$router.push('/finance')
      } else if (index === 4) {
        this.$router.push('/notice')
      }
    }
  },
  mounted () {
    api.getList().then(res => {
      if (res.code === 200) {
        this.policyList = res.body.filter(x => x.publishStatus === 1)
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
                .related-laws-box {
                    max-width: 1000px;
                    margin: 0 auto;
                    margin-top: 100px;
                    margin-bottom: 100px;
                    position: relative;
                    .related-laws-list {
                        max-width: 1000px;
                        margin: auto;
                        li {
                            float: left;
                            width: 50%;
                            height: 35px;
                            a {
                                font-size: 14px;
                                font-family: meiryo;
                                font-weight: 500;
                                color: rgba(0,0,0,1);
                                line-height: 20px;
                            }
                        }
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
            .related-laws-box {
                background: #ffffff;
                margin-top: 0;
                margin-bottom: 0;
                .related-laws-list ul {
                    margin: 0;
                    li {
                        float: none;
                        width: 100%;
                        height: auto;
                        margin-bottom: 0;
                        a {
                            font-size: 28px;
                            color: #33479C;
                            line-height: 1.3;
                            line-height: 96px;
                        }
                    }
                }
            }
          }
      }
    }
}
</style>
