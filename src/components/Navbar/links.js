const links = [
  {
    path: '/',
    description: 'BILLIONAIRES',
    permission: ['everyone', 'user', 'admin'],
  },
  {
    path: '/new-appointment',
    description: 'RESERVE BILLIONAIRES',
    permission: ['user', 'admin'],
  },
  {
    path: '/appointments',
    description: 'MY APPOINTMENTS',
    permission: ['user', 'admin'],
  },
  {
    path: '/new-billionaire',
    description: 'ADD BILLIONAIRE',
    permission: ['admin'],
  },
  {
    path: '/delete-billionaire',
    description: 'DELETE BILLIONAIRE',
    permission: ['admin'],
  },
];

export default links;
