import { useState } from "react";
import axios from "axios";

const UserEnquiryControllOptimize = () => {

  const intialEnquiryFieldData = {
    name: "",
    mobNo: "",
    massage: "",
    enquiryDept: "TECH",
    otherEnquiryDept: ""
  }

  const [enquiryFieldData, setEnquiryFieldData] = useState(intialEnquiryFieldData);

  const [fieldError, setFieldError] = useState({
    nameError: false,
    mobNoError: false,
    massageError: false,
    otherDeptError: false,
  });

  const onInputChange = (e) => {
    const isValid = validateField(e.target.id, e.target.value);
    if (isValid) {
      setEnquiryFieldData({ ...enquiryFieldData, [e.target.id]: e.target.value });
    }
  };

  const validateField = (fieldName, value) => {
    let updatedErrors = { ...fieldError };

    if (fieldName === "name") {
      updatedErrors.nameError = value.length > 12;
    }
    if (fieldName === "mobNo") {
      updatedErrors.mobNoError = value.length > 10;
    }
    if (fieldName === "massage") {
      updatedErrors.massageError = value.trim().length === 0;
    }

    setFieldError(updatedErrors);

    if (fieldName === "name" && updatedErrors.nameError) return false;
    if (fieldName === "mobNo" && updatedErrors.mobNoError) return false;
    if (fieldName === "massage" && updatedErrors.massageError) return false;

    return true;
  };

  const onEnquiryDeptChange = (e) => {
    setEnquiryFieldData({ ...enquiryFieldData, enquiryDept: e.target.value });
  };

  const onOtherEnquiryDeptChange = (e) => {
    setEnquiryFieldData({ ...enquiryFieldData, otherEnquiryDept: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    //Fetch API 
    //Approche:1
    // fetch("https://jsonplaceholder.typicode.com/posts" ,{
    //   method: "POST",
    //   body: JSON.stringify(enquiryFieldData),
    //   headers: {
    //     "CLIENT_ID": "BT2025"
    //   }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("Data submitted successfully:", data)
    //   alert("Data submitted successfully");
    //   setEnquiryFieldData(intialEnquiryFieldData);
    // })
    // .catch((error) => {console.error("Error:", error)});

    //Approche:2
    // axios.post("https://jsonplaceholder.typicode.com/posts", enquiryFieldData, {
    //   headers: { "CLIENT_ID": "BT2025" }
    // }).then ((response) => {
    //   console.log("Data submitted successfully:", response.data);
    //   alert("Data submitted successfully");
    //   setEnquiryFieldData(intialEnquiryFieldData);
    // }).catch((error) => {
    //   console.error("Error:", error);
    // });  

    //Approche:3
    const isNameValid = validateField("name", enquiryFieldData.name);
    const isMobValid = validateField("mobNo", enquiryFieldData.mobNo);
    const isMessageValid = validateField("massage", enquiryFieldData.massage);

    const isOtherDeptValid =
      enquiryFieldData.enquiryDept !== "OTHERS" ||
      enquiryFieldData.otherEnquiryDept.trim() !== "";

    if (!isNameValid || !isMobValid || !isMessageValid || !isOtherDeptValid) {
      alert("Please fill all fields correctly.");
      return;
    }

    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", enquiryFieldData, {
        headers: { "CLIENT_ID": "BT2025" }
      })
      console.log("Data submitted successfully:", res.data);
      alert("Data submitted successfully");
      setEnquiryFieldData(intialEnquiryFieldData);
    }
    catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h3>User Enquiry Form - UserEnquiryControllOptimize</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={enquiryFieldData.name}
            onChange={onInputChange}
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
          {fieldError.nameError && (
            <span style={{ color: "red" }}>Name should be less than 12 characters</span>
          )}
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No.</label>
          <input
            value={enquiryFieldData.mobNo}
            onChange={onInputChange}
            name="mobNo"
            id="mobNo"
            type="text"
            placeholder="Enter your mobile number"
          />
          {fieldError.mobNoError && (
            <span style={{ color: "red" }}>Mobile number should be 10 digits</span>
          )}
        </div>
        <div>
          <label htmlFor="massage">Message</label>
          <textarea
            value={enquiryFieldData.massage}
            onChange={onInputChange}
            name="massage"
            id="massage"
          ></textarea>
          {fieldError.massageError && (
            <span style={{ color: "red" }}>Message should not be empty</span>
          )}
        </div>
        <div>
          <label htmlFor="enquiryDept">Enquiry Department</label>
          <select
            onChange={onEnquiryDeptChange}
            id="enquiryDept"
            value={enquiryFieldData.enquiryDept}
          >
            <option value="TECH">Technical</option>
            <option value="SALES">Sales</option>
            <option value="OTHERS">Other(please specify)</option>
          </select>
        </div>
        {enquiryFieldData.enquiryDept === "OTHERS" && (
          <div>
            <input
              type="text"
              placeholder="Enter department name"
              value={enquiryFieldData.otherEnquiryDept}
              onChange={onOtherEnquiryDeptChange}
            />
            {fieldError.otherDeptError && (
              <span style={{ color: "red" }}>Please enter department name</span>
            )}
          </div>
        )}
        <input type="submit" />
      </form>
    </>
  );
};

export default UserEnquiryControllOptimize;
