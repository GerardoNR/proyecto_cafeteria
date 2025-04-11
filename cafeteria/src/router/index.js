import { createRouter, createWebHashHistory} from "vue-router";
// agregando paginas de la aplicacion  
import formulario from "../components/formulario.vue";
import carousel from "../components/carousel.vue"; 
import mapa from "../components/mapa.vue";
import redes from "../components/redes.vue";
import menu from "../components/menu.vue";
import comentarios from "../components/comentarios.vue";
import galeria from "../components/galeria.vue";

const routes = [
    {
        path: "/formulario",
        name: "formulario",
        component: formulario,
    },
    {
        path: "/carousel",
        name: "carousel",
        component: carousel,
    },
    {
        path: "/mapa",
        name: "mapa",
        component: mapa,
    }
    ,
    {
        path: "/redes",
        name: "redes",
        component: redes,
    },
    {
        path: "/menu",
        name: "menu",
        component: menu,
    },
    {
        path: "/comentarios",
        name: "comentarios",
        component: comentarios,
    }
    ,
    {
        path: "/galeria",
        name: "galeria",
        component: galeria,
    }
]
const router =createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;