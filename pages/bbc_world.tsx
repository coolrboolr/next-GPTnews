<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> e3c53ba378510fe9ab9e142c3c7384e52337a645
import Page from '../components/page'
import Stories from '../components/stories'
import getStories from '../lib/get-stories'

export async function getStaticProps() {
  const stories = await getStories('bbc_world')
  return { props: { stories }, revalidate: 1 }
}
<<<<<<< HEAD
export default function Newest({ stories }) {
=======
export default function Show({ stories }) {
>>>>>>> e3c53ba378510fe9ab9e142c3c7384e52337a645
  return (
    <Page>
      <Stories stories={stories} />
    </Page>
  )
}
