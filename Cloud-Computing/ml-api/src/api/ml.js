const { loadModel, predict } = require('./predict')

const MLHandlers = {
  predictHandlers: (req, res) => {
    try {
      const model = loadModel();
      console.log('Model Loaded!');

      const { image } = req.body;
      const predictions = predict(model, image);
  
      const [paper, rock] = predictions;
  
      if (paper) {
        res.json({ result: 'paper' });
      } else if (rock) {
        res.json({ result: 'rock' });
      } else {
        res.json({ result: 'scissors' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = { MLHandlers }