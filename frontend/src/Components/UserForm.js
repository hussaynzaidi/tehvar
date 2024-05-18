import React, { useState } from 'react';
import axios from 'axios';
import styles from '../index.css';

function UserForm() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { fName, lName, email } = formData;
            const det = await axios.post("http://localhost:8000/registerCust", {
                fName: fName,
                lName: lName,
                email: email
            });
            setFormData({
                fName: '',
                lName: '',
                email: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };



    return (
        <div>
            <h2 className="head">Register for your preferred talks</h2>

            <form style={{ border: "1px solid", padding: "20px", borderRadius: "5px" }} onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="fName">First Name:</label>
    <input type="text" className="form-control w-50" id="fName" name="fName" value={formData.fName} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="lName">Last Name:</label>
    <input type="text" className="form-control w-50" id="lName" name="lName" value={formData.lName} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control w-50" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={formData.email} onChange={handleChange} />
    <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
  </div>

  <button type="submit" className="btn btn-success">Submit</button>
</form>

            {/* <form style={{ border: "1px solid" }} onSubmit={handleSubmit}>
                
                <div class="form-group d-flex ">
                    <label htmlFor="fName">First Name:</label>
                    <input type="text" className="form-control w-25 b" id="fName" name="fName" value={formData.fName} onChange={handleChange} />
                </div>

                <div class="form-group d-flex justify-content-around ">
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" className="form-control w-25" id="lName" name="lName" value={formData.lName} onChange={handleChange} />
                </div>

                <div class="form-group d-flex ">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control w-25" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={formData.email} onChange={handleChange} />

                    <small id="emailHelp" class="form-text text-white"> We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" className='btn btn-success '>Submit</button>
            </form> */}
        </div>
    );
}

export default UserForm;
