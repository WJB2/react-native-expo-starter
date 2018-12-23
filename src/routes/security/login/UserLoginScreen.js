import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { createForm } from 'rc-form';
import { Constants } from 'expo';

import { InputItem, WingBlank, WhiteSpace, Card, Button,Toast,List } from 'antd-mobile-rn';

class UserLoginForm extends Component {

    handleSubmit(){
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Toast.info('登陆成功');
                this.props.navigation.navigate('Home')
            }
        })
    }

    render() {

        const {getFieldProps}=this.props.form;

        return (
            <View>
                <List>
                <WingBlank size={'lg'}>
                    <WhiteSpace size='lg' />
                    <InputItem 
                        placeholder={'请输入用户名'}
                        {...getFieldProps('username')}
                    >用户名</InputItem>
                    <WhiteSpace size='lg' />
                    <InputItem 
                        placeholder={'请输入密码'} 
                        type={'password'}
                        {...getFieldProps('password')}
                    >输入密码:</InputItem>
                    <WhiteSpace size='lg' />
                    <Button style={styles.loginButton} type={'primary'} onClick={
                        ()=>{this.handleSubmit()}
                    }>登录</Button>
                </WingBlank>
                </List>
            </View>
        );
    }
}

const LoginFormWrapper = createForm()(UserLoginForm);

class UserLoginScreen extends Component {

    static navigationOptions={
        title:'用户登录'
    };

    render() {
        return (
            <View style={styles.container}>
                <LoginFormWrapper {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    loginButton: {
        borderRadius: 0,
    }
});

export default UserLoginScreen;