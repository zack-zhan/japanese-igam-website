<template>
  <div>
    <div class="top animated fadeInDown">
      <div class="logo">
        <a href="/"><img src="../assets/images/igam_logo_w.svg" alt=""></a>
      </div>
      <div class="nav">
        <ul>
          <li :class="{active:num === 1}" @mouseenter="hover(1)">
            <router-link to="/idea">
              <span>企業理念</span>
              <span>Philosophy</span>
            </router-link>
          </li>
          <li class="pcat" :class="{active:num === 2}" @mouseenter="hover(2)">
            <a href="javascript:;">
              <span>ファンド情報</span><i class="down-arrow"></i>
              <span>Fund Information</span>
            </a>
            <ul class="show">
              <li><router-link to="/price">基準価額一覧</router-link></li>
              <li><router-link to="/information">ファンド一覧</router-link></li>
              <li v-for="(item, index) in products" :key="index"><router-link :to='(`/fundinfo?id=${item.id}`)'>{{item.name}}</router-link></li>
            </ul>
          </li>
          <li class="pcat" :class="{active:num === 3}" @mouseenter="hover(3)">
            <a href="javascript:;">
              <span>新着情報</span><i class="down-arrow"></i>
              <span>News</span>
            </a>
            <ul class="show">
              <li><router-link to="/list">新着情報一覧</router-link></li>
              <li><router-link to="/list?type=1">収益分配金</router-link></li>
              <li><router-link to="/list?type=2">商品ニュース</router-link></li>
              <li><router-link to="/list?type=3">ニュース</router-link></li>
            </ul>
          </li>
          <li class="pcat" :class="{active:num === 4}" @mouseenter="hover(4)">
            <a href="javascript:;">
              <span>会社案内</span><i class="down-arrow"></i>
              <span>About Us</span>
            </a>
            <ul class="show">
              <li><router-link to="/greetings">ご挨拶</router-link></li>
              <li><router-link to="/synopsis">会社概要・沿革</router-link></li>
              <li><router-link to="/policy">各種方針</router-link></li>
              <li><router-link to="/finance">財務状況</router-link></li>
              <li><router-link to="/notice">電子公告</router-link></li>
            </ul>
          </li>
          <li :class="{active:num === 5}" @mouseenter="hover(5)">
            <router-link to="/consult">
              <span>お問合せ</span>
              <span>Contact Us</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="top1 animated fadeInDown" :style="pstyle">
      <div id="header-logo1" :style="bstyle">
        <a href="/"> <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/logo_butt.png"></a>
      </div>
      <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/headerMuae.png" alt="" class="headerMuae" v-if="!listShow" @click="listShow = true">
      <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/headerClose.png" alt="" class="headerClose" v-else @click="listShow = false">
      <div id="nav1" v-if="listShow === true">
        <ol class="phone">
          <li class="phone-nav-li">
            <router-link to="/idea">
              <span>経営理念</span>
              <span>Vision</span>
            </router-link>
          </li>
          <li class="phone-nav-li" @click="unfoldClick(1)">
            <a href="javascript:;" class=" phone-nav-li-toggle">
              <span>ファンド情報</span>
              <span>Fund Information  </span>
              <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/phone_nav_left.png" alt="" class="phone_nav_left" v-if="!unfold1">
              <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/phone_nav_down.png" alt="" class="phone_nav_down" v-else>
            </a>
            <ul v-if="unfold1">
              <li><router-link to="/price">基準価額一覧</router-link></li>
              <li><router-link to="/information">ファンド一覧</router-link></li>
              <li v-for="(item, index) in products" :key="index"><router-link @click="navto(item.id)">{{item.name}}</router-link></li>
            </ul>
          </li>
          <li class="phone-nav-li" @click="unfoldClick(2)">
            <a href="javascript:;" class=" phone-nav-li-toggle">
              <span>新着情報</span>
              <span>News  </span>
              <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/phone_nav_left.png" alt="" class="phone_nav_left" v-if="!unfold2">
              <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/phone_nav_down.png" alt="" class="phone_nav_down" v-else>
            </a>
            <ul v-if="unfold2">
              <li><router-link to="/list">新着情報一覧</router-link></li>
              <li><router-link to="/service">収益分配金</router-link></li>
              <li><router-link to="/earnings">商品ニュース</router-link></li>
              <li><router-link to="/news">ニュース</router-link></li>
            </ul>
          </li>
          <li class="phone-nav-li" @click="unfoldClick(3)">
            <a href="javascript:;" class=" phone-nav-li-toggle">
              <span>会社案内</span>
              <span>About Us  </span>
              <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/phone_nav_left.png" alt="" class="phone_nav_left" v-if="!unfold3">
              <img src="https://igam-upload.oss-ap-northeast-1.aliyuncs.com/phone_nav_down.png" alt="" class="phone_nav_down" v-else>
            </a>
            <ul v-if="unfold3">
              <li><router-link to="/greetings">ご挨拶</router-link></li>
              <li><router-link to="/synopsis">会社概要・沿革</router-link></li>
              <li><router-link to="/policy">各種方針</router-link></li>
              <li><router-link to="/finance">財務状況</router-link></li>
              <li><router-link to="/notice">電子公告</router-link></li>
            </ul>
          </li>
          <li class="phone-nav-li">
            <router-link to="/consult">
              <span>お問合せ</span>
              <span>Contact Us</span>
            </router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/service/productservice'
