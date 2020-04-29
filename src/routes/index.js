import home from "./home";
//import notFound from './notFound'
import navigation from "./navigation";

const routes = [
  home("/:marca/:modelo/:version", navigation, true, "Vehicles"),
  home("/", navigation, true, "Home"),
  //	notFound('/*', navigation)
];

export default routes;
