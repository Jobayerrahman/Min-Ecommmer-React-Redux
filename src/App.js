import Product from "../src/Components/Product/Product";
import '../src/assets/style.css';
import TopBanner from "./Components/Banner/TopBanner";
import Cetagory from "./Components/Cetagory/Cetagory";
function App() {
  return (
    <div>
      <TopBanner/>
      <Cetagory/>
      <Product/>
    </div>
  );
}

export default App;