export default {
  data () {
    return {
      num: '',
      products: [],
      listShow: false,
      unfold1: false,
      unfold2: false,
      unfold3: false,
      pstyle: {},
      bstyle: {}
    }
  },
  methods: {
    hover (index) {
      this.num = index
    },
    navto (id) {
      this.$router.push({
        path: `/fundinfo?id=${id}`
      })
    },
    unfoldClick (index) {
      this.num = ''
      if (index === 1) {
        this.unfold1 = !this.unfold1
        this.unfold2 = false
        this.unfold3 = false
      } else if (index === 2) {
        this.unfold2 = !this.unfold2
        this.unfold1 = false
        this.unfold3 = false
      } else if (index === 3) {
        this.unfold3 = !this.unfold3
        this.unfold1 = false
        this.unfold2 = false
      }
    },

    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 65) {
        this.pstyle = {
          position: 'fixed',
          top: '0px',
          left: '0px'
        }
        this.bstyle = {
          background: 'rgb(51, 71, 156)'
        }
      } else {
        this.pstyle = {}
        this.bstyle = {}
      }
    }
  },
  mounted () {
    api.getList().then(res => {
      if (res.code === 200) {
        this.products = res.body
      }
    })
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.top{
  float: left;
  width: 100%;
  position: absolute;
  .logo{
    padding-left: 8%;
    margin-top: 2%;
    width: 348px;
    display: inline-block;
    }
    .nav{
      float: left;
      color: #FFFFFF;
      font-size: 12px;
      height: 60px;
      margin-top: 2%;
      position: absolute;
      z-index: 99;
      margin-left: 8%;
      li:hover .show{
        display: block;
      }
      li{
        float: left;
        width: 120px;
        text-align: center;
        cursor: pointer;
        -webkit-transition: all .3s;
        transition: all .3s;
        position: relative;
        margin-bottom: 0px;
        ul {
            position: absolute;
            top: 100%;
            left: 0%;
            z-index: 1;
            margin-left: -20px;
            background-color: rgba(51,71,156,0.8);
            margin: 0px 0px 0px 0px;
            padding-left: 0px;
            width: 300px;
            border-radius: 4px;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            li:hover {
                width: 88.5%;
                height: 40px;
                background: rgba(255,255,255,0.2);
                border-radius: 0px 0px 0px 0px;
            }
            li {
              width: 88.5%;
              padding-left: 34px;
              line-height: 40px;
              text-align: left;
          }
        }
      }
      .active:hover{
          display: inline-block;
          background: rgba(51,71,156,0.8);
          border-radius: 4px;
      }
      .pcat {
          border-bottom-left-radius: 0px !important;
          border-bottom-right-radius: 0px !important;
      }
  }
  .nav > ul > li >a{
    color: #FFFFFF;
    display: inline-block;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 5px;
    .down-arrow {
        float: right;
        width: 14px;
        height: 14px;
        background: url('../assets/images/bte@1x.png') no-repeat;
        margin-top: -19px;
        margin-right: 3px;
    }
    span{
          float: left;
          width: 120px;
          text-align: center;
          font-family: meiryo;
          height: 21px;
    }
  }
  .show{
    display: none;
  }
}
.top1{
  display: none;
}

@media only screen and (max-width: 750px){
  .top {
    display: none;
  }
  .top1 {
    display: block;
    position: relative;
    width: 100%;
    z-index: 99;
    #header-logo1 {
        padding-left: 24px;
        padding-top: 24px;
        margin: 0;
        padding-bottom: 24px;
        height: 65px;
        img {
          width: 560px;
          max-width: 560px;
      }
    }
    .headerMuae,.headerClose {
        position: absolute;
        top: 24px;
        right: 24px;
    }
    #nav1 {
        background-color: rgba(51,71,156, 0.8) !important;
        margin-top: -1px;
        .phone {
          margin: 0;
          padding: 20px 0 0;
          li {
            float: none;
            text-align: left;
            cursor: pointer;
            -webkit-transition: none;
            transition: none;
            line-height: 95px;
            margin: 0;
            padding: 0 24px;
            position: relative;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            a{
              color: #FFFFFF;
              display: block;
              text-align: left;
              padding: 0;
              span{
                float: none;
                font-size: 24px;
                display: inline-block;
                margin-right: 24px;
                word-break: keep-all;
                white-space: nowrap;
                width: auto;
              }
              img {
                  position: absolute;
                  top: 8px;
                  right: 0;
              }
            }
            ul{
              li{
                font-size: 24px;
                border-bottom: 1px solid #efefef;
                padding: 0;
              }
            }
          }
        }
    }
  }
  .block{
    display: block;
  }
  .none{
    display: none;
  }
}
</style>
