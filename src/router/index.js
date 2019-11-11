import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/index' // 首页
import BoardDetails from '@/views/home/boardDetails' // 首页-高层领导详情
import WebsiteMap from '@/views/home/websiteMap' // 首页-网站地图
import Attention from '@/views/home/attention' // 首页-网站注意事项

import Idea from '@/views/idea/index' // 经营理念

import Price from '@/views/information/price' // 基金信息-标准价格一览
import Information from '@/views/information/information' // 基金信息-基金信息一览
import FundInfo from '@/views/information/fundinfo'
import OldFund from '@/views/information/oldfund'

import List from '@/views/news/list' // 新到的情报-登录信息列表
import NewsDetails from '@/views/news/newsDetails' // 新到的情报详情

import Greetings from '@/views/society/greetings' // 会社案内-寒暄
import Synopsis from '@/views/society/synopsis' // 会社案内-企业概要·沿革
import Policy from '@/views/society/policy' // 会社案内-各种方针
import PolicyDetail from '@/views/society/policydetail'
import Finance from '@/views/society/finance' // 会社案内-财务状况
import Notice from '@/views/society/notice' // 会社案内-电子公告

import Consult from '@/views/consult/index' // 咨询
import InquiryForm from '@/views/consult/inquiryForm' // 咨询

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/boardDetails', name: 'BoardDetails', component: BoardDetails},
    {path: '/websiteMap', name: 'WebsiteMap', component: WebsiteMap},
    {path: '/attention', name: 'Attention', component: Attention},

    {path: '/idea', name: 'Idea', component: Idea},

    {path: '/price', name: 'Price', component: Price},
    {path: '/information', name: 'Information', component: Information},
    {path: '/fundinfo', name: 'FundInfo', component: FundInfo},
    {path: '/oldfund', name: 'OldFund', component: OldFund},
    {path: '/list', name: 'List', component: List},
    { path: '/newsDetails', name: 'NewsDetails', component: NewsDetails },

    {path: '/greetings', name: 'Greetings', component: Greetings},
    {path: '/synopsis', name: 'Synopsis', component: Synopsis},
    {path: '/policy', name: 'Policy', component: Policy},
    {path: '/policydetail', name: 'PolicyDetail', component: PolicyDetail},
    {path: '/finance', name: 'Finance', component: Finance},
    { path: '/notice', name: 'Notice', component: Notice },

    {path: '/consult', name: 'Consult', component: Consult},
    {path: '/inquiryForm', name: 'InquiryForm', component: InquiryForm}
  ]
})
