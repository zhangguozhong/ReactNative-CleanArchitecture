import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomePresenter from './home-presenter';
import Binder from '../../common/binder.js';
import {connect} from 'react-redux';

class HomePage extends Component{

  static navigationOptions = {
    title: 'Home',
  };

  render() {

    return (
        <View style={styles.container}>

          <View style={styles.subContainer}>

            <Text>Home</Text>

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