import React from 'react';
import {Provider} from "react-redux";
import Routing from './Routing';
import store from './main';

function App() {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
