import React, { useState, useEffect } from 'react'
import groupBy from 'lodash.groupby'
import { H1 } from '../atoms/heading'
import { ListCardNews } from '../molecules'
import News from '../../utils/News'

export default () => {
  const [posts, setPosts] = useState([])

  function handleChangePosts(listPosts) {
    setPosts(listPosts)
  }

  useEffect(
    () => {
      News.instance.posts().then(res => handleChangePosts(groupBy(res.data, 'publication.id')))
    },
    ['posts'],
  )

  return (
    <div>
      <H1>News</H1>
      {posts.length === 0 ? (
        <p>Loading</p>
      ) : (
        <div>
          {Object.keys(posts).map(publication => (
            <ListCardNews key={publication} posts={posts[publication]} />
          ))}
        </div>
      )}
    </div>
  )
}
