import {
  bbbb, hogwartsMarketplace, portfolio,
  linkedin, githubBlack, email, techlahomaProject
} from '../assets'
const projects = [
  {
    id: 'project-1',
    name: 'Hogwarts Marketplace',
    description: 'A full stack e-commerce web app.',
    image: hogwartsMarketplace,
    repo: 'https://github.com/VirtualBlakeWillis/hogwarts-black-market',
    demo: 'https://github.com/VirtualBlakeWillis/hogwarts-black-market',
  },
  {
    id: 'project-2',
    name: 'Bubble Bass Bubble Buster',
    description:
      'A front end 2d platformer game. Built for a 5 day hack sprint',
    image: bbbb,
    repo: 'https://github.com/douglahoma/techlahoma-private',
    demo: 'https://github.com/douglahoma/techlahoma-private',
  },
  {
    id: 'project-3',
    name: 'Techlahoma Event Attendee Check-In Platform',
    description: 'A Web Application for attendees to check in to Techlahoma events.',
    image: techlahomaProject,
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
    url: "https://drive.google.com/file/d/17JyDGDuO9z9RyuMq3faqlPK-6D4HnXes/view?usp=drive_link"
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