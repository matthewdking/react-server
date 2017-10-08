import React from 'react';

const StudentDetail = ({ student }) => {
  return (
    <div>
      <img src={ student.img } alt=""/>
      <p>{ student.country }</p>
    </div>
  );
};

export default StudentDetail;
