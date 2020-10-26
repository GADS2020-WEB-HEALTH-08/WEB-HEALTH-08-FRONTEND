import React from 'react'
import './App.css';
import { Button, Form, Grid, GridColumn, Container } from 'semantic-ui-react'

const Login = () => (
    <Container class="ui massive input">
      <Grid centered>
        <GridColumn style={{maxWidth: 550, marginTop: 50}}>
          <div >
            <Form>
              <Form.Field>
                <input size="massive" type="text" aria-label="username" placeholder='Username' required/>
              </Form.Field>
              <br/>
              <Form.Field>
                <input type="password" aria-label="password" placeholder='Password' size="massive" required/>
              </Form.Field>
              <br/>
              <Button fluid color='teal' type='submit' size="massive">Log in</Button>
            </Form>
          </div>
      
        </GridColumn>
        
      </Grid>
    </Container>
) 

export default Login