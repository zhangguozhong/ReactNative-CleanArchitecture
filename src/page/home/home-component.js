import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import HomePresenter from './home-presenter';
import Binder from '../../common/binder.js';
import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;

class HomePage extends Component{

  constructor(props){
    super(props);
    this.state = this.props.getInitialState();
  }
  //static navigationOptions = {
  //  title: 'Home',
  //};

  componentWillMount(){
    this.props.loadDefaultData();
  }

  render() {
    const {customerData, navigation} = this.props;
    return (
        <View style={styles.container}>

          <View style={styles.subContainer}>
            <ScrollView>
              {
                customerData.phone && customerData.phone.map((item, i)=>{
                  return(
                    <TouchableOpacity 
                      key={i}
                      style={{
                        flex: 1,
                        width: windowWidth,
                        paddingVertical: 10,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                        flexDirection: 'row'
                      }}
                      onPress={()=>{
                        navigation.navigate("Detail", {
                          customer: item
                        });
                      }}
                    >
                      <Image
                        style={{width: 50, height: 50, borderRadius: 25, marginLeft: 20}}
                        source={{uri: item.avatar}}
                      />
                      <View style={{marginLeft: 20}}>
                        <Text>{item.number}</Text>
                        <Text>{item.name}</Text>
                        {/*<Text>{item.title}</Text>*/}
                      </View>
                    </TouchableOpacity>
                  );
                })
              }
            </ScrollView>
          </View>

        </View>
    );
  }
}

export default connect((state) => {
  return state;
}, (dispatch) => (Binder.binds(HomePresenter, dispatch, [])))(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});