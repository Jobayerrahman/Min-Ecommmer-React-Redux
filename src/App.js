import '../src/assets/style.css';
import { useState } from "react";
import { useSelector } from 'react-redux';
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import TopBanner from "./Components/Banner/TopBanner";
import Cetagory from "./Components/Cetagory/Cetagory";
import Product from "../src/Components/Product/Product";
import BookTable from "./Components/BookTable/BookTable";
import Productcard from "./Components/Product/Productcard";
import Topnavigation from "./Components/Navigation/Topnavigation";
function App() {
  
  const [items, setItems] = useState([]);
  const [isItems, setIsItems] = useState(false);
  const {products} =useSelector((state) => state.productSlice);
  
  const handleAllItem=()=>{
      setIsItems(false);
  }

  const handleBurgerItem=()=>{
      const product = products.filter((product)=> product.category === "Buger");
      setItems(product);
      setIsItems(true);
  }

  const handlePastryItem=()=>{
      const product = products.filter((product)=> product.category === "Pastry");
      setItems(product);
      setIsItems(true);
  }

  const handlePizzaItem=()=>{
      const product = products.filter((product)=> product.category === "Pizza");
      setItems(product);
      setIsItems(true);
  }

  const handleSandwichItem=()=>{
      const product = products.filter((product)=> product.category === "Sandwiches");
      setItems(product);
      setIsItems(true);
  }

  const itemCetagory = items.map((fasion)=><Productcard {...fasion} />);

  return (
      <div>
        <Topnavigation/>
        <TopBanner/>
        <Cetagory all={handleAllItem} burger={handleBurgerItem} pastry={handlePastryItem} pizza={handlePizzaItem} sandwich={handleSandwichItem} />
        <Product  cetagory={itemCetagory} isItem={isItems} />
        <Gallery/>
        <BookTable/>
        <Footer/>
      </div>
  );
}

export default App;
