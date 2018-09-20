import React from 'react';
import firebase from 'firebase';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      sex: '',
      height: ''
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

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      age: props.userData.age,
      height: props.userData.height,
      sex: props.userData.sex
    });
  }

  saveUserData = userData => {
    firebase
      .database()
      .ref('users/' + this.props.uid)
      .update({
        userData
      });
  };

  render() {
    return (
      <div className="user-form">
        <div>
          <img
            className="user-form__image"
            src={this.props.image}
            alt="Profile Picture"
          />
          <label className="user-form__label">Name</label>
          <span className="user-form__input">{this.props.name}</span>
        </div>
        <div>
          <label className="user-form__label" htmlFor="Age">
            Age
          </label>
          <input
            className="user-form__input"
            id="Age"
            type="number"
            name="age"
            placeholder="years"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label className="user-form__label" htmlFor="Sex">
            Sex
          </label>
          <select
            id="Sex"
            className="user-form__input"
            name="sex"
            value={this.state.sex}
            onChange={this.handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="user-form__label" htmlFor="Height">
            Height
          </label>
          <input
            className="user-form__input"
            id="Height"
            type="number"
            name="height"
            placeholder="cm"
            value={
              this.props.userData && this.props.userData.height
                ? this.props.userData.height
                : this.state.height
            }
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={() => this.saveUserData(this.state)}>Save</button>
      </div>
    );
  }
}

export default UserForm;
