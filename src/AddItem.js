import {useState} from "react";

export default function AddItem(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = () => {
        props.addItem({name:name, price:price, brand:brand, type:type});
        setBrand("");
        setName("");
        setType("");
        setPrice(0);
    };

    return (
        <div className="container">
            <h2>Add an item</h2>
            <div className="row">
                <div className="col">
                <label htmlFor="name-field" className="form-label">Name:</label>
                <input id="name-field" className="form-control" type="text" value={name} onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="price-field" className="form-label">Price:</label>
                <input id="price-field" className="form-control" type="number" value={price} onChange={ (e) => setPrice(e.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="type-field" className="form-label">Type:</label>
                <input id="type-field" className="form-control" type="text" value={type} onChange={ (e) => setType(e.target.value)}/>
                </div>
                <div className="col">
                <label htmlFor="brand-field" className="form-label">Brand:</label>
                <input id="brand-field" className="form-control" type="text" value={brand} onChange={ (e) => setBrand(e.target.value)}/>
                </div>
                <div className="text-center mt-2">
                <button type="button" className="col-4 btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
                </div>
            </div>
        </div>
    );
}