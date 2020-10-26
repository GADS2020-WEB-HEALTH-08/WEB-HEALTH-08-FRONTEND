import React from 'react'
import './App.css';
import { Button, Form, Grid, GridColumn } from 'semantic-ui-react'

const SignUp = () => (
 <Grid centered>
    <GridColumn style={{maxWidth: 550, marginTop: 20}}>
        <Form class="ui big form">
          <Form.Field>
              <input fluid type="email" aria-label="email" placeholder='Email' required/>
            </Form.Field>
            <Form.Field>
              <input fluid type="text" aria-label="username" placeholder='Username' required/>
            </Form.Field>
            <Form.Field>
              <input fluid type="password" aria-label="password" placeholder='Password' required />
            </Form.Field>
            <Button fluid color='teal' type='submit'>Sign Up</Button>
        </Form>
   
    </GridColumn>
    
  </Grid>
)

export default SignUp

