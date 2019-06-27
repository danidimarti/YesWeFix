import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RequestForm from './Requestform1';



class RequestList extends Component {
    constructor(){
        super();
        this.state = { listOfRequests: [] };
    }


    getAllRequests = () =>{
        axios.get(`http://localhost:5001/auth/user/request`)
        .then(responseFromApi => {
          this.setState({
            listOfRequests: responseFromApi.data
          })
        })
      }


      componentDidMount() {
        this.getAllRequests();
      }

      render(){
        return(
          <div>
            <div style={{width: '60%', float:"left"}}>
              { this.state.listOfRequest.map( request => {
                return (
                  <div key={request._id}>
                    <Link to={`/requests/${request._id}`}>
                      <h3>{request.subject}</h3>
                    </Link>
                    {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                  </div>
                )})
              }
            </div>
            <div style={{width: '40%', float:"right"}}>
                <RequestForm getData={() => this.getAllProjects()}/> {/* <== !!! */}
            </div>
          </div>
        )
      }

}

export default RequestList;