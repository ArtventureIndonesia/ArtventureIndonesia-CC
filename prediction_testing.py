import tensorflow as tf

def load_model():
    model_url = './model_fix.h5'
    return tf.keras.models.load_model(model_url)

def predict(model, image_path):
    image = tf.io.read_file(image_path)
    image = tf.image.decode_jpeg(image, channels=3)
    image = tf.image.resize(image, [224, 224])
    image = tf.expand_dims(image, axis=0)
    image = tf.cast(image, tf.float32) / 255.0  


    predictions = model.predict(image)

    return predictions

# Example usage
loaded_model = load_model()
path = 'D:/DatasetMuseum/PaintingMenyambutProklamasiKemerdekaanRI/00190.jpg'
result = predict(loaded_model, path)
print(result)
