import React, { useState } from "react";
import "./Modal.css";

export default function TestForm() {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [input1, setInput1] = useState('');

    const handleInput1Change = (event) => {
        setInput1(event.target.value);
    };

    const [input2, setInput2] = useState('');

    const handleInput2Change = (event) => {
        setInput2(event.target.value);
    };

    const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = (event) => {
       setIsChecked(event.target.checked);
   };
    
    const submitForm = () => {
        alert(`Input1 Is ${input1} && Input2 Is ${input2} && Checked is ${isChecked}`);
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
                        <div> 
                            <label>
                                Input 1: <input name="input1" type="text" value={input1} onChange={handleInput1Change}/>
                            </label>
                        </div>
                        <div> 
                            <label>
                                Input 2: <input name="input2" type="text" value={input2} onChange={handleInput2Change}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Checkbox: <input type="checkbox" value={isChecked} onChange={handleCheckboxChange}/>
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