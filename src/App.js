import '../src/assets/style.css';
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import TopBanner from "./Components/Banner/TopBanner";
import Cetagory from "./Components/Cetagory/Cetagory";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Product from "../src/Components/Product/Product";
import BookTable from "./Components/BookTable/BookTable";
import Productcard from "./Components/Product/Productcard";
import Topnavigation from "./Components/Navigation/Topnavigation";
import fatchTableDispatcher from './Redux/TableSlice/Dispatcher/fatchTableDispatcher';
import loadedBookingInfoDispatcher from './Redux/TableSlice/Dispatcher/loadedBookingInfoDispatcher';
import ProductCarousel from './Components/Product/ProductCarousel';
function App() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isItems, setIsItems] = useState(false);
  const {products} =useSelector((state) => state.productSlice);
  
    useEffect(()=>{
        dispatch(loadedBookingInfoDispatcher());
        dispatch(fatchTableDispatcher());
    },[]);

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
        <ProductCarousel/>
        <Gallery/>
        <BookTable/>
        <Footer/>
        <ToastContainer />
      </div>
  );
}

export default App;
