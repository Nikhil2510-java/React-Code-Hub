import { useState, useEffect } from "react";
import axios from "axios";
import './formValidation.css';

const FormValidation = () => {


    const intialEnquiryFieldData = {
        name: "",
        username: "",
        email: "",
        country: "IND",
        state: "",
        otherCountryDept: ""
    };


    const [enquiryFieldData, setEnquiryFieldData] = useState(intialEnquiryFieldData);

    const [fieldError, setFieldError] = useState({
        nameError: false,
        usernameError: false,
        emailError: false,
        countryError: false,
        stateError: false,
        otherCountryDeptError: false
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
            updatedErrors.nameError = value.trim() === "" || value.length > 20;
        }
        if (fieldName === "username") {
            updatedErrors.usernameError = value.trim() === "" || value.length > 12;
        }
        if (fieldName === "country") {
            updatedErrors.countryError = value.trim() === "";
        }
        if (fieldName === "state") {
            updatedErrors.stateError = enquiryFieldData.country !== "OTHERS" && value.trim() === "";
        }
        if (fieldName === "otherCountryDept") {
            updatedErrors.otherCountryDeptError = enquiryFieldData.country === "OTHERS" && value.trim() === "";
        }
        setFieldError(updatedErrors);
        return true;
    };

    const onCountrySelect = (e) => {
        setEnquiryFieldData({ ...enquiryFieldData, country: e.target.value, state: "" });
        validateField("country", e.target.value);
    };

    const onOtherCountryChange = (e) => {
        setEnquiryFieldData({ ...enquiryFieldData, otherCountryDept: e.target.value });
        validateField("otherCountryDept", e.target.value);
    };

    const onStateSelect = (e) => {
        setEnquiryFieldData({ ...enquiryFieldData, state: e.target.value });
        validateField("state", e.target.value);
    };

    //fetch country data ------------------------------------------------------
    const [countryData, setCountryData] = useState([]);
    const data = "https://countriesnow.space/api/v0.1/countries/states";

    const fetchData = async () => {
        try {
            const res = await axios.get(data);
            console.log("Country data fetched successfully:", res);
            setCountryData(res.data.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const selectState = (countryCode) => {
        const country = countryData.find(country => country.iso3 === countryCode);
        return country ? country.states : [];
    }

    //-----------------------------------------------------------------

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const isValid =
            validateField("name", enquiryFieldData.name) &&
            validateField("username", enquiryFieldData.username) &&
            validateField("email", enquiryFieldData.email) &&
            validateField("country", enquiryFieldData.country) &&
            (enquiryFieldData.country === "OTHERS"
                ? validateField("otherCountryDept", enquiryFieldData.otherCountryDept)
                : validateField("state", enquiryFieldData.state));

        if (!isValid) {
            alert("Please fill all fields correctly.");
            return;
        }

        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", enquiryFieldData, {
                headers: { "CLIENT_ID": "BT2025" }
            });
            console.log("Data submitted successfully:", res.data);
            alert("Data submitted successfully");
            setEnquiryFieldData(intialEnquiryFieldData);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="form-center">
            <h3>User Information Form </h3>
            <form className="form" onSubmit={onFormSubmit}>
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
                        <span style={{ color: "red" }}>Name should be less than 20 characters</span>
                    )}
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        value={enquiryFieldData.username}
                        onChange={onInputChange}
                        name="username"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                    {fieldError.usernameError && (
                        <span style={{ color: "red" }}>username should be less than 12 characters</span>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        value={enquiryFieldData.email}
                        onChange={onInputChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <select
                        onChange={onCountrySelect}
                        id="country"
                        value={enquiryFieldData.country}
                    >
                        {
                            countryData.map((countrydata) => (
                                <option key={countrydata.iso3} value={countrydata.iso3}>
                                    {countrydata.name}
                                </option>
                            ))}
                        <option value="OTHERS">Other (please specify)</option>
                    </select>
                </div>
                {
                    enquiryFieldData.country === "OTHERS" && (
                        <div>
                            <label htmlFor="otherCountryDept">Other Country</label>
                            <input
                                value={enquiryFieldData.otherCountryDept}
                                onChange={onOtherCountryChange}
                                name="otherCountryDept"
                                id="otherCountryDept"
                                type="text"
                                placeholder="Enter your country"
                            />
                        </div>
                    )
                }
                {
                    enquiryFieldData.country && enquiryFieldData.country !== "OTHERS" && (
                        <div>
                            <label htmlFor="state">State</label>
                            <select id="state" value={enquiryFieldData.state} onChange={onStateSelect}>
                                <option value="">Select State</option>
                                {selectState(enquiryFieldData.country).map((state) => (
                                    <option key={state.name} value={state.name}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            {fieldError.stateError && (
                                <span style={{ color: "red" }}>Please select a state</span>
                            )}
                        </div>
                    )
                }
                <input type="submit" />
            </form>
        </div>
    );
};

export default FormValidation;
