import React, { useState } from "react";
import "./Modal.css";

export default function TestForm() {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        admin: '',
    });

    const handleInputChange = (event) => {
      const { name, value, type, checked } = event.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
    
    const submitForm = () => {
        alert(`First Nane Is ${formData.firstName} && Last Name Is ${formData.lastName} && Admin is ${formData.admin}`);
    };

      if(showForm) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    return (
    <>
        <button onClick={toggleForm} className="btn-modal">
        Show Form
        </button>

        {showForm && (

            <div className="modal">
                <div onClick={toggleForm} className="overlay"></div>
                <div className="modal-content">
                <h2>Populate The Form</h2>
                <p>
                    <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
                    
                        <input 
                            type="text"
                            name="firstName" 
                            placeholder="First Name"
                            value={formData.firstName} 
                            onChange={handleInputChange}/>
                        <input 
                            type="text"
                            name="lastName"  
                            placeholder="Last Name"  
                            value={formData.lastName} 
                            onChange={handleInputChange}/>
                        <label>
                            <span>Admin</span>
                            <input 
                                type="checkbox"
                                name="admin"
                                placeholder="Admin"  
                                aria-label="Admin"
                                value={formData.admin} 
                                onChange={handleInputChange}/>
                        </label>
                            

                        <div>
                            <button className="submit-form" onClick={submitForm}>SUBMIT</button>
                        </div>
                    </form>
                </p>
                <button className="close-modal" onClick={toggleForm}>
                    CLOSE
                </button>
                </div>
            </div>
        )}
        
    </>
    );
    

}