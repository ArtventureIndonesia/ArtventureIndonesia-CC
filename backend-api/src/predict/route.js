const {
  postImage,
} = require("./handler");

const route = [ 
  {
    method: "POST",
    path: "/predict",
    handler: postImage,
    options: {
        payload: {
          output: 'stream',
          parse: true,
          allow: 'multipart/form-data',
          maxBytes: 2 * 1024 * 1024,
        },
    },
  }
];

module.exports = route ;