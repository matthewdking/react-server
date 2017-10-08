import React, { Component } from 'react';
import { connect } from 'react-redux';

import AllStudents from '../components/all_students.jsx';

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
        <AllStudents all={ this.props.FACN2 }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  FACN2: state.FACN2
});

export default connect(mapStateToProps)(App);
