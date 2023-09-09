import { BsFacebook, BsGithub, BsGlobe } from "react-icons/bs";
import YeasinsPic from "../assets/Devs/Yeasin2002.jpg";
import sayadsPic from "../assets/Devs/sayad.jpg";
import tanimPic from "../assets/Devs/tanim.jpg";

const DevelopersOfTodoProject = [
  {
    name: "Tanim",
    fullName: "Tanim Ahmed",
    Roll: " Ui/XI Designer",
    image: tanimPic,
    contact: [
      {
        name: "website",
        link: "",
        icons: <BsGlobe />,
      },
      {
        name: "github",
        link: "",
        icons: <BsGithub />,
      },
      {
        name: "Facebook",
        link: "",
        icons: <BsFacebook />,
      },
    ],
    workDetails: {
      technology: "Figma",
      title: "Figma Design ",
      link: "https://www.figma.com/file/t8qolnOAK308vTfE0cLpfd/ToDo-App",
      displayName: "Design",
    },
  },

  {
    name: "Dev Yeasin",
    fullName: "Md Kawsar Islam Yeasin",
    Roll: "Front End Developer",
    image: YeasinsPic,

    contact: [
      {
        name: "website",
        link: "https://yeasin2002.netlify.app/",
        icons: <BsGlobe />,
      },
      {
        name: "github",
        link: "https://github.com/Mdkawsarislam2002",
        icons: <BsGithub />,
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100075629982720",
        icons: <BsFacebook />,
      },
    ],
    workDetails: {
      technology: "React, Redux",
      title: "Front End Code",
      link: "https://github.com/Mdkawsarislam2002/TaskHub",
      displayName: "Code",
    },
  },

  {
    name: "Dev Sayad",
    fullName: "Nazmul Hasan Sayad",
    Roll: " Back End Developer",
    image: sayadsPic,
    contact: [
      {
        name: "website",
        link: "",
        icons: <BsGlobe />,
      },
      {
        name: "github",
        link: "",
        icons: <BsGithub />,
      },
      {
        name: "Facebook",
        link: "",
        icons: <BsFacebook />,
      },
    ],
    workDetails: {
      technology: "nodejs/express.js, MongoDB",
      title: "Server Side Code ",
      link: "https://github.com/wdhive2/todo-server/tree/master/",
      displayName: "Code",
    },
  },
];

export default DevelopersOfTodoProject;
