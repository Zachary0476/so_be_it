import React from 'react'
import loginStyle from './index.less'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  formRef = React.createRef()

  onReset = () => {
    this.formRef.current.resetFields()
  }
  onFinish = (values) => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div className={loginStyle.login_container}>
        <div className={loginStyle.login_box}>
          <div className={loginStyle.login_logo}>
            <div className={loginStyle.login_logo_left}>
              <span className={loginStyle.login_logo_img}> </span>
              <span className={loginStyle.login_logo_text}>
                车联网大数据平台
              </span>
            </div>
          </div>
          <div className={loginStyle.login_form}>
            <Form
              ref={this.formRef}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名称!',
                    trigger: 'blur',
                  },
                  {
                    min: 3,
                    max: 20,
                    message: '用户名称字符串长度区间是3-20!',
                    trigger: 'blur',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名称"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入用户密码!',
                    trigger: 'blur',
                  },
                  {
                    min: 6,
                    max: 15,
                    message: '用户密码字符串长度区间是6-15!',
                    trigger: 'blur',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="用户密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住账号密码</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  className={`${loginStyle.login_btn} login-form-button`}
                >
                  登录
                </Button>
                <Button
                  type="Default"
                  className="login-form-button"
                  htmlType="button"
                  // onClick={this.onReset}
                >
                  重置
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
