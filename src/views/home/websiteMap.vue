<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
            <div class="introduction-text-text">サイトマップ</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="site-map-box clearfix">
        <div class="site-map-left">
          <div class="pcat" id="item-1">
              <div class="cat-info">
                  <router-link to="/boardDetails">
                    <i class="cat-icon"></i>
                    経営陣
                  </router-link>
              </div>
          </div>
          <div class="pcat" id="item-2">
              <div class="cat-info">
                  <router-link to="/idea">
                    <i class="cat-icon"></i>
                    企業理念
                  </router-link>
              </div>
          </div>
          <div class="pcat" id="item-3">
              <div class="cat-info">
                  <router-link to="/information">
                      <i class="cat-icon"></i>
                    ファンド情報
                  </router-link>
              </div>
              <div class="chcat">
                <ul>
                  <li>
                    <router-link to="/information">ファンド一覧</router-link>
                  </li>
                  <li v-for="(item,index) in productList" :key="index">
                    <router-link :to="(`/fundinfo?id=${item.id}`)">{{item.name}}</router-link>
                  </li>
                </ul>
              </div>
          </div>
          <div class="pcat" id="item-4">
            <div class="cat-info">
              <router-link to="/list">
                <i class="cat-icon"></i>
                新着情報
              </router-link>
            </div>
            <div class="chcat">
              <ul>
                <li>
                  <router-link to="/list">新着情報一覧</router-link>
                </li>
                <li>
                  <router-link to="/list?type=1">収益分配金</router-link>
                </li>
                <li>
                  <router-link to="/list?type=2">商品ニュース</router-link>
                </li>
                <li>
                  <router-link to="/list?type=3">ニュース</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="pcat" id="item-5">
              <div class="cat-info">
                  <router-link to="greetings">
                      <i class="cat-icon"></i>
                      会社案内
                  </router-link>
              </div>
              <div class="chcat">
                  <ul>
                      <li>
                          <router-link to="greetings">ご挨拶</router-link>
                      </li>
                      <li>
                          <router-link to="/synopsis">会社概要・沿革</router-link>
                      </li>
                      <li>
                          <router-link to="/policy">各種方針</router-link>
                      </li>
                      <li>
                          <router-link to="/finance">財務状況</router-link>
                      </li>
                      <li>
                          <router-link to="/notice">電子公告</router-link>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="pcat" id="item-6">
              <div class="cat-info">
                  <router-link to="/consult">
                    <i class="cat-icon"></i>
                    お問合せ
                  </router-link>
              </div>
          </div>
        </div>
        <div class="site-map-rg-pc-phone" style="width: 100%;height: 100px;float: left"></div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header' // 引入头部组件
import Footer from '@/components/footer' // 引入底部组件
import * as api from '@/service/productservice'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      productList: []
    }
  },
  mounted () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    api.getList().then(res => {
      if (res.code === 200) {
        this.productList = res.body
      }
    })
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
    .site-map-box {
        max-width: 1000px;
        margin: auto;
        .site-map-left {
            float: left;
            width: 70%;
            .pcat {
                float: left;
                width: 100%;
                margin-top: 50px;
                .chcat {
                    float: left;
                    width: 100%;
                    margin-top: 50px;
                    ul {
                        list-style: none;
                        margin-left: 0;
                        margin-bottom: 0px;
                        margin-top: 10px;
                        li {
                            margin-bottom: 0;
                            margin-top: 10px;
                            font-size: 12px;
                            a {
                                font-size: 14px;
                                font-family: meiryo;
                                font-weight: 500;
                                color: rgba(0,0,0,1);
                            }
                        }
                    }
                }
                .cat-info {
                    float: left;
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    font-size: 28px;
                    font-family: meiryo;
                    font-weight: 500;
                    color: rgba(0,0,0,1);
                    a {
                        color: rgba(0,0,0,1);
                        font-family: meiryo;
                        .cat-icon {
                            float: left;
                            width: 10px;
                            height: 28px;
                            background: rgba(51,71,156,1);
                            margin-right: 20px;
                        }
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

  #main{
    .site-map-box {
        background: #ffffff;
        padding: 96px 24px 100px;
        .site-map-left {
          width: 100%;
          .pcat {
              margin-bottom: 96px;
              margin-top: 0;
              .cat-info {
                  font-size: 40px;
                  line-height: 60px;
                  height: auto;
                  margin-bottom: 32px;
                  a .cat-icon {
                      width: 8px;
                      height: 60px;
                  }
              }
              .chcat {
                  margin-top: 0;
                  ul {
                      margin-top: 0;
                      li{
                          margin-top: 10px;
                          height: 24px;
                          font-size: 24px;
                          line-height: 40px;
                          a{
                            margin-bottom: 0;
                            height: 42px;
                            font-size: 24px;
                          }
                      }
                  }
              }
          }
        }
    }
  }
}
</style>
