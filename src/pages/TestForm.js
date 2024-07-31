import React, { useState } from "react";
import "./Modal.css";

export default function TestForm() {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };
    
    const submitForm = () => {
        alert(`Submit the form!`);
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
                <h2>Hello Form</h2>
                <p>
                    {/* This is a test of some modal */}
                    <form action={search}>
                        <div> 
                            <label>
                                Input 1: <input name="input1" />
                            </label>
                        </div>
                        <div> 
                            <label>
                                Input 2: <input name="input2" />
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