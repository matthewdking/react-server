import React, { Component } from 'react';

import StudentDetail from '../components/student_detail.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'welcome'
    };
  }

  render() {
    return (
      <div>
        <h1 className="app"> { this.state.hello } </h1>
        <StudentDetail />
      </div>
    );
  }
}

export default App;
