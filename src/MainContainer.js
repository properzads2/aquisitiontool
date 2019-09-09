import React, { Component } from 'react';
import { directive } from '@babel/types';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Label,LabelList,PieChart, Pie, Sector, Cell,
} from 'recharts';
import EditContainer from './Edit'
import AddContainer from './AddContainer'
import ReactApexChart from 'apexcharts'
import Finance from './finance'
import Status from './Status'
import Contact from './Contact'
import Company from './Company'

class MainContainer extends Component{

    constructor(){
     super()   
     this.state={
      modalopen:0,
      data:[],
      choice:{},
      add:false,
      toggle:false,
      edit:false
      
        
      } 
      
         

    }
    // for going to add component 
    handleAdd=()=>{
    
     if (this.state.add == true)
     {
        this.setState({add:false})

     }  
     else  
     this.setState({add:true})   

    }

    // for exiting edit menu
    handleEditExit=()=>{

     if (this.state.edit == true)
     {
        this.setState({edit:false})

     }  
     else  
     this.setState({edit:true}) 


    }

    // for going to edit menu
    handleEdit=(company)=>{


      this.setState({edit:true,choice:company})


    }


     // to delete company data 

    handleDelete=(company)=>{
      let newarray = []
      this.state.data.map(co=>{if (co.name != company.name)
        
        newarray.push(co)
      
      })

       this.setState({data:newarray})
    }

      // to save edit changes to state:data 

    editfinal=(e,companyname,address,businesstype,website,companytype,notes,firstcontactname,firstcontactphonenumber,firstcontactemail,secondcontactname,secondcontactphonenumber,secondcontactemail,loanbalance,prepaidexpense,reserve,land,overdraft,investment,provisions,goodwill,debentures,debtors,capital,plant,creditors,preliminaryexpenses,expensespayable,cash,otherloans,stock,customeradvances,suppliersadvance,sales,netprofit)=>{
     e.preventDefault()
     let newarray = []
     this.state.data.map(company=>{if (company.name == companyname.value){
          company.address = address.value
          company.businesstype = businesstype.value
          company.website = website.value 
          company.notes = notes.value 
          company.type = companytype.value
          company.firstcontactname = firstcontactname.value
          company.firstcontactphonenumber = firstcontactphonenumber.value
          company.firstcontactemail = firstcontactemail.value
          company.secondcontactname = secondcontactname.value 
          company.secondcontactphonenumber = secondcontactphonenumber.value
          company.secondcontactemail = secondcontactemail.value 
          company.loanbalance = loanbalance.value
          company.prepaidexpense = prepaidexpense.value
          company.reserve = reserve.value
          company.land = land.value
          company.overdraft = overdraft.value
          company.investment = investment.value
          company.provisions = provisions.value
          company.goodwill = goodwill.value
          company.debentures = debentures.value
          company.debtors = debtors.value
          company.capital = capital.value
          company.plant = plant.value
          company.creditors = creditors.value
          company.preliminaryexpenses = preliminaryexpenses.value
          company.expensespayable = expensespayable.value
          company.cash = cash.value
          company.otherloans = otherloans.value
          company.stock = stock.value
          company.customeradvance = customeradvances.value
          company.suppliersadvance = suppliersadvance.value
          company.sales = sales.value
          company.netprofit = netprofit.value
          newarray.push(company)
       }
        else  
       newarray.push(company) 
        }
     
      ) 
        this.setState({data:newarray})
          if (this.state.edit == true)
          {
         this.setState({edit:false})

         }  
         else  
          this.setState({edit:true})   

    }

      // to submit and push new company data to state from Add form

