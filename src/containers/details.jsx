import React, { Component } from 'react';
import { connect } from 'react-redux';

import StudentDetail from '../components/student_detail.jsx';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'welcome'
    };
  }

  componentWillMount() {
    const FilteredStudent = this.props.FACN2.filter((student) => {
      return student.name === this.props.match.params.name;
    });
    this.setState({ student: FilteredStudent });
  }

  render() {
    return (
      <div>
        <h1>{ this.state.student[0].name }</h1>
        <StudentDetail student={ this.state.student[0] }/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  FACN2: state.FACN2
});

export default connect(mapStateToProps)(Details);
