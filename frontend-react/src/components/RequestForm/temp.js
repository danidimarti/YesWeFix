// import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";


// //rce + tab (create class component)
// // export class RequestForm extends Component {
// class RequestForm extends Component {
//  state = {
//      repairid: '', //how to only retieve repair shop info and display here.
//      subject: '',
//      description: '',
//      imageUrl: '',
//      status: 'sent',
//  } 

//      changeHandler = e => {
//         console.log(e)
//         //console.log(this.state)
//         const { value, name } = e.target;
    
//         this.setState({
//           [name]: value
//         });

//         handleSubmit = e => {
//           //TODO: create handle submit method
//         }

//         handleFileUpload = e => {
//           //TODO: create handle submit method
//         }

//   render() {
    
//     return (
//       <div>
//         <div className="container" style={{ width: "70%" }}>
//         <div className=" row justify-content-center">
//           <div className="col-md-8" style={{ borderRadius: "0" }}>
//             <div
//               className="card"
//               style={{
//                 borderRadius: "0",
//                 borderColor: "black",
//                 borderWidth: 0.5
//               }}
//             >
//               <div
//                 className="card-header green-color white-text text-center"
//                 style={{ borderRadius: "0", marginBottom: "0px" }}
//               >
//                 Enter Shop Information
//               </div>
//               <form
//                 className="form-horizontal"
//                 onSubmit={e => this.handleSubmit(e)}
//               >

//                 <div className="form-group">
//                   <div className="input-group">
//                     <span className="input-group-addon">
//                       <i class="fa fa-user fa" aria-hidden="true" />
//                     </span>
//                     <label className="input-label-title">
//                       Please select the type of services you provide
//                     </label>
//                     <div class="cols-sm-10">
//                       <div class="input-group">
//                         <span class="input-group-addon">
//                           <i class="fa fa-envelope fa" aria-hidden="true" />
//                         </span>
//                         <label className="input-label-title">Subject</label>            
//                         <input
//                           type="text"
//                           name="subject"
//                           value={this.state.subject}
//                           onChange={e => this.props.changeHandler(e)}
                         
//                         />
//                       </div>
//                     </div>
//                     <div className="cols-sm-10">a
//                        <div className="input-group">
//                     <span className="input-group-addon">
//                       <i className="fa fa-envelope fa" aria-hidden="true" />
//                     </span>

//                     <div className="input-group">
//                       <label className="input-label-title">Description</label>
                      

//                                <textarea 
//                     type="text" 
//                     name="description" 
//                     class="input-box txt-area"
//                         id="exampleFormControlTextarea1"
//                         rows="4"
//                     value={ this.state.description } 
//                     onChange={ e => this.changeHandler(e)} />
//                     </div>
//                   </div>
//                 </div>

//                 <input
//                   type="file" 
//                   onChange={(e) => this.handleFileUpload(e)}
//                   name="imageUrl"
//                   value={values.imageUrl}
//                   className="input"
//                   placeholder="Upload an image"
//                 />
//                 <div class="input-group-btn-sm">
//                   <input
//                     id="upload-btn"
//                     className="btn-form btn-info"
//                     type="submit"
//                     value="Upload..."
//                     // onClick={this.upload}
//                   />
//                 </div>
//                 <div class="cols-sm-10">
//                   <div class="input-group-btn">
//                     <input
//                       id="back-btn"
//                       className="btn-form btn-info"
//                       type="submit"
//                       value="Back"
//                       onClick={this.back}
//                     />
//                     <input
//                       id="continue-btn"
//                       className="btn-form btn-info"
//                       type="submit"
//                       value="Send"
//                       // onClick={this.continue}
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
  
// }
     

// // const styles = {
// //   button: {
// //     margin: 15
// //   }
// // };

// export default RequestForm;
