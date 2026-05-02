import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Librat from "./pages/Librat"
import BookDetails from "./pages/BookDetails";
import Dashboard from "./pages/Dashboard";
import Zhanret from "./pages/Zhanret";
import Author from "./pages/Author";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/librat" element={<Librat/>}/>
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/zhanret" element={<Zhanret />} />
        <Route path="/author" element={<Author />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;