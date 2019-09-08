import React, { Component } from 'react';


class Company extends Component {




render(){

    let newstring = this.props.choice.name.split(" ",2)

    return(




    <React.Fragment>
        <div class="modal-overlay" id="modal-overlay"></div>
            <div class="modal" id="modal">
                <button class="btn green" id="Contacts" onClick={this.props.contact}>Contacts</button>
                <button class="btn purple" id="Finance" onClick={this.props.finance}>Finance</button>
                <button class="btn red" id="Status" onClick={this.props.status}>Status</button>
                <button class="close-button" id="close-button" onClick={this.props.close}>X</button>
        
                    <p><h1>Company Information</h1></p>
            
                <div class="modal-guts">

        
                        <div className=".main-box">
                            <div className="ribbon ribbon-top-left"><span>{newstring[0]}</span></div>
                                <div className="ribbon ribbon-top-right"><span>{newstring[0]} </span>
	  
	                            </div>
                                    <div className="ribbon ribbon-bottom-left"><span>{newstring[0]}</span></div>
                                    <div className="ribbon ribbon-bottom-right"><span>{newstring[0]}</span></div>
                            </div>
                                    <div className="main-div"> 
                                    
                                    <p className="main-name"> Name</p>
                                    <img className="main-arrow" style={{fontWeight:"bold", color:'black',fontSize:32}} src="https://www.clipartqueen.com/image-files/black-arrow-3.png" width="280" height="100"></img>
                                    <p className="main-nameshow"> {this.props.choice.name}</p>


                                    <p className="main-address"> Address</p>
                                    <img className="main-addressarrow" style={{fontWeight:"bold", color:'black',fontSize:32}} src="https://www.clipartqueen.com/image-files/black-arrow-3.png" width="280" height="100"></img>
                                    <p className="main-addressshow"> {this.props.choice.address}</p>

                                    <p className="main-website"> Website</p>
                                    <img className="main-websitearrow" style={{fontWeight:"bold", color:'black',fontSize:20}} src="https://www.clipartqueen.com/image-files/black-arrow-3.png" width="280" height="100"></img>
                                    {/* <p className="main-websiteshow"> {this.props.choice.website}</p> */}
                                     <a className="main-websiteshow" href={this.props.choice.website}>{this.props.choice.website} </a>       

                                    <p className="main-type"> Business-Type</p>
                                    <img className="main-typearrow" style={{fontWeight:"bold", color:'black',fontSize:20}} src="https://www.clipartqueen.com/image-files/black-arrow-3.png" width="280" height="100"></img>
                                    <p className="main-typeshow"> {this.props.choice.type}</p>
 
                                    
                                    <p className="main-notes"> Additional-Notes</p>
                                    <img className="main-notesarrow" src="https://www.clipartqueen.com/image-files/black-arrow-3.png" width="280" height="100"></img>
                                    <p className="main-notesshow"> {this.props.choice.notes}</p>    


                                </div>



               </div>   
            </div>   
        
        <br></br><br></br>


    </React.Fragment>




   )
 }
}




export default Company