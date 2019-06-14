import React, { Component } from 'react';
import './App.css';
import {
    Link,
    Route,
    Switch,
    withRouter,
    BrowserRouter
} from 'react-router-dom';
import { Layout, Icon, Button, Input } from 'antd';
const { Footer, Content } = Layout;

class Chat extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Content style={{ padding: '0 24px', minHeight: 567, alignSelf: 'center' }}>
                        {/* <Icon type="wechat" style={{ fontSize: '250px', color: '#1890ff' }} />
            <br></br>
            <Input placeholder="Your name" />
            <Button type="primary" className="login-form-button" >Join</Button> */}

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
export default Chat;
