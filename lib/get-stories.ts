/*import db from './db'
import { transform } from './get-item'

export default async function getStories(
  type = 'topstories',
  { page = 1, max = 30 } = {}
) {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db.child(type).once('value')
  const stories = await Promise.all<any>(
    ids
      .val()
      .slice(start, end)
      .map((id) => db.child('item').child(id).once('value'))
  )
  return stories.map((obj) => transform(obj.val()))
}

*/

import prisma from './db'; // Assuming db.ts exports the Prisma client instance
import { transform } from './get-item';

export default async function getStories(
  category = 'world_news',
  { page = 1, max = 30 } = {}
) {
  const start = (page - 1) * max;

  // Fetch story IDs based on type and paginate using skip and take
  const storyData = await prisma.Article.findMany({
    where: { category }, // Adjust 'type' field based on your schema's actual field name
    skip: start,
    take: max,
  });

  // Transform each story object
  const stories = storyData.map(story => transform(story));

  return stories;
}