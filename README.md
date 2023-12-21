# ArtventureIndonesia-CC

Welcome to the `Cloud Computing` Cohort repository! This repository is dedicated to showcasing the backend API and machine learning (ML) components developed during our Cloud Computing part. The backend API is built using `Node.js` with the `Hapi.js` framework, providing robust and scalable functionalities. Additionally, the ML API is implemented with `Node.js` using the `Express.js` framework, offering a seamless integration for machine learning capabilities.

## Authors by Team ID: `CH2-PS498`
| Name                                    | Bangkit-ID    | Cohort              |
|-----------------------------------------|---------------|---------------------|
| Syaiful Hendri Irawan                   | `M193BSY1058` | Machine Learning    |
| Anak Agung Sagung Mirah Indira Wardhana | `M014BSX1481` | Machine Learning    |
| Arya Dimas Taffarel Wicaksana           | `M200BSY0953` | Machine Learning    |
| __Muhammad Tafif Qairawan Assiddiqi__   | `C324BSY3736` | __Cloud Computing__ |
| __Ida Bagus Mas Manuaba__               | `C014BSY4272` | __Cloud Computing__ |
| I Gede Krisna Juniarta                  | `A014BSY2738` | Mobile Development  |

# Cloud Infrastructure
<img src="./assets/artventure-cloudinfra.png">

# API Reference

## Endpoint Routes

