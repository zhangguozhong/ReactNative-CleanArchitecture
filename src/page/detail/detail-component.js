import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DetailPresenter from './detail-presenter';
import Binder from '../../common/binder.js';
import {connect} from 'react-redux';

class DetailPage extends Component{

  static navigationOptions = {
    title: 'Detail',
  };

  render() {

    return (
        <View style={styles.container}>

          <View style={styles.subContainer}>

            <Text>Detail</Text>

          </View>

        </View>
    );
  }
}

export default connect((state) => {
  return state;
}, (dispatch) => (Binder.binds(DetailPresenter, dispatch, [])))(DetailPage);

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