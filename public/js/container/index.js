import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { CardProducto } from "../components/card.js"
import { Footer } from "../components/footer.js";
import { NavSinLogin,NavConLogin,NavPrueba } from "../components/navbar/nav.js"
import { getProductos, getCategoria } from "../services/fetchServices.js";
import { PopUpAlgoSalioMal,PopUpSatisfactorio,PopUpErrorStock } from "../components/popups.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLogin();
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const ProductosRender = (json) =>{
    let _root=document.getElementById("root");
    Object.values(json).forEach(producto => {
        _root.innerHTML+=CardProducto(producto.productId,producto.image,producto.productName,producto.description,producto.unitPrice,producto.unitsInStock)
    });
}
const NavbarLogin =(email) =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavConLogin(email);
}
const PopUpRender=()=>{
    let _popupRoot = document.getElementById("popups");
    _popupRoot.innerHTML+=PopUpSatisfactorio();
    _popupRoot.innerHTML+=PopUpAlgoSalioMal();
    _popupRoot.innerHTML+=PopUpErrorStock();
}
export const IndexRender = ()=> {
    PopUpRender();
    FooterRender();
    getProductos(ProductosRender);
    if(window.localStorage.getItem("Top Choise User")){
        console.log(window.localStorage.getItem("Top Choise User"))
        var decoded = jwtDecode(window.localStorage.getItem("Top Choise User"));
        NavbarLogin(decoded.payload.email);
    }
    else{
        NavRender();
        console.log('No hay usuario logueado')
    }
}

