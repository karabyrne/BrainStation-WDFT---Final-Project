import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App.js'
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

 
const AppWrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
