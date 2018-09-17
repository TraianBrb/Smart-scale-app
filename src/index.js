import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';
import Header from './components/Header';
import DataForm from './components/DataForm';

const Index = () => {
  return (
    <div>
      <Header />
      <DataForm />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
