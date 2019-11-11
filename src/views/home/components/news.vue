<template>
  <div>
    <div class="informaction-box">
        <div class="informaction-topleft-model">
            <img :src="bg23">
        </div>
        <div class="informaction-bttre-model">
            <img :src="bg21">
        </div>
        <div class="informaction-box-top" data-wow-duration="1s">
            <div class="en" style="font-family: Meiryo"><i class="icon"></i>News</div>
            <span class="ch">新着情報</span>
        </div>
        <div class="informaction-box-content" data-wow-duration="1s">
          <div class="tab">
              <ul>
                  <li v-for="(item,index) in tab" :key="index" :class="{action:index === num}" @mouseenter="hover(index)">
                    <span>{{item}}</span>
                  </li>
              </ul>
          </div>
          <div>
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
        <div class="commodity-box-more2" data-wow-duration="1s">
            <router-link to="/list">MORE</router-link>
        </div>
        <div class="commodity-btt2"></div>
      </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import bg23 from '@/assets/images/bg2_3.png'
import bg21 from '@/assets/images/bg2_1.png'
import * as api from '@/service/newsservice'
export default {
  data () {
    return {
      bg21: bg21,
      bg23: bg23,
      tab: [ '一覧', '収益分配金', '商品ニュース', 'ニュース' ],
      num: 0,
      list: [],
      originList: []
    }
  },
  methods: {
    hover (index) {
      this.num = index
      const list = index === 0 ? this.originList : this.originList.filter(x => x.type === index - 1)
      if (list.length <= 5) {
        this.list = list
        return
      }
      const temp = []
      for (let i = 0; i < 5; i++) {
        temp[i] = list[i]
      }
      this.list = temp
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
    var wowTitle = new WOW({
      boxClass: 'informaction-box-top',
      animateClass: 'a-fadein',
      offset: 10,
      mobile: true,
      live: true
    })
    wowTitle.init()

    var wowContent = new WOW({
      boxClass: 'informaction-box-content',
      animateClass: 'a-fadein',
      offset: 10,
      mobile: true,
      live: true
    })
    wowContent.init()

    var wowMore = new WOW({
      boxClass: 'commodity-box-more2',
      animateClass: 'a-fadeinB',
      offset: 0,
      mobile: true,
      live: true
    })
    wowMore.init()
    api.getList().then(res => {
      if (res.code === 200) {
        this.originList = res.body.filter(x => x.publishStatus === 1)
        this.hover(0)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
    .informaction-box {
        background-color: rgba(250,250,250,1);
        float: left;
        width: 100%;
        padding: 0px 0px;
        position: relative;
        text-align: center;
      .informaction-topleft-model {
          position: absolute;
          margin-top: -100px;
      }
      .informaction-bttre-model {
          position: absolute;
          margin-left: 1730px;
          margin-top: 420px;
          img{
            width: 173px;
            height: 173px;
          }
      }
      .informaction-box-top {
          text-align: center;
          color: #0A253B;
          margin-top: 132px;
          display: inline-block;
        .en {
            float: left;
            width: 100%;
            font-size: 48px;
            font-family: ShipporiMincho;
            font-weight: 400;
            color: #000000;
            line-height: 48px;
            margin-left: 100px;
            text-align: left;
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
      .informaction-box-content {
          float: left;
          width: 100%;
          .tab {
            float: left;
            width: 100%;
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
                  cursor: pointer;
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
              li {
                display: flex;
                font-size: 14px;
                font-family: meiryo;
                color: rgba(10,37,59,1);
                .description {
                  float: left;
                  margin-right: 40px;
                  margin-bottom: 47px;
                  height: 14px;
                  width: 120px;
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
      .commodity-box-more2 a {
          display: inline-block;
          width: 100px;
          height: 48px;
          line-height: 48px;
          font-size: 12px;
          font-family: meiryo;
          font-weight: 500;
          letter-spacing: 1px;
          background-color: #33479C;
          color: #FFFFFF;
      }
      .commodity-btt2 {
          float: left;
          height: 89px;
      }
    }

    @media only screen and (max-width: 750px){
      .informaction-box {
          float: none;
          padding-bottom: 96px;
          background-color: #F0F2F5;
          .informaction-topleft-model,.informaction-bttre-model {
              display: none;
          }
          .informaction-box-top {
              margin-top: 72px;
              .en{
                width: auto;
              }
          }
          .informaction-box-content {
              float: none;
              .tab {
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
                  .action{
                    border-bottom: none;
                  }
                  .action span {
                    border-bottom: 4px solid rgba(51,71,156,1);
                    height: 80px;
                    line-height: 80px;
                    display: inline-block;
                  }
                }
              }
              .font {
                  float: none;
                  ul {
                    padding: 0 24px;
                    margin-bottom: 48px;
                    margin-left: 0;
                    box-sizing: border-box;
                    li {
                      position: relative;
                      height: 96px;
                      margin-bottom: 48px;
                      .description {
                        font-size: 24px;
                        line-height: 1;
                        width: 200px;
                        height: 48px;
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
                        width: 454px;
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
          .commodity-box-more2 a {
            width: 606px;
            height: 96px;
            line-height: 96px;
            font-size: 24px;
            letter-spacing: 2px;
        }
      }
    }
</style>
