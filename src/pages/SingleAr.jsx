// import React, { useState } from 'react';
// import {useLocation} from 'react-router-dom';

// function SingleAr() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location=useLocation();
    

//     const Identity=location.state && location.state.Identity;
//     console.log(Identity);
    
//     const a = Identity && Identity[0];
//     const b = Identity && Identity[1];
    
    
    
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(a);
//     console.log(b);
//     const a1 = 2;
//     console.log(typeof a1);
//     // const b1= parseInt(b,10);
//     // console.log(typeof b1);
//     const b1="3";
    
//     // console.log("b1:", b1);
//     // const tt=Identity[0]
//     // console.log(tt)
//     // const ItemN=location.state && location.state.ItemN;

//     // console.log(Identity);
//     // console.log(ItemN);
//     // const Identity=7;
//     // const ItemN="item_7";
    

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       <div id="content">
//         {/* Uncomment this section to re-enable the original menu
//         <div id="mySidenav" className={`sidenav ${menuOpen ? 'open' : ''}`}>
//           <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
//           <a className="ar-object" id="1" href="#">
//             <img src="./pics/1.png" alt="" style={{ width: 90 }} />
//           </a>
//           <a className="ar-object" id="2" href="#">Item_2</a>
//           <a className "ar-object" id="3" href="#">Item_3</a>
//           <a className="ar-object" id="4" href="#">Item_4</a>
//           <a className="ar-object" id="5" href="#">Item_5</a>
//           <a className="ar-object" id="7" href="#">Item_7</a>
//         </div>
//         */}

//         <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
//           <span className="closebtn" onClick={toggleMenu}>&times;</span>
//           <ul>
       

//           <li><a className="ar-object" id={a} href="#">Model</a></li>

//           <li><a className="ar-object" id={b} href="#">Model2</a></li>
//             {/* {Identity.map((item, index) => (
//               <li><a className="ar-object" id={item} href="#">Model</a></li>
//           ))} */}

//           </ul>
//         </nav>
//         <div className="nava" id="container" style={{ position: "fixed" }}></div>
//         <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
//         <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
//         <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
//       </div>
//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
//       </div>
//     </div>
//   );
// }

// export default SingleAr;








// // Import necessary React components and hooks
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// // Define the SingleAr functional component
// function SingleAr() {
//   // State for managing the menu open/close
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Access the current location object
//   const location = useLocation();
//   const Identity = location.state && location.state.Identity;

//   // Extract values from Identity
//   const a = Identity && Identity[0];
//   const b = Identity && Identity[1];
//   const a1="1";
//   const b1="2";

//   // Log types and values to the console
//   console.log("Type of a:", typeof a);
//   console.log("Type of b:", typeof b);
//   console.log("Value of a:", a1);
//   console.log("Value of b:", b1);

//   // Toggle the menu open/close
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // JSX rendering
//   return (
//     <div className="App">
//       <div id="content">
//         {/* Navigation menu */}
//         <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
//           <span className="closebtn" onClick={toggleMenu}>&times;</span>
//           {/* <ul>
            
//             <li><a className="ar-object" id={a} href="#">is ajjj {a}</a></li>

//             <li><a className="ar-object" id={b} href="#">uhnhgf {b}</a></li>
            
//           </ul> */}

//           {Identity.map((item, itemIndex) => (
//             <li><a className="ar-object" id={item} key={itemIndex} href="#">is ajjj {item}</a></li>
//           ))}
//         </nav>

//         {/* Additional elements */}
//         <div className="nava" id="container" style={{ position: "fixed" }}></div>
//         <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
//         <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
//         <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
//       </div>

//       {/* Information */}
//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
//       </div>
//     </div>
//   );
// }

// // Export the component as the default export
// export default SingleAr;
















// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function SingleAr() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const Identity = location.state?.Identity; // Use optional chaining
//   console.log("Location state:", location.state);
//   const a1 = "1";
//   const b1 = "2";
//   const a = Identity && Identity[0];
//   const b = Identity && Identity[1];
//   console.log("Type of a:", typeof a);
//   console.log("Type of b:", typeof b);
//   console.log("Value of a:", a);
//   console.log("Value of b:", b);
//   console.log(Identity);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       <div id="content">
//         <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
//           <span className="closebtn" onClick={toggleMenu}>&times;</span>
          
//           {Identity?.map((item, itemIndex) => (
//             //<li key={itemIndex}><a className="ar-object" id={item} href="#" onClick={(e) => {e.preventDefault();}}>model number :{item}</a></li>
//             <li key={itemIndex}><a className="ar-object" id={item} >model number :{item}</a></li>
//           ))}
//           {/* <li><a className="ar-object" id={a} href="#" onClick={(e) => {e.preventDefault();}}>munna bhai {a}</a></li>
//           <li><a className="ar-object" id={b} href="#" onClick={(e) => {e.preventDefault();}}>munna bhai 23 {b}</a></li> */}
//         </nav>

//         <div className="nava" id="container" style={{ position: "fixed" }}></div>
//         <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
//         <button type="button" id="delete-button" style={{ display: "none" }}>DELETE</button>
//         <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
//         <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
//       </div>

