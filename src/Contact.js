import React, { Component } from 'react';
import { relative } from 'path';


class Contact extends Component {




render(){

    return (
        <React.Fragment>
            <div class="modal-overlay" id="modal-overlay"></div>
              <div class="modal" id="modal">
                        <button class="btn green" id="Companyinformation" onClick={this.props.company}>CompanyInformation</button>
                        <button class="btn purple" id="Finance" onClick={this.props.finance}>Finance</button>
                        <button class="btn red" id="status" onClick={this.props.status}>Status</button>
                        <button class="close-button" id="close-button" onClick={this.props.close}>X</button>
                        <p><h1>Contacts</h1></p>
            <div class="modal-guts">
                        <br></br>

                    <div class="imagecontainer">
                       {(this.props.choice.firstcontactimage == "") ? <p><img src="http://www.clker.com/cliparts/i/z/v/6/G/d/simple-green-frame-md.png" alt="Avatar" class="contactimage"/></p> : <p><img src={this.props.choice.firstcontactimage} alt="Avatar" class="contactimage"/></p>}
                
                       <div class="contactimageoverlay">
                             <div onClick={()=>this.props.handleimagechange(this.props.choice.name,"first")}>Click to Change/Update Image</div>
                        </div>
                     </div>
                  <div className="box">
                     <p style={{color: 'Black', fontWeight:'bold', fontSize:32 }}> Name -------> <label style={{color: 'Black', fontWeight:'bold', fontSize:32, textTransform:"uppercase" }}>{this.props.choice.firstcontactname}</label></p>
                     <p style={{color: 'Black', fontWeight:'bold', fontSize:32 }}> Phone -------> <label style={{color: 'Black', fontWeight:'bold', fontSize:32, textTransform:"uppercase" }}>{this.props.choice.firstcontactphonenumber}</label></p>
                     <p style={{color: 'Black', fontWeight:'bold', fontSize:32 }}> Email -------> <label style={{color: 'Black', fontWeight:'bold', fontSize:32, textTransform:"lowercase" }}>{this.props.choice.firstcontactemail}</label></p>

                  </div>
           
            
              <div class="image-container">
                  {(this.props.choice.secondcontactimage == "") ?  <img width="300px" height="350px"  src="http://www.clker.com/cliparts/i/z/v/6/G/d/simple-green-frame-md.png"/> :<img width="300px" height="350px"  src={this.props.choice.secondcontactimage}/>}
                  <div class="after" onClick={()=>this.props.handleimagechange(this.props.choice.name,"second")}>Click to Change/Update Image</div>
              </div>

                    <div class="displayfloat box2" >
  
                         
                         <p style={{color: 'Black', fontWeight:'bold', fontSize:32 }}> Name -------> <label style={{color: 'Black', fontWeight:'bold', fontSize:32, textTransform:"uppercase" }}>{this.props.choice.secondcontactname}</label></p>
                         <p style={{color: 'Black', fontWeight:'bold', fontSize:32 }}> Phone -------> <label style={{color: 'Black', fontWeight:'bold', fontSize:32, textTransform:"uppercase" }}>{this.props.choice.secondcontactphonenumber}</label></p>   
                         <p style={{color: 'Black', fontWeight:'bold', fontSize:32 }}> Email -------> <label style={{color: 'Black', fontWeight:'bold', fontSize:32, textTransform:"lowercase" }}>{this.props.choice.secondcontactemail}</label></p>      
  
                      </div>

                         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                           <br></br> <br></br>

                     <div className="ddd">
                            <textarea className="comment" ref="comment" >Type conversation/communication/Meeting notes here. </textarea>  
                           <button className="button-comment" onClick={()=>this.props.post(this.props.choice.name,this.refs.comment)}>Post Notes</button>
                      </div>

                        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 

                  {this.props.choice.contacthistory.map(history=>
                    <div className="talk-bubble tri-right border round btm-left-in" style={{position:relative,top:"250px", width:"80%",height:"25%",left:"120px"}}>
                      <div className="talktext">
                         <p>{history}</p>
                              </div>
                              </div>
                    )}






            
                </div>
            </div>
        </React.Fragment>
        )













}



}



export  default Contact



