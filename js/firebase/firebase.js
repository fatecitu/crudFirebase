/**
 * Copyright 2023 Prof. Ms. Ricardo Leme All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 'use strict' //modo estrito

/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyDhl44OsQSNolGnX_fbjan77VfWULwXZnM",
  authDomain: "crud-firebase-df321.firebaseapp.com",
  projectId: "crud-firebase-df321",
  storageBucket: "crud-firebase-df321.appspot.com",
  messagingSenderId: "87327883104",
  appId: "1:87327883104:web:ff18d2826d0692ecf62805"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    "clientes":{
    ".read": "auth != null",
    ".write": "auth != null"
  },
    "usuarios":{
    ".read": "auth != null",
    ".write": "auth != null"
  }
 }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
// Crie uma referência para o Realtime Database do Firebase
const database = firebase.database();
// Crie uma referência para o armazenamento do Firebase
const storageRef = firebase.storage().ref();
