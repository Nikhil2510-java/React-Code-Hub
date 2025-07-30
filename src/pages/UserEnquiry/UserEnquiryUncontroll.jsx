import { useRef } from "react";
const UserEnquiryUncontroll = () => {
  const nameRef = useRef();
  const mobNoRef = useRef();
  const massageRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const enquiryData = {
      name: nameRef.current.value,
      mobNo: mobNoRef.current.value,
      massage: massageRef.current.value,
    }
  };

  return (
    <div>
      <h3>User Enquiry Form- UserEnquiryUncontroll</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={nameRef} name="name" id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No.</label>
          <input ref={mobNoRef} name="mobNo" id="mobNo" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="massage">Message</label>
          <textarea ref={massageRef} name="massage" id="massage"></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default UserEnquiryUncontroll;