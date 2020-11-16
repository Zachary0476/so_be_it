import React, { Component } from 'react'
import { Row, Col } from 'antd';
import homeStyle from './index.less'
import { GithubOutlined, WeiboCircleOutlined, MailOutlined, AliwangwangOutlined, DashboardOutlined } from '@ant-design/icons';
import test from '@/assets/imgs/test.jpg'
import { PositionCarouselDemo } from './solider';

export default class index extends Component {
    render() {
        return (
            <Row>
                <Col span={16} className={homeStyle.home_left}>
                    <div className={homeStyle.home_left_slide}>
                        <PositionCarouselDemo></PositionCarouselDemo>
                    </div>
                    <div className={homeStyle.home_left_parter}>
                        <span>最新文章</span>
                        <span className={homeStyle.home_left_tec_count}>技术分享(222)</span>
                    </div>
                    <div className={homeStyle.home_left_article}>
                        <div className={homeStyle.home_left_article_img}>
                            <img src={test} />
                        </div>
                        <div className={homeStyle.home_left_article_title}>
                            <div className={homeStyle.article_title}>我是文章标题</div>
                            <div className={homeStyle.article_body}>2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</div>
                            <div className={homeStyle.article_foot}>
                                <div className={homeStyle.article_foot_left}>
                                    <span className={homeStyle.article_foot_left_cag}>分类</span>
                                    <span className="iconfont icon-huabanfuben"></span><span>2020.11.14</span>
                                </div>
                                <div className={homeStyle.article_foot_right}>
                                    <div className={homeStyle.article_operate_item}><span className="iconfont icon-more"></span><span>22</span></div>
                                    <div className={homeStyle.article_operate_item}><span className="iconfont icon-browse"></span><span>1.8k</span></div>
                                    <div className={homeStyle.article_operate_item}><span className="iconfont icon-good"></span><span>1k</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={8} className={homeStyle.home_right}>
                    <span className={homeStyle.home_right_top}>关注我</span>
                    <div className={homeStyle.home_right_msg}>
                        <div className={homeStyle.home_right_msg_item}><GithubOutlined /></div>
                        <div className={homeStyle.home_right_msg_item}><WeiboCircleOutlined /></div>
                        <div className={homeStyle.home_right_msg_item}><MailOutlined /></div>
                        <div className={homeStyle.home_right_msg_item}><AliwangwangOutlined /></div>
                    </div>
                    <div className={homeStyle.home_right_msg_new}>最新文章</div>
                    <div className={homeStyle.home_right_msg_arts}>
                        <span><i className={homeStyle.home_right_msg_arts_piont}>·</i>123456</span>
                    </div>
                    <div className={homeStyle.home_right_msg_new}>友情链接</div>
                    <div className={homeStyle.home_right_msg_arts}>
                        <span><i className={homeStyle.home_right_msg_arts_piont}>·</i>123456</span>
                    </div>
                </Col>
            </Row>
        )
    }
}
