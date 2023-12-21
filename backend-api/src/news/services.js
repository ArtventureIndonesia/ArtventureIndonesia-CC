const { invariantError } = require('../exceptions/invariantError');

const firebaseAdmin = require('firebase-admin');

const getAllNews = async ({ request, h }) => {
  const db = firebaseAdmin.firestore();
  const outputDb = await db.collection('news').get();

  let newsData = [];
  outputDb.forEach((doc) => {
    newsData.push(doc.data());
  });

  newsData = newsData.sort((a, b) => a.news_id - b.news_id);

  const fieldOrder = [
    'news_id',
    'news_doc',
    'news_title',
    'news_author',
    'news_date',
    'news_text',
    'url_news_img',
  ];

  // Sort the array of objects based on the field order
  newsData = newsData.map((obj) => {
    const sortedObj = {};
    fieldOrder.forEach((field) => {
      sortedObj[field] = obj[field];
    });
    return sortedObj;
  });

  return h.response({
    error: false,
    message: "Get All News data success!",
    newsData,
  }).code(201);
};

const getNewsById = async ({ request, h }) => {
  const {
    news_id,
  } = request.params;

  const db = firebaseAdmin.firestore();
  const newsOutputDb = await db.collection('news').doc(news_id).get();

  if (!newsOutputDb.exists) {
    const message = "News not found";
    console.log(message);
    return invariantError({ request, h }, message);
  };

  let newsData = newsOutputDb.data();
  const fieldOrder = [
    'news_id',
    'news_doc',
    'news_title',
    'news_author',
    // 'news_date',
    'news_text',
    'url_news_img',
  ];

  newsData = Object.fromEntries(
      fieldOrder.map((key) => [key, newsData[key]]),
  );

  if (!newsOutputDb.exists) {
    const message = "News not found";
    console.log(message);
    return invariantError({ request, h }, message);
  };

  return h.response({
    error: false,
    message: "Get News data by Id success!",
    newsData,
  }).code(201);
};

module.exports = { getAllNews, getNewsById };
