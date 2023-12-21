const {
  getAllNewsHandler,
  getNewsByIdHandler,
} = require('./handler');

const route = [
  {
    method: 'GET',
    path: '/news',
    handler: getAllNewsHandler,
  },
  {
    method: 'GET',
    path: '/news/{news_id}',
    handler: getNewsByIdHandler,
  },
  {
    method: 'GET',
    path: '/news/check',
    handler: () => ({ result: 'Server is running and connected' }),
  },
];

module.exports = route;
