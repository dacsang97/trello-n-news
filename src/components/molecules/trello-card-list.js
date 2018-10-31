import React from 'react'
import styled from 'styled-components'
import { Paper } from '../atoms'
import TrelloCard from './trello-card'

const Wrapper = styled(Paper)`
  margin-bottom: 15px;
  padding: 20px;
  .header {
    h1 {
      color: rgb(0, 0, 0);
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
      margin: 0 0 14px;
    }
  }
`

export default ({ cards, lists, user }) => {
  let listAvailabel = []
  listAvailabel = lists.filter(
    list =>
      cards.filter(card => card.idList === list.id && card.idMembers.includes(user.id)).length > 0,
  )
  return (
    <div>
      {listAvailabel.map(list => {
        const listCards = cards.filter(
          card => card.idList === list.id && card.idMembers.includes(user.id),
        )
        return (
          <Wrapper key={list.id}>
            <div className="header">
              <h1>{list.name}</h1>
            </div>
            <div className="content">
              {listCards.map(card => (
                <TrelloCard key={card.id} {...card} />
              ))}
            </div>
          </Wrapper>
        )
      })}
    </div>
  )
}
