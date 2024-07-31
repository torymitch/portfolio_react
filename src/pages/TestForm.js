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
    function search(formData) {
        const query = formData.get("query");
        alert(`You serach for '${query}'`);
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
                    {/* This is a test of some modal */}
                    <form action={search}>
                        <div><label>First Name: <input name="firstName" type="text" value={formData.firstName} onChange={handleInputChange}/></label></div>
                        <div> 
                            <label>
                                Last Name: <input name="lastName" type="text" value={formData.lastName} onChange={handleInputChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Admin: <input name="admin" type="checkbox" value={formData.admin} onChange={handleInputChange}/>
                            </label>
                        </div>
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