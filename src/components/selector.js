import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./selector.module.css";
import CustomerFormModal from "./CustomerFormModal";
import ChannelPartnerFormModal from "./ChannelPartnerFormModal";
import BusinessFormModal from "./BusinessFormModal";
import logo from "../logo/logomannethabg.png";
import { Link } from 'react-router-dom';

function Selector() {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showChannelPartnerModal, setShowChannelPartnerModal] = useState(false);

  const customerModalRef = useRef(null);
  const businessModalRef = useRef(null);
  const channelPartnerModalRef = useRef(null);

  const toggleCustomerModal = () => {
    setShowCustomerModal(!showCustomerModal);
    setShowBusinessModal(false);
    setShowChannelPartnerModal(false);
  };

  const toggleBusinessModal = () => {
    setShowBusinessModal(!showBusinessModal);
    setShowCustomerModal(false);
    setShowChannelPartnerModal(false);
  };

  const toggleChannelPartnerModal = () => {
    setShowChannelPartnerModal(!showChannelPartnerModal);
    setShowCustomerModal(false);
    setShowBusinessModal(false);
  };

  const closeCustomerModal = () => {
    setShowCustomerModal(false);
  };

  const closeBusinessModal = () => {
    setShowBusinessModal(false);
  };

  const closeChannelPartnerModal = () => {
    setShowChannelPartnerModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        customerModalRef.current &&
        !customerModalRef.current.contains(event.target)
      ) {
        closeCustomerModal();
      }
      if (
        businessModalRef.current &&
        !businessModalRef.current.contains(event.target)
      ) {
        closeBusinessModal();
      }
      if (
        channelPartnerModalRef.current &&
        !channelPartnerModalRef.current.contains(event.target)
      ) {
        closeChannelPartnerModal();
      }
    };

    if (showCustomerModal || showBusinessModal || showChannelPartnerModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCustomerModal, showBusinessModal, showChannelPartnerModal]);

  return (
    <>
      <div className={styles.container}>
        {/* Logo Image Div */}
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
        <ReactPlayer
          url="/video/hitechh.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className={styles.video}
        />
        <button
          className={`${styles.button} ${styles.customer}`}
          onClick={toggleCustomerModal}
          disabled={
            showCustomerModal || showBusinessModal || showChannelPartnerModal
          }
        >
      <span
      style={{
        display: 'inline-block',
        textAlign: 'right',
        padding: '10px 20px',
        fontSize: '25px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.8s ease',
        animation: 'pulse 1s infinite alternate',
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '21px',
          textAlign: 'left'
        }}
      >
𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶</span>
      HOME SEEKER !
    </span>
          <span
            style={{
              fontSize: "20px",
              display: "block",
              lineHeight: "1.5",
              // backgroundColor: "rgba(0, 0, 0, 0.93)",
              padding: "19px",
              borderRadius: "10px",
              height: "150px",
            }}
          >
             whose problem is finding a GOOD HOME at a GOOD LOCATION, at a GOOD PRICE, with a GOOD DEVELOPER.
          </span>
          <span
            style={{
              textAlign: "right",
              padding: "10px 20px",
              fontSize: "23px",
              color: "white",
              backgroundColor: "rgba(48, 119, 157, 0.9)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.8s ease",
              animation: "pulse 1s infinite alternate",
            }}
          >
            Find Your Home !
          </span>
        </button>
        <button
          className={`${styles.button} ${styles.business}`}
          onClick={toggleBusinessModal}
          disabled={
            showBusinessModal || showChannelPartnerModal
          }
        >
              <span
              style={{
                display: 'inline-block',
                textAlign: 'right',
                padding: '10px 20px',
                fontSize: '25px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.8s ease',
                animation: 'pulse 1s infinite alternate',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '21px',
                  textAlign: 'left'
                }}
              >
              𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶
              </span>
              BUILDER/DEVELOPER !
            </span>
                  <span
                    style={{
                      fontSize: "20px",
                      display: "block",
                      lineHeight: "1.5",
                      // backgroundColor: "rgba(0, 0, 0, 0.93)",
                      padding: "19px",
                      borderRadius: "10px",
                      height: "150px",
                    }}
                  >
                    Who is struggling to hire skilled Sales Professionals, Training & Upskilling, Marketing & Sales, click now to schedule a FREE CONSULTATION.
                  </span>
                  <span
                    style={{        
                      padding: "10px 20px",
                      fontSize: "23px",
                      color: "white",
                      backgroundColor: "rgba(48, 119, 157, 0.9)",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "all 0.8s ease",
                      animation: "pulse 1s infinite alternate",
                    }}
                  >
                    Schedule a Call !
                  </span>
                </button>
                <button
                  className={`${styles.button} ${styles.channelPartner}`}
                  onClick={toggleChannelPartnerModal}
                  disabled={
                    showBusinessModal || showChannelPartnerModal
                  }
                >


        <span
            style={{
              display: 'inline-block',
              textAlign: 'right',
              padding: '10px 20px',
              fontSize: '25px',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.8s ease',
              animation: 'pulse 1s infinite alternate',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '21px',
                textAlign: 'left'
              }}
            >
              𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶
            </span>
            CHANNEL PARTNER !
          </span>
                <span
                  style={{
                    fontSize: "20px",
                    display: "block",
                    lineHeight: "1.5",
                    // backgroundColor: "rgba(0, 0, 0, 0.93)",
                    padding: "19px",
                    borderRadius: "10px",
                    height: "150px",
                  }}
                >
                  AGENT, BROKER, BANKER or VENDOR click to provide details, click to connect, and enter your details.
                </span>
                <span
                  style={{
                    
                    padding: "10px 20px",
                    fontSize: "23px",
                    color: "white",
                    backgroundColor: "rgba(48, 119, 157, 0.9)",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "all 0.8s ease",
                    animation: "pulse 1s infinite alternate",
                  }}
                >
                  Enroll Now !
          </span>
        </button>
      </div>

      {(showCustomerModal || showBusinessModal || showChannelPartnerModal) && (
        <div className={styles.backdrop}></div>
      )}

      {showCustomerModal && (
        <div ref={customerModalRef}>
          <CustomerFormModal onClose={closeCustomerModal} />
        </div>
      )}
      {showBusinessModal && (
        <div ref={businessModalRef}>
          <BusinessFormModal onClose={closeBusinessModal} />
        </div>
      )}
      {showChannelPartnerModal && (
        <div ref={channelPartnerModalRef}>
          <ChannelPartnerFormModal onClose={closeChannelPartnerModal} />
        </div>
      )}
    </>
  );
}

