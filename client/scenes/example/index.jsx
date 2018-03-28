// Import dependencies.
import React, { Component } from 'react';

// Import components.
import Container from './../../components/container';

// Import scene styles.
import ExampleSceneStyles from './styles.scss';

class ExampleScene extends React.Component{
  render(){
    return(
      <div>
        <Container>
          <h1>Get coding!</h1>
        </Container>
      </div>
    );
  }
}

// Export scene.
export default ExampleScene;
