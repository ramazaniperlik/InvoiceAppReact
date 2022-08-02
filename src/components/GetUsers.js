import React, { Component } from 'react'
import axios from 'axios';
import GroupIcon from '@mui/icons-material/Group';

export default class GetUsers extends Component {

    state = { users:[] }
    
  componentDidMount(){
      axios.get('http://localhost:8080/v1/users/getUsers')
      .then(response => {
          const users = response.data;
          this.setState({ users });
      })
  }

  render() {
    return (
      <div>
        <div className="container">
                    <div className="row">
                    <div className="card mt-1 p-1">
                    <div className="card-title mx-1 mt-1"><h5 className="text-muted"><GroupIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} style={{marginBottom:"5px"}}/>User List</h5><hr/></div>
            
                        <table class="text-center mt-1">
                          <thead>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                          </thead>
                          {
                this.state.users
                .map(user =>
                                <tr>
                                  <td>{user.id}</td>
                                  <td>{user.firstName} </td>
                                  <td>{user.lastName} </td>
                                </tr>
                    
                    )
            } </table>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
