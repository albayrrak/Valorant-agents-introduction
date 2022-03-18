import "./dist/app.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages Imports
import { SearchModal } from "./components";
import Home from "./pages/home/Home";
import Agents from "./pages/agents/Agents";

function App() {
    return (
        <BrowserRouter>
            <SearchModal />
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Agents />
            </div>
        </BrowserRouter>
    );
}

export default App;
