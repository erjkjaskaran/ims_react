import './App.css';
import Searchbar from "./searchbar";
import {useState, useEffect} from "react";
import AddItem from "./AddItem";
import ItemDisplay from "./ItemDisplay";



function App() {
    const[filters, setFilters] = useState({});
    const[data, setData] = useState({items:[]})

    useEffect(()=>{
                fetch("https://ims-react-jaskaran.herokuapp.com/items")
                    .then(res => res.json())
                    .then( data => {
                        setData({items: data});
                    });
    },[]);

    const updateFilters = (searchParams) => {
        setFilters(searchParams);
    };

    const deleteItem = (item) => {
        const items = data["items"];
        fetch(`https://ims-react-jaskaran.herokuapp.com/items/${item.id}`,{method:"DELETE"}).then((response)=>{
            if (response.ok) {
                const idx=items.indexOf(item);
                items.splice(idx,1);
                setData({items: items})
            }
        })
    }

    const addItems = (item) => {
        let items = data['items'];

        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item) ,
        };
        fetch("https://ims-react-jaskaran.herokuapp.com/items", request).then((response) => {
            return response.json();
        }).then((data) => {
            items.push(data);
            setData({ items:items});
        });
    };

    const filterData = (data) => {
        const filteredData = [];
        if(!filters.name){
            return data;
        }

        for(const item of data) {
            if(filters.name !== "" && item.name !== filters.name){
                continue;
            }
            if(filters.price !== 0 && item.price <= filters.price){
                continue;
            }
            if(filters.type !== "" && item.type !== filters.type){
                continue;
            }
            if(filters.brand !== "" && item.brand !== filters.brand){
                continue;
            }
            filteredData.push(item);
        }

        return filteredData;
    }

  return (
    <div className="container">
        <div className="row mt-3">
             <Searchbar searchParams={updateFilters}/>
        </div>
        <div className="row mt-3">
            <ItemDisplay deleteItem={deleteItem} items={filterData(data['items'])}/>
        </div>
        <div className="row mt-3">
            <AddItem addItem={addItems}/>
        </div>
    </div>
  );
}

export default App;
