import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Button
} from 'react-native';
import DetailPresenter from './detail-presenter';
import Binder from '../../common/binder.js';
import {connect} from 'react-redux';
const windowWidth = Dimensions.get('window').width;

class DetailPage extends Component{

  render() {
    const { navigation } = this.props;
    const {state, goBack} = navigation;
    const params = state.params || {};
    const customer = navigation.getParam('customer', {});
    return (
        <View style={styles.container}>
          <View style={{width: windowWidth, alignItems: 'flex-start'}}>
          <Button
            style={{paddingHorizontal: 10}}
            onPress={() => 
            {
              console.log("BACK SU");
              goBack(params.go_back_key);
            }}
            title="Back"
            color="black"
          />
          </View>
          <View style={styles.subContainer}>
            <Image
              style={{width: 100, height: 100, borderRadius: 50, marginVertical: 20}}
              source={{uri: customer.avatar}}
            />
            <View style={{flex: 1, marginTop: 30}}>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>{"Name"}</Text>
                <Text style={{width: 20}}>{":"}</Text>
                <Text>{customer.name}</Text>
              </View>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>{"Phone"}</Text>
                <Text style={{width: 20}}>{":"}</Text>
                <Text>{customer.number}</Text>
              </View>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>{"Position"}</Text>
                <Text style={{width: 20}}>{":"}</Text>
                <Text>{customer.title}</Text>
              </View>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>{"Sex"}</Text>
                <Text style={{width: 20}}>{":"}</Text>
                <Text>{customer.sex}</Text>
              </View>
              <View style={styles.subTitleSection}>
                <Text style={styles.subTitle}>{"Age"}</Text>
                <Text style={{width: 20}}>{":"}</Text>
                <Text>{customer.age}</Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const ConnectedElement = connect((state) => {
  return state;
}, (dispatch) => (Binder.binds(DetailPresenter, dispatch, [])))(DetailPage);

ConnectedElement.navigationOptions = {
  headerTitle: "Detail Customer",
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="Back"
      color="black"
    />
  ),
};

export default ConnectedElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  subTitle:{
    width: 70
  },
  subTitleSection:{
    flexDirection:'row',
    marginVertical: 20,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
  },
});