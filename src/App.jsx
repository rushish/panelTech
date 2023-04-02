import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AddClients from "./Pages/AddClients";
import ManageClients from "./Pages/ManageClients";
import CreateQuotation from "./Pages/CreateQuotation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesAdd from "./Pages/NotesAdd";
import AddQuot from "./Pages/AddQuot";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path="/"></Route>
          <Route element={<AddClients />} path="/add-clients"></Route>
          <Route element={<ManageClients />} path="/manage-clients"></Route>
          <Route
            element={<CreateQuotation />}
            path="/create-quotation/:id"
          ></Route>
          <Route element={<AddQuot />} path="/add-quotation/:id"></Route>
          <Route element={<NotesAdd />} path="/notes-add/:id"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
