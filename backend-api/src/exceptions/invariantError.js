const invariantError = async ({ request, h }, message) => {
  return h.response({
    error: true,
    message: message,
  }).code(400);
};

module.exports = { invariantError };
