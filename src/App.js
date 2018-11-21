import React, { Component } from 'react';
import 'assets/css/Custom.css';
import 'tachyons';

// Components
import Header from 'components/Header';
import Main from 'components/Sections/Main';
import Accomp from 'components/Sections/Accomp';
import Grow from 'components/Sections/Tasks/Grow';
import Flow from 'components/Sections/Tasks/Flow';
import Users from 'components/Sections/Tasks/Users';
import Community from 'components/Sections/Community';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Main />
          <Accomp />
          <Grow />
          <Flow />
          <Users />
          <Community />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
