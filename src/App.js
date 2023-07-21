import "./App.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import AddProduct from "./AddProduct";
import Protected from "./protected";
import ProductList from "./ProductList";
import SearchProduct from "./SerachProduct";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
