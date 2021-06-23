import "../index.css";

const Dashboard_component = () => {
    return (  
        <>
        <div class="container" >
               <div class="row" id="dashborad">
                  <div class="col-sm" style={{background:"#00c0ef"}}>
                     <strong>145%</strong>
                     <p>New Orders</p>
                     <div className="botton1">
                       <p>More Info</p>
                     </div>
                  </div>


                  <div class="col-sm" style={{background:"#ff318e"}}>
                  <strong>45%</strong>
                     <p>Bounce Rate</p>
                     <div className="botton2">
                       <p>More Info</p>
                     </div>
                  </div>


                  <div class="col-sm" style={{background:"#00a65a"}}>
                  <strong>158</strong>
                     <p>User Registrations</p>
                     <div className="botton3">
                       <p>More Info</p>
                     </div>
                  </div>

                  <div class="col-sm"  style={{background:"#f39c12"}}>
                  <strong>65%</strong>
                     <p>Unique Visitors</p>
                     <div className="botton4">
                       <p>More Info</p>
                     </div>
                  </div>
              </div>
          </div>
        



        </>
    );
}
 
export default Dashboard_component;