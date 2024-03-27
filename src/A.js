import React from 'react';
import { useSelector } from 'react-redux';

function A() {
  const result = useSelector(state => state.tasks);

  return (
    <div>
      <h3>Tasks:</h3>
      <ul className="task-list">
        {result.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default A;
