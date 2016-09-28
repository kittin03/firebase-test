import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';
import './index.css';


ReactDOM.render(
  <TodoApp url="/api/comments" pollInterval={2000} />,
  document.getElementById('root')
);
