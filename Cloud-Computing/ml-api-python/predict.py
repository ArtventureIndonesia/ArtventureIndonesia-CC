import tensorflow as tf

def load_model():
    model_url = './model.h5'
    return tf.keras.models.load_model(model_url)

def predict(model, image):
    # Assuming your predict function works with TensorFlow in a similar way
    # Adjust as needed based on your actual implementation
    tensor = tf.image.decode_jpeg(image)
    tensor = tf.image.resize(tensor, [150, 150])
    tensor = tf.expand_dims(tensor, axis=0)
    tensor = tf.cast(tensor, tf.float32)
    
    predictions = model.predict(tensor)
    return predictions
