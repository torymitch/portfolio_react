import { Link } from "react-router-dom";

export const NotesDetailPage = () => {
    return ( 
        <>
            <h1>Note List</h1>
            <p><Link to="note/1">Note 1</Link></p>
            <p><Link to="note/2">Note 2</Link></p>
        </>
    );
}