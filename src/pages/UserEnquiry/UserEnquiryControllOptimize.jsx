import { useState } from "react";

const UserEnquiryControllOptimize = () => {

  const [enquiryFieldData, setEnquiryFieldData] = useState({
    name: "",
    mobNo: "",
    massage: "",
    enquiryDept: "",
    otherEnquiryDept: ""
  });

  const [fieldError, setFieldError] = useState({
    nameError: false,
    mobNoError: false,
    massageError: false,
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

  const onFormSubmit = (e) => {
    e.preventDefault();
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
          </div>
        )}
        <input type="submit" />
      </form>
    </>
  );
};

export default UserEnquiryControllOptimize;
