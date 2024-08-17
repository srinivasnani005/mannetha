import React, { useState } from 'react';
import styles from "./selector.module.css";

function BusinessFormModal({ onClose }) {
  const [form, setForm] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  
    // If "Other" is selected, set businessCategory to empty string
    // and include otherCategory field in the form state
    if (selectedValue === 'Other') {
      setForm({
        ...form,
        businessCategory: '',
        otherCategory: '', // Initialize otherCategory field
      });
    } else {
      // If predefined category is selected, update businessCategory field
      setForm({
        ...form,
        businessCategory: selectedValue,
        otherCategory: undefined, // Remove otherCategory field
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null); // Reset submission status

    try {
      const response = await fetch("http://localhost:5050/business", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if submission was successful
      if (response.ok) {
        setSubmissionStatus("success");
        setTimeout(() => {
          window.location.href = "https://dprprop.com/Home/";
        }, 1000); 
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.formModal2} ${styles.business}`}>
        <button className={styles.closeButton} onClick={onClose} type="button">
          X
        </button>

        <h2>Business Form</h2>
        {/* Input fields for business form */}
        <input
          type="text"
          placeholder="Your name"
          maxLength="30"
          name="businessName"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          name="businessEmail"
          maxLength="30"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          onChange={handleForm}
          required
        />
        <input
          type="tel"
          placeholder="Your mobile number"
          name="businessPhone"
          maxLength="15"
          pattern="[0-9]+"
          title="Please enter a valid mobile number"
          onChange={handleForm}
          required
        />
        <select
          className={styles.selectCategory} 
          name="businessCategory"
          value={selectedCategory}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select Business Category</option>
          <option value="Hiring">Hiring</option>
          <option value="Training">Training</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Branding">Branding</option>
          <option value="Other">Other</option>
        </select>
        {selectedCategory === 'Other' && (
          <input
            type="text"
            placeholder="Enter Other Category"
            className={styles.otherInput}
            name="otherCategory"
            onChange={handleForm}
            required
          />
        )}

        {/* Add more input fields as needed */}
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <div className={styles.loadingContainer}>
          {isLoading && (
            <>
              <div className={styles.loadingIcon}></div>
              <p className={styles.loadingMessage}>Please Wait...</p>
            </>
          )}
        </div>
        {submissionStatus === "success" && (
          <p className={styles.successMessage}>
            Your details have been successfully received.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className={styles.errorMessage}>
            There was an error submitting your details. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export default BusinessFormModal;























// import React, { useState } from 'react';
// import styles from "./selector.module.css";

// function BusinessFormModal({ onClose }) {
//   const [form, setForm] = useState({});
//   const [submissionStatus, setSubmissionStatus] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleForm = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const response = await fetch("https://dprprop.com/business", {
//       method: "POST",
//       body: JSON.stringify(form),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Check if submission was successful
//     if (response.ok) {
//       setSubmissionStatus("success");
//       setTimeout(() => {
//         window.location.href = "https://rajivwilliams.com/";
//       }, 4000); // Redirect after 5 seconds
//     } else {
//       setSubmissionStatus("error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={`${styles.formModal2} ${styles.business}`}>
//         <button className={styles.closeButton} onClick={onClose}>
//           X
//         </button>

//         <h2>Business Form</h2>
//         {/* Your input fields for business form */}
//         <input
//           type="text"
//           placeholder="Your Name"
//           maxLength="30"
//           name="businessName"
//           onChange={handleForm}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           name="businessEmail"
//           maxLength="30"
//           onChange={handleForm}
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Your Mobile Number"
//           name="businessPhone"
//           maxLength="15"
//           onChange={handleForm}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Business Category"
//           name="businessCategory"
//           maxLength="30"
//           onChange={handleForm}
//           required
//         />
//         {/* Add more input fields as needed */}
//         <button type="submit" className={styles.submitButton}>
//           Submit
//         </button>
//         <div className={styles.loadingContainer}>
//           <div className={styles.loadingIcon}></div>
//           {isLoading && <p className={styles.loadingMessage}>Please Wait...</p>}
//         </div>
//         {submissionStatus === "success" && (
//           <p className={styles.successMessage}>
//             Your details have been successfully received.
//           </p>
//         )}
//         {submissionStatus === "error" && (
//           <p className={styles.errorMessage}>
//             There was an error submitting your details. Please try again.
//           </p>
//         )}
//       </div>
//     </form>
//   );
// }

// export default BusinessFormModal;