export default Selector;



//code with no customer form coming or selection ---> below

// import React, { useState, useEffect, useRef } from "react";
// import ReactPlayer from "react-player";
// import styles from "./selector.module.css";
// import ChannelPartnerFormModal from "./ChannelPartnerFormModal";
// import BusinessFormModal from "./BusinessFormModal";
// import logo from "../logo/white.png";
// import { Link } from 'react-router-dom';

// function Selector() {
//   const [showBusinessModal, setShowBusinessModal] = useState(false);
//   const [showChannelPartnerModal, setShowChannelPartnerModal] = useState(false);

//   const businessModalRef = useRef(null);
//   const channelPartnerModalRef = useRef(null);

//   const handleCustomerButtonClick = () => {
//     window.location.href = "https://dprprop.com/Home/Projects.php#project";
//   };

//   const toggleBusinessModal = () => {
//     setShowBusinessModal(!showBusinessModal);
//     setShowChannelPartnerModal(false);
//   };

//   const toggleChannelPartnerModal = () => {
//     setShowChannelPartnerModal(!showChannelPartnerModal);
//     setShowBusinessModal(false);
//   };

//   const closeBusinessModal = () => {
//     setShowBusinessModal(false);
//   };

//   const closeChannelPartnerModal = () => {
//     setShowChannelPartnerModal(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         businessModalRef.current &&
//         !businessModalRef.current.contains(event.target)
//       ) {
//         closeBusinessModal();
//       }
//       if (
//         channelPartnerModalRef.current &&
//         !channelPartnerModalRef.current.contains(event.target)
//       ) {
//         closeChannelPartnerModal();
//       }
//     };

//     if (showBusinessModal || showChannelPartnerModal) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showBusinessModal, showChannelPartnerModal]);

