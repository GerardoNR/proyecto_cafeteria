import { createRouter, createWebHashHistory} from "vue-router";
// agregando paginas de la aplicacion  
import formulario from "../components/formulario.vue";
import carousel from "../components/carousel.vue"; 
import mapa from "../components/mapa.vue";
import redes from "../components/redes.vue";

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
    }
]
const router =createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;