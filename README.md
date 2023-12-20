# ArtventureIndonesia-CC

// explain something about cloud computing

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
| [**/predict**](#predict)                                 | POST        | Perform image prediction and validation       | Backend |
| [**/predicts**](#predicts)                               | POST        | Upload and process image in Machine Learning  |    ML   |


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
1. <a name="users-login"></a> `/users/login`
   - API: Backend
   - Description: User login
   

2. <a name="users-register"></a> `/users/register`
   - API: Backend
   - Description: User registration
   

#### Museum and Task

1. <a name="museum"></a> `/museum`
    - API: Backend
    - Description: Get all museums
   

2. <a name="museummuseum_id"></a> `/museum/museum_id`
    - API: Backend
    - Description: Get all tasks for a museum
   

3. <a name="museummuseum_idtask_id"></a> `/museum/museum_id/task_id`
    - API: Backend
    - Description: Get task by ID
   

#### Rewards

1. <a name="rewards"></a> `/rewards`
    - API: Backend
    - Description: Get all rewards
   

2. <a name="rewardsreward_id"></a> `/rewards/reward_id`
    - API: Backend
    - Description: Get reward by ID
   

#### Predict

1. <a name="predict"></a> `/predict`
    - API: Backend
    - Description: Perform image prediction and validation
   

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

1. <a name="predicts"></a> `/predicts`
    - API: ML
    - Description: Upload and process image in Machine Learning
   
