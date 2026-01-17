import { Router } from "./router.js";
import { initProducts } from "./services/products.service.js";

const app = document.getElementById('app');
const router = new Router(app);
initProducts();

//todo funcion para marcar activo en el sidebar
function setActive(page){
    document.querySelectorAll(".menu-item").forEach((btn)=>{
        btn.classList.toggle('active',btn.dataset.page===page);
    });
}

//todo  funcion para navegar cuandohacemos click en el sidebar
document.querySelectorAll('.menu-item').forEach(btn=>{
    btn.addEventListener("click",()=>{
        const page = btn.dataset.page;
        router.navigate(page);
        setActive(page);
    })
})


router.navigate("dashboard");

// document.getElementById('dash-btn').addEventListener("click",(e)=>{
//     e.preventDefault();
//     router.navigate("dashboard");
// });
// document.getElementById('prod-btn').addEventListener("click",(e)=>{
//     e.preventDefault();
//     router.navigate("products");
// });



// document.querySelectorAll('.menu-item').forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const page = btn.dataset.page;
//         router.navigate(page);
//     })
// });