| Route                                                    | HTTP Method | Description                                   |   API   |
|----------------------------------------------------------|-------------|-----------------------------------------------|---------|
| [**/users/login**](#users-login)                         | POST        | User login                                    | Backend |
| [**/users/register**](#users-register)                   | POST        | User registration                             | Backend |
| [**/museum**](#museum)                                   | GET         | Get all museums                               | Backend |
| [**/museum/museum_id**](#museummuseum_id)                | GET         | Get all tasks for a museum                    | Backend |
| [**/museum/museum_id/task_id**](#museummuseum_idtask_id) | GET         | Get task by ID                                | Backend |
| [**/rewards**](#rewards)                                 | GET         | Get all rewards                               | Backend |
| [**/rewards/reward_id**](#rewardsreward_id)              | GET         | Get reward by ID                              | Backend |
| [**/predict**](#predict_backend)                         | POST        | Perform image prediction and validation       | Backend |
| [**/predicts**](#predict_ml)                             | POST        | Upload and process image in Machine Learning  |    ML   |


### Backend API

- Deployed Endpoint : `https://artventure-server-backend-bx6pwrssuq-et.a.run.app`

- Full Documentation : `https://documenter.getpostman.com/view/20128885/2s9YkhiQGB`

- Tools and Packages :
  - **@google-cloud/storage:** Version 7.7.0
  - **@hapi/hapi:** Version 21.3.2
  - **axios:** Version 1.6.2
  - **firebase-admin:** Version 11.11.1
  - **form-data:** Version 4.0.0
  - **fs:** Version 0.0.1-security

<p align="left">
  <a href="https://cloud.google.com" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="Google Cloud" width="40" height="40"/>
  </a>
  <a href="https://firebase.google.com" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase Admin" width="40" height="40"/>
  </a>
  <a href="https://hapi.dev" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/hapi-21.3.2-brightgreen" alt="@hapi/hapi" />
  </a>
  <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/axios-1.6.2-blue" alt="axios" />
  </a>
  <a href="https://github.com/form-data/form-data" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/form--data-4.0.0-orange" alt="form-data" />
  </a>
  <a href="https://www.npmjs.com/package/fs" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/fs-0.0.1--security-red" alt="fs" />
  </a>
</p>

`⚠️ Before making requests to this API, please note that an API key is required for authentication ⚠️`

#### Users
1. <a name="users-login">Login user</a>
    - Endpoint : `/users/login`
    - Method : `POST`
    - API: `Backend`
    - Request Body :
      - `user_name` (string): The name of the user to be registered.
      - `user_email` (string): The email address of the user.
      - `user_password` (string): The password chosen by the user.

      **Example:**
      ```formdata
      user_name: test
      user_email: test@gmail.com
      user_password: test1234
      ```
    - Response : 
      ```json
      {
        "error": false,
        "message": "Login Success!",
        "userData": {
          "user_points": 0,
          "user_email": "test@gmail.com",
          "user_id": "u1702390925390",
          "user_name": "test",
          "completedTask": [],
          "user_pass": "test1234"
        }
      }
      ```
   
2. <a name="users-register">Register User</a>
    - Endpoint : `/users/register`
    - Method : `POST`
    - API: `Backend`
    - Request Body :
      - `user_name` (string): The name of the user to be registered.
      - `user_email` (string): The email address of the user.
      - `user_password` (string): The password chosen by the user.

      **Example:**
      ```formdata
      user_name: test
      user_email: test@gmail.com
      user_password: test1234
      ```
    - Response : 
      ```json
      {
        "error": false,
        "message": "Register Success!"
      }
      ```

#### Museum and Task

1. <a name="museum">Get All Museum</a>
    - Endpoint : `/museum`
    - Method : `GET`
    - API: `Backend`

    - Response : 
      ```json
      {
      "error": false,
      "message": "Get Museum data success!",
      "museumData": [
        {
          "museum_id": 1,
          "museum_doc": "pohR79Bp9F6GNlV1FEmi",
          "museum_name": "Museum Bajra Sandhi",
          "address": "Denpasar",
          "location": {
            "_latitude": -8.671565925092636,
            "_longitude": 115.23389569640645
          },
          "url_museum_img": "https://storage.googleapis.com/artventure/museum/bajrasandhi.jpg",
          "isOpen": true
        },
        ...]
      }
      ```
    
2. <a name="museummuseum_id">Get All Task in a Museum</a>
    - Endpoint : `/museum/{museum_id}`
    - Method : `GET`
    - API: `Backend`

    - Response : 
      ```json
      {
      "error": false,
      "message": "Get Task data success!",
      "taskData": [
        {
          "object_id": 1,
          "object_doc": "8gqqCnsAMUNVCMAk0VOK",
          "object_name": "Bali Following Independence",
          "object_year": "1950-1975",
          "object_description": "This diorama, then, offers a three-dimensional depiction of Bali in the years following its independence, from 1950 to 1975. It showcases a rural scene with a volcano in the background and a village in the foreground. The village, composed of traditional Balinese houses and buildings, mirrors the island’s rich cultural heritage. The development of Bali during this period was deeply rooted in its culture, with Hinduism serving as its spiritual core.  The diorama also underscores the sectors that were the focus of Bali’s development during this period: tourism, education, and agriculture. The reference to Taman Werdhi Budaya signifies the importance of tourism, while Udayana University represents the emphasis on education. The depiction of the rural landscape and the village foregrounds the significance of agriculture in Bali’s economy. This diorama, therefore, serves as a tangible narrative of Bali’s journey and growth in the years following its independence.",
          "points": 10,
          "takenBy": [
            "u1702451441057"
          ]
        },
        ...]
      }
      ```

3. <a name="museummuseum_idtask_id">Get Task By Id</a>
    - Endpoint : `/museum/{museum_id}/{task_id}`
    - Method : `GET`
    - API: `Backend`

    - Response : 
      ```json
      {
        "error": false,
        "message": "Get Task data by Id success!",
        "taskData": {
          "object_id": 1,
          "object_doc": "8gqqCnsAMUNVCMAk0VOK",
          "object_name": "Bali Following Independence",
          "object_year": "1950-1975",
          "object_description": "This diorama, then, offers a three-dimensional depiction of Bali in the years following its independence, from 1950 to 1975. It showcases a rural scene with a volcano in the background and a village in the foreground. The village, composed of traditional Balinese houses and buildings, mirrors the island’s rich cultural heritage. The development of Bali during this period was deeply rooted in its culture, with Hinduism serving as its spiritual core.  The diorama also underscores the sectors that were the focus of Bali’s development during this period: tourism, education, and agriculture. The reference to Taman Werdhi Budaya signifies the importance of tourism, while Udayana University represents the emphasis on education. The depiction of the rural landscape and the village foregrounds the significance of agriculture in Bali’s economy. This diorama, therefore, serves as a tangible narrative of Bali’s journey and growth in the years following its independence.",
          "points": 10,
          "takenBy": [
            "u1702540070861"
          ]
        }
      }
      ```

#### Rewards

1. <a name="rewards">Get All Rewards</a>
    - Endpoint : `/rewards`
    - Method : `GET`
    - API: `Backend`

    - Response : 
      ```json
      {
        "error": false,
        "message": "Get Reward data success!",
        "rewardData": [
          {
            "reward_id": 1,
            "reward_doc": "vAJbzNOl6EVoI4AGYxBB",
            "reward_name": "Polo T-Shirt",
            "reward_point": 100,
            "url_reward_img": "https://storage.googleapis.com/artventure/reward/Polo.jpg"
          },
          ...]
      }
      ```

2. <a name="rewardsreward_id">Get Reward By Id</a>
    - Endpoint : `/rewards/{rewards_id}`
    - Method : `GET`
    - API: `Backend`

    - Response : 
      ```json
      {
        "error": false,
        "message": "Get Reward data success!",
        "rewardData":
          {
            "reward_id": 1,
            "reward_doc": "vAJbzNOl6EVoI4AGYxBB",
            "reward_name": "Polo T-Shirt",
            "reward_point": 100,
            "url_reward_img": "https://storage.googleapis.com/artventure/reward/Polo.jpg"
          },
      }
      ```

#### Predict

1. <a name="predict_backend">Predict in Backend API</a>
    - Endpoint : `/predict`
    - Method : `POST`
    - API: `Backend`
    - Request Body : 
      - `imageFile` (file): The image file to be uploaded.
      - `user_id` (string): The unique identifier of the user.

      **Example:**
      ```formdata
      imageFile: DangHyangNirartha.jpg
      user_id: u1702540070861
      ```

    - Response : 
      ```json
      {
        "error": false,
        "message": "Image sent successfully",
        "result": "Berhasil"
      }
      ```
   

### ML API

- Deployed Endpoint : `https://ml-tfjs-bx6pwrssuq-et.a.run.app`

- Full Documentation : `https://documenter.getpostman.com/view/20128885/2s9Ykq6fVa`

- Tools and Packages :
  - **@tensorflow/tfjs-node:** Version 4.14.0
  - **express:** Version 4.18.0
  - **fs:** Version 0.0.1-security
  - **multer:** Version 1.4.5-lts.1

<p align="left">
  <a href="https://www.tensorflow.org/js" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow.js Node" width="40" height="40"/>
  </a>
  <a href="https://expressjs.com" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/express-4.18.0-green" alt="Express" />
  </a>
  <a href="https://www.npmjs.com/package/fs" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/fs-0.0.1--security-red" alt="fs" />
  </a>
  <a href="https://www.npmjs.com/package/multer" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/multer-1.4.5--lts.1-blue" alt="multer" />
  </a>
</p>


#### Predict

1. <a name="predict_ml">Predict in ML API</a>
    - Endpoint : `/predicts`
    - Method : `POST`
    - API: `ML`
    - Request Body : 
      - `imageFile` (file): The image file to be uploaded.

      **Example:**
      ```formdata
      imageFile: DangHyangNirartha.jpg
      ```

    - Response : 
      ```json
      {
        "result": "Dang Hyang Nirartha"
      }
      ```
   
