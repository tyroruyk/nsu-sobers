export interface Member {
  name: string;
  role: string;
  image?: string;
  link?: string;
}

export const facultyAdvisor: Member = {
  name: 'Dr. Mohammad Abdul Qayum',
  role: 'Assistant Professor, Dept. of ECE',
  image: undefined,
  link: 'https://ece.northsouth.edu/people/dr-mohammad-abdul-qayum/'
};

export const membersBySection = [
  {
    sectionTitle: 'Co-Leaders',
    members: [
      { name: 'S M Uday Haider', role: 'Co-Leader', image: undefined },
      { name: 'Safin Ahmed', role: 'Co-Leader', image: undefined },
    ],
  },
  {
    sectionTitle: 'Management',
    members: [
      { name: 'Ibrahim Chowdhury', role: 'Team Manager', image: undefined },
    ],
  },
  {
    sectionTitle: 'Catalyst',
    members: [
      { name: 'Md. Shefatullah Bin Sadik', role: 'Team Catalyst', image: undefined },
      { name: 'Arafatul Hasan Sadoy', role: 'Team Catalyst', image: undefined },
    ],
  },
  {
    sectionTitle: 'Website Team',
    members: [
      { name: 'Avishek Dutta', role: 'Lead', image: undefined },
    ],
  },
  {
    sectionTitle: 'Software Team',
    members: [
      { name: 'Avishek Dutta', role: 'Lead', image: undefined },
      { name: 'Fahim Hossain Siam', role: 'Member', image: undefined },
    ],
  },
  {
    sectionTitle: 'Documentation Team',
    members: [
      { name: 'Fahim Muntasir Galib', role: 'Lead', image: undefined },
    ],
  },
  {
    sectionTitle: 'Electrical Team',
    members: [
      { name: 'Saif Rahman', role: 'Lead', image: undefined },
    ],
  },
  {
    sectionTitle: 'Mechanical Team',
    members: [
      { name: 'TBA', role: 'Lead', image: undefined },
    ],
  },
];
