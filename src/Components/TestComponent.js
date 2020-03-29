import React from 'react';

function TestComponent(props) {
    console.log(props)
  return (
  <div>{props.text}</div>
  );
}

export default TestComponent;
