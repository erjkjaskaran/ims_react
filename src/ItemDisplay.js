import React from "react";

export default function ItemDisplay({items, deleteItem}) {
    const ShowItem = (item) => {
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
                <td><i className="fa fa-trash" onClick={()=>{deleteItem(item)}}></i></td>
            </tr>
        );
    }
    return (
        <>
            <h2>Items</h2>
            <table border="1" className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items!=="" ? items.map(ShowItem) : <td colSpan="5" className="text-center">No Data to Display</td>}
                </tbody>
            </table>
        </>
    );
}