import Weather from "../Weather.png";
import Movies from "../Movies.png";
import Funky from "../FunkyTravel.png";
import Guitar from "../Guitar2.jpg";
import Teas from "../Teas.jpg";
import StarWars from '../StarWars.png'


let works = [
    {
        id: 6,
        name: "StarWars",
        type: "Front-end",
        image: StarWars,
        code: "https://github.com/a1l1n/star-wars-challenge",
        demo: "https://star-wars-challenge-zeta.vercel.app/",
        tech: [
            {
                title: "Front-end: ",
                description: "CSS | JavaScript | ReactJs"
            }]
    },
    {
        id: 5,
        name: "Teas Restauración",
        type: "Front-end",
        image: Teas,
        code: "https://github.com/a1l1n/TEAS-Restauracion",
        demo: "https://teas-restauracion.vercel.app/#home",
        tech: [
            {
                title: "Front-End:",
                description: "Vite | CSS | ReactJs | EmailJs"
            }]
    },
    {
        id: 4,
        name: "Guitar Code",
        type: "Full-stack",
        image: Guitar,
        code: "https://github.com/djaroldito/e-guitar-REACT",
        demo: "https://e-guitar-react.vercel.app/",
        tech: [ 
            { 
            title: 'Front-end:',
            description: "ReactJs | Redux Toolkit | React Google Login | MUI | React Admin | Recharts"
        },
        {
            title: 'Back-end:',
            description: "NodeJs | Express | Sequelize | PostgreSQL | NodeMailer"
        }]
    },
    {
        id: 3,
        name: "Funky Travel",
        type: "Full-stack",
        image: Funky,
        code: "https://github.com/a1l1n/Funky-Travel",
        demo: "Coming soon",
        tech: [{ 
            title: 'Front-end:',
            description: "CSS | JavaScript | ReactJs | Redux"
        },
        {
            title: 'Back-end:',
            description: 'NodeJs | Express | Sequelize | PostgreSQL'
        }]
    },
    {
        id: 2,
        name: "Video Check",
        type: "Front-end",
        image: Movies,
        code: "https://github.com/a1l1n/Movies-App",
        demo: "Coming soon",
        tech: [ 
            {
            title: 'Front-end:',
            description: "CSS | ReactJs | Redux | LocalStorage | React-Slider"
        }]
    },
    {
        id: 1,
        name: "Sailor Weather App",
        type: "Front-end",
        image: Weather,
        code: "https://github.com/a1l1n/Sailor-Weather-App",
        demo: "https://sailor-weather-app.vercel.app/",
        tech: [
            { 
            title: 'Front-end:',
            description: "CSS | ReactJs | Sweet Alert"
        }]
    }
];

export default works;