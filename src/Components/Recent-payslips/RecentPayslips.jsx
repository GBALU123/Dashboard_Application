import React from 'react'
import './Recentpayslips.css'



const RecentPayslips = () => {
return (
  <div className='Main-Container'>
     <div className="container">
          <div className='left'>
            <h4> Recent payslips(Current FY)<a href="http://" style={{marginLeft:'168px'}}>View All</a></h4>
          
            <div class="card-label">No payslips Available</div>
          </div>
      <div className='right'>
        <h4>Recent PayRoll <a href="http://" style={{marginLeft:'240px'}}>view Details</a> </h4>
      
        <div className="payroll">

          <div className='gross'>
            <span>GROSS</span>
            <label>₹0.00</label>
          </div>

          <div className='basic'>
            <span>BASIC</span>
            <label>₹0.00</label>
          </div>

          <div className='netpay'>
            <span>NETPAY</span>
            <label>₹0.00</label>
          </div>

        </div>
      
        <div className='taxes'>
          <h4 >Taxes <a href="http://" style={{marginLeft:'320px'}}>More Info</a></h4>
    
          <div className="taxes-consumer">

            <div className='tds'>
              <span>TDS</span>
              <label>₹0.00</label>
            </div>

            <div className='pf'>
              <span>PF</span>
              <label>₹0.00</label>
            </div>

            <div className='esi'>
              <span>ESI</span>
              <label>₹0.00</label>
            </div>

          </div>
        </div>

        <div className='taxes-yearToDate'>
          <h4>Taxes(Year To Date) <a href="http://" style={{marginLeft:'210px'}}>More Info</a></h4>
          
          <div className="taxes-provider">

            <div className='tds'>
              <span>TDS</span>
              <label>₹0.00</label>
            </div>

            <div className='pf'>
              <span>PF</span>
              <label>₹0.00</label>
            </div>

            <div className='esi'>
              <span>ESI</span>
              <label>₹0.00</label>
            </div>

          </div>
        </div>

      </div>
    </div>

     {/* second part */}

      <div className="container">
        <div className='left'>
          <h4>Leaves</h4>
    
          <div className="taxes-consumer">

            <div className='tds'>
              <span>USED</span>
              <label>0</label>
            </div>

            <div className='pf'>
              <span>ALLOTTED</span>
              <label>13</label>
            </div>

            <div className='esi'>
              <span>AVAILABLE</span>
              <label>13</label>
            </div>
          </div>
     
          <div className='taxes-yearToDate1'>
            <h4>Timeclock(Current payperiod)</h4>
          
            <div className="taxes-provider">

              <div className='tds'>
               <span>APPROVED</span>
               <label>0</label>
              </div>

              <div className='pf'>
               <span>PENDING</span>
               <label>1</label>
              </div>

              <div className='esi'>
               <span>REJECTED</span>
               <label>0</label>
              </div>

            </div>
          </div>
        </div>

        <div className='right'>
          <div className='taxes'>
           <h4> Leave Balances</h4>
          
            <div class="leavemanagement">
              <div className='sickleave'>
              
               <label >Sick Leave</label>
               <meter value="2" min="0" max="0" style={{width:'100%'}}></meter>
              </div>
              <div className='Earnedleave'>
               <label >Earned Leave</label>
               <meter value="2" min="0" max="0" style={{width:'110%'}}></meter>
              </div>
              <div className='plannedleave'>
                <label >Planned Leaves</label>
                <meter value="2" min="0" max="0" style={{width:'115%'}}></meter>
              </div>
            </div>

          </div>
        
        </div>
      </div>
     
       {/* tHIRD PART */}

        <div className='taxes-yearToDate2'>
          <h4 style={{marginLeft:'80px'}}>Weekly Timeclock</h4>
          <div className='date'>
          <div className="monthlyattendence">
            
            <div>
              <span>June 23,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            <div>
              <span >June 24,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            <div>
            <span>June 25,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            <div>
              <span>June 26,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            <div >
              <span>June 27,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            <div >
              <span>June 28,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div> 
            <div >
              <span>June 29,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            <div >
              <span>June 30,2024</span>
              <meter  value="2" min="0" max="1" style={{width:'100%'}}></meter>
            </div>
            </div>
          </div>
        </div>

        {/* fourth part */}
        <div className='left'>
          <div className='holiday'>
            <h4>Holidays<a href="http://" style={{marginLeft:'230px'}}>View All</a></h4>
          
            <div class="holidays">No Holidays found</div>
          </div>
        </div>
   
  </div>

)
}

  export default RecentPayslips

