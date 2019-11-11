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
              <li v-for="(item,index) in tab" :key="index" :class="{action:index === 4}" @click="click(index)">
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="content-text" align="left">
            <div class="us-list-row-1">
                <div class="list-row-tag">
                    <div class="list-row-tag-left">ファンドに関する公告</div>
                    <div class="list-row-tag-rg" id="comp_more" style="display: block;cursor: pointer;" @click="more1" v-if="more1Show">MORE</div>
                </div>
                <div class="us-list-row" id="comp_list">
                    <ul>
                        <li v-for="(item,index) in list1" :key="index" v-show="index<list1_length">
                                <div class="list-row-time">{{formatDate(item.publishDate)}}</div>
                                <div class="list-row-title">
                                    <a :href="item.addon">{{item.title}}</a>
                                </div>
                        </li>
                    </ul>
                </div>
                <div class="comp_more_phone none" id="comp_more_phone" @click="more1" v-if="more1Show">MORE</div>
            </div>
            <div class="us-list-row-1">
                <div class="list-row-tag">
                    <div class="list-row-tag-left">会社に関する公告</div>
                    <div class="list-row-tag-rg" id="shehui_more" style="display: block;cursor: pointer;" @click="more2" v-if="more2Show">MORE</div>
                </div>
                <div class="us-list-row" id="shehui_list">
                    <ul>
                        <li v-for="(item,index) in list2" :key="index" v-show="index<list2_length">
                            <div class="list-row-time">{{formatDate(item.publishDate)}}</div>
                                <div class="list-row-title">
                                    <a :href="item.addon">{{item.title}}</a>
                                </div>
                        </li>
                    </ul>
                </div>
                <div class="shehui_more_phone none" id="shehui_more_phone" @click="more2" v-if="more2Show">MORE</div>
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
import * as api from '@/service/noticeservice'
export default {
  data () {
    return {
      tab: [ 'ご挨拶', '会社概要・沿革', '各種方針', '財務状況', '電子公告' ],
      list1: [
        {publishDate: '2019-03-13', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20190313.pdf_1.pdf', title: '「米国M&Aフォーカス株式ファンド」の信託終了（繰上償還）決定のお知らせについて'},
        {publishDate: '2019-02-19', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20190219.pdf_1.pdf', title: '「⽶国M&Aフォーカス株式ファンド」の信託終了（繰上償還）の予定について'},
        {publishDate: '2019-03-22', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20180322_2.pdf', title: '「ベトナム株式オープン（愛称：ベトナムの息吹）」の信託終了（繰上償還）決定について'},
        {publishDate: '2019-03-13', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20190313.pdf_1.pdf', title: '「米国M&Aフォーカス株式ファンド」の信託終了（繰上償還）決定のお知らせについて'}
      ],
      list1_length: 4,
      list2: [
        {publishDate: '2018-11-26', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20181126.pdf', title: '資本金の額の減少公告'},
        {publishDate: '2018-06-25', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20180625.pdf', title: '第19期　決算公告に関するお知らせ'},
        {publishDate: '2017-06-22', addon: 'https://igam-upload.oss-ap-northeast-1.aliyuncs.com/20170622_1.pdf', title: '「ベトナム株式オープン（愛称：ベトナムの息吹）」の信託終了（繰上償還）決定について'}
      ],
      list2_length: 4,

      more1Show: true,
      more2Show: true
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
      } else if (index === 3) {
        this.$router.push('/finance')
      }
    },
    more1 () {
      this.list1_length = this.list1.length
      this.more1Show = false
    },
    more2 () {
      this.list2_length = this.list2.length
      this.more2Show = false
    },
    formatDate (dateStr) {
      const date = new Date(dateStr)

      const Y = date.getFullYear() // 年
      let M = date.getMonth() + 1 // 月
      M = M < 10 ? ('0' + M) : M
      let D = date.getDate() // 日
      D = D < 10 ? ('0' + D) : D
      return Y + '-' + M + '-' + D
    }
  },
  mounted () {
    api.getList().then(res => {
      if (res.code === 200) {
        const originList = res.body.filter(x => x.publishStatus === 1)
        this.list1 = originList.filter(x => x.type === 0)
        this.more1Show = this.list1.length > 4
        this.list2 = originList.filter(x => x.type === 1)
        this.more2Show = this.list2.length > 4
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
                .us-list-row-1 {
                    float: left;
                    width: 100%;
                    padding-bottom: 64px;
                    padding-top: 64px;
                    border-bottom: 1px solid rgba(221,221,221,1);
                    .list-row-tag {
                        float: left;
                        width: 100%;
                        margin-bottom: 10px;
                        .list-row-tag-left {
                            float: left;
                            font-size: 12px;
                            font-family: meiryo;
                            font-weight: 500;
                            color: rgba(119,119,119,1);
                            line-height: 18px;
                            letter-spacing: 1px;
                        }
                        .list-row-tag-rg {
                            float: right;
                            font-size: 14px;
                            font-family: meiryo;
                            font-weight: 500;
                            color: rgba(51,71,156,1);
                            line-height: 21px;
                        }
                    }
                    .us-list-row {
                        float: left;
                        width: 100%;
                        li {
                            float: left;
                            width: 100%;
                            font-size: 16px;
                            font-family: meiryo;
                            font-weight: 500;
                            color: rgba(10,37,59,1);
                            line-height: 32px;
                            margin-bottom: 10px;
                            .list-row-time {
                                float: left;
                            }
                            .list-row-title {
                                float: left;
                                margin-left: 20px;
                            }
                        }
                    }
                }
            }
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
            .us-list-row-1 {
                float: none;
                border: none;
                padding: 0 0 64px;
                .list-row-tag {
                    float: none;
                    margin-bottom: 32px;
                    .list-row-tag-left {
                        float: none;
                        font-size: 24px;
                        line-height: 28px;
                    }
                    .list-row-tag-rg {
                        display: none !important;
                    }
                }
                .us-list-row {
                    // float: none;
                    margin-bottom: 32px;
                    ul {
                        margin-bottom: 32px;
                        li {
                          // float: none;
                          margin-bottom: 24px;
                          .list-row-time {
                              float: none;
                              font-size: 24px;
                              color: #000000 !important;
                              line-height: 48px;
                          }
                          .list-row-title {
                              font-size: 28px;
                              margin-top: 0;
                              margin-left: 0;
                              line-height: 48px;
                              a {
                                  color: #000000 !important;
                              }
                          }
                        }
                    }
                }
                #comp_more_phone, #shehui_more_phone {
                    display: block;
                    text-align: center;
                    font-size: 28px;
                    color: #33479C;
                    line-height: 96px;
                }
            }
          }
      }
    }
}
</style>
