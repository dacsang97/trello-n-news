import React, { useState, useEffect } from 'react'
import { Select, Avatar } from '../atoms'
import { Trello } from '../../utils/TrelloAPI'
import TrelloUser from './trello-user'
import TrelloCardList from './trello-card-list'

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
    <div className="container-fluid">
      <div className="row">{me && <TrelloUser user={me} />}</div>
      <div className="row">
        <div className="col-md-6">
          <Select selected={currentBoard} options={boards} onChange={onChangeBoard} />
        </div>
        <div className="col-md-6">
          {members && (
            <div>
              {members.map(member => (
                <Avatar key={member.id} src={`${member.member.avatarUrl}/50.png`} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TrelloCardList cards={boardCards} lists={boardLists} user={me} />
        </div>
      </div>
    </div>
  )
}
