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