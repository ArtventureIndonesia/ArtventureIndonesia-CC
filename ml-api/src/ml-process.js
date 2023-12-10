const tfjs = require("@tensorflow/tfjs-node");

function loadModel() {
  const modelUrl = `https://storage.googleapis.com/ml-model-artventureid/model.json`;
  return tfjs.loadLayersModel(modelUrl);
}

function predict(model, imageBuffer) {
  const tensor = tfjs.node
    .decodeJpeg(imageBuffer)
    .resizeNearestNeighbor([224,224])
    .expandDims()
    .toFloat()
    .div(255.0);

  return model.predict(tensor).data();
}

function predictClass(predictResult) {
  const predictedClass = predictResult.indexOf(Math.max(...predictResult));
  let result = {};

  if (predictedClass === 1) {
      result = { result: "Bali Following Independence" };
  } else if (predictedClass === 2) {
      result = { result: "Dang Hyang Nirartha" };
  } else if (predictedClass === 3) {
      result = { result: "Sagung Wah In Preparation To Attack The Dutch" };
  } else if (predictedClass === 4) {
      result = { result: "Spreading The News of The Proclamation of Indonesia" };
  } else if (predictedClass === 5) {
      result = { result: "The Battle of Jagaraga" };
  } else if (predictedClass === 6) {
      result = { result: "The Crowning Of Sri Kresna Kepakisan" };
  } else if (predictedClass === 7) {
      result = { result: "The Establishment Of Indonesian People Struggling Board Of Sunda Kecil" };
  } else if (predictedClass === 8) {
      result = { result: "The Naval Battle In Bali Strait" };
  } else if (predictedClass === 9) {
      result = { result: "The Rise Of Youth Organization" };
  } else if (predictedClass === 10) {
      result = { result: "Painting I Gusti Ngurah Rai" };
  } else if (predictedClass === 11) {
      result = { result: "Painting Menyambut Proklamasi Kemerdekaan RI" };
  } else if (predictedClass === 12) {
      result = { result: "Painting Ngurah Rai Mengatur Siasat Tempur" };
  } else {
      result = { result: "RandomData" };
  }

  return result;
}

module.exports = { loadModel, predict, predictClass };