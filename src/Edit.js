import React, {Component} from 'react'



class EditContainer extends Component {










render(){
    return(
    <div>       
        <button className="positionbackbutton btn green" onClick={this.props.EditExit}>Back</button>


        <h1 style={{fontcolor:"red"}}>EDIT COMPANY INFORMATION</h1> <br></br>
        <br></br>
            <form onSubmit={(e)=>this.props.edit(e,this.refs.companyname,this.refs.address,this.refs.businesstype,this.refs.website,this.refs.companytype,this.refs.notes,
                                          this.refs.firstcontactname,this.refs.firstcontactphonenumber,this.refs.firstcontactemail,this.refs.secondcontactname,this.refs.secondcontactphonenumber,
                                          this.refs.secondcontactemail,this.refs.loanbalance,this.refs.prepaidexpense,this.refs.reserve,this.refs.land,this.refs.overdraft,this.refs.investment
                                          ,this.refs.provisions,this.refs.goodwill,this.refs.debentures,this.refs.debtors,this.refs.capital,this.refs.plant,this.refs.creditors,this.refs.preliminaryexpenses,
                                          this.refs.expensespayable,this.refs.cash,this.refs.otherloans,this.refs.stock,this.refs.customeradvances,this.refs.suppliersadvance,this.refs.sales,this.refs.netprofit)}>
            <label for="Companyname">Company Name{this.props.company.name}</label>
        <input type="text" id="Companyname" name="CompanyName" ref="companyname" placeholder="Company name.." value={this.props.company.name} disabled/>

        <label for="Address">Company Address</label>
        <input type="text" id="Address" name="lastname" ref="address" placeholder="Address" defaultValue={this.props.company.address}/>


        <label for="BusinessType">Company Business Type</label>
        <input type="text" id="BusinessType" name="BusinessType" placeholder="Primary Business Type" ref="businesstype" defaultValue={this.props.company.businesstype}/>

        <label for="Website">Company Website</label>
        <br></br>
        <input style={{width:"800px",height:"35px"}} type="url" id="website" name="website" placeholder="website" ref="website" defaultValue={this.props.company.website}/>  
        <br></br>
        <label for="Type of Companies">Company Registered As</label>
        <select id="typeofcompanies" name="Mode Of Incorporation" ref="companytype" defaultValue={this.props.company.type}>
            <option value="Royal Chartered Companies">Royal Chartered Companies</option>
            <option value="Registered or Incorporated Companies">Registered or Incorporated Companies under Companies Act</option>
            <option value="Public Limited">Public Limited</option>
            <option value="Private Limited">Private Limited</option>  
            <option value="One Person Company">Owned by Individual</option>  
        
        </select>
    <br></br>
        <label for="otherinfo">Additional information/Notes</label>
        <input style={{width:"1900px",height:"70px"}} type="text" id="Notes" name="Notes" placeholder="Additional information/Notes" ref="notes" defaultValue={this.props.company.notes}/>

     <br></br> 

    <label for="Contact1">Company Primary Contact Person </label>
    <input type="text" id="Contact1" name="Contact1" placeholder="ContactName" ref="firstcontactname" defaultValue={this.props.company.firstcontactname} />
    <label>Phone number </label>
    <br></br><input style={{width:"400px",height:"35px"}} type="number" id="Contact1" name="Contact1" placeholder="Phone Number" ref="firstcontactphonenumber" defaultValue={this.props.company.firstcontactphonenumber}/>
    <br></br>
    <label>Email</label>
    <br></br>
    <input style={{width:"1900px",height:"35px"}}   type="email" id="Contact1" name="Contact1" placeholder="Email" ref="firstcontactemail" defaultValue={this.props.company.firstcontactemail}/>
      <br></br>
        <label for="Contact1">Company Secondary Contact Person</label>
    
        <input type="text" id="Contact2" name="Contact2" placeholder="ContactName" ref="secondcontactname" defaultValue={this.props.company.secondcontactname}/>
        <lable>Phone number </lable> <br></br>
        <input style={{width:"400px",height:"35px"}} type="number" id="Contact2" name="Contact2" placeholder="Phone Number" ref="secondcontactphonenumber" defaultValue={this.props.company.secondcontactphonenumber}/>
        <br></br>
        <label>Email</label>
        <br></br>
        <input style={{width:"1900px",height:"35px"}}type="email" id="Contact2" name="Contact2" placeholder="Email" ref="secondcontactemail" defaultValue={this.props.company.secondcontactemail}/>
        <br></br><br></br> 
        <label style={{color: 'blue', fontWeight:'bold'}}> Company Financial Information -> BalanceSheet</label> <br></br>

        <label classname="liabilityposition" style={{color: 'red', fontWeight:'bold'}}> Liabilites </label>  <label className="assestsposition" style={{color: 'green',fontWeight:'bold'}}>Assets</label><br></br>
        <label  for="Term Loan Balance">Loan Balance </label>
        <input className="liabilitypositioninput" type="number" id="LoanBalance" name="LoanBalance" placeholder="LoanBalance" ref="loanbalance" defaultValue={this.props.company.loanbalance}/>  
        <label className="assestsposition">Prepaid Expenses</label>
        <input className="assestspositioninput" type="number" id="Prepaidexpenses" name="PrepaidExpenses" placeholder="PrepaidExpenses" ref="prepaidexpense" defaultValue={this.props.company.prepaidexpense} />
        <br></br>
        <label for="Reserves"> Reserves </label>
        <input className="liabilitypositioninput" type="number" id="Reserve" name="Reserve" placeholder="Reserve" ref="reserve" defaultValue={this.props.company.reserve}/>  
        <label className="assestsposition">Land & Building</label>
        <input className="assestspositioninput" type="number" id="landbuilding" name="landbuilding" placeholder="Land&Building" ref="land" defaultValue={this.props.company.land}/>
        <br></br>
        <label for="bankoverdraft"> BankOverdraft </label>
        <input className="liabilitypositioninput" type="number" id="bankoverdraft" name="bankoverdraft" placeholder="Bankoverdraft" ref="overdraft" defaultValue={this.props.company.overdraft}/>  
        <label className="assestsposition">Investments(shares)</label>
        <input className="assestspositioninput" type="number" id="investment" name="investment" placeholder="Investment" ref="investment" defaultValue={this.props.company.investment}/>
        <br></br>
        <label for="provisions"> Provisions </label>
        <input className="liabilitypositioninput" type="number" id="provisions" name="provisions" placeholder="Provisions" ref="provisions" defaultValue={this.props.company.provisions}/>  
        <label className="assestsposition">Goodwill(Intangible Assest)</label>
        <input className="assestspositioninput" type="number" id="goodwill" name="goodwill" placeholder="Goodwill" ref="goodwill" defaultValue={this.props.company.goodwill}/>
        <br></br>
        <label for="Debentures"> Debentures </label>
        <input className="liabilitypositioninput" type="number" id="Debentures" name="Debentures" placeholder="Debentures" ref="debentures" defaultValue={this.props.company.debentures}/>  
        <label className="assestsposition">Debtors</label>
        <input className="assestspositioninput" type="number" id="debtors" name="debtors" placeholder="Debtors" ref="debtors" defaultValue={this.props.company.debtors}/>
        <br></br>
        <label for="capital"> Capital </label>
        <input className="liabilitypositioninput" type="number" id="capital" name="capital" placeholder="capital" ref="capital" defaultValue={this.props.company.capital}/>  
        <label className="assestsposition">Plant&Machinery(similar FixedAssests)</label>
        <input className="assestspositioninput" type="number" id="Plant&machinery" name="Plant&machinery" placeholder="Plant&machinery" ref="plant" defaultValue={this.props.company.plant} />
        <br></br>
        <label for="creditors"> Creditors </label>
        <input className="liabilitypositioninput" type="number" id="creditors" name="creditors" placeholder="creditors" ref="creditors" defaultValue={this.props.company.creditors}/>  
        <label className="assestsposition">Preliminary Expenses (PrepaidExpenses)</label>
        <input className="assestspositioninput" type="number" id="preliminaryexpenses" name="preliminaryexpenses" placeholder="preliminaryexpenses" ref="preliminaryexpenses" defaultValue={this.props.company.preliminaryexpenses}/>
        <br></br>
        <label for="Expensespayable"> ExpensesPayable </label>
        <input className="liabilitypositioninput" type="number" id="expensespayable" name="ExpensesPayable" placeholder="ExpensesPayable" ref="expensespayable" defaultValue={this.props.company.expensespayable}/>  
        <label className="assestsposition">CashinHand (Funds in Bank)</label>
        <input className="assestspositioninput" type="number" id="cashinhand" name="cashinhand" placeholder="Cash in Hand" ref="cash" defaultValue={this.props.company.cash}/>
        <br></br>
        <label for="OtherLoans"> OtherLoans </label>
        <input className="liabilitypositioninput" type="number" id="otherloans" name="Otherloans" placeholder="otherloans" ref="otherloans" defaultValue={this.props.company.otherloans}/>  
        <label className="assestsposition">Stocks</label>
        <input className="assestspositioninput" type="number" id="Stocks" name="Stocks" placeholder="Stocks" ref="stock" defaultValue={this.props.company.stock}/>
        <br></br> 
        <label  for="Advancefromcustomer">Adv. from Customer</label>
        <input className="liabilitypositioninput" type="number" id="advancefromcustomer" name="Advance recieved from Customer" placeholder="AdvancefromCustomer" ref="customeradvances" defaultValue={this.props.company.customeradvance}/>  
        <label className="assestsposition">Advance paid to Supplier</label>
        <input className="assestspositioninput" type="number" id="AdvancetoSupplier" name="Advance paid to Supplier" placeholder="AdvancetoSupplier" ref="suppliersadvance" defaultValue={this.props.company.suppliersadvance}/>
        <br></br> <br></br> 
        {/* <label classname="liabilityposition" style={{color: 'red', fontWeight:'bold'}}> Total Liabilities </label>  <label className="assestsposition" style={{color: 'green',fontWeight:'bold'}}> Total Assets</label><br></br> */}
        <br></br>
        <label for="Advancefromcustomer" style={{color: 'Black', fontWeight:'bold'}}> Sales </label>
        <input className="liabilitypositioninput" style={{color: 'Black', fontWeight:'bold'}} type="number" id="Sales" name="Sales" placeholder="Sales" ref="sales" defaultValue={this.props.company.sales}/>  
        <label className="assestsposition" style={{color: 'Black', fontWeight:'bold'}}>Net Profit</label>
        <input className="assestspositioninput" style={{color: 'Black', fontWeight:'bold'}} type="number" id="NetProfit" name="NetProfit" placeholder="NetProfit" ref="netprofit" defaultValue={this.props.company.netprofit}/>
    


        <br></br><br></br>
        {/* <input className="btn purple" type="submit"  value="Submit" /> */}

        
    </form>
    <button className="btn purple" onClick={(e)=>this.props.savethis(e,this.refs.companyname,this.refs.address,this.refs.businesstype,this.refs.website,this.refs.companytype,this.refs.notes,
                                          this.refs.firstcontactname,this.refs.firstcontactphonenumber,this.refs.firstcontactemail,this.refs.secondcontactname,this.refs.secondcontactphonenumber,
                                          this.refs.secondcontactemail,this.refs.loanbalance,this.refs.prepaidexpense,this.refs.reserve,this.refs.land,this.refs.overdraft,this.refs.investment
                                          ,this.refs.provisions,this.refs.goodwill,this.refs.debentures,this.refs.debtors,this.refs.capital,this.refs.plant,this.refs.creditors,this.refs.preliminaryexpenses,
                                          this.refs.expensespayable,this.refs.cash,this.refs.otherloans,this.refs.stock,this.refs.customeradvances,this.refs.suppliersadvance,this.refs.sales,this.refs.netprofit)}> save</button>
            <button className="btn green" onClick={this.props.EditExit}>Back</button>



    </div>











        )
    }      
}

export default EditContainer