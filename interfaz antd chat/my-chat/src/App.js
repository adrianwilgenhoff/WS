import React, { Component } from 'react';
import './App.css';
import {
  Link,
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';
import { Layout, Icon, Button, Input, Card, Form, Divider } from 'antd';
const { Footer, Content } = Layout;
const { Meta } = Card;

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Content style={{ padding: '0 24px', minHeight: 567, alignSelf: 'center' }}>
            {/* <Icon type="wechat" style={{ fontSize: '250px', color: '#1890ff' }} />
            <br></br>
            <Input placeholder="Your name" />
            <Button type="primary" className="login-form-button" >Join</Button> */}
            <Card
            // size="default" title="Chat Online" style={{
            //   width: 700,
            //   height: '420px', marginTop: '50px', //textAlignLast: 'center'
            //}}
            >
              <Layout>

                <Layout.Header style={{
                  //fullWidth: true,
                  background: 'white',
                  fontSize: '30px',
                  maxHeight: '80px'
                }} >
                  Chat
                </Layout.Header>

                <Layout.Content style={{
                  width: 673, overflowY: 'scroll',
                  height: '320px', textAlignLast: 'left'
                }}>
                  <p>Card content</p>

                </Layout.Content>

                <Divider />

                <Layout.Footer>
                  <Form layout="inline" size="large" style={{ background: 'white' }}>
                    <Form.Item>
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" width="100">
                        Send
                    </Button>
                    </Form.Item>
                  </Form>
                </Layout.Footer>

              </Layout>
            </Card>
          </Content>
        </Layout >

        <Footer style={{ textAlign: 'center' }} className="app-footer">
          Chat App ©2019 Created by Adrian E. Wilgenhoff
          <br></br>
          <a href="https://github.com/adrianwilgenhoff" target="_blank" rel="noopener noreferrer">
            <Icon type="github" style={{ fontSize: '16px' }} />
          </a>
          <a href="https://www.linkedin.com/in/adrian-wilgenhoff/" target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" style={{ fontSize: '16px' }} />
          </a>
          <a href="https://www.facebook.com/adrianezequiel.wilgenhoff" target="_blank" rel="noopener noreferrer">
            <Icon type="facebook" style={{ fontSize: '16px' }} />
          </a>
          <a href="mailto:adrianwilgenhoff@gmail.com" target="_blank" rel="noopener noreferrer">
            <Icon type="mail" style={{ fontSize: '16px' }} />
          </a>
        </Footer>
      </div >
    );
  }
}
export default App;
