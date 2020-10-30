import React from 'react';
import { Button, Container, Form, Grid, GridColumn } from 'semantic-ui-react';

const Login = () => (
  <Container>
    <Grid centered>
      <GridColumn id='gridcolumn'>
        <Form class='ui huge form'>
          <Form.Field>
            <input
              fluid
              type='text'
              aria-label='username'
              placeholder='Username'
              required
            />
          </Form.Field>
          <Form.Field>
            <input
              fluid
              type='password'
              aria-label='password'
              placeholder='Password'
              required
            />
          </Form.Field>
          <Button id='button' fluid type='submit'>
            Login
          </Button>
        </Form>
      </GridColumn>
    </Grid>
  </Container>
);

export default Login;
