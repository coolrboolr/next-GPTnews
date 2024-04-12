/*import db from './db'

export default async function getItem(id) {
  const item = await db.child('item').child(id).once('value')
  const val = item.val()
  if (val) {
    return transform(val)
  } else {
    return null
  }
}

export function observe(id, fn) {
  const onval = (data) => fn(transform(data.val()))
  const item = db.child('item').child(id)
  item.on('value', onval)
  return () => item.off('value', onval)
}

export function transform(val) {
  return {
    id: val.id,
    url: val.url || null,
    user: val.by,
    // time is seconds since epoch, not ms
    date: new Date(val.time * 1000).toISOString(),
    // sometimes `kids` is `undefined`
    comments: val.kids || [],
    commentsCount: val.descendants || 0,
    score: val.score,
    title: val.title,
  }
}

*/
import { transformSync } from 'next/dist/build/swc';
import prisma from './db';  // Assuming db.ts exports the Prisma client instance

// Function to get an item by id from the database
export async function getItem(id: number | string) {
  const item = await prisma.article.findUnique({  // Assuming 'item' is your model name
    where: { id: Number(id) },
  });
  if (item) {
    return transform(item);
  } else {
    return null;
  }
}

// Function to transform the database record into the desired format
export function transform(val: any) {
  // Assuming 'headline' and 'summary' are the fields you want from your database record
  return {
    title: val.headline,
    url: val.url // or val.headline if you have a headline field
    //summary: val.text,  // TODO: to be added as reroute to chat with app
  };
}