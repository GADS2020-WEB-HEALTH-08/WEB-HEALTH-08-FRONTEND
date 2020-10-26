import React from 'react';
import './App.css';
import { Button, Form, Grid, GridColumn, Container } from 'semantic-ui-react';

const SignUp = () => (
  <Container>
 <Grid centered>
    <GridColumn style={{maxWidth: 550, marginTop: 20}}>
        <Form class="ui big form">
          <Form.Field>
              <input size="massive"fluid type="email" aria-label="email" placeholder='Email' required/>
            </Form.Field>
            <Form.Field>
              <input fluid type="text" aria-label="username" placeholder='Username' required/>
            </Form.Field>
            <Form.Field>
              <input fluid type="password" aria-label="password" placeholder='Password' required />
            </Form.Field>
            <Button fluid color='teal' type='submit' size="massive">Sign Up</Button>
        </Form>
   
    </GridColumn>
    
  </Grid>
  </Container>
)

export default SignUp

