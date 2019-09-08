import React, { Component } from 'react';
import { directive } from '@babel/types';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Label,LabelList,PieChart, Pie, Sector, Cell,
} from 'recharts';
import AddContainer from './AddContainer'
import ReactApexChart from 'apexcharts'
import { relative } from 'path';

class Finance extends Component {








render(){

    let capitalreserve = parseInt(this.props.choice.reserve)  + parseInt(this.props.choice.capital)
    let longtermliabilites = parseInt(this.props.choice.loanbalance) + parseInt(this.props.choice.debentures) + parseInt(this.props.choice.otherloans)
    let currentliabilities = parseInt(this.props.choice.overdraft) + parseInt(this.props.choice.provisions) + parseInt(this.props.choice.creditors) + parseInt(this.props.choice.expensespayable) + parseInt(this.props.choice.customeradvance)
    let fixedassests = parseInt(this.props.choice.land) + parseInt(this.props.choice.plant)
    let noncurrentassests = parseInt(this.props.choice.investment)
    let intangibleassests = parseInt(this.props.choice.goodwill) + parseInt(this.props.choice.preliminaryexpenses)
    let currentassests = parseInt(this.props.choice.prepaidexpense) + parseInt(this.props.choice.debtors) + parseInt(this.props.choice.cash) + parseInt(this.props.choice.stock) + parseInt(this.props.choice.suppliersadvance)
    let quickassests = parseInt(this.props.choice.debtors) + parseInt(this.props.choice.cash) + parseInt(this.props.choice.suppliersadvance)        
    let totalassests = (fixedassests + noncurrentassests + intangibleassests + currentassests)
    let totalliabilities = (capitalreserve + longtermliabilites + currentliabilities)
    let tangiblenetworth = (totalassests - (longtermliabilites + currentliabilities + intangibleassests) )
    
    let currentratio = (currentassests / currentliabilities).toFixed(2)
    let quickratio = (quickassests / currentliabilities).toFixed(2)
    let debtequityratio = (longtermliabilites / tangiblenetworth).toFixed(2)
    let totaloutsideliabilityratio = ((longtermliabilites+ currentliabilities) / tangiblenetworth).toFixed(1)
    let stockturnoverratio = (this.props.choice.sales / this.props.choice.stock).toFixed(1)
    let debtorsturnoverratio = (this.props.choice.sales / this.props.choice.debtors).toFixed(1) 
    
    
    let debtorcollectionratio = ((this.props.choice.debtors / this.props.choice.sales)*12).toFixed(2)
    let netprofitsalesratio = (this.props.choice.netprofit / this.props.choice.sales) * 100
    let returnonequity = ((this.props.choice.netprofit/tangiblenetworth) * 100).toFixed(0)
    let returnoninvestment = ((this.props.choice.netprofit/(tangiblenetworth+longtermliabilites))* 100).toFixed(0)  

    let score = 0

    if (currentratio   > 1){
        score += 1
    }
    if (quickratio   > 1){
        score += 1
    }
    
    if (debtequityratio  < 2){
        score += 1
    }

    if(totaloutsideliabilityratio <= 1 ){
        score += 1
    }

    if(stockturnoverratio >= 4 ){
        score += 1
    }
    
    

    const data = [
      {
        "name": "CurrentRatio",
        "uv": currentratio,
        
        
      },
      
      {
        "name": "Quick Ratio",
        "uv": quickratio,
        
      },
      
      {
        "name": "DebtequityRatio",
        "uv": debtequityratio,
        
      },
      
      {
        "name": "Total O/S Liability",
        "uv": totaloutsideliabilityratio,
      },

      {
        "name": "Inventoryturnover Ratio",
        "uv": stockturnoverratio,
      },

      {
        "name": "DebtorsTuronver",
        "uv": debtorsturnoverratio,
      },

      {
        "name": "DebtorsCollect Monthly.",
        "uv": debtorcollectionratio,
      },

      

    

    ]
    const data2 = [
        {
          "name": "NetProfit to Sales",
          "uv": netprofitsalesratio,
          
          
        },
        
        {
          "name": "Return on Equity ",
          "uv": returnonequity,
          
        },
        
        {
          "name": "Return on Investment",
          "uv":  returnoninvestment,
          
        },
        
  
  
      
  
      ]
    



    return (
        <React.Fragment>
          <div class="modal-overlay" id="modal-overlay"></div>
              <div class="modal" id="modal">
                  <button class="btn green" id="Companyinformation" onClick={this.props.company}>CompanyInformation</button>
                  <button class="btn red" id="Contacts" onClick={this.props.contact}>Contact</button>
                  <button class="btn purple" id="status" onClick={this.props.status}>Status</button>
                  <button class="close-button" id="close-button" onClick={this.props.close}>X</button>
                  <h1> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Financial Information Section&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; </h1>
                  <div class="modal-guts">
                    <br></br> 
                    <h2 align="center" style={{align:"center"}}>Consolidated Balance Sheet</h2>
                    <br></br> 
                      <p>
                        <table class="a">
                          <tr>

                            <th colSpan="2">Liabilities</th>
                            <th colSpan="7" rowSpan="1" position="absolute" left="100px">Assests</th>
                          </tr>
                          <tr>
                              <td>Capital Reserves</td>
                                <td>{capitalreserve}</td>
                                <td>Fixed assests</td>
                                <td>{fixedassests}</td>
                            </tr>
                                <td>LongtermLiabilities</td>
                                <td>{longtermliabilites}</td>
                                <td>IntangibleAssests</td>
                                <td>{intangibleassests}</td>
                                
                  
                            <tr>
                                <td>CurrentLiabilities</td>
                                <td>{currentliabilities}</td>
                                <td>CurrentAssests + Non CurrentAssests</td>
                                <td>{currentassests + noncurrentassests}</td>
                              </tr>
                  
                          <tr>
                              <td style={{color: 'green', fontWeight:'bold'}}>Total Liabilities</td>
                              <td>{(capitalreserve + longtermliabilites + currentliabilities) }</td>
                              <td style={{color: 'red', fontWeight:'bold'}}>Total Assests</td>
                              <td>{currentassests + noncurrentassests + fixedassests + intangibleassests}</td>
                              </tr>                

                          </table>
                        </p>
                          {(totalassests == totalliabilities) ? null : <p style={{color:'red', fontWeight:'bold'}}> Warning :- Balance sheet Total Assests and Total Liabilites  are not equal please check the data again. You can edit data in the main page of App. Otherwise Analysis results will be affected. </p>}       
                                        <h2 align="center" style={{align:"center",color:"blue"}}>Financial Performance Analysis</h2> 

                            <BarChart
                                width={1200}
                                height={550}
                                data={data}
                                margin={{ top: 15, right: 10, left: 10, bottom: 5 }}>
                              
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis style={{color: 'red', fontWeight:'bold', fontSize:"10"}} dataKey="name">
                                  <Label style={{color: 'red', fontWeight:'bold', fontSize:"16"}} value="Financial Ratios" offset={0} position="insideBottom" />
                                </XAxis>
                                <YAxis label={{ value: 'Ratio Scale', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                                
                                <Bar dataKey="uv" fill="#82ca9d">
                                  <LabelList dataKey="uv" position="top" />
                                </Bar>
                            </BarChart>
                              <br></br>

                              <BarChart
                                width={1200}
                                height={550}
                                data={data2}
                                margin={{ top: 15, right: 10, left: 10, bottom: 5 }}>
                              
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis style={{color: 'red', fontWeight:'bold', fontSize:10}} dataKey="name">
                                     <Label style={{color: 'red', fontWeight:'bold', fontSize:"16"}} value="Factors in Percentage" offset={0} position="insideBottom" />
                                  </XAxis>
                                  <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                                
                                      <Bar dataKey="uv" fill="#85C1E9">
                                  <LabelList dataKey="uv" position="top" />
                                </Bar>
                            </BarChart>
                              <br></br>
              




                            <h3 style={{fontWeight:"bold", color: 'blue', fontSize:30}}>Ratio Analysis Result -></h3>
                                <ol>
                                <li>{(currentratio   > 1) ? <p style={{color: 'green', fontWeight:'bold'}}>Since the {this.props.choice.name} has Current ratio {currentratio } which is more than 1 that it shows it can easily make curret debt payments and has good short term liquidity. </p> : <p style={{color: 'red', fontWeight:'bold'}}> {this.props.choice.name} has currentratio {currentratio} less than 1 which indicates the company may have problems meeting its short-term obligations , the company may also have problems with inventory management, ineffective or lax standards for collecting receivables, or an excessive cash burn rate.</p>}</li>
                                <li>{(quickratio > 1) ? <p style={{color:'green', fontWeight:'bold'}}> {this.props.choice.name} has Quick ratio {quickratio} more than 1 that it shows it can pay its current liabilites {quickratio} times over using its most liquid assests, It strongly suggest that it has enough cash or cash equivalents  to pay expenses or loans and sustain its operation. </p> :<p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has quickratio {quickratio} which is less as per standard (should be more than 1) it indicates that company may not have enough most liquid assests to pay off its currentliabilities and it may have to sell its fixed assests to continue to pay its expenses or loans and to sustain its business operations which is not a good sign.</p>}</li>
                                <li>{(debtequityratio < 2) ? <p style={{color:'green', fontWeight:'bold'}}> {this.props.choice.name} has Debt equity ratio {debtequityratio} less than 2 which indicates the company has lower dependence on borrowed funds, good ability to meet its financial obligations and has less probability of bankruptcy in the event of an economic downturn.  </p> :<p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has debtequityratio of {debtequityratio} which is higher (standard should be less than 2) and it indicates that company derives two-thirds of its capital financing from debt and one-third from shareholder equity, so it borrows twice as much funding as it owns. A company's management will, therefore, try to aim for a debt load that is compatible with a favorable D/E ratio in order to function without worrying about defaulting on its bonds or loans.</p>}</li>
                                <li>{(totaloutsideliabilityratio <= 1) ?  <p style={{color:'green', fontWeight:'bold'}}> {this.props.choice.name} has totaloutsideliabilityratio {totaloutsideliabilityratio} less than or equal to 1 which indicates it has good levels of promoter’s stake in the business and it has less reliance on debt. </p> :<p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has totaloutsideliabilityratio {totaloutsideliabilityratio} which is more than 1 which indicates it has low levels of promoter’s stake in the business, which is considered risky and it has more reliance on debt.</p>}</li>
                                
                                <li>{(stockturnoverratio >= 4) ? <p style={{color:'green', fontWeight:'bold'}}> {this.props.choice.name} has good inventory turnover ratio {stockturnoverratio} which seems to be good as per the scale (4 or more than 4) and it indicates that the company is effecient is managing its stock of goods and it has make good decisions on pricing, manufacturing, marketing, and purchasing new inventory. </p> :<p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has  inventory turnover ratio {stockturnoverratio} which is less than 4  and it indicates the company is not efficient in managing its stock of items and it also indicates that company has weak sales and possibly excess inventory.</p>}</li>
                                <li>{(debtorsturnoverratio >= 4) ? <p style={{color:'green', fontWeight:'bold'}}> {this.props.choice.name} has good Debtors/Accounts Receivable turnover ratio {debtorsturnoverratio} which seems to be good as per the scale (4 or more than 4) and it indicates that the collections methods are effective, receives payment for debts, which increases cash flow, it is extending credit to the right kinds of customers, meaning it doesnt take on as much bad debt.</p> :<p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has  Debtors/Accounts Receivable turnover ratio {debtorsturnoverratio} which is less than 4  and it indicates the company collections policies may not be effective, it may be giving credit too leniently,Bad or uncollectible debt may be  hurting  cash flow, company customers may be struggling to make their payments, making it less likely that they will make future purchases.</p>}</li>
                                <li><p style={{color:'black', fontWeight:'bold'}}> {this.props.choice.name} collects debt in {(debtorcollectionratio * 30).toFixed(2)} Days on average.</p> </li>

                              <li>{(netprofitsalesratio > 3) ? <p style={{color:'green', fontWeight:'bold'}}>{this.props.choice.name} has Net Profit to Sales Ratio {(netprofitsalesratio).toFixed(1)} %. It is industry specific so scaling is not applicable. </p> : <p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has  Net Profit to Sales Ratio {netprofitsalesratio} % which is low but it can also be alright since it depends on type of industry</p>}</li>
                              <li>{(returnonequity > 14.9) ? <p style={{color:'green', fontWeight:'bold'}}>{this.props.choice.name} has Return on Equity {returnonequity} %. It indicates company is more successful & effecient in generating profit internally. It is increasing its ability to generate profit without needing as much capital. </p> : <p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has Return on Equity {returnonequity} % which is low, it indicated the company is not effecient in generating profits without needing as much capital. </p>}</li>
                              <li>{(returnoninvestment > 3.9) ? <p style={{color:'green', fontWeight:'bold'}}>{this.props.choice.name} has Return on Investment {returnoninvestment} %. It indicates company has good return on investment which is on higher side.  </p> : <p style={{color:'red', fontWeight:'bold'}}>{this.props.choice.name} has Return on Investment {returnoninvestment} %. it indicates the company return on investment is low but may improve in future. </p>}</li>
                                

                                
                                
                                </ol>
                                <br></br>
                                <br></br>
                                
                                <p className="scoretextposition" style={{fontWeight:"bold", color: 'black', fontSize:30}}> As per Algorithm Analysis the Aquistion Score for target {(this.props.choice.name).toUpperCase()}  -></p>
                                <p className="scoreposition">{(score < 3) ? <button className="btn red" style={{fontWeight:"bold", color: 'black',fontSize:"15"}} > Bad  </button> : null }</p>
                                <p className="scoreposition">{(score >= 3 && score < 4) ? <button className="btn yellow" style={{fontWeight:"bold", color: 'black',fontSize:"15"}}> Fair   </button> : null }</p>
                                <p className="scoreposition">{(score >= 4 && score < 5) ? <button className="btn purple" style={{fontWeight:"bold", color: 'black',fontSize:"15"}}> Good   </button> : null }</p>
                                <p className="scoreposition">{(score == 5) ? <button className="btn green" style={{fontWeight:"bold", color: 'black',fontSize:"15"}}> Excellent </button> : null }</p>

                                <br></br>
                                <br></br>
               </div>
           </div>
        </React.Fragment>
    ) 











 


  }


}

export default Finance;