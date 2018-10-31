import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Select, Avatar } from '../atoms'
import { Trello } from '../../utils/TrelloAPI'
import TrelloUser from './trello-user'
import TrelloCardList from './trello-card-list'

const Title = styled.div`
  text-transform: uppercase;
  color: #0076ff;
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0 0 10px;
`

const CustomRow = styled.div.attrs({
  className: 'row',
})`
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export default () => {
  const [boards, setBoards] = useState([])
  const [currentBoard, setCurrentBoard] = useState('')
  const [boardCards, setBoardCards] = useState([])
  const [boardLists, setBoardLists] = useState([])
  const [members, setMembers] = useState(null)
  const [me, setMe] = useState(null)
  const onChangeBoard = id => {
    setCurrentBoard(id)
    if (window && window.localStorage) {
      window.localStorage.setItem('current_board', id)
    }
    Trello.instance.boardMembers(id).then(res => {
      setMembers(res.data)
    })
    Trello.instance.boardLists(id).then(res => {
      setBoardLists(res.data)
    })
    Trello.instance.boardCards(id).then(res => {
      setBoardCards(res.data)
    })
  }
  useEffect(
    () => {
      Trello.instance.boards().then(res => {
        setBoards(res.data)
        let firstId = null
        let currentId = null
        if (res.data[0] && res.data[0].id) firstId = res.data[0].id
        if (window && window.localStorage) {
          currentId = window.localStorage.getItem('current_board')
        }
        if (currentId) {
          onChangeBoard(currentId)
        } else if (firstId) {
          onChangeBoard(firstId)
        }
      })
      Trello.instance.me().then(res => {
        setMe(res.data)
      })
    },
    ['boards', 'currentBoard', 'me', 'boardCards', 'boardLists', 'members'],
  )

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">{me && <TrelloUser user={me} />}</div>
        <div className="col-md-6">
          <div style={{ float: 'right' }}>
            <Select selected={currentBoard} options={boards} onChange={onChangeBoard} />
          </div>
        </div>
      </div>
      <CustomRow>
        <div className="col-md-12">
          <Title>Members</Title>
        </div>
        <div className="col-md-12">
          {members && (
            <div>
              {members.map(member => (
                <Avatar
                  key={member.id}
                  name={member.member.username}
                  src={`${member.member.avatarUrl}/50.png`}
                  size={32}
                />
              ))}
            </div>
          )}
        </div>
      </CustomRow>
      <div className="row">
        <div className="col">
          <Title>List</Title>
          <TrelloCardList cards={boardCards} lists={boardLists} user={me} />
        </div>
      </div>
    </React.Fragment>
  )
}
