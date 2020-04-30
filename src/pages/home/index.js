import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.contaner}>
        <Text style={styles.test}>
          onClick=
          {() => {
            this.props.navigation.navigate('Login');
          }}
          >点击跳转
        </Text>
      </View>
    );
  }
}

export default Home;
