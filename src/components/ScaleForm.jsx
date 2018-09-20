import React from 'react';
import language from '../translation/en.json';

class ScaleForm extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <label htmlFor={language[name]}>{language[name]}</label>
        <input type="number" id={language[name]} />
      </div>
    );
  }
}

export default ScaleForm;
