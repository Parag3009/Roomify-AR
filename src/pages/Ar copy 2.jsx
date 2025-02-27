// import React, { useState } from 'react';
// //import './main.css'

// function Ar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       <div id="content">
//         <div id="mySidenav" className={`sidenav ${menuOpen ? 'open' : ''}`}>
//           <a href="javascript:void(0)" className="closebtn" onClick={toggleMenu}>&times;</a>
//           <a className="ar-object" id="1" href="#">
//           </a>
//           <a className="ar-object" id="2" href="#">Item_2</a>
//           <a className="ar-object" id="3" href="#">Item_3</a>
//           <a className="ar-object" id="4" href="#">Item_4</a>
//           <a className="ar-object" id="5" href="#">Item_5</a>
//           <a className="ar-object" id="7" href="#">Item_7</a>
//         </div>
        
//         <div id="container" style={{ position: "fixed" }}></div>
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

// export default Ar;

import React, { useState } from 'react';
import './ar.css'

function Ar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div id="content">
        {/* Uncomment this section to re-enable the original menu
        <div id="mySidenav" className={`sidenav ${menuOpen ? 'open' : ''}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a className="ar-object" id="1" href="#">
            <img src="./pics/1.png" alt="" style={{ width: 90 }} />
          </a>
          <a className="ar-object" id="2" href="#">Item_2</a>
          <a className "ar-object" id="3" href="#">Item_3</a>
          <a className="ar-object" id="4" href="#">Item_4</a>
          <a className="ar-object" id="5" href="#">Item_5</a>
          <a className="ar-object" id="7" href="#">Item_7</a>
        </div>
        */}

        {/* <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <span className="closebtn" onClick={toggleMenu}>&times;</span>
          <ul>
            <li><a className="ar-object" id="2" href="#">Item_2</a></li>
            <li><a className="ar-object" id="3" href="#">Item_3</a></li>
            <li><a className="ar-object" id="4" href="#">Item_4</a></li>
            <li><a className="ar-object" id="5" href="#">Item_5</a></li>
          </ul>
        </nav> */}

<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={(e) => {e.preventDefault();}}></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <span className="closebtn" onClick={toggleMenu}>&times;</span>
          <ul>
            <li><a className="ar-object" id="2" >Item_2</a></li>
            <li><a className="ar-object" id="3" >Item_3</a></li>
            <li><a className="ar-object" id="4" >Item_4</a></li>
            <li><a className="ar-object" id="5" >Item_5</a></li>
          </ul>
        </nav> 
    </div>
  </div>
</div>




        <div className="nava" id="container" style={{ position: "fixed" }}></div>
        <button type="button" id="place-button" style={{ display: "none" }}>PLACE</button>
        <button type="button" id="scale-up-button" style={{ display: "none" }}>Scale Up</button>
        <button type="button" id="scale-down-button" style={{ display: "none" }}>Scale Down</button>
      </div>
      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> ar - hit test<br />(Chrome Android 81+)
      </div>
    </div>
  );
}

export default Ar;
