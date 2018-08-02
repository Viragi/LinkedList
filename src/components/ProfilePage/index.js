import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ProfileCard from '../ProfileCard';
import { callAPI } from '../../services/api';

class ProfilePage extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    const user = await callAPI(
      'GET',
      `/users/${this.props.match.params.username}`,
      true
    );
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <ProfileCard
            name={this.state.user.first_name}
            companyname={this.state.user.current_company}
            image={this.state.user.photo}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
