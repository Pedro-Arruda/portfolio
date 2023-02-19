import htmlImg from "../assets/technologies/iconHtml.svg";
import cssImg from "../assets/technologies/iconCSS.svg";
import bootstraplImg from "../assets/technologies/iconBootstrap.svg";
import javascriptImg from "../assets/technologies/iconJavascript.svg";
import reactImg from "../assets/technologies/iconReact.svg";
import typescriptImg from "../assets/technologies/iconTypescript.svg";
import sassImg from "../assets/technologies/iconSass.svg";
import githubImg from "../assets/technologies/iconGithub.svg";

export const projects = [
  {
    imgUrl: "spotify.png",
    description:
      "Projeto de clone do site do Spotify que permite aos usuários realizarem buscas por artistas e álbuns, simulando o funcionamento do aplicativo original. Foram utilizadas as tecnologias React, Typescript, Sass e a API pública do Spotify.",
    technologies: [
      {
        url: reactImg,
      },
      {
        url: cssImg,
      },
      {
        url: typescriptImg,
      },
      {
        url: githubImg,
      },
    ],
    urlProject: "https://spotify-clone-ashy-six.vercel.app/",
  },
  {
    imgUrl: "miniBlog.png",
    description:
      "Blog feito com React, Bootstrap e Typescript. Para o back end do projeto, foi utilizado firebase, permitindo registro e autenticação com email e senha dos usuários, criação, edição e exclusão de posts, além da visualização dos posts separados por autor.",
    technologies: [
      {
        url: reactImg,
      },
      {
        url: bootstraplImg,
      },
      {
        url: typescriptImg,
      },
      {
        url: githubImg,
      },
    ],
    urlProject: "https://mini-blog-eta.vercel.app/",
  },
  {
    imgUrl: "landingPage.png",
    description:
      "Landing page moderna feita para apresentação de produtos, funcionários e ideais de uma empresa genérica. React e Sass foram utilizados.",
    technologies: [
      {
        url: reactImg,
      },
      {
        url: sassImg,
      },
      {
        url: javascriptImg,
      },
      {
        url: githubImg,
      },
    ],
    urlProject: "https://landing-page-omega-puce.vercel.app/",
  },
  {
    imgUrl: "microsoft.jpg",
    description:
      "Clone do site da Microsoft, feito para estudar e desenvolver minhas habilidades sem utilização de nenhum framework. Feito com HTML e CSS puro, além de Javascript para criação do menu responsivo.",
    technologies: [
      {
        url: htmlImg,
      },
      {
        url: cssImg,
      },
      {
        url: javascriptImg,
      },
    ],
    urlProject: "https://pedro-arruda.github.io/microsoft-clone/",
  },
];
