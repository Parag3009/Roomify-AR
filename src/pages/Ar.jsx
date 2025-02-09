// import React, { useState } from 'react';
// import './main.css'

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
//             ii
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
      <main class="overflow-hidden">
      <div class="container mx-auto py-8 px-4">
        <h2 class="text-xl text-gray-500 uppercase font-light mb-4">
          Video recorder
        </h2>
  
        <video src="" autplay class="video-feedback bg-black w-full h-auto mb-4"></video>
  
        <div class="flex flex-wrap -mx-4 mb-8">
          <button class="start-recording mx-4 flex-1 bg-gradient-to-br from-purple-500 to to-pink-500 p-4 uppercase text-lg font-bold transition-all duration-300 hover:opacity-90 disabled:opacity-50">
            Record Screen
          </button>
          <button class="stop-recording mx-4 flex-1 bg-gradient-to-br from-purple-500 to to-pink-500 p-4 uppercase text-lg font-bold transition-all duration-300 hover:opacity-90 disabled:opacity-50" disabled>
            Stop Recording
          </button>
        </div>
  
        <div class="recorded-video-wrap hidden">
          <h2 class="text-xl text-gray-500 uppercase font-light mb-4">
            Recorded video
          </h2>
  
          <video src="" class="recorded-video bg-black w-full h-auto mb-8"></video>
          <div class="flex flex-wrap -mx-4">
            <a class="download-video text-center mx-4 flex-1 bg-gradient-to-br from-purple-500 to to-pink-500 p-4 uppercase text-lg font-bold transition-all duration-300 hover:opacity-90 disabled:opacity-50" disabled>
              Download
            </a>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default Ar;
