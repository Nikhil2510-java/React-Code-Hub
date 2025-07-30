import { useState } from "react";
const UserEnquiryControll = () => {
  const [name, setName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [massage, setMassage] = useState("");

  const [nameError, setNameError] = useState("false");

  const onInputChange = (e) => {
    if (e.target.value.length <= 12) {
      setName(e.target.value);
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const onMobNoChange = (e) => {
    setMobNo(e.target.value);
  }

  const onMessageChange = (e) => {
    setMassage(e.target.value);
  }


  return (
    <>
      <h3>User Enquiry Form</h3>
      <form onSubmit={() => { }}>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={onInputChange} name="name" id="name" type="text" placeholder="Enter your name" />
          {nameError && <span style={{ color: "red" }}>Name should be less than 12 characters</span>}
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No.</label>
          <input onChange={onMobNoChange} name="mobNo" id="mobNo" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="massage">Message</label>
          <textarea onChange={onMessageChange} name="massage" id="massage"></textarea>
        </div>
        <input type="submit" />
      </form>
    </>
  )
}

export default UserEnquiryControll;