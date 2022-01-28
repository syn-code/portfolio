import HomeComponent from "../components/HomeComponent";


const routes = [
   { path: '/', component: HomeComponent },
];


export default routes.map(route => {
   return {...route}
});
