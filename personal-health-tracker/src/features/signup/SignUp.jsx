import React from 'react';
import { Button, Container, Form, Grid, GridColumn } from 'semantic-ui-react';

const SignUp = () => (
  <Container>
    <Grid centered>
      <GridColumn style={{ maxWidth: 600, marginTop: 216 }}>
        <Form class='ui huge form'>
          <Form.Field>
            <input
              fluid
              type='email'
              aria-label='email'
              placeholder='Email'
              required
            />
          </Form.Field>
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
          <Button fluid color='teal' type='submit'>
            Sign Up
          </Button>
        </Form>
      </GridColumn>
    </Grid>
  </Container>
);

export default SignUp;
