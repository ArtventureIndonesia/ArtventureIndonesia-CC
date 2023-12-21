const { checkAuthorization } = require('../exceptions/unauthorized');

const { createUserRegister, checkUserLogin, rankUser } = require('./services');

const registerUser = async (request, h) => {
  const key = request.headers['x-api-key'];
  checkAuthorization({ request, h }, key);

  return await createUserRegister({ request, h });
};

const loginUser = async (request, h) => {
  const key = request.headers['x-api-key'];
  checkAuthorization({ request, h }, key);

  return await checkUserLogin({ request, h });
};

const getRankUser = async (request, h) => {
  const key = request.headers['x-api-key'];
  checkAuthorization({ request, h }, key);

  return await rankUser({ request, h });
};

module.exports = { registerUser, loginUser, getRankUser };
