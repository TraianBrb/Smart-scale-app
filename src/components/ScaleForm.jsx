import React from 'react';
import firebase from 'firebase';

class ScaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      body_fat: '',
      total_tody_water: '',
      muscle_mass: '',
      physique_rating: '',
      bone_mineral_mass: '',
      basal_metabolic_rate: '',
      metabolic_age: '',
      visceral_fat: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  saveScaleData = scaleData => {
    firebase
      .database()
      .ref('users/' + this.props.uid)
      .update({
        scaleData
      });
  };

  render() {
    return (
      <div>
        <label htmlFor="weight">Weight</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.weight}
          type="number"
          id="weight"
          name="weight"
        />
        <br />
        <label htmlFor="body_fat">Body Fat %</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.body_fat}
          type="number"
          id="body_fat"
          name="body_fat"
        />
        <br />
        <label htmlFor="total_tody_water">Total Body Water %</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.total_tody_water}
          type="number"
          id="total_tody_water"
          name="total_tody_water"
        />
        <br />
        <label htmlFor="muscle_mass">Muscle Mass</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.muscle_mass}
          type="number"
          id="muscle_mass"
          name="muscle_mass"
        />
        <br />
        <label htmlFor="physique_rating">Physique Rating</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.physique_rating}
          type="number"
          id="physique_rating"
          name="physique_rating"
        />
        <br />
        <label htmlFor="bone_mineral_mass">Bone Mineral Mass</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.bone_mineral_mass}
          type="number"
          id="bone_mineral_mass"
          name="bone_mineral_mass"
        />
        <br />
        <label htmlFor="basal_metabolic_rate">Basal Metabolic Rate</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.basal_metabolic_rate}
          type="number"
          id="basal_metabolic_rate"
          name="basal_metabolic_rate"
        />
        <br />
        <label htmlFor="metabolic_age">Metabolic Age</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.metabolic_age}
          type="number"
          id="metabolic_age"
          name="metabolic_age"
        />
        <br />
        <label htmlFor="visceral_fat">Visceral Fat</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.visceral_fat}
          type="number"
          id="visceral_fat"
          name="visceral_fat"
        />
        <br />
        <button onClick={() => this.saveScaleData(this.state)}>
          Submit Data
        </button>
      </div>
    );
  }
}

export default ScaleForm;
