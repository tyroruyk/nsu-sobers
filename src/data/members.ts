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
    sectionTitle: 'Co-Leaders',
    members: [
      { name: 'S M Uday Haider', role: 'Co-Leader', image: 'uday-haider.jpg' },
      { name: 'Safin Ahmed', role: 'Co-Leader', image: 'safin-ahmed.jpg' },
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
      { name: 'Fahim Hossain Siam', role: 'Member', image: 'fahim-hossain.jpg' },
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
    sectionTitle: 'Mechanical Team',
    members: [
      { name: 'Fahim Hossain Siam', role: 'Lead', image: 'fahim-hossain.jpg' },
    ],
  },
];
