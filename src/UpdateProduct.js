import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Header from "./Header";
import { useState, useEffect } from 'react';

function UpdateProduct() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    console.warn("params", params);
    console.warn("location", location);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/product/" + params.id);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]);

    return (
        <div>
            <Header />
            <h1>UpdateProduct Page</h1>
            <input type='text' defaultValue={data.name} /> <br/><br/>
            <input type='text' defaultValue={data.price} /> <br/><br/>
            <input type='text' defaultValue={data.description} /> <br/><br/>
            <input type='file' defaultValue={data.file_path} /> <br/><br/>
            <img style={{width:110}} src={'http://localhost:8000/'+data.file_path} /><br/><br/>
            <button>Update Product</button>
        </div>
    );
}

export default UpdateProduct;
