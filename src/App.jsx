import Nav from "./components/Nav";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductOption from "./components/ProductOption";

function App() {
    return (
        <div className="w-full py-8 px-64">
            <Nav></Nav>
            <ProductGallery></ProductGallery>
            <div className="flex">
                <ProductInfo></ProductInfo>
                <ProductOption></ProductOption>
            </div>
        </div>
    );
}

export default App;
