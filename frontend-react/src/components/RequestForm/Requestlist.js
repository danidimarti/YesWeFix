import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import RequestForm from './Requestform1';



class RequestList extends Component {
    constructor(props){
        super(props);
        this.state = { 
          listOfRequests: [] 
        };
    }


    getAllRequests = () => {
        axios.get("http://localhost:5001/auth/shop/request")
        .then(responseFromApi => {
          console.log(responseFromApi)
          this.setState({listOfRequests: responseFromApi.data})
        
      })
      .catch( error => console.log(error) )
    }


      componentDidMount() {
        this.getAllRequests();
      }

      render(){
        return(
          <div>
            <div style={{width: '60%', float:"left"}}>
              { this.state.listOfRequests.map( request => {
                return (
                  <div key={request._id}>

                    <Link to={{
                      pathname:`/auth/quoteform`,
                      state: {
                        requestId: request._id,
                        shopId: request.shop,
                        userId: request.userid,
                      }
                    }}>
                    
                    <h5>{request.description} {request.status}</h5>
                    </Link>
                    
                    {/* <Link to={`/requests/${request.description}`}>
                      <h5>{request.description} {request.status}</h5>
                    </Link> */}
                     
                    {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                  </div>
                )})
              }
            </div>
            
          </div>
        )
      }

}

export default RequestList;