export interface Member {
  name: string;
  role: string;
  image?: string;
  link?: string;
}

export const facultyAdvisor: Member = {
  name: 'Dr. Mohammad Abdul Qayum',
  role: 'Assistant Professor, Dept. of ECE, North South University',
  image: 'members/abdul-qayum.jpg',
  link: 'https://ece.northsouth.edu/people/dr-mohammad-abdul-qayum/'
};

export const membersBySection = [
  {
    sectionTitle: 'Team Leaders',
    members: [
      { name: 'S M Uday Haider', role: 'Team Leader', image: 'uday-haider.jpg' },
      { name: 'Safin Ahmed', role: 'Team Leader', image: 'safin-ahmed.jpg' },
    ],
  },
  {
    sectionTitle: 'Management',
    members: [
      { name: 'Ibrahim Chowdhury', role: 'Team Manager', image: 'ibrahim-chowdhury.jpg' },
    ],
  },
  {
    sectionTitle: 'Catalyst',
    members: [
      { name: 'Md. Shefatullah Bin Sadik', role: 'Team Catalyst', image: 'shefatullah-sadik.jpg' },
      { name: 'Arafatul Hasan Sadoy', role: 'Team Catalyst', image: 'arafatul-sadoy.jpg' },
    ],
  },
  {
    sectionTitle: 'Website Team',
    members: [
      { name: 'Avishek Dutta', role: 'Lead', image: 'avishek-dutta.jpg' },
    ],
  },
  {
    sectionTitle: 'Software Team',
    members: [
      { name: 'Avishek Dutta', role: 'Lead', image: 'avishek-dutta.jpg' },
    ],
  },
  {
    sectionTitle: 'Documentation Team',
    members: [
      { name: 'Fahim Muntasir Galib', role: 'Lead', image: 'fahim-galib.jpg' },
    ],
  },
  {
    sectionTitle: 'Electrical Team',
    members: [
      { name: 'Saif Rahman', role: 'Lead', image: 'saif-rahman.jpg' },
    ],
  },
  {
    sectionTitle: 'Graphics Team',
    members: [
      { name: 'Mobasshir Amin Efaz', role: 'Lead', image: 'mobasshir-amin.jpg' },
    ],
  },
  {
    sectionTitle: 'General Members',
    members: [
      { name: 'Fahim Hossain Siam', role: 'Member', image: 'fahim-hossain.jpg' },
      { name: 'Abrar Mahin', role: 'Member', image: undefined },
      { name: 'Afifa Tabassum Puspita', role: 'Member', image: undefined },
      { name: 'Hashibur R Shahed', role: 'Member', image: undefined },
      { name: 'Iftisham Hossain Sajjil', role: 'Member', image: undefined },
      { name: 'Mahmudun Nabi', role: 'Member', image: 'mahmudun-nabi.jpg' },
      { name: 'Samirah Ohona', role: 'Member', image: undefined },
      { name: 'Sorozini Indira Zahid', role: 'Member', image: undefined },
      { name: 'Suryashekharini Bintey Bashar', role: 'Member', image: undefined },
    ],
  }
];
