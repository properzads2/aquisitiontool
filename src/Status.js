import React, { Component } from 'react';
import planning from './planning.png'
import researching from './researching.png'
import duediligence from './duediligence.png'
import offer from './offer.png'
import approved from './approved.png'
import declined from './declined.png'


class Status extends Component {




    render(){
    return (
      <React.Fragment>


            <div class="modal-overlay" id="modal-overlay"></div>
                <div class="modal" id="modal">
                    <button class="btn green" id="Companyinformation" onClick={this.props.company}>CompanyInformation</button>
                    <button class="btn purple" id="Finance" onClick={this.props.finance}>Finance</button>
                    <button class="btn red" id="status" onClick={this.props.contact}>Contact</button>
                    <button class="close-button" id="close-button" onClick={this.props.close}>X</button>
                    <p><h1>STATUS</h1></p>
                <div class="modal-guts">

                <p style={{fontWeight:"bold", color: 'black',fontSize:32}}>Your Current Status --> {(this.props.choice.status == "Declined")  ? <label className="labelformatdeclined">{this.props.choice.status}</label> : <label className="labelformat">{this.props.choice.status}</label>} </p>

                <p style={{fontWeight:"bold", color: 'black',fontSize:32}}> Change  Status to --> </p>
                <select style={{fontWeight:"bold", color: 'black',fontSize:32}} id="typeofstatus" name="statustype" ref="statusupdate">
                <option value="Planning">Planning</option>
                 <option value="Researching">Researching</option>
                  <option value="Duediligence">Due diligence</option>
        <option value="Pending Offer">Pending Offer</option>  
        <option value="Approved">Approved </option> 
        <option value="Declined">Declined</option>  
        </select>

        <button className="btn blue statusbutton" onClick={()=>this.props.statusupdate(this.refs.statusupdate,this.props.choice.name)}> Update Staus</button>


        <br></br>
        <br></br>

        {(this.props.choice.status == "Planning")?<img src={planning} width="1200"></img>:null}
        {(this.props.choice.status == "Researching")?<img src={researching} width="1200"></img>:null}
        {(this.props.choice.status == "Duediligence")?<img src={duediligence} width="1200"></img>:null}
        {(this.props.choice.status == "Pending Offer")?<img src={offer} width="1200"></img>:null}
        {(this.props.choice.status == "Approved")?<img src={approved} width="1200"></img>:null}
        {(this.props.choice.status == "Declined")?<img src={declined} width="1200"></img>:null}
        <br>
        </br>
        <br>
        </br>
        <p className="bottomborder"></p>
        </div>
        </div>
     </React.Fragment>
        )}

    





}

export default Status