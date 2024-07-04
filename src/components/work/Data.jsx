import projetoXadrez from "../../assets/projetoXadrez.jpg";
import todoapp from "../../assets/todoapp.png";
import spotifyProject from "../../assets/spotifyProject.png";
import sistemabancario from "../../assets/sistemabancario.png";
import dungirotto from "../../assets/dungirotto.png";

export const projectsData = [
    {
        id: 1,
        image: projetoXadrez,
        title: "Chess system project",
        category: "backend",
        link: "https://github.com/henriquepmartins/chess-system-project",
    },
    {
        id: 2,
        image: spotifyProject,
        title: "Spotify Web App Clone",
        category: "web",
        link: "https://github.com/henriquepmartins/spotify-clone",
    },
    {
        id: 3,
        image: todoapp,
        title: "To-Do mobile app",
        category: "web",
        link: "https://github.com/henriquepmartins/to-do-list",
    },
    {
        id: 4,
        image: sistemabancario,
        title: "Bank system",
        category: "backend",
        link: "https://github.com/henriquepmartins/sistemaBancario",
    },
    {
        id: 5,
        image: dungirotto,
        title: "Dungeon Crawler inspired game",
        category: "web", 
        link: "https://github.com/henriquepmartins/Dungirotto",
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'backend',
    },
];
