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

export const members: Member[] = [
  { name: 'Md. Shefatullah Bin Sadik', role: 'Vice President (Internal)', image: undefined },
  { name: 'Arafatul Hasan Sadoy', role: 'Joint Secretary', image: undefined },
  { name: 'Ibrahim Chowdhury', role: 'Sub-Executive', image: undefined },
  { name: 'S M Uday Haider', role: 'In-Charge', image: undefined },
  { name: 'Safin Ahmed', role: 'In-Charge', image: undefined },
  { name: 'Md. Athar Shihab', role: 'Probationary Member', image: undefined },
  { name: 'Saif Rahman', role: 'In-Charge', image: undefined },
  { name: 'Fahim Muntasir Galib', role: 'General Member', image: undefined },
  { name: 'Avishek Dutta', role: 'In-Charge', image: undefined },
  { name: 'Iftisham Hossain Sajjil', role: 'General Member', image: undefined },
];
