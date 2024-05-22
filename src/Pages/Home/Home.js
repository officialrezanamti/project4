import MyCard from "../../Component/Card/MyCard";
import Footer from "../../Component/Footer/Footer";
import MyNavbar from "../../Component/MyNavbar/MyNavbar";

import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:5000/user')
    .then((response) => setItems(response.data))
    
  })
  
  
  return (
    <>
      <MyNavbar />
      <div className="homeContainer">
        <div className="articleList">
          <h1>Article List</h1>
        </div>
        <div className="itemsContainer">
        {items.map((item) =>(
          <div key={item.id}>
            <MyCard {...item} />
          </div>
        ))}    
        </div>
      </div>
      <Footer />
    </>
  );
}
