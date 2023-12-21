const { checkAuthorization } = require('../exceptions/unauthorized');

const { getAllNews, getNewsById } = require('./services');

const getAllNewsHandler = async (request, h) => {
  const key = request.headers['x-api-key'];
  checkAuthorization({ request, h }, key);

  return await getAllNews({ request, h });
};

const getNewsByIdHandler = async (request, h) => {
  const key = request.headers['x-api-key'];
  checkAuthorization({ request, h }, key);

  return await getNewsById({ request, h });
};

module.exports = { getAllNewsHandler, getNewsByIdHandler };
