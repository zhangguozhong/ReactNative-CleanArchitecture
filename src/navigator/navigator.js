import React, {Component} from 'react';
import {Button} from 'react-native';
import {createStackNavigator, createDrawerNavigator, NavigationActions} from 'react-navigation';

//Route
import HomePage from '../page/home/home-component.js';
import DetailPage from '../page/detail/detail-component.js';

const topDrawer = createDrawerNavigator({
    Home: {screen: HomePage},
    Detail: {screen: DetailPage}
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
                    navigation.navigate('DrawerOpen');
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
