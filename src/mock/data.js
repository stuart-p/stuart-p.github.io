import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Stuart Palmer | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Welcome to Stuart Palmer's portfolio site. I design the unusual.", // e.g: Welcome to my website
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
    'I started my career as a systems engineer; my role being to develop deep domain understanding, and use this to guide effective product development. This led to me increasingly focussing on leading complex engineering projects spanning multiple technical disciplines.',
  paragraphTwo:
    "I've led engineering teams in designing complex robots, software interfaces and military equipment. I have also been responsible for wider technical leadership within businesses, such as resource planning and management, product development roadmaps, and business strategy.",
  paragraphThree:
    ' I am now focussed more on the software side of engineering, including  web- and app- development.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'heroesOfRealm.png',
    title: 'Heroes of the Realm',
    info:
      'This site is a modern re-imagining of an fantasy-world Adventurers Guild; where heroes may hear about quests that they can go on. Heroes can select a quest from the board and after waiting for the quest to be completed "experience points" will be provided to you, thus increasing your Adventure Rank.',
    info2:
      'Front end is React, with MobX for state management and storage of JTW session keys. Back end is C# .Net Core, and deployed using Azure cloud server.',
    url: 'https://heroes-of-the-realm.azurewebsites.net/',
    repo: 'https://github.com/stuart-p/heroes-of-the-realm-client',
  },
  {
    id: uuidv1(),
    img: 'qwizardsPreviewImg.png',
    title: 'Qwizards: Arena',
    info:
      'Qwizards! Answer quick-fire maths questions to power up your wizard avatar, then battle to become the Master Of Maths in the arena.',
    info2:
      ' The front end is a hybrid React-Phaser.js application, with player data being freely passed between React state and Phaser game client. The back end is a Node.JS server, running an authoritative headless version of the game. Socket.io is used to communicate with all players in real time. ',
    url: 'https://qwizards-arena.netlify.app/',
    repo: 'https://github.com/stuart-p/qwizards-arena-client',
  },
  {
    id: uuidv1(),
    img: 'screenshot.png',
    title: 'Saw It!',
    info:
      'Saw It is a community news site. Users can create articles, browse information on topics, and add comments. If they like an article or comment, users can "applaud" the post in order to show their appreciation.',
    info2:
      'Saw It was built as a demonstration of various full-stack technologies. The front end is a single-page-application React app, with Styled-Components for CSS management. The back end is a Node.JS Express server, with a PostreSQL database.',
    url: 'https://saw-it-here-first.netlify.app/',
    repo: 'https://github.com/stuart-p/Saw-It',
  },
  {
    id: uuidv1(),
    img: 'mazeOfMagicBlock.png',
    title: 'Maze Of Magic',
    info:
      'Maze of Magic is a game for iOS and Android, where the player must quickly solve an ever-changing maze before the time runs out. The game makes use of mobile features such as multi-touch control, cloud-save API and push notifications.',
    info2: 'This was built using C# .Net and the Unity engine.',
    url: 'https://apps.apple.com/app/id1435105509',
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    "If you're interested in working together (or just want to say hi!), please contact me using the form below, or using social media",
  btn: 'Send Message',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/StuartDPalmer',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stuart-palmer-a0686139/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/stuart-p',
    },
  ],
};
