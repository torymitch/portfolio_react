import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Note } from "./pages/Note";
import { NotesPage } from "./pages/NotesPage";
import { NotesDetailPage } from "./pages/NotesDetailPage";
import { TestStore } from "./pages/TestStore";
import { NotFoundPage } from "./pages/NotFoundPage";

export const ReactRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<NotesPage />} exact />
                    <Route path="/note/:id" element={<Note />} />
                    <Route path="/notes" element={<NotesDetailPage />} />
                    <Route path="/store" element={<TestStore />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>   
            </Router>
            
        </>
    )
}
