import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriends from './AddFriends'


class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
      this.setState({friends: res.data});
    })
  }


  render(){
    return (
      <div>
        <AddFriends/>
        <div>
          {this.state.friends.map((friend, id) => (
            <div key={friend.id}>
              <h1>{friend.name}</h1>
              <h2>Age: {friend.age}</h2>
              <h2>Email: {friend.email}</h2>

            </div>
          ))}
        </div>
      </div>
    )
  }
  };


export default FriendsList;