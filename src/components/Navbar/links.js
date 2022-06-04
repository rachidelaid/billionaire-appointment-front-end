const links = [
  {
    path: '/',
    description: 'BILLIONAIRES',
    permission: ['everyone', 'user', 'admin'],
  },
  {
    path: '/appointment/new',
    description: 'RESERVE BILLIONAIRES',
    permission: ['user', 'admin'],
  },
  {
    path: '/appointments',
    description: 'MY APPOINTMENTS',
    permission: ['user', 'admin'],
  },
  {
    path: '/billionaire/new',
    description: 'ADD BILLIONAIRE',
    permission: ['user', 'admin'],
  },
  {
    path: '/billionaire/delete',
    description: 'DELETE BILLIONAIRE',
    permission: ['admin'],
  },
];

export default links;
