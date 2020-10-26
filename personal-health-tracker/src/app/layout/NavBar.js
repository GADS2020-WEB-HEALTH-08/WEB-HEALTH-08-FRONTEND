import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from  'react-router-dom'
import { Grid } from 'semantic-ui-react';
import Login from './Login'
import SignUp from './SignUp'



function NavBar() {
  return (
    <Grid>
    <Router>
        <div class="ui three item menu">
        <a class="active item"><Link to="/">Welcome</Link></a>
        <a class="item"><Link to="/Login">Login</Link></a>
        <a class="item"><Link to="/SignUp">Sign Up</Link></a>
         </div>

        <Route path="/Login" component={Login}/>
        <Route path="/SignUp" component={SignUp}/>
        </Router>
        


        
    </Grid>
  );
}

export default NavBar;