//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
//       </div>
//     </div>
//   );
// }

// export default SingleAr;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// //import './main.css';

// function SingleAr() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const Identity = location.state?.Identity || [];

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     console.log('Menu Toggled:', menuOpen);
//   };

//   const closeNav = () => {
//     // Implement your closeNav logic here
//   };

//   return (
//     <div className="App">
//       <div id="content">
//         <div id="mySidenav" className={`sidenav${menuOpen ? ' open' : ''}`}>
//           <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
//           <a className="ar-object" id="2" href="#">Item_2</a>
//           <a className="ar-object" id="3" href="#">Item_3</a>
//           <a className="ar-object" id="4" href="#">Item_4</a>
//           <a className="ar-object" id="5" href="#">Item_5</a>
//           <a className="ar-object" id="7" href="#">Item_7</a>
//           {Identity.map((item, itemIndex) => (
//             <li key={itemIndex}>
//               <a className="ar-object" id={item} href="#">
//                 Model number: {item}
//               </a>
//             </li>
//           ))}
//         </div>
//         <div className="nava" id="container" style={{ position: "fixed" }}></div>
//         <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
//         <button type="button" id="delete-button" style={{ display: "none" }}>DELETE</button>
//         <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
//         <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
//       </div>

//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
//       </div>
//     </div>
//   );
// }

// export default SingleAr;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';


// function SingleAr() {
//   // const img1="D:\\Sem-8\\Major Project\\proj\\ArProject\\src\\pages\\pics\\1.JPG"
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const Identity = location.state?.Identity; // Use optional chaining
//   console.log("Location state:", location.state);

//   const kala = location.state?.kala; // Use optional chaining
//   // console.log("Location state:", location.state);

//   const a1 = "1";
//   const b1 = "2";
//   const a = Identity && Identity[0];
//   const b = Identity && Identity[1];
  

//   const c = kala && kala[0];
//   const d = kala && kala[1];

//   console.log("Type of a:", typeof a);
//   console.log("Type of b:", typeof b);
//   console.log("Value of a:", a);
//   console.log("Value of b:", b);

//   console.log("Value of c:", c);
//   console.log("Value of d:", d);

//   console.log(Identity);
//   console.log(kala)

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       <div id="content">
//       <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
//   Models
// </a>


// <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//   <div class="offcanvas-header">
//     <h5 class="offcanvas-title" id="offcanvasExampleLabel">Model Selection</h5>
//     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {e.preventDefault();}}></button>
//   </div>
//   <div class="offcanvas-body">
//     <div>
//         <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        
          
//           {Identity?.map((item, itemIndex) => (
//             //<li key={itemIndex}><a className="ar-object" id={item} href="#" onClick={(e) => {e.preventDefault();}}>model number :{item}</a></li>
//             <li key={itemIndex} >
//               {/* <a className="ar-object" id={item} >model number :{item}</a> */}
//               <a className="ar-object" id={item} > <img src={`./pics/${item}.jpg`} alt=""  /></a> 
//               </li>
//             // <li key={itemIndex}><a className="ar-object" id={item} ><img src={img1} alt="" /></a></li>
//           ))}
//           {/* <li><a className="ar-object" id={a} href="#" onClick={(e) => {e.preventDefault();}}>munna bhai {a}</a></li>
//           <li><a className="ar-object" id={b} href="#" onClick={(e) => {e.preventDefault();}}>munna bhai 23 {b}</a></li> */}
//         </nav>

//         </div>
//   </div>
// </div>


//         <div className="nava" id="container" style={{ position: "fixed" }}></div>
//         <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
//         <button type="button" id="delete-button" style={{ display: "none" }}>DELETE</button>
//         <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
//         <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
//       </div>

//       <div id="info">
//         <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
//       </div>
//     </div>
//   );
// }

// export default SingleAr;


import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


function SingleAr() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const Identity = location.state?.Identity; // Use optional chaining
  console.log("Location state:", location.state);

  const a1 = "1";
  const b1 = "2";
  const a = Identity && Identity[0];
  const b = Identity && Identity[1];
  
  console.log("Type of a:", typeof a);
  console.log("Type of b:", typeof b);
  console.log("Value of a:", a);
  console.log("Value of b:", b);


  console.log(Identity);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div id="content">
      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Models
</a>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Model Selection</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {e.preventDefault();}}></button>
  </div>
  <div class="offcanvas-body">
    <div>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        
          
          {Identity?.map((item, itemIndex) => (
            
            <li key={itemIndex} >
              {/* <a className="ar-object" id={item} >model number :{item}</a> */}
              <a className="ar-object" id={item} > <img src={`./pics/${item}.jpg`} alt=""  /></a> 
              </li>
           
          ))}
        </nav>

        </div>
  </div>
</div>


        <div className="nava" id="container" style={{ position: "fixed" }}></div>
        <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
        <button type="button" id="delete-button" style={{ display: "none" }}>DELETE</button>
        <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
        <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
      </div>

      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
      </div>
    </div>
  );
}

export default SingleAr;