import { useParams } from "react-router-dom";
import TestModal from "./TestModal";
import TestForm from "./TestForm";


export const Note = () => {
    const { id } = useParams();
    const testConsole = id >= 5 ? true : false;
    const hasColor = true;
    
    return (
        <div className="App">
            <h1 className="header">Made It To Note {id}</h1>
            <br /><br />
            {testConsole === true ? <h1>Oh My</h1> : <h1>Oh No</h1>}
            <h1 style={{color: "green", backgroundColor: hasColor ? "red" : "black"}}> THIS HAS COLOR</h1>
            {/* {hasColor && <button onClick={toggleModal}>THIS IS A BUTTON</button>} */}
           
            <TestModal />
            <TestForm />
                
        </div>
    );
}