    handleSubmit=(e,companyname,address,businesstype,website,companytype,notes,firstcontactname,firstcontactphonenumber,firstcontactemail,secondcontactname,secondcontactphonenumber,secondcontactemail,loanbalance,prepaidexpense,reserve,land,overdraft,investment,provisions,goodwill,debentures,debtors,capital,plant,creditors,preliminaryexpenses,expensespayable,cash,otherloans,stock,customeradvances,suppliersadvance,sales,netprofit)=>{
           e.preventDefault()
    
          let company = {
            name:companyname.value,     
            address:address.value, 
            businesstype:businesstype.value, 
            website:website.value, 
            notes:notes.value, 
            type:companytype.value, 
            firstcontactname:firstcontactname.value, 
            firstcontactphonenumber:firstcontactphonenumber.value,
            firstcontactemail:firstcontactemail.value, 
            secondcontactname:secondcontactname.value, 
            secondcontactphonenumber:secondcontactphonenumber.value, 
            secondcontactemail:secondcontactemail.value, 
            loanbalance:loanbalance.value,
            prepaidexpense:prepaidexpense.value,
            reserve:reserve.value,
            land:land.value,
            overdraft:overdraft.value,
            investment:investment.value,
            provisions:provisions.value,
            goodwill:goodwill.value,
            debentures:debentures.value,
            debtors:debtors.value,
            capital:capital.value,
            plant:plant.value,
            creditors:creditors.value,
            preliminaryexpenses:preliminaryexpenses.value,
            expensespayable:expensespayable.value,
            cash:cash.value,
            otherloans:otherloans.value,
            stock:stock.value,
            customeradvance:customeradvances.value,
            suppliersadvance:suppliersadvance.value,
            sales:sales.value,
            netprofit:netprofit.value,
            status:"Planning", 
            firstcontactimage:"",
            secondcontactimage:"",
        
            contacthistory:[],
            }
          
          
          
            let loader = this.state.data
            loader.push(company)
            this.setState({data:loader})
          
            if (this.state.add == true)
          {
              this.setState({add:false})

          }  
          else  
          this.setState({add:true})   


          
       }
      

       // to navigate to company information component

    handleclick=(companyname)=>{
        let selection = {}
        this.state.data.map(company=>{if(company.name==companyname)
        {
        selection = company
        }}

        )
        this.setState({modalopen:1,choice:selection})

      }
      
       // component did mount loads demo data everytime app refresh
      componentDidMount=()=>{
        let loader = []; 
         let object = {
      
        address: "37 calumnet pkwy orlando florida USA 323233`",
        businesstype: "paper",
        capital: "240",
        cash: "30",
        contacthistory: [],
        creditors: "180",
        customeradvance: "50",
        debentures: "200",
        debtors: "320",
        expensespayable: "40",
        firstcontactemail: "stan@insurance.com",
        firstcontactimage: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
        firstcontactname: "stan lawsoon",
        firstcontactphonenumber: "674213865",
        goodwill: "40",
        investment: "50",
        land: "250",
        loanbalance: "300",
        name: "Paper Company",
        netprofit: "250",
        notes: "This company has appointed new director in july 2019. ",
        otherloans: "100",
        overdraft: "200",
        plant: "190",
        preliminaryexpenses: "10",
        prepaidexpense: "30",
        provisions: "50",
        reserve: "160",
        sales: "2500",
        secondcontactemail: "laura@insurance.com",
        secondcontactimage: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rBTzKnB_-j6jboy6k/storyblocks-businesswoman-character-avatar-isolated-vector-illustration-design_Hw85fOFLYG_thumb.jpg",
        secondcontactname: "laura morgan",
        secondcontactphonenumber: "765381453",
        status: "Planning",
        stock: "560",
        suppliersadvance: "40",
        type: "Public Limited",
              
        website: "http://www.google.com" 
    
        }    
    
       loader.push(object) 
       this.setState({data:loader})

       }

       // this is to close and return to main page on app 
       handleclose=()=>{

        this.setState({modalopen:0})

      }

        // this is to navigate to contact page on app
      handlecontact=()=>{

        this.setState({modalopen:2})
       }

       //this is save image urls in state.data

     handlecontactimage=(companyname,text)=>{
      let newurl  = prompt("Please enter Image Url"  ); 
      let loader = []
       let url = newurl
        if (newurl != "" ){
          if (newurl != null ){

          if (text == "first"){

         this.state.data.map(target=>{if (target.name == companyname){
           
          target.firstcontactimage = url
          
          loader.push(target) 
          }
          else 
          loader.push(target)
          })}
        
         if (text == "second"){
         
          this.state.data.map(target=>{if(target.name == companyname){
            target.secondcontactimage=url
            loader.push(target)
          
          }
          else 
           loader.push(target) 
         })

          }
     
     
       
        this.setState({data:loader})
          
        this.setState({modalopen:2})
        }
       }    
      } 

