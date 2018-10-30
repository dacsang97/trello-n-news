import React from 'react'
import styled from 'styled-components'
import { Paper } from '../atoms'

const CardWrapper = styled(Paper)`
  position: relative;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;
  overflow: hidden;
  margin-bottom: 15px;
  padding: 0;
  .content {
    background-color: white;
    border-radius: 5px;
    padding: 20px;

    h1 {
      color: rgb(0, 0, 0);
      font-size: 20px;
      font-weight: 500;
      margin: 0px 0px 14px;
      display: flex;
      transition: color 0.2s ease-in;

      .publication-img {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        margin-right: 10px;
      }
    }
    &:hover h1 {
      color: rgb(6, 125, 247);
    }
    ul {
      list-style-type: none;
      margin-left: 15px;
      padding: 0px;
      li {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 10px;
        :before {
          content: '-';
          display: inline-block;
          color: rgb(153, 153, 153);
          position: absolute;
          margin-left: -15px;
        }
        a {
          color: #111;

          :hover {
            color: rgb(6, 125, 247);
          }
        }
      }
    }
  }
  footer {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: rgb(68, 68, 68);
    display: flex;
    font-size: 12px;
    box-sizing: border-box;
    border-top: 1px solid rgb(234, 234, 234);
    padding: 15px;

    .publication-author {
    }
  }
`

export default ({ title, image, posts }) => (
  <CardWrapper>
    <div className="content">
      <h1>
        <img className="publication-img" src={image} alt={title} />
        {title}
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a target="_blank" rel="noopener noreferrer" href={post.url}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </CardWrapper>
)
