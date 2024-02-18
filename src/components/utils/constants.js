import man1 from '../../assets/img/team-01.jpg';
import man2 from '../../assets/img/team-04.jpg';
import man3 from '../../assets/img/team-02.jpg';
import girl1 from '../../assets/img/team-03.jpg';
import pic from '../../assets/img/values.jpg';
import pic1 from '../../assets/img/stars.jpg';

export const MENU = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blogs',
    link: '/blogs',
  },
];

export const EMPOYEES = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Manager',
    photo: man1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Designer',
    photo: girl1,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    position: 'Developer',
    photo: man2,
  },
  {
    id: 4,
    name: 'Safeer Qureshi',
    position: 'CEO',
    photo: man3,
  },
];

export const WHYWE = [
  {
    img: pic,
    label: 'Our secret',
    title: "Making your video project a 'reel success'",
    desc: "At SPG Media, we understand the power of emotion in video production. That's why we strive to embed emotion in every video we produce. From the script writing process to the final edits, we work to create a sense of connection and engagement with your viewers.",
    moreInfo:
      'By harnessing the power of emotion, we aim to create videos that not only inform and educate, but also inspire and motivate.',
    works: [
      {
        name: 'In-house production',
        about: 'All of our production is all done in-house and not outsourced.',
      },
      {
        name: 'Dedicated creative',
        about: 'A dedicated creative team to help bring your vision to life.',
      },
    ],
  },
  {
    img: pic1,
    label: 'Our experience',
    title: 'We shoot... for the stars.',
    desc: "SPG Media is not just a 'video production company'. We are also a film and TV production company. Using our range of experience for working with partners such as Netflix, Amazon Prime and Daily Wire, we are able to give your production the professional touch it deserves.",
    works: [
      {
        name: 'Industry leaders',
        about: 'Working with some of the best in the film industry, our resources are unmatched.',
      },
      {
        name: 'Award winning',
        about: "We've won multiple awards as a result of the videos made for our clients.",
      },
    ],
  },
];

export const LOCATIONS = [
  {
    city: 'Toronto',
    address: '1 Yonge St',
    zipCode: 'Toronto, ON M5E 1E5',
  },
  {
    city: 'Etobicoke',
    address: '63 Galaxy Blvd',
    zipCode: ' Etobicoke, ON M9W 5R7',
  },
  {
    zipCode: ' Mississauga, ON L4X 2S3',
    city: 'Mississauga',
    address: '2550 Goldenridge Rd',
  },
  {
    city: 'Contact info',
    email: 'contact@spg-media.com',
    tel: '+1 (289) 681 0500',
  },
];

export const CASES = [
  {
    id: 1,
    video: 'https://www.youtube.com/watch?v=n2gJqJL63dY',
    label: 'Online Ad',
    title: 'TunnelBear',
    desc: "TunnelBear was looking to create the perfect video campaign. They wanted to create video campaign that was informative and relatable to the target audience. Here's how we helped!",
    category: 'car',
  },
  {
    id: 2,
    video: 'https://youtu.be/vPJ6irUDmHI?si=YsBs7oWOwym48_jO',
    label: 'TV Ad',
    title: 'Zensurance',
    desc: 'Zensurance wanted to film an ad campaign for TV. Every ad in their industry looked the same so they were looking for a unique take on the issue.',
    category: 'TV show',
  },
  {
    id: 3,
    video: 'https://youtu.be/Ob570Cescv4?si=flNDEGYZ9Js6bYHM',
    label: 'Social Ad',
    title: 'Black Therapy',
    desc: 'Black Therapy had a very unique message to share. The issue was communicating in a captivating way. Luckily, we had the perfect solution.',
    category: 'social',
  },
  {
    id: 4,
    video: 'https://youtu.be/_bkX5VkZg8U?si=1oCGVzQNJaZsD5WG',
    label: 'Online video',
    title: 'IBU',
    desc: 'The International Business University wanted to create a feature video with an adjoining storyline. When they came to us with the idea, we knew exactly what to do.',
    category: 'racing',
  },
];
