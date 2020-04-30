import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Login extends React.Component {
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
            this.props.navigation.navigate('Home');
          }}
          >点击跳转
        </Text>
      </View>
    );
  }
}

export default Login;
