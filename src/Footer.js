import React, { Component } from 'react';
import './footer.css';
var $ = require('jquery');

class Footer extends Component {
  render() {
    return (
      <section>
        <section className="honor">
          <section className="honor-left-box">
            <img src="static/image/icon1.png" alt="" className="honor-logo"/>
            <p className="honor-text">承接中国教育学会“十三五”国家课题</p>
            <p className="honor-subtext">《VR沉浸式教学技术辅助学校体验课程建设与教<br/>学改革的研究》</p>
            <p className="honor-text">承接中央电教馆国家级课题</p>
            <p className="honor-subtext">《VR技术支持下以学习者为中心的教学案例研究》</p>
            <p className="honor-text">VR CHINA JAM最佳创意奖</p>
          </section>
          <section className="honor-center-box">
            <img src="static/image/icon2.png" alt="" className="honor-logo"/>
            <p className="honor-text">中国教育装备行业协会会员</p>
            <p className="honor-text">中国可视化虚拟现实战略产业联盟<br/>成员单位</p>
            <p className="honor-text">北京科技大学虚拟现实实验室</p>
          </section>
          <section className="honor-right-box">
            <img src="static/image/icon3.png" alt="" className="honor-logo"/>
            <p className="honor-text">中关村高新技术企业</p>
            <p className="honor-text">中国教育学会教育管理分会理事单位</p>
            <p className="honor-text">CEO杨威被聘为中关村虚拟现实空间<br/>(STRONGVR)导师</p>
          </section>
        </section>
        <footer className="footer">
          <section className="footer-content">
            <section className="footer-left-box">
              <section className="qrcode-box">
                <img src="static/image/qrcode.png" alt="" className="qrcode-image"/>
                <p className="qrcode-hint">关注微视酷微信订阅号</p>
              </section>
              <section className="contact-box">
                <img src="static/image/logo5.png" alt="" className="contact-logo"/>
                <p className="contact-info">地址：北京市海淀区上地创业中路32号3-301</p>
                <p className="contact-info">电话：400-0860581<br/>　　　010-87366561 / 010-87366069</p>
                <p className="contact-info">邮箱：INFO@WIZSCH.COM</p>
              </section>
            </section>
            <section className="footer-right-box">
              <section className="about-box">
                <h5 className="item-title">关于微视酷</h5>
                <a href="" className="item-link">关于我们</a>
                <a href="" className="item-link">合作伙伴</a>
                <a href="" className="item-link">加入我们</a>
              </section>
              <section className="support-box">
                <h5 className="item-title">支持与下载</h5>
                <a href="" className="item-link">售后服务</a>
                <a href="" className="item-link">技术支持</a>
                <a href="" className="item-link">资料下载</a>
              </section>
              <section className="entry-box">
                <h5 className="item-title">入口</h5>
                <a href="" className="item-link">开发者</a>
                <a href="" className="item-link">IES登陆</a>
              </section>
              <section className="news-box">
                <h5 className="item-title">媒体资讯</h5>
                <a href="" className="item-link">媒体介绍</a>
                <a href="" className="item-link">技术支持</a>
                <a href="" className="item-link">行业资讯</a>
              </section>
            </section>
          </section>
          <section className="footer-copyright">
            <p className="copyright-content">COPYRIGHT @ 2017 微视酷</p>
          </section>
        </footer>
      </section>
    );
  }
}

export default Footer;
