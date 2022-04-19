import React, { Component } from 'react'
import { Row, Col } from 'antd';
import homeStyle from './index.less'
import { GithubOutlined, WeiboCircleOutlined, MailOutlined, AliwangwangOutlined, DashboardOutlined } from '@ant-design/icons';
import test from '@/assets/imgs/test.jpg'
import { PositionCarouselDemo } from './solider';
import http from '@/utils/http.js';

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        http.get('/api/get').then(res => {
            this.setState({
                articles: res.data
            })
        })
    }

    followMe(type) {
        switch (type) {
            case 'github':
                this.props.history.push('/')
                break;
            case 'weibo':
                window.open('https://weibo.com/u/5360614759?is_all=1')
                break;
            case 'mail':
                this.props.history.push('/')
                break;
            case 'ali':
                window.open('https://github.com/')
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} className={homeStyle.home_left}>
                        <div className={homeStyle.home_left_slide}>
                            <PositionCarouselDemo articles={this.state.articles}></PositionCarouselDemo>
                        </div>
                        <div className={homeStyle.home_left_parter}>
                            <span>最新文章</span>
                            <span className={homeStyle.home_left_tec_count}>技术分享(222)</span>
                        </div>
                        {
                            this.state.articles.map(art => {
                                return (
                                    <div key={art._id} className={homeStyle.home_left_article}>
                                        <div className={homeStyle.home_left_article_img}>
                                            <img src={art.img} />
                                        </div>
                                        <div className={homeStyle.home_left_article_title}>
                                            <div className={homeStyle.article_title}>{art.title}</div>
                                            <div className={homeStyle.article_body}>{art.content}</div>
                                            <div className={homeStyle.article_foot}>
                                                <div className={homeStyle.article_foot_left}>
                                                    <span className={homeStyle.article_foot_left_cag}>{art.tag}</span>
                                                    <span className="iconfont icon-huabanfuben"></span><span>{art.createtime}</span>
                                                </div>
                                                <div className={homeStyle.article_foot_right}>
                                                    <div className={homeStyle.article_operate_item}><span className="iconfont icon-more"></span><span>{art.discuss}</span></div>
                                                    <div className={homeStyle.article_operate_item}><span className="iconfont icon-browse"></span><span>{art.viewcount}</span></div>
                                                    <div className={homeStyle.article_operate_item}><span className="iconfont icon-good"></span><span>{art.cheers}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col span={8} className={homeStyle.home_right}>
                        <span className={homeStyle.home_right_top}>关注我</span>
                        <div className={homeStyle.home_right_msg}>
                            <div className={homeStyle.home_right_msg_item} onClick={() => this.followMe('github')}><GithubOutlined /></div>
                            <div className={homeStyle.home_right_msg_item} onClick={() => this.followMe('weibo')}><WeiboCircleOutlined /></div>
                            <div className={homeStyle.home_right_msg_item} onClick={() => this.followMe('mail')}><MailOutlined /></div>
                            <div className={homeStyle.home_right_msg_item} onClick={() => console.log(666)}><AliwangwangOutlined /></div>
                        </div>
                        <div className={homeStyle.home_right_msg_new}>最新文章</div>
                        {
                            this.state.articles.slice(0, 3).map(tit => {
                                return (
                                    <div key={tit._id} className={homeStyle.home_right_msg_arts}>
                                        <span><i className={homeStyle.home_right_msg_arts_piont}>·</i>{tit.title}</span>
                                    </div>
                                )
                            })
                        }

                        {/* <div className={homeStyle.home_right_msg_new}>友情链接</div>
                        <div className={homeStyle.home_right_msg_arts}>
                            <span><i className={homeStyle.home_right_msg_arts_piont}>·</i>123456</span>
                        </div> */}
                    </Col>
                </Row>
            </div>
        )
    }
}
