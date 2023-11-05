// import React, { useRef, useEffect } from "react";
// import { Link, useLocation,useHistory } from "react-router-dom";


// const handleLogout=()=>{
//   localStorage.removeItem("authToken");
//   navigate("/login");
//  }


// const mainNav = [
//   {
//     display: "Home",
//     path: "/",
//   },
//   {
//     display: "Products",
//     path: "/catalog",
//   },
//   // {
//   //   display: "Contact",
//   //   path: "/contact",
//   // },
//   {
//     display: "About Us",
//     path: "/abouts",
//   },
//   {
//     display: "Login",
//     path: "/loginuser",
//   },
//   {
//     display: "Signup",
//     path: "/signupuser",
//   },
// ];

// const Header = () => {
//   const { pathname } = useLocation();
//   const activeNav = mainNav.findIndex((e) => e.path === pathname);

//   const headerRef = useRef(null);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("shrink");
//       } else {
//         headerRef.current.classList.remove("shrink");
//       }
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

//   const menuLeft = useRef(null);

//   const menuToggle = () => menuLeft.current.classList.toggle("active");

//   return (
//     <div className="header" ref={headerRef}>
//       <div className="container">
//         <div className="header__logo">
//           <Link to="/">
//             <img src="https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg" alt="" />
//           </Link>
//         </div>

        
//         {(localStorage.getItem("authToken"))?
              

//         <div className="header__menu">
//           <div className="header__menu__mobile-toggle" onClick={menuToggle}>
//             <i className="bx bx-menu"></i>
//           </div>
//           <div className="header__menu__left" ref={menuLeft}>
//             <div className="header__menu__left__close" onClick={menuToggle}>
//               <i className="bx bx-chevron-left"></i>
//             </div>
//             {mainNav.map((item, index) => (
//               <div
//                 key={index}
//                 className={`header__menu__item header__menu__left__item ${
//                   index === activeNav ? "active" : ""
//                 }`}
//                 onClick={menuToggle}
//               >
//                 <Link to={item.path}>
//                   <span>{item.display}</span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <div className="header__menu__right">
//             <div className="header__menu__item header__menu__right__item">
//               <i className="bx bx-search-alt"></i>
//             </div>
//             <div className="header__menu__item header__menu__right__item">
//               <Link to="/cart">
//                 <i className="bx bx-cart"></i>
//               </Link>
//             </div>
//             <div className="header__menu__item header__menu__right__item">
//               <i className="bx bx-user"></i>
//             </div>
//             <div className="header__menu__item header__menu__right__item">
//               <i className="bx bx-wrench"></i>
//             </div>
//           </div>
//         </div>



//             :""}

           

//             {(!localStorage.getItem("authToken"))?
//             <div className="d-flex">
//                 <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
//                 <Link className="btn bg-white text-success mx-1" to="/creatuser"> SignUp</Link>
//             </div>

//             :
//             <div>
          

//             <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>Logout</div>
//             </div>
           
//             }
        
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useRef, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Products",
    path: "/catalog",
  },
  {
    display: "About Us",
    path: "/abouts",
  },
  {
    display: "Login",
    path: "/loginuser",
  },
  {
    display: "Signup",
    path: "/signupuser",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const history = useHistory(); // Import useHistory

  useEffect(() => {
    const fn = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", fn());
    return () => {
      window.removeEventListener("scroll", fn());
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  function handleLogout() {
    localStorage.removeItem("authToken");
    history.push("/loginuser"); // Use history.push to navigate to "/login"
  }

  const mainNav2 = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Products",
      path: "/catalog",
    },
    {
      display: "About Us",
      path: "/abouts",
    },
    {
      display: "Logout",
      path: "/",
      onClick: handleLogout,
    },
  ];

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src="https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg" alt="" />
          </Link>
        </div>

        {(localStorage.getItem("authToken")) ? (
          <div className="header__menu">
            <div className="header__menu__mobile-toggle" onClick={menuToggle}>
              <i className="bx bx-menu"></i>
            </div>
            <div className="header__menu__left" ref={menuLeft}>
              <div className="header__menu__left__close" onClick={menuToggle}>
                <i className="bx bx-chevron-left"></i>
              </div>
              {mainNav2.map((item, index) => (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span onClick={item.onClick}>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="header__menu__right">
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-search-alt"></i>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <Link to="/cart">
                  <i className="bx bx-cart"></i>
                </Link>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-user"></i>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-wrench"></i>
              </div>
            </div>
          </div>
        ) : (
          <div className="header__menu">
            <div className="header__menu__mobile-toggle" onClick={menuToggle}>
              <i className="bx bx-menu"></i>
            </div>
            <div className="header__menu__left" ref={menuLeft}>
              <div className="header__menu__left__close" onClick={menuToggle}>
                <i className="bx bx-chevron-left"></i>
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? "active" : ""
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="header__menu__right">
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-search-alt"></i>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <Link to="/cart">
                  <i className="bx bx-cart"></i>
                </Link>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-user"></i>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-wrench"></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;



