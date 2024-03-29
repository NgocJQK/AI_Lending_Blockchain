/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FirebaseOptions } from '@angular/fire/app';

const prodFirebaseConfig = {
  apiKey: "AIzaSyCaOGr93KCc8J2Ip_WDbhLvD806R_JWKlo",
  authDomain: "palm-chatbot-65e6c.firebaseapp.com",
  projectId: "palms-chatbot-65e6c",
  storageBucket: "palm-chatbot-65e6c.appspot.com",
  messagingSenderId: "593566773598",
  appId: "1:593566773598:web:02453333e11fa9fbb6dfcf",
  measurementId: "G-SKDHY4Z1QQ"
  // Add the Firebase config object for your web app here
  // https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article
};

export const environment: { firebase: FirebaseOptions } = {
  firebase: prodFirebaseConfig,
};
