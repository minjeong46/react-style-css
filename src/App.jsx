import "./App.css";
import Nav from "./components/Nav";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductOption from "./components/ProductOption";

function App() {
    return (
        <div className="app">
            <Nav></Nav>
            <ProductGallery></ProductGallery>
            <div className="product-bottom">
                <ProductInfo></ProductInfo>
                <ProductOption></ProductOption>
            </div>
        </div>
    );
}

export default App;
