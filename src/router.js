import { createRouter, createWebHistory } from "vue-router";
//Importar las diferentes vistas
import Unidad1 from "./views/Unidad1.vue";
import Unidad2 from "./views/Unidad2.vue";
import Unidad3 from "./views/Unidad3.vue";
import Unidad4 from "./views/Unidad4.vue";

//configuracion de rutas
const routes = [
	{
		path: "/",
		name: "Unidad1",
		alias: "/",
		component: Unidad1,
	},
	{
		path: "/unidad2",
		name: "Unidad2",
		alias: "/unidad2",
		component: Unidad2,
	},
	{
		path: "/unidad3",
		name: "Unidad3",
		alias: "/unidad3",
		component: Unidad3,
	},
	{
		path: "/unidad4",
		name: "Unidad4",
		alias: "/unidad4",
		component: Unidad4,
	}
];

const router = createRouter({
	// mantiene historial de rutas
	history: createWebHistory(),
	routes,
});

export default router;
