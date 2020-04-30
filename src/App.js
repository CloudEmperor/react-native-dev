import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import CreateNavigation from './navigation';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CreateNavigation />
      </Provider>
    );
  }
}

export default App;
