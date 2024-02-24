import styles from "./style.module.css";
import { message } from "antd";
import { MdOutlineAttachment } from "react-icons/md";
import { useState } from "react";
//import { allEndpoints } from "@/constants";
import { FetchFunctions } from "@/utils";
import useContactForm from "@/utils/useContactForm";
import { sendContactForm } from "@/lib/api";

const Form = ({ className }) => {
  const { values, handleChange, resetInputValues } = useContactForm();

  const [resume, setResume] = useState(null);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const showSuccessMessage = () => {
    message.success({
      content: "Message sent successfully",
      className: "success_message",
      style: {
        fontSize: "18px", // Change the font size as per your preference
        fontWeight: "bold", // You can also adjust other styles like fontWeight, color, etc.
      },
    });
  };

  const submissionHandler = (e) => {
    e.preventDefault();
    //console.log("Values are", values);
    sendContactForm(values);
    showSuccessMessage();
    resetInputValues();

    // const response = await postData( -->
    //   allEndpoints.contactUs.sendMessage(), --> Gets the url of the backend endpoint
    //   reqBody --> json body
    // );
    // console.log(response);
  };

  return (
    <>
      <form className={styles.form} onSubmit={submissionHandler}>
        <div className={`${styles.innerContainer} ${className}`}>
          <h3>
            Send Us a <br /> Message
          </h3>

          <div className={styles.rowcontainer}>
            <div className={styles.labelinput_container}>
              <label htmlFor="firstname" className={styles.label}>
                First Name
              </label>
              <input
                id="firstname"
                type="text"
                className={styles.input}
                value={values.firstname}
                onChange={handleChange}
                required
                //placeholder="First Name"
              />
            </div>

            <div className={styles.labelinput_container}>
              <label htmlFor="lastname" className={styles.label}>
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                className={styles.input}
                value={values.lastname}
                onChange={handleChange}
                required
                //placeholder="Last Name"
              />
            </div>
          </div>

          <div className={styles.rowcontainer}>
            <div className={styles.labelinput_container}>
              <label htmlFor="phoneNumber" className={styles.label}>
                Phone
              </label>
              <input
                id="phoneNumber"
                type=""
                className={styles.inputz}
                value={values.phoneNumber}
                onChange={handleChange}
                // required
                //placeholder="Enter your phone number"
              />
            </div>

            <div className={styles.labelinput_container}>
              <label htmlFor="user-email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={styles.inputz}
                value={values.email}
                onChange={handleChange}
                required
                //placeholder="Enter your email here"
              />
            </div>
          </div>

          <div className={styles.application_container}>
            <label className={styles.label}>Application</label>
            {/* <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
            /> */}
            <textarea
              rows="20"
              cols="80"
              className={styles.textarea}
              //placeholder=""
            />
          </div>

          <div className={styles.message_container}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <input
              id="message"
              type="text"
              className={styles.inputz}
              value={values.message}
              onChange={handleChange}
              required
              //placeholder="Send us a message..."
            />
          </div>

          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.buttonOne}`}>
              Attach Document
              <MdOutlineAttachment
                style={{ marginBottom: "-.15rem", marginLeft: ".5rem" }}
              />
            </button>
            <button className={styles.button}>Send Message</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
