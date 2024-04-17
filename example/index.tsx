import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomButton } from '../.';

const App = () => {
  return (
    <div>
      <CustomButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
