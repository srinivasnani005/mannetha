import React, { useState } from 'react';
import styles from "./selector.module.css";

function CustomerFormModal({ onClose }) {
  const [form, setForm] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null); // Reset submission status

    try {
      const response = await fetch("http://localhost:5050/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Check if submission was successful
      if (response.ok) {
        setSubmissionStatus("success");
        setTimeout(() => {
          window.location.href = "https://dprprop.com/Home/Projects.php#project";
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
      <div className={`${styles.formModal} ${styles.customer}`}>
        <button className={styles.closeButton} onClick={onClose} type="button">
          X
        </button>
        <h2>Customer Details</h2>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          maxLength="30"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          name="email"
          maxLength="30"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address (e.g., text@text.com)"
          onChange={handleForm}
          required
        />
        <input
          type="tel"
          placeholder="Your mobile number"
          name="phone"
          maxLength="18"
          pattern="[0-9]+"
          title="Please enter a valid mobile number"
          onChange={handleForm}
          required
        />
        <textarea
          placeholder="Type your message here"
          rows="4"
          name="comments"
          maxLength="100"
          onChange={handleForm}
          required
        />
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

export default CustomerFormModal;
