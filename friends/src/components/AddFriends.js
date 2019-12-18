import React from 'react'
import { axiosWithAuth} from '../utils/axiosWithAuth'



class AddFriends extends React.Component {
    state = {
      name: '',
      age: '',
      email: '',
  }


  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', this.state)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  
  };


  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            label='name'
            name='name'
            id='name'
            value= {this.state.name}
            placeholder='Name'
            type='text'
            onChange={this.handleChanges}
          />

           <input
            label='age'
            name='age'
            id='age'
            value= {this.state.age}
            placeholder='Age'
            type='text'
            onChange={this.handleChanges}
          />

           <input
            label='email'
            name='email'
            id='email'
            value= {this.state.email}
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