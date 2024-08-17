import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import styles from "./landing.module.css";

function Landing() {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBarClick = () => {
    setIsBarOpen(true);
    setTimeout(() => {
      navigate("/selector");
    }, 300); 
  };

  return (
    <div className={styles.main}>
      <div className={styles.overlay}></div>
      <ReactPlayer
        url="/video/WEBSITE.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className={styles.video}
      />
      <div
        className={`${styles.sidebar} ${isBarOpen ? styles.open : ""}`}
        onClick={handleBarClick}
      >
        <div className={styles.arrow}>&#9654;</div>
      </div>
      {isBarOpen && <div className={styles.overlayActive}></div>}
      <div className={styles.content}>
        {/* Content can go here */}
      </div>
    </div>
  );
}

export default Landing;



// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";
// import styles from "./landing.module.css";
// import logo from "../logo/dpr.png";

// function Landing() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (loading) {
//       const timer = setTimeout(() => {
//         setLoading(false);
//         navigate("/selector");
//       }, 4000); 

//       return () => clearTimeout(timer);
//     }
//   }, [loading, navigate]);

//   const handleClick = () => {
//     setLoading(true);
//   };

//   return (
//     <div className={styles.main}>
//       {loading && (
//         <div className={styles.loadingVideoContainer}>
//           <ReactPlayer
//             url="/video/loading.mp4"
//             playing
//             width="100%"
//             height="100%"
//             className={styles.loadingVideo}
//           />
//         </div>
//       )}
//       {!loading && (
//         <>
//           <div className={styles.overlay}></div>
//           <ReactPlayer
//             url="/video/knowledgee.mp4"
//             playing
//             loop
//             muted
//             width="100%"
//             height="100%"
//             className={styles.video}
//           />
//           <div className={styles.content}>
//             <div className={styles.logoContainer}>
//               <img src={logo} alt="Logo" className={styles.logo} />
//             </div>
//             <div className={styles.buttonContainer}>
//               <button onClick={handleClick} className={styles.btn}>
//                 Let's Dive In!
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Landing;
