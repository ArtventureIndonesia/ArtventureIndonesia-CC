const axios = require('axios');
const fs = require('fs');
const predict = require("./services");

const postImage = async (request, h) => {
    const { image } = request.payload.files;
    const predict = await predict({ image });
    const response = h.response({
      status: 'success',
      message: 'Gambar berhasil terkirim',
      data: {
        predict,
      },
    });
    response.code(201);
    return response;
}