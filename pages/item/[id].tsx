import Page from '../../components/page'
import Item from '../../components/item'
import { getItem } from '../../lib/get-item'
import { useEffect, useState } from 'react'

export function getStaticPaths() {
  return {
    // always build a sanity check
    paths: [{ params: { id: '29001721' } }],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { id } }) {
  const story = await getItem(id)
  return {
    props: { story, id },
    revalidate: 1,
  }
}

// Render the story using the Item component
export default function ItemPage({ story }) {
  return (
    <Page>
      <Item story={story} />
    </Page>
  );
}

/* [NOTE] I don't think we need this??
export default function ItemPage({ story }) {
  console.log('story', story)
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (story)
      getComments(story.comments)
        .then((comments) => {
          setComments(comments)
        })
        .catch((err) => {
          // TODO: handle error
        })
  }, [story])

  return (
    <Page>
      <Item story={story} comments={comments} />
    </Page>
  )
}



//

export default function ItemPage({ story }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (story) {
      getComments(story.comments)
        .then((comments) => {
          setComments(comments)
        })
        .catch((err) => {
          // TODO: handle error
        });
    }
  }, [story]);

  return (
    <Page>
      {story.url ? (
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <Item story={story} comments={comments} />
        </a>
      ) : (
        <Item story={story} comments={comments} />
      )}
    </Page>
  );
}

*/