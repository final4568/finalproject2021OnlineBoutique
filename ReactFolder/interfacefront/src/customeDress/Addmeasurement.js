
// import { useRouteMatch } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Addmeasurement = ({history}) => {

//     const match = useRouteMatch();
//     const [custmodel, setCustmodel] = useState([]);

//     const getmodel = (id) =>
//     fetch(`/api/customOrder/getmodelpro/${id}`).then((res) => res.json());
    
//     useEffect(() => {
//         // const fetchmodel = async () => {
//         //   const Model = await getmodel(match.params.id);
//         //   console.log(Model);
//         //   setCustmodel(Model.collerid);
//         // };
//         // fetchmodel();
//       }, [history]);
    

//     return ( 
//         <>
//         <h1>Add measurement</h1>
//         <h1>Add measurement :{custmodel}</h1>
//         </>
    
        
//      );
// }
 
// export default Addmeasurement;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../index.css";
import {Button} from 'reactstrap'


const Addmeasurement = ({history, match}) => {
  const[name, setName] = useState("");
    const[gmail, setGmail] =useState("");
    const[phone, setPhone]= useState("");
    const[quantity, setQunty]=useState("");
    const[chest, setChest]=useState("");
    const[shirtlength, setShirtlength]=useState("");
    const[sleevlength, setSleevlength]=useState("");
    const[sholder, setSholder]=useState("");
    const[overarm, setOverarm]=useState("");
    const[waistcoatlength, setWaistcoatlength]=useState("");
    const[wrist, setWrist]=useState("");
    const[neck, setNeck]=useState("");
    const[pntlength, setPntlength]=useState("");
    const[pnwaist, setPnwaist]=useState("");
    const[hip, sethip]=useState("");
    const[thigh, setThigh]=useState("");
    const[knee, setKnee]=useState("");
    const[suitsize, setSuitsize] = useState("");
    const[clientdate, setClientdate]=useState("");
    const[legopening, setLegopening]=useState("");
    const[useraddress, setUseraddress]=useState("");
    const[tailortype, setTailortype]=useState("");
    const productcategory ="ManCutsomModel";
    const[orderstatus, setOrderstatus] =useState({});
    const[orderprogress, setOrderprogress] =useState("New_Order")


   

 

    useEffect(() => {      
   
      }, [history, match]);


      
      const registerHandler = async (e) => {
        e.preventDefault();
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
        
        const body = {
          name,gmail, phone, quantity, chest, shirtlength, sleevlength,
          sholder, overarm, waistcoatlength, wrist, neck, pntlength, pnwaist,
          hip, thigh, knee, legopening, suitsize, clientdate, useraddress, tailortype,
          productcategory,orderprogress, orderstatus: "SUBMITTED"
          
      }
      await fetch(`/api/oders/orderUpdate/${match.params.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        alert("oder successfully");
        history.push("/user/dashboard")
      };

    return (
        <>
      {/* <h1>{collercolor}</h1>
      <h1>{collerid}</h1>
      <h1>{bodyid}</h1>
      <h1>{bodycolor}</h1>
      <h1>{productid}</h1> */}

      <div className="container"  id="productForm">
        <div className="heading">
        Custom Product Order Form
        <Link to ="/product">
        <Button color="danger" id="btn_back">GO Back</Button>{' '}
        </Link>
        </div>      
        <div className="DetailLine">
          <div>
          Enter Your Order Detail Below And Make Your Order Success
          </div>   
        </div>
        
        
        <div className="row">
          <div className="col-lg-12 col-sm">
              <div className="form">
                  <form class="form-inline" onSubmit={registerHandler}>                   
                    <label for="name">Name : </label><br/>
                    <input type="text" required id="name" placeholder="Enter User Name" name="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}/>
                    
                    <label for="phone">Email :</label>
                    <input type="email" required id="gmail" placeholder="Enter Valid Email Address" name="gmail"
                    value={gmail}
                    onChange={(e)=>{setGmail(e.target.value)}}
                    />
                    
                    <label for="phone">Phone:</label>
                    <input type="number" required id="phone" placeholder="Enter phone" name="phone"
                      value={phone}
                      onChange={(e)=>{setPhone(e.target.value)}}                    
                    />
                    
                    <label for="Qunty">Qunty:</label>
                    <input type="number" required id="quantity" placeholder="Enter Quantity" name="quantity"
                    value={quantity}
                    onChange={(e)=>{setQunty(e.target.value)}}
                    />
                    
                    <label for="date">Delivery-Date:</label>
                    <input type="date" required id="clientdate" placeholder="Enter Delivery Date" name="clientdate"
                    value={clientdate} 
                    onChange ={(e)=>{
                      setClientdate(e.target.value)
                    }}
                    />

                    <label for="date" >Select Size:</label>
                   <select className="selection" 
                   value={suitsize} 
                   onChange ={(e)=>{
                    setSuitsize(e.target.value)
                   }}>
                     <option className="option" value= "Small">Small</option>
                     <option className="option" value= "Medium">Medium</option>
                     <option className="option" value= "Large">Large</option>
                     <option className="option" value= "Xlarge">X-large</option>
                     <option className="option" value= "XXlarge">XX-large</option>
                     <option className="option" value= "XXXlarge">XXX-large</option>
                   </select>

                    <label for="phone">Address:</label>
                    <div className="adddress">
                    <textarea type="text" required id="useraddress" placeholder="Enter Delivery Address" name="useraddress"
                     value={useraddress} 
                     onChange ={(e)=>{
                      setUseraddress(e.target.value)
                     }}
                    />
                    </div>
                    
                    
                    <label for="chest">Chest Size:</label>
                    <input type="number" required id="chest" placeholder="Enter Shirt Chest Size" name="chest"
                    value={chest} 
                    onChange ={(e)=>{
                    setChest(e.target.value)
                    }}
                    
                    />

                    <label for="ShirtLength">Shirt Length:</label>
                    <input type="number" required id="shirtlength" placeholder="Enter Shirt Shirt Length" name="shirtlength"
                    value={shirtlength} 
                    onChange ={(e)=>{
                    setShirtlength(e.target.value)
                    }}
                    />
                    
                    <label for="ShirtLength">Sleeve Length:</label>
                    <input type="number" required id="sleevlength" placeholder="Enter Shirt Sleeve Length" name="sleevlength"
                     value={sleevlength} 
                     onChange ={(e)=>{
                      setSleevlength(e.target.value)
                     }}
                    />
                    
                    <label for="sholder">Sholder Size:</label>
                    <input type="number" required id="sholder" placeholder="Enter Shirt sholder Size" name="sholder"
                     value={sholder} 
                     onChange ={(e)=>{
                      setSholder(e.target.value)
                     }}
                    />
                   
                    <label for="overarm">Overarm Size:</label>
                    <input type="number" required id="overarm" placeholder="Enter Shirt overarm Size" name="overarm"
                    value={overarm} 
                    onChange ={(e)=>{
                      setOverarm(e.target.value)
                    }}
                    />
                   
       
                   
                    <label for="overarm">Waistcoat Length:</label>
                    <input type="number" required id="waistcoatlength" placeholder="Enter Shirt overarm Size" name="waistcoatlength"
                     value={waistcoatlength} 
                     onChange ={(e)=>{
                       setWaistcoatlength(e.target.value)
                     }}
                     />
                   
                    <label for="wrist">Wrist Size:</label>
                    <input type="number"required  id="wrist" placeholder="Enter Shirt wrist Size" name="wrist"
                    value={wrist} 
                    onChange ={(e)=>{
                      setWrist(e.target.value)
                    }}
                    />
                    
                    <label for="neck">Neck Size:</label>
                    <input type="number" required id="neck" placeholder="Enter Shirt Neck Size" name="neck"
                    value={neck} 
                    onChange ={(e)=>{
                      setNeck(e.target.value)
                    }}
                    />
                    
                    {/* pents size */}
                    <label for="pntlength">Pent Length:</label>
                    <input type="number" required id="pntlength" placeholder="Enter Pent Length" name="pntlength"
                     value={pntlength} 
                     onChange ={(e)=>{
                      setPntlength(e.target.value)
                     }}
                    />

                    <label for="pnwaist">Waist:</label>
                    <input type="number" required id="pnwaist" placeholder="Enter Pent Waist" name="pnwaist"
                     value={pnwaist} 
                     onChange ={(e)=>{
                      setPnwaist(e.target.value)
                     }}
                    />
                   
                    <label for="hip">Size From Back:</label>
                    <input type="number" required id="hip" placeholder="Enter Pent hip Size" name="hip"
                    value={hip} 
                    onChange ={(e)=>{
                      sethip(e.target.value)
                    }}
                    />

                    <label for="thigh">Thigh Size:</label>
                    <input type="number" required id="thigh" placeholder="Enter Pent Thigh Size" name="thigh"
                    value={thigh} 
                    onChange ={(e)=>{
                      setThigh(e.target.value)
                    }}
                    />
                    
                    <label for="knee">knee Size:</label>
                    <input type="number" required id="knee" placeholder="Enter Pent knee Size" name="knee"
                     value={knee} 
                     onChange ={(e)=>{
                      setKnee(e.target.value)
                     }}
                    />

                    <label for="knee">legopening Size:</label>
                    <input type="number" required id="legopening" placeholder="Enter Pent legopening Size" name="legopening"
                        value={legopening} 
                        onChange ={(e)=>{
                          setLegopening(e.target.value)
                        }}
                    />


                    <label for="date">Seleect Your Tailor:</label>
                   <select className="selection"
                    value={tailortype} 
                    onChange ={(e)=>{
                      setTailortype(e.target.value)
                    }}
                   >  
                      <option value="select">Select Tailor</option>
                          <option value="Male">Male</option>
                          <option value="Female">FeMale</option>
                   </select>

                   <button type="submit" className="btnorder">Place Order</button>
                   
                  </form>

              </div>
          </div>



      
        </div>
    
  

      </div>
        
 </>
        
      );
}
 
export default Addmeasurement;