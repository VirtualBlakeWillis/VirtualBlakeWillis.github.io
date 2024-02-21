import {
  bbbb, hogwartsMarketplace, portfolio,
  linkedin, githubBlack, email
} from '../assets'
const projects = [
  {
    id: 'project-1',
    name: 'Hogwarts Marketplace',
    description: 'A full stack e-commerce web app.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: hogwartsMarketplace,
    repo: 'https://github.com/VirtualBlakeWillis/hogwarts-black-market',
    demo: 'https://github.com/VirtualBlakeWillis/hogwarts-black-market',
  },
  {
    id: 'project-2',
    name: 'Bubble Bass Bubble Buster',
    description:
      'A front end 2d platformer game. Built for a 5 day hack sprint',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: bbbb,
    repo: 'https://github.com/VirtualBlakeWillis/Bubble-Bass-s-Bubble-Buster',
    demo: 'https://ethanwakeford.github.io/',
  },
  {
    id: 'project-3',
    name: 'My Portfolio',
    description: 'This is a single-page portfolio website built with React.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/VirtualBlakeWillis/Portfolio',
    demo: 'https://github.com/VirtualBlakeWillis/Portfolio',
  },
];

const links = [
  {
    id: "links-1",
    name: "About Me",
    url: "",
  },
  {
    id: 'links-2',
    name: "Resume",
    url: "https://drive.google.com/file/d/1eUREV5VvpJrcyNhFArX0gPG0jxTwWuVk/view?usp=sharing"
  }
]

const socials = [
  {
    id: 'socials-1',
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/virtual-blake-willis/',
    icon: linkedin,
    bottomText: "linkedin.com/in/virtual-blake-willis"
  },
  {
    id: 'socials-2',
    name: 'email',
    url: 'mailto:virtualblakewillis@gmail.com',
    icon: email
  },
  {
    id: 'socials-3',
    name: 'github',
    url: 'https://github.com/VirtualBlakeWillis',
    icon: githubBlack,
    bottomText: "github.com/VirtualBlakeWillis"
  },

]

export { projects, links, socials }