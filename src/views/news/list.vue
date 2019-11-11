<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">新着情報</div>
          <div class="introduction-text-desc">News</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="informaction-box">
        <div class="informaction-box-content">
          <div class="tab">
            <ul>
              <li v-for="(item,index) in tab" :key="index" :class="{action:index === num}" @click="click(index)">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="font">
            <ul>
              <li v-for="(item,index) in list" :key="index">
                <div class="description">{{formatDate(item.date)}}</div>
                <div :class="(`title ${parseInt(item.type) === 0 ? '' : parseInt(item.type) === 1 ? 'title-2': 'title-3'}`)">
                  {{(parseInt(item.type) === 0 ? '収益分配金' : parseInt(item.type) === 1 ? '商品ニュース': 'ニュース')}}
                </div>
                <div class="description description-right" style="margin-right: 0px;width: 60%;text-align: left;">
                  <router-link :to="{path:'newsDetails',query:{id: item.id}}">
                    {{item.name}}
                  </router-link>
                </div>
              </li>
            </ul>
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
import * as api from '@/service/newsservice'
export default {
  data () {
    return {
      tab: [ '一覧', '収益分配金', '商品ニュース', 'ニュース' ],
      list: [],
      originList: [],
      num: null
    }
  },
  methods: {
    click (index) {
      this.num = index
      if (index === 0) {
        this.list = this.originList
        return
      }
      this.list = this.originList.filter(x => x.type === index - 1)
      console.log(this.list, '---')
    },
    formatDate (dateStr) {
      const date = new Date(dateStr)
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '年' + m + '月' + d + '日'
    }
  },
  mounted () {
    api.getList().then(res => {
      if (res.code === 200) {
        if (this.$route.query.type) {
          this.num = parseInt(this.$route.query.type)
          this.originList = res.body.filter(x => x.type === this.num - 1)
          this.list = this.originList
        } else {
          this.num = 0
          this.originList = res.body.filter(x => x.publishStatus === 1)
          this.list = this.originList
        }
      }
    })
  },
  watch: {
    $route () {
      this.list = this.originList
      if (this.$route.query.type) {
        this.num = parseInt(this.$route.query.type)
        this.list = this.originList.filter(x => x.type === this.num - 1)
      } else {
        this.num = 0
        this.list = this.originList
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
                        cursor:pointer;
                        span {
                            line-height: 40px;
                        }
                    }
                    .action {
                        border-bottom: 4px solid rgba(51,71,156,1);
                        font-weight: bold;
                        color: rgba(0,0,0,1);
                    }
                }
            }
            .font {
                float: left;
                margin: auto;
                width: 100%;
                color: #fff;
                ul {
                  list-style: none;
                  display: inline-block;
                  width: 750px;
                  margin-bottom: 1.75em;
                  li {
                    display: flex;
                    font-size: 14px;
                    font-family: meiryo;
                    color: rgba(10,37,59,1);
                    .description {
                      width: 120px;
                      float: left;
                      margin-right: 40px;
                      margin-bottom: 47px;
                      height: 14px;
                      line-height: 21px;
                      margin-top: 5px;
                  }
                  .title {
                      float: left;
                      margin-right: 40px;
                      margin-bottom: 36px;
                      width: 90px;
                      height: 24px;
                      line-height: 24px;
                      background: rgba(245,166,35,1);
                      border-radius: 4px;
                      font-family: meiryo;
                  }
                  .title-2 {
                      background: rgba(245,94,35,1);
                  }
                  .title-3 {
                      background: rgba(218,98,115,1);
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
      float: none;
      padding-bottom: 200px;
      background: #fff;
      .informaction-box-content {
          float: none;
          .tab{
              float: none;
              ul {
                  margin-left: 0;
                  width: 100%;
                  margin-top: 96px;
                  margin-bottom: 64px;
                  li {
                      font-size: 24px;
                      width: 24.5%;
                      margin: 0;
                      text-align: center;
                      height: 80px;
                      line-height: 80px;
                  }
                  .action {
                      border-bottom: none;
                        span {
                        border-bottom: 4px solid rgba(51,71,156,1);
                        height: 80px;
                        line-height: 80px;
                        display: inline-block;
                    }
                  }
              }
          }
          .font {
              float: none;
              ul {
                  padding: 0 24px;
                  width: 702px;
                  margin-bottom: 48px;
                  margin-left: 0;
                  li {
                      position: relative;
                      height: 96px;
                      margin-bottom: 48px;
                      .description {
                          font-size: 24px;
                          width: 200px;
                          line-height: 48px;
                          text-align: center;
                          float: none;
                          position: absolute;
                          top: 0;
                          left: 0;
                          margin: 0;
                          height: auto;
                          margin-top: 4px;
                      }
                      .title {
                          font-size: 24px;
                          float: none;
                          position: absolute;
                          top: 48px;
                          left: 0;
                          width: 180px;
                          height: 48px;
                          line-height: 48px;
                          margin: 0;
                          color: #FFFFFF;
                          border-radius: 8px;
                      }
                      .description-right {
                          font-size: 28px;
                          float: none;
                          position: absolute;
                          top: 0;
                          left: 224px;
                          margin: 0;
                          a {
                            text-align: left;
                            font-size: 28px;
                            line-height: 1.5;
                          }
                      }
                  }
              }
          }
      }
  }
}
</style>
