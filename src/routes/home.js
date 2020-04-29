import App from "../controllers/App/App";
import { Filter, List, Tab } from "../components";

const page = (path) => ({
  path,
  component: App,
  exact: false,
  components: [
    {
      component: Tab,
      props: {
        labels: [
          {
            title: "Carros",
            subtitle: "Comprar",
            key: 0,
            icon: "icon-car.svg",
          },
          {
            title: "Motos",
            subtitle: "Comprar",
            key: 1,
            icon: "icon-moto.svg",
          },
        ],
        children: [
          {
            component: Filter,
            props: {
              marca: {
                url: "/Make",
              },
              modelo: {
                url: "/Model",
              },
              version: {
                url: "/Version",
              },
            },
          },
        ],
      },
    },
    {
      component: List,
      props: {
        vehicles: {
          url: "/Vehicles",
          args: "Page",
        },
      },
    },
  ],
});

export default page;
