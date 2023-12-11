import Weather from "./Weather.png";
import Movies from "./Movies.png";
import Funky from "./FunkyTravel.png";
import Guitar from "./Guitar2.jpg";
import Teas from "./Teas.jpg";
import Table from "./Table.png";


let works = [
    {
        id: 6,
        name: "Hapiness Table",
        type: "Front-End",
        image: Table,
        code: "https://github.com/a1l1n/Hapiness-Table",
        demo: "https://hapiness-table.vercel.app/",
        description: "Tabla con datos que permite filtrado de la información, así como la opción de guardar y eliminar de Favoritos elementos de la misma.",
        tech: "Styled Components | TypeScript | ReactJS | MUI"
    },
    {
        id: 5,
        name: "Teas Restauración",
        type: "Front-End",
        image: Teas,
        code: "https://github.com/a1l1n/TEAS-Restauracion",
        demo: "https://teas-restauracion.vercel.app/#home",
        description: "SPA de presentación para un grupo de Restauradores. Diferentes galerías con preentación mediante sliders, lazy loading, formulario controlado y responsive",
        tech: "Vite | CSS | ReactJs | EmailJs"
    },
    {
        id: 4,
        name: "Guitar Code",
        type: "Full Stack",
        image: Guitar,
        code: "https://github.com/djaroldito/e-guitar-REACT",
        demo: "https://e-guitar-react.vercel.app/",
        description: "Proyecto Grupal para el Bootcamp de SoyHenry. E-commerce de guitarras, filtros de búsqueda, dashboard de administrador, logueo personalizado o por Google, carrito de compras asociado a Paypal.",
        tech: "NodeJs | Express | Sequelize | PostgreSQL | NodeMailer | CSS | Styled Components | ReactJs | Redux Toolkit | React Router v6 | Reacto Google Login | Material UI | React Admin | Recharts"
    },
    {
        id: 3,
        name: "Funky Travel",
        type: "Full Stack",
        image: Funky,
        code: "https://github.com/a1l1n/Funky-Travel",
        demo: "Coming soon",
        description: "Proyecto Individual para el Bootcamp de SoyHenry. Presenta un buscador de países y formulario contorlado de creación de actividades (con posibilidad de eliminarlas y editarlas).",
        tech: "NodeJs | Express | Sequelize | PostgreSQL | CSS | ReactJs | Redux"
    },
    {
        id: 2,
        name: "Video Check",
        type: "Front-End",
        image: Movies,
        code: "https://github.com/a1l1n/Movies-App",
        demo: "Coming soon",
        description: "Página con buscador de películas, con posibilidad de guardar y eliminar títulos de favoritos mediante el empleo de LocalStorage.",
        tech: "CSS | ReactJs | Redux | LocalStorage | React-Slider"
    },
    {
        id: 1,
        name: "Sailor Weather App",
        type: "Front-End",
        image: Weather,
        code: "https://github.com/a1l1n/Sailor-Weather-App",
        demo: "https://sailor-weather-app.vercel.app/",
        description: "Clásica App del clima, con buscador y manejo de errores mediante Sweet Alerts, cards que muestran la información específica del clima. Responsive.",
        tech: "CSS | ReactJs | Sweet Alert"
    }
];

export default works;