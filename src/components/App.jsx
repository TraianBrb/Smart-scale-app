import React from 'react';
import style from '../style.scss';
import Login from './Login';
import Header from './Header';
import UserForm from './UserForm';
import ScaleForm from './ScaleForm';
import scale from '../../sample-scale';
import firebase from 'firebase';
import base, { firebaseApp } from '../base';

class App extends React.Component {
  state = {
    scale,
    image:
      'https://www.machomen.ro/wp-content/uploads/2015/04/Secretul-bratelor-lui-arnold-schwarzenegger-702x583.jpg',
    name: '',
    uid: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    this.setState(
      {
        image: authData.user.photoURL,
        name: authData.user.displayName,
        uid: authData.user.uid
      },
      () => this.updateUserData()
    );
  };

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  updateUserData = () => {
    base.bindToState(`users/${this.state.uid}/userData`, {
      context: this,
      state: 'userData'
    });
  };

  updateScaleData = () => {
    base.bindToState(`users/${this.state.uid}/scaleData`, {
      context: this,
      state: 'scaleData'
    });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // Check if he is logged it
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    return (
      <div>
        {logout}
        <Header />
        <UserForm
          name={this.state.name}
          image={this.state.image}
          uid={this.state.uid}
          userData={this.state.userData}
        />

        <ScaleForm uid={this.state.uid} />
      </div>
    );
  }
}

export default App;
