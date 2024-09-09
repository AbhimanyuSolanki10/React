import React from 'react'
import Hoc from './Hoc';

const Data = (props) => {
    console.log(props);
  return (
    <div>
        <h1>HOC EXAMPLE</h1>
    </div>
  );
};

export default Hoc(Data);
//passing Data.jsx as a argument to HOC component