//   return (
//     <>
//       <div className={styles.container}>
//         {/* Logo Image Div */}
//         <div className={styles.logoContainer}>
//           <Link to="/">
//             <img src={logo} alt="Logo" className={styles.logo} />
//           </Link>
//         </div>
//         <ReactPlayer
//           url="/video/hitechh.mp4"
//           playing
//           loop
//           muted
//           width="100%"
//           height="100%"
//           className={styles.video}
//         />
//         <button
//           className={`${styles.button} ${styles.customer}`}
//           onClick={handleCustomerButtonClick}
//           disabled={
//             showBusinessModal || showChannelPartnerModal
//           }
//         >
//         <span
//       style={{
//         display: 'inline-block',
//         textAlign: 'right',
//         padding: '10px 20px',
//         fontSize: '25px',
//         color: 'black',
//         backgroundColor: 'white',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'all 0.8s ease',
//         animation: 'pulse 1s infinite alternate',
//       }}
//     >
//       <span
//         style={{
//           display: 'block',
//           fontSize: '21px',
//           textAlign: 'left'
//         }}
//       >
// 𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶</span>
//       HOME SEEKER !
//     </span>
//           <span
//             style={{
//               fontSize: "20px",
//               display: "block",
//               lineHeight: "1.5",
//               // backgroundColor: "rgba(0, 0, 0, 0.93)",
//               padding: "19px",
//               borderRadius: "10px",
//               height: "150px",
//             }}
//           >
//              whose problem is finding a GOOD HOME at a GOOD LOCATION, at a GOOD PRICE, with a GOOD DEVELOPER.
//           </span>
//           <span
//             style={{
//               textAlign: "right",
//               padding: "10px 20px",
//               fontSize: "23px",
//               color: "white",
//               backgroundColor: "rgba(48, 119, 157, 0.9)",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               transition: "all 0.8s ease",
//               animation: "pulse 1s infinite alternate",
//             }}
//           >
//             Find Your Home !
//           </span>
//         </button>
//         <button
//           className={`${styles.button} ${styles.business}`}
//           onClick={toggleBusinessModal}
//           disabled={
//             showBusinessModal || showChannelPartnerModal
//           }
//         >
//          <span
//       style={{
//         display: 'inline-block',
//         textAlign: 'right',
//         padding: '10px 20px',
//         fontSize: '25px',
//         color: 'black',
//         backgroundColor: 'white',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'all 0.8s ease',
//         animation: 'pulse 1s infinite alternate',
//       }}
//     >
//       <span
//         style={{
//           display: 'block',
//           fontSize: '21px',
//           textAlign: 'left'
//         }}
//       >
//        𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶
//       </span>
//       BUILDER/DEVELOPER !
//     </span>
//           <span
//             style={{
//               fontSize: "20px",
//               display: "block",
//               lineHeight: "1.5",
//               // backgroundColor: "rgba(0, 0, 0, 0.93)",
//               padding: "19px",
//               borderRadius: "10px",
//               height: "150px",
//             }}
//           >
//             Who is struggling to hire skilled Sales Professionals, Training & Upskilling, Marketing & Sales, click now to schedule a FREE CONSULTATION.
//           </span>
//           <span
//             style={{        
//               padding: "10px 20px",
//               fontSize: "23px",
//               color: "white",
//               backgroundColor: "rgba(48, 119, 157, 0.9)",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               transition: "all 0.8s ease",
//               animation: "pulse 1s infinite alternate",
//             }}
//           >
//             Schedule a Call !
//           </span>
//         </button>
//         <button
//           className={`${styles.button} ${styles.channelPartner}`}
//           onClick={toggleChannelPartnerModal}
//           disabled={
//             showBusinessModal || showChannelPartnerModal
//           }
//         >

// <span
//       style={{
//         display: 'inline-block',
//         textAlign: 'right',
//         padding: '10px 20px',
//         fontSize: '25px',
//         color: 'black',
//         backgroundColor: 'white',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'all 0.8s ease',
//         animation: 'pulse 1s infinite alternate',
//       }}
//     >
//       <span
//         style={{
//           display: 'block',
//           fontSize: '21px',
//           textAlign: 'left'
//         }}
//       >
//          𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶
//       </span>
//       CHANNEL PARTNER !
//     </span>
//           <span
//             style={{
//               fontSize: "20px",
//               display: "block",
//               lineHeight: "1.5",
//               // backgroundColor: "rgba(0, 0, 0, 0.93)",
//               padding: "19px",
//               borderRadius: "10px",
//               height: "150px",
//             }}
//           >
//             AGENT, BROKER, BANKER or VENDOR click to provide details, click to connect, and enter your details.
//           </span>
//           <span
//             style={{
              
//               padding: "10px 20px",
//               fontSize: "25px",
//               color: "white",
//               backgroundColor: "rgba(48, 119, 157, 0.9)",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               transition: "all 0.8s ease",
//               animation: "pulse 1s infinite alternate",
//             }}
//           >
//             Enroll Now !
//           </span>
//         </button>
//       </div>

//       {(showBusinessModal || showChannelPartnerModal) && (
//         <div className={styles.backdrop}></div>
//       )}

//       {showBusinessModal && (
//         <div ref={businessModalRef}>
//           <BusinessFormModal onClose={closeBusinessModal} />
//         </div>
//       )}
//       {showChannelPartnerModal && (
//         <div ref={channelPartnerModalRef}>
//           <ChannelPartnerFormModal onClose={closeChannelPartnerModal} />
//         </div>
//       )}
//     </>
//   );
// }

// export default Selector;

