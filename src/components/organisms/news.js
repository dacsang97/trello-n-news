import React, { useState, useEffect } from 'react'
import groupBy from 'lodash.groupby'
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds'
import { H1 } from '../atoms/heading'
import { ListCardNews } from '../molecules'
import News from '../../utils/News'

export default () => {
  const [posts, setPosts] = useState([])

  function handleChangePosts(listPosts) {
    setPosts(listPosts)
  }

  function fetchPost() {
    News.instance.posts().then(res => {
      const { data } = res
      handleChangePosts(groupBy(data, 'publication.id'))
      if (window && window.localStorage) {
        window.localStorage.setItem('updated_at', new Date().toISOString())
        window.localStorage.setItem('latest_post', JSON.stringify(data))
      }
    })
  }

  useEffect(
    () => {
      if (window && window.localStorage) {
        const latestUpdated = window.localStorage.getItem('updated_at')
        if (
          !latestUpdated ||
          differenceInMilliseconds(new Date().toISOString(), latestUpdated) > 3600000
        ) {
          fetchPost()
        } else {
          const latestPost = JSON.parse(window.localStorage.getItem('latest_post'))
          handleChangePosts(groupBy(latestPost, 'publication.id'))
        }
      } else {
        fetchPost()
      }
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
