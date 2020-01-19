import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriends extends React.Component {
  state = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', this.state)

      .then(res => {
        this.setState({
          id: Date.now(),
          name: '',
          age: '',
          email: ''
        });
        // localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            label='name'
            name='name'
            value={this.state.name}
            placeholder='Name'
            type='text'
            onChange={this.handleChanges}
          />

          <input
            label='age'
            name='age'
            value={this.state.age}
            placeholder='Age'
            type='text'
            onChange={this.handleChanges}
          />

          <input
            label='email'
            name='email'
            value={this.state.email}
            placeholder='Email'
            type='text'
            onChange={this.handleChanges}
          />

          <button type='submit'>Add Friend</button>
        </div>
      </form>
    );
  }
}

export default AddFriends;
