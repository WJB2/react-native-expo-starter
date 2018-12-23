import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,ScrollView} from 'react-native';
import { List,Toast,Grid } from 'antd-mobile-rn';
import NavBar from './../../components/navbar/NavBar';
import AntIcon from 'react-native-vector-icons/AntDesign';

const workBenchList=[
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'公告'},
    {icon:'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',text:'指派单'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'单据管理'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'车辆管理'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'租机抄表'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'设备管理'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'工程管理'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'技术文库'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'备忘录'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'维修工单'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'送货工单'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'安装工单'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'业务员派单'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'技术资料'},
    {icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:'业务公开'},
] 

class WorkBenchScreen extends React.Component{

    handleGridClick(e){
        console.log(e);
        if(e.text==="公告"){
            this.props.navigation.navigate('Bulletin');
        }else if(e.text==="指派单"){
            this.props.navigation.navigate('AppointNavigation');
        }else if(e.text==="单据管理"){
            this.props.navigation.navigate('FormManageNavigation');
        }else if(e.text==="车辆管理"){
            this.props.navigation.navigate('VehicleManageNavigation');
        }else if(e.text==="租机抄表"){
            this.props.navigation.navigate('RentNavigation');
        }else if(e.text==="设备管理"){
            this.props.navigation.navigate('DeviceNavigation');
        }else if(e.text==="工程管理"){
            this.props.navigation.navigate('ProjectNavigation');
        }else if(e.text==="技术文库"){
            this.props.navigation.navigate('TechnicalScreen');
        }else if(e.text==="备忘录"){
            this.props.navigation.navigate('MemoNavigation');
        }else if(e.text==="维修工单"){
            this.props.navigation.navigate('MaintainNavigation');
        }else if(e.text==="业务员派单"){
            this.props.navigation.navigate('SalemanNavigation');
        }else if (e.text==="业务公开"){
            this.props.navigation.navigate('BusinessNavigation');
        }else if (e.text==="技术资料"){
            this.props.navigation.navigate('DataNavigation');
        }
    }

    render(){
        return(
            <View style={styles.container}>

                <NavBar
                    title={"工作台"}
                    navigation={this.props.navigation}
                    right={(<AntIcon size={20} name={"scan1"} style={{backgroundColor:'#fff'}}/>)}
                />

                <Image 
                    source={require('../../assets/steel.jpg')}
                    style={{height:150,width:400}}
                />
                <View style={styles.todoList}>
                    <Text>应用列表</Text>
                </View>
                <ScrollView>
                <View>
                <Grid
                    data={workBenchList}
                    columnNum={4}
                    onClick={(e)=>{this.handleGridClick(e)}}
                >
                </Grid>
                </View>
                </ScrollView>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    todoList:{
        height:40,
        backgroundColor:'#E4E4E4',
        fontSize:20
    }
})

export default WorkBenchScreen;