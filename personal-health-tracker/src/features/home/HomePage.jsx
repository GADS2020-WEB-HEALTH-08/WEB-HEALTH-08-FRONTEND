import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
  Table
} from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Fragment>
      <Segment inverted vertical className='masthead'>
        <Grid container textAlign='center'>
          <Grid.Column width={8}>
            <Header as='h1' content={'Welcome'} />
            <Button
              as={Link}
              to='/'
              size='huge'
              content={'Talk to an Expert'}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              src='/assets/heart-beat.svg'
              size='medium'
              verticalAlign='middle'
            />
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment.Group className='mastgroup'>
        <Segment className='card-layover'>
          <Container></Container>
        </Segment>
        <Segment textAlign='center' className='services'>
          <Grid container stackable columns='equal' textAlign='center'>
            <Grid.Row>
              <Header size='large'>Services</Header>
            </Grid.Row>
            <Grid.Column>
              <Header as='h3' icon textAlign='center'>
                <Icon name='heartbeat' circular />
                <Header.Content>Check Health Status</Header.Content>
              </Header>
              <Image
                centered
                size='medium'
                src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
              />
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' icon textAlign='center'>
                <Icon name='dna' circular />
                <Header.Content>Health Advisor</Header.Content>
              </Header>
              <Image
                centered
                size='medium'
                src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
              />
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' icon textAlign='center'>
                <Icon name='call' circular />
                <Header.Content>Track a Doctor / Specialist</Header.Content>
              </Header>
              <Image
                centered
                size='medium'
                src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
              />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Grid container columns={2} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header as='h3'>Veniam voluptate anim Cupidatat .</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h4'>
                  Id pariatur dolor est ipsum. Ipsum ea elit aute amet sunt
                  officia sit aliqua nostrud dolore except eur laborum cosequat
                  veni.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment className='recommendations'>
          <Grid container textAlign='center' stackable columns={4}>
            <Grid.Row>
              <Header size='large'>Recommendations</Header>
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column>
                <Card centered>
                  <Card.Content
                    header='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  neque id mollis aliqul.'
                  />
                  <Card.Content description='Age' />
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered>
                  <Card.Content header='Maecenas pharetra, malesuada felis quisque eget lorem. ' />
                  <Card.Content description='Age' />
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered>
                  <Card.Content header='Adipiscing nam amet dictum quisquete llus fringilla curab.' />
                  <Card.Content description='Age' />
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>
      <Segment attached className='footer'>
        <Grid container textAlign='center' stackable columns={2}>
          <Grid.Row>
            <Grid.Column className='column-1'>
              <Header as='h6'>
                <Image
                  alt='logo'
                  src='/assets/heart-beat-white.svg'
                  size='tiny'
                />
                Personal Health Tracker
              </Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Grid.Column>
            <Grid.Column className='column-2'>
              <Table basic='very' collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Services</Table.HeaderCell>
                    <Table.HeaderCell>About</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <List>
                        <List.Item>Health Check</List.Item>
                        <List.Item>Track Doctor</List.Item>
                      </List>
                    </Table.Cell>
                    <Table.Cell>
                      <List>
                        <List.Item>Our Story</List.Item>
                        <List.Item>Benefits</List.Item>
                      </List>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <a href='/' className='back-to-top'>
                <Icon.Group>
                  <Icon name='circle' />
                  <Icon name='angle up' size='small' />
                </Icon.Group>
              </a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='copyright'>
            <p>Copyright © 2020. LogoIpsum. All rights reserved.</p>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default HomePage;
