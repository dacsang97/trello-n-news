import React from 'react'
import CardNews from './card-news'

export default ({ posts }) => {
  const {
    publication: { image, name },
  } = posts[0]
  return <CardNews image={image} title={name} posts={posts} />
}
