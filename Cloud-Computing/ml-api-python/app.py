from flask import Flask, request, jsonify
from predict import load_model, predict
from waitress import serve

app = Flask(__name__)

# Load the model when the application starts
model = load_model()
app.logger.info('Model Loaded!')

@app.route('/')
def home():
    return "You are connected to the Server. Let's Configure it!"

@app.route('/predicts', methods=['POST'])
def predict_handler():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image part'})

        image = request.files['image'].read()

        # Make a prediction using the loaded model
        predictions = predict(model, image)

        paper, rock, scissors = predictions[0]

        if paper:
            result = 'paper'
        elif rock:
            result = 'rock'
        elif scissors:
            result = 'scissors'
        else:
            result = 'error'

        return jsonify({'result': result})

    except Exception as e:
        app.logger.error(str(e))
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    ## Production
    app.run(host='127.0.0.1', port=8080, debug=True)

    ## Development
    # serve(app, host='127.0.0.1', port=8080, debug=True)