        //this is to post comment in the state:data

      handleComment=(name,comment)=>{
        let loader = []
        this.state.data.map(target=>{if(target.name == name){
        
        target.contacthistory.push(comment.value)
        loader.push(target)
        
        }
        else 

        loader.push(target)

      })
        this.setState({data:loader})
        this.setState({modalopen:2})

      }

        // this to navigate to company information module
       handlecompany=()=>{

        this.setState({modalopen:1})  

       }


       // this is to open finance module
       handlefinance=()=>{

       this.setState({modalopen:3})  
       }

       // this is to open the status module

       handlestatus=()=>{

        this.setState({modalopen:4})  
       }

       // this is to save updated status in this.state.data

      handleStatusUpdate=(status,name)=>{

        let array = []
        this.state.data.map(target=>{if(target.name == name){
        target.status = status.value

        array.push(target)
        }
    
        else   
    
        array.push(target)
    
       })

        this.setState({data:array})



      }

      

      




    render(){
         if (this.state.modalopen == 1){
           return (
          <Company contact={this.handlecontact} finance={this.handlefinance} status = {this.handlestatus} close = {this.handleclose} choice= {this.state.choice}> </Company>

        
        )}
        
            if (this.state.modalopen == 2){
             return (

              <Contact company={this.handlecompany} finance={this.handlefinance} status = {this.handlestatus} close = {this.handleclose} choice= {this.state.choice} handleimagechange={this.handlecontactimage} post={this.handleComment}> </Contact>

            
            )}
            if (this.state.modalopen == 3){
             return (
                  
                <Finance company={this.handlecompany} contact={this.handlecontact} status = {this.handlestatus} close = {this.handleclose} choice= {this.state.choice}> </Finance>

                
              )
            }       
          
            if (this.state.modalopen == 4){
              return (

              <Status company={this.handlecompany} contact={this.handlecontact} finance = {this.handlefinance} close = {this.handleclose} choice= {this.state.choice} statusupdate={this.handleStatusUpdate}> </Status>

              )
             }
            
            if (this.state.add == true){
              return(
                <AddContainer Addclick={this.handleAdd} Addsubmit={this.handleSubmit}></AddContainer>

                )
               } 
            if (this.state.edit == true){
             return(
                 <EditContainer EditExit={this.handleEditExit} savethis={this.editfinal} company={this.state.choice} ></EditContainer>

              )
             }   
       
       
          return(
            <React.Fragment>

                   <br></br><br></br>
                  <div className  = "mainbody" style={{fontWeight:"bold", color: 'black',fontSize:34}}>
                         
                      <div className="status-head"> 
                         
                      </div>

                  </div>    

                    
                           
               {this.state.data.map(company=><div className="mainposition"><button className="btn purple mainbuttonposition" style={{fontWeight:"bold", color: 'black',fontSize:"15"}} onClick={()=>this.handleclick(company.name)} style={{fontSize: 25,textTransform: "uppercase"}}>{company.name}</button><p className="mainstatusposition" style={{borderWidth:1,fontSize: 25,fontWeight:"bold", color: 'green',}} >Status --> {company.status}</p><img className="maindeleteposition2" src="http://www.sclance.com/pngs/x-button-png/./x_button_png_1542725.png" width="50" alt="Delete" onClick={()=>this.handleDelete(company)} ></img> <span className="maindeleteposition">Click X to Delete</span>   <span className="maineditposition">Click Pencil to Edit</span>
                <img className="maineditposition2" src="http://www.sclance.com/pngs/pencil-png-clipart/./pencil_png_clipart_1001619.png" width="50" alt="Edit" onClick={()=>this.handleEdit(company)}></img></div>)}
                         

               

                <div><button className="positionaddbutton btn blue" onClick={this.handleAdd}>Add New Company</button></div>


             </React.Fragment>
            
            
        )   

    }



}

export default MainContainer

