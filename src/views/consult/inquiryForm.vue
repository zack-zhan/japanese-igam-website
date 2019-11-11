<template>
  <div>
    <div id="archive-header">
      <!-- 头部 -->
      <Header></Header>
      <div id="archive-introduction">
        <div class="introduction-text">
          <div class="introduction-text-text">お問合せ</div>
          <div class="introduction-text-desc">Contact Us</div>
        </div>
      </div>
    </div>
    <div id="main" class="clearfix  main">
      <div class="contacts-view-box" id="contacts-input" v-if="isShow">
          <div class="return">
              <a href="javascript:history.go(-1);"><img src="../../assets/images/return.png"></a>
          </div>
          <div style="margin-bottom: 24px;margin-top: 64px;" class="return-details">
              <p class="MsoListParagraphCxSpFirst">
                  下記お問合せフォームから、当社投資信託商品の内容や投資信託に関するご意見・ご質問を承ります。
              </p>
              <p class="MsoListParagraphCxSpMiddle">
                  ○公開情報に基づいてご回答いたしますが、ご質問の内容によってはご回答致しかねる場合もございますので、予めご了承ください。
              </p>
              <p class="MsoListParagraphCxSpMiddle">
                  ○メールでのお問合せへのご回答には時間がかかる場合がございます。
              </p>
              <p class="MsoListParagraphCxSpLast">
                  ○苦情処理・紛争解決措置については<router-link to="/policydetail?id=1eaf5f9a3a0947a4875ae08e0595232d"><u style="color: rgba(51,71,156,1);">こちら</u></router-link>でご確認ください。
              </p>
          </div>
          <div class="contacts-form clearfix">
              <form name="form" id="input_form" action="" method="post">
                  <div class="contacts-form-row">
                      <div class="form-input-text">
                          カテゴリ
                      </div>
                      <div class="form-input">
                          <select name="type" style="font-family: Meiryo;" v-model="kind">
                              <option value="資料請求">資料請求</option>
                              <option value="お問合せ">お問合せ</option>
                              <option value="ご意見">ご意見</option>
                          </select>
                      </div>
                  </div>

                  <div class="contacts-form-row">
                      <div class="form-input-text" style="font-family: Meiryo;">
                          メールアドレス
                      </div>
                      <div class="form-input" style="font-family: Meiryo;">
                          <input type="text" name="email" placeholder="例:igam@igam.co.jp" v-model="email">
                      </div>
                  </div>

                  <div class="contacts-form-row">
                      <div class="form-input-text" style="font-family: Meiryo;">
                          お名前
                      </div>
                      <div class="form-input" style="font-family: Meiryo;">
                          <input type="text" name="realname" placeholder="お名前を入れてください" v-model="name">
                      </div>
                  </div>

                  <div class="contacts-form-row">
                      <div class="form-input-text" style="font-family: Meiryo;">
                          お名前フリガナ
                      </div>
                      <div class="form-input">
                          <input type="text" name="realname1" placeholder="お名前のフリガナを入れてください" v-model="name2">
                      </div>
                  </div>

                  <div class="contacts-form-row">
                      <div class="form-input-text" style="font-family: Meiryo;">
                          お問合せ内容
                      </div>
                      <div class="form-input">
                          <textarea name="content" style="font-family: Meiryo;" placeholder="お問合せ内容を入れてください" v-model="text"></textarea>
                      </div>
                  </div>

                  <div class="contacts-form-row" @click="isShow = !isShow">
                    <div class="submit-box">
                        <a href="javascript:;" id="confirm">送信画面へ</a>
                    </div>
                  </div>
              </form>
          </div>
      </div>

      <div class="contacts-view-box" v-if="!isShow">
        <div class="return" @click="isShow = !isShow">
            <a href="javascript:;"><img src="../../assets/images/return.png"></a>
        </div>
        <div class="title"><span style="color:rgba(208,2,27,1);">* </span>下記の内容で送信致します。よろしければ送信ボタンを押してください。</div>
        <div class="contacts-form ts">
            <div class="contacts-form-row">
                <div class="form-input-text">
                    <span>カテゴリ :</span><label id="type_view">{{kind}}</label>
                </div>
            </div>

            <div class="contacts-form-row">
                <div class="form-input-text">
                    <span>メールアドレス : </span><label id="email_view">{{email}}</label>
                </div>
            </div>

            <div class="contacts-form-row">
                <div class="form-input-text">
                    <span>お名前 :</span> <label id="realname_view">{{name}}</label>
                </div>
            </div>

            <div class="contacts-form-row">
                <div class="form-input-text">
                    <span>お名前フリガナ : </span><label id="realname1_view">{{name2}}</label>
                </div>
            </div>

            <div class="contacts-form-row">
                <div class="form-input-text">
                    <span>お問合せ内容 :</span> <label id="content_view">{{text}}</label>
                </div>
            </div>

            <div class="contacts-form-row" @click="dialogVisible = true">
                <div class="submit-box">
                    <a href="javascript:" id="submits">送信</a>
                </div>
            </div>

            <el-dialog
              title="送信完了"
              :visible.sync="dialogVisible"
              width="500px"
              :before-close="handleClose">
              <span>ご投稿ありがとうございました。</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirm">确 定</el-button>
              </span>
            </el-dialog>
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
export default {
  data () {
    return {
      isShow: true,

      kind: '資料請求',
      email: '',
      name: '',
      name2: '',
      text: '',

      dialogVisible: false
    }
  },
  methods: {
    confirm () {
      this.dialogVisible = false
      this.$router.push({path: '/consult'})
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
    font-family: Meiryo;
    .contacts-view-box {
        max-width: 640px;
        margin: auto;
        margin-top: 64px;
        .return img {
            width: 30px;
        }
        .return-details{
          p{
            font-size: 14px;
            line-height: 25px;
          }
        }
        .ts .contacts-form-row:nth-child(odd){
                background:rgba(51,71,156,0.06);
            }
        .contacts-form {
            float: left;
            width: 100%;
            .contacts-form-row {
                float: left;
                width:640px;
                line-height: 48px;
                .form-input-text {
                    float: left;
                    font-size: 14px;
                    font-family: meiryo;
                    font-weight: 500;
                    color: rgba(28,28,28,1);
                    span{
                        width: 150px;
                        display: inline-block;
                        color: #33479C;
                        padding-left: 10px;
                    }
                }
                .form-input {
                    margin-top: 5px;
                    float: left;
                    width: 100%;
                    input{
                        width: 100%;
                        background: rgba(250,251,252,1);
                        border-radius: 4px;
                        border: 1px solid rgba(221,221,221,1);
                        padding: 8px;
                        height: 36px;
                        line-height: 36px;
                        font-family: Meiryo;
                        font-size: 12px;
                        outline: none;
                        box-sizing:border-box;
                    }
                    select {
                        width: 100%;
                        background: rgba(250,251,252,1);
                        border-radius: 4px;
                        border: 1px solid rgba(221,221,221,1);
                        padding: 8px;
                        height: 36px;
                        line-height: 36px;
                        font-family: Meiryo;
                        font-size: 12px;
                        outline: none;
                        box-sizing:border-box;
                        option{
                            width:640px;
                            height:36px;
                        }
                    }
                    textarea {
                        width: 640px;
                        height: 160px;
                        background: rgba(250,251,252,1);
                        border-radius: 4px;
                        border: 1px solid rgba(221,221,221,1);
                        padding: 10px;
                        outline: none;
                        box-sizing:border-box;
                    }
                }
                .submit-box {
                    float: left;
                    width: 100%;
                    margin-bottom: 100px;
                    margin-top: 30px;
                    a {
                        display: block;
                        width: 200px;
                        height: 48px;
                        line-height: 48px;
                        text-align: center;
                        background: rgba(51,71,156,1);
                        font-size: 16px;
                        font-family: meiryo;
                        font-weight: normal;
                        color: rgba(255,255,255,1);
                    }
                }
            }
        }
    }
}
.title{
    width:640px;
    height:20px;
    font-size:12px;
    font-family:IPAexGothic;
    line-height:20px;
    margin: 20px 0;
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
  #main .contacts-view-box {
        background: #ffffff;
        max-width: 750px;
        width: 100%;
        margin: 0;
        padding: 48px 24px 50px;
        box-sizing: border-box;
        .return a {
            height: 96px;
            display: inline-block;
            margin: 0;
            img{
              width: 96px;
            }
        }
        .return-details {
            color: #1C1C1C;
            margin-bottom: 96px !important;
            p{
              font-size: 24px;
              line-height: 2;
            }
        }
        .contacts-form {
            float: none;
            .contacts-form-row {
              width: 100%;
                margin-bottom: 50px;
                .form-input-text {
                  font-family: Meiryo;
                  font-size: 24px;
              }
              .form-input {
                  font-family: Meiryo;
                  margin-top: 24px;
                  input,select {
                      font-family: Meiryo;
                      height: 72px;
                      line-height: 72px;
                      font-size: 28px;
                      option {
                        font-family: Meiryo;
                        font-size: 13px;
                    }
                  }
                  textarea {
                    width: 100%;
                    font-family: Meiryo;
                    font-size: 28px;
                    height: 240px;
                }
              }
              .submit-box a {
                  width: 606px;
                  height: 80px;
                  line-height: 80px;
                  margin: 48px auto 0;
                  font-size: 24px;
              }
            }
        }
        .title{
          font-size: 22px;
          line-height: 40px;
          margin-bottom: 80px;
        }
        .ts{
          .contacts-form-row{
            line-height: 96px;
            .form-input-text{
              span{
                width: 300px;
              }
            }
          }
        }
    }
}
</style>
<style scoped>
@media only screen and (max-width: 750px){
  .contacts-form >>> .el-dialog__title{
    font-size: 32px;
  }
  .contacts-form >>> .el-dialog__body{
    font-size: 24px;
  }
  .contacts-form >>> .el-button{
    font-size: 24px;
  }
}
</style>
