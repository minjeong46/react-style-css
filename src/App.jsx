import styled from "styled-components";
import Nav from "./components/Nav";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductOption from "./components/ProductOption";
import './index.css'

function App() {
    return (
        <AppCss>
            <Nav></Nav>
            <ProductGallery></ProductGallery>
            <ProductBottom>
                <ProductInfo></ProductInfo>
                <ProductOption></ProductOption>
            </ProductBottom>
        </AppCss>
    );
}

export default App;

const AppCss = styled.div`
    width: 100%;
    padding: 2rem 16rem;
`;

const ProductBottom = styled.div`
    display: flex;
`;
