import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Stuart',
  subtitle: "I'm a fullstack developer",
  cta: 'Contact Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePic.jpg',
  paragraphOne:
    'I started my career as a mechanically-trained systems engineer; my role being to develop deep domain understanding, and use this to guide effective product development. This naturally led to me increasingly focussing on leading complex engineering projects spanning multiple technical disciplines.',
  paragraphTwo:
    "I've led engineering teams in designing complex robots, software interfaces and military equipment. I have also been responsible for wider technical leadership within businesses, such as resource planning and management, product development roadmaps, and business strategy.",
  paragraphThree:
    ' I am now focussed more on the software side of engineering, including  web- and app- development. Interested in both front-line engineering roles and leadership positions.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'heroesOfRealm.png',
    title: 'Heroes of the Realm',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'qwizardsPreviewImg.png',
    title: 'Qwizards: Arena',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'screenshot.png',
    title: 'Saw It!',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mazeOfMagicBlock.png',
    title: 'Maze Of Magic',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
