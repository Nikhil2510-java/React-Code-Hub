const UserEnquiry = () => {
  const onFormSubmit = (e) => {
    e.preventDefault(); 
    const enquiryData = {
      name: e.target.name.value,
      mobNo: e.target.mobNo.value,
      massage: e.target.massage.value,
    }
  }

  return (
    <div>
      <h3>User Enquiry Form</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="mobNo">Mobile No.</label>
          <input name="mobNo" id="mobNo" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="massage">Message</label>
          <textarea name="massage" id="massage"></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default UserEnquiry;