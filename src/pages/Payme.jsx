import React, { useEffect, useState } from 'react'

import Button from "../components/Button";









function Payme({totalPrice}) {
  const [price,setPrice] = useState(0);
  const [discount, setDiscount]=useState(0);

  const handleSubmit = (e)=>{
    

    
    var options = {
    key: "rzp_test_3c0rgFHcYyF1no",
    key_secret:"1k7W0AYA2KfLrs368KEeyMXk",
    amount: (totalPrice),
    currency:"INR",
    name:"STARTUP_PROJECTS",
    description:"for testing purpose",
    handler: async function(response){   


        alert(response.razorpay_payment_id);
        alert("yo")
    },
    prefill: {
        name:"harry",
        email:"kolih453@gmail.com",
        contact:"9326580920"
    },
    notes:{
        address:"Razorpay Corporate office"
    },
    theme: {
        color:"#3399cc"
    }
    };
    var pay = new window.Razorpay(options);
    pay.open();

  }

  return (
   
    // <button onClick={handleSubmit}>Place</button> 
     <Button size="block"onClick={handleSubmit}>Place</Button>  
   // <Button onClick={handleSubmit}>Place </Button>
                        
        
   
  )
}

export default Payme
