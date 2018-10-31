import React from 'react'
import styled from 'styled-components'
import { FieldSet } from '../atoms'

const CardWrapper = styled(FieldSet)`
  margin-bottom: 15px;
  transition: box-shadow 0.2s ease-in;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
  }
  .header {
    h1 {
      color: rgb(0, 0, 0);
      font-size: 20px;
      font-weight: 500;
      display: flex;
      transition: color 0.2s ease-in;
    }
    .publication-img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      margin-right: 10px;
    }
  }
  &:hover {
    .header > h1 {
      color: rgb(6, 125, 247);
    }
  }
  .content {
    ul {
      list-style-type: none;
      margin-left: 15px;
      padding: 0px;
      margin-block-start: 0px;
      margin-block-end: 0px;
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
    <div className="header">
      <h1>
        <img className="publication-img" src={image} alt={title} />
        {title}
      </h1>
    </div>
    <div className="content">
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
