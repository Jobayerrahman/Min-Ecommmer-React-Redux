import '../src/assets/style.css';
import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import TopBanner from "./Components/Banner/TopBanner";
import Cetagory from "./Components/Cetagory/Cetagory";
import { useDispatch, useSelector, Provider } from "react-redux";
import Product from "../src/Components/Product/Product";
import BookTable from "./Components/BookTable/BookTable";
import Productcard from "./Components/Product/Productcard";
import {getAllProduct} from "./Services/Actions/ProductAction";
import Topnavigation from "./Components/Navigation/Topnavigation";
function App() {

  // const dispatch = useDispatch();
  // useEffect(()=>{dispatch(getAllProduct())},[]);

  // const {isLoading,products,errors} =useSelector((state) => state);
  // const [fasions, setFasions] = useState([]);
  // const [isFasions, setIsFasions] = useState(false);
  
  // const handleAllFasion=()=>{
  //     setIsFasions(false);
  // }

  // const handleWomenFasion=()=>{
  //     const product = products.filter((product)=> product.category === "women's clothing");
  //     setFasions(product);
  //     setIsFasions(true);
  // }

  // const handleMenFasion=()=>{
  //     const product = products.filter((product)=> product.category === "men's clothing");
  //     setFasions(product);
  //     setIsFasions(true);
  // }

  // const handleElectronics=()=>{
  //     const product = products.filter((product)=> product.category === "electronics");
  //     setFasions(product);
  //     setIsFasions(true);
  // }

  // const handleAccessories=()=>{
  //     const product = products.filter((product)=> product.category === "jewelery");
  //     setFasions(product);
  //     setIsFasions(true);
  // }

  // const fasionCetagory = fasions.map((fasion)=><Productcard {...fasion} />);

  return (
      <div>
        <Topnavigation/>
        <TopBanner/>
        {/* <Cetagory all={handleAllFasion} women={handleWomenFasion} men={handleMenFasion} electronics={handleElectronics} accessories={handleAccessories} /> */}
        {/* <Product isLoading={isLoading} products={products} errors={errors} fasionCetagory={fasionCetagory} isFasion={isFasions} /> */}
        <Gallery/>
        <BookTable/>
        <Footer/>
      </div>
  );
}

export default App;
