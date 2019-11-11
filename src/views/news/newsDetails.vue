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
      <div class="informaction-dr-box">
        <div class="dr-box-title">{{news.name}}</div>
        <div class="dr-box-time">{{formatDate(news.date)}}</div>
        <div class="dr-box-text">
            <div style="font-size:12.0pt;" v-html="news.content">
            </div>
        </div>
        <div class="dr-box-file">
          <p v-if="news.addon" style="text-align:left;margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;text-justify:inter-ideograph;font-size:10.5pt;font-family:'Calibri','sans-serif';">
            <span style="font-size:11.0pt;font-family:'Meiryo UI','sans-serif'"></span>
            <strong>
              <span style="font-family:'Meiryo','sans-serif';color:#666677;border:none windowtext 1.0pt;padding:0cm">
                <img width="18" height="18" :src="pdficon">
              </span>
            </strong>
            <strong>
              <span style="line-height:1.07;font-family:'Meiryo','sans-serif';color:#666677;border:none windowtext 1.0pt;padding:0cm">&nbsp;</span>
            </strong>
            <a :href="news.addon" target="_self">{{news.title}}</a>
          </p>
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
import pdficon from '@/assets/images/pdficon.png'
import * as api from '@/service/newsservice'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      news: {},
      pdficon: pdficon
    }
  },
  mounted () {
    if (!this.$route.query.id) {
      this.$router.push('/home')
    }
    const id = this.$route.query.id
    api.getOne(id).then(res => {
      if (res.code === 200) {
        this.news = res.body
      }
    })
  },
  methods: {
    formatDate (dateStr) {
      const date = new Date(dateStr)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
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
    .informaction-dr-box {
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 100px;
        .dr-box-title {
            width: 100%;
            font-size: 32px;
            font-family: meiryo;
            font-weight: 600;
            color: rgba(0,0,0,1);
            line-height: 56px;
            margin-bottom: 35px;
        }
        .dr-box-time {
            width: 100%;
            font-size: 16px;
            font-family: meiryo;
            font-weight: 600;
            color: rgba(0,0,0,0.3);
            margin-top: 2%;
            height: 28px;
        }
        .dr-box-text {
            width: 100%;
            margin-top: 50px;
            font-size: 20px;
            font-family: meiryo;
            font-weight: 500;
            color: rgba(61,61,63,1);
            div{
              line-height: 35px;
            }
        }
        .dr-box-file {
            margin-top: 101px;
            margin-bottom: 114px;
        }
        .file{
          margin: 100px 0;
          width:440px;
          height:100px;
          background:rgba(250,251,252,1);
          border-radius:4px;
          border:1px solid rgba(187,187,187,1);
          div:nth-child(1){
            width:360px;
            height:24px;
            font-size:24px;
            font-family:YuGo-Medium;
            font-weight:500;
            color:rgba(28,28,28,1);
            line-height:36px;
            margin: 20px 40px;
          }
          div:nth-child(2){
            margin:0 40px;
            text-align: center;
            span:nth-child(1){
              color: #33479C;
            }
            span:nth-child(2){
              margin: 0 125px 0 50px;
              color: #33479C;
            }
            span:nth-child(3){
              color: #9B9B9B;
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
  #main .informaction-dr-box {
      background: #ffffff;
      margin: 0;
      padding: 96px 24px 200px;
      .dr-box-title{
        font-size:36px;
        font-family:IPAexMincho;
        color:rgba(28,28,28,1);
        font-weight: 400;
      }
      .dr-box-time{
        font-size: 24px;
      }
      .dr-box-text{
        div{
          font-size: 28px !important;
        }
      }
      .file {
          width: 100%;
          height: 158px;
          line-height: 100px;
          border: 2px dashed #BBBBBB;
          margin-top: 96px;
          margin-bottom: 0;
          div:nth-child(1) {
            width: auto;
            font-size: 28px;
          }
          div:nth-child(2) {
            text-align: left;
            display: flex;
            font-size: 24px;
            span{
              display: inline-block;
              flex: 1;
            }
            span:nth-child(3){
              text-align: right;
            }
        }
      }
  }
}
</style>
