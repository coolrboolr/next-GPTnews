/*import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

try {
  firebase.initializeApp({
    databaseURL: 'https://hacker-news.firebaseio.com',
  })
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const root = firebase.database().ref('v0')

export default root
*/

import { PrismaClient } from '@prisma/client';


/*
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Ensuring the Prisma instance is reused during hot-reloading

  
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}
*/

const prisma = new PrismaClient();

export default prisma;