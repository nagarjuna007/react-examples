import React, { Component } from 'react';
import './Api.css';

class Api extends Component {
  render() {
    return (
      <section> 
        <h3>Web API Calls</h3>
        <table class="table table-striped table-bordered table-sm">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">UserName</th>
              <th scope="col">PasswordUser</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Api;
