import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';
import Header from './components/Header';
import Box from './components/Box';

const Index = () => {
  return (
    <div>
      <Header />
      <Box />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
