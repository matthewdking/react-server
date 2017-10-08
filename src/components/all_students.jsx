import React from 'react';
import { Link } from 'react-router-dom';

const AllStudents = ({ all }) => {
  const Students = all.map((student, i) => {
    return (
      <div key={ i }>
        <Link to={{ pathname: `student/${student.name}` }}>
          <img src={ student.img } alt=""/>
        </Link>
        <p>{ student.name }</p>
      </div>
    );
  });

  return (
    <div>
      <h1>FACN2 Students</h1>
      <div className="students">
        { Students }
      </div>
    </div>
  );
};

export default AllStudents;
