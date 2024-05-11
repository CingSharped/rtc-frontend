import React, { PureComponent } from 'react'
import ChangeUsernameForm from './../../components/ChangeUsernameForm/index';

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <ChangeUsernameForm />
        <p>Change Password</p>
        <p>change profile Picture</p>
        <p></p>
      </div>
    );
  }
}

export default Profile