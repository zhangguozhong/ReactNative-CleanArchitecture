import React, {Component} from 'react';
import {Button} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

//Route
import HomePage from '../page/home/home-component.js';

const topDrawer = createDrawerNavigator({
    Home: {screen: HomePage}
},{
    initialRouteName: 'Home',
});

const AppNavigator = createStackNavigator({
    Drawer: {screen: topDrawer},
},{
    navigationOptions: ({navigation})=>({
        headerLeft: 
            <Button 
                onPress={()=>{
                    navigation.navigate('DrawerToggle');
                }}
                title="Menu"
            />
    })
})

export default class Navigator extends Component {
    render(){
        return(
            <AppNavigator/>
        );
    }
}
