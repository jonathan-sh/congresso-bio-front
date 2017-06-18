import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router,Route,browserHistory} from 'react-router';
import DashBox from './components/dash/DashBox';
import HomeBox from './components/home/HomeBox';
import PlaceBox from './components/place/PlaceBox';
import AboutBox from './components/about/AboutBox';
import SignupBox from './components/signup/SignupBox';
import RegulamentBox from './components/regulament/RegulamentBox';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>

        <Route path="/dash" component={DashBox}>
              <Route path="/home" component={HomeBox} />
              <Route path="/local" component={PlaceBox} />
              <Route path="/sobre" component={AboutBox} />
              <Route path="/inscricao" component={SignupBox} />
              <Route path="/regulamento" component={RegulamentBox} />
        </Route>

    </Router>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
