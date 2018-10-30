import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Select, Avatar } from '../atoms'
import { Trello } from '../../utils/TrelloAPI'

const User = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    margin-right: 5px;
  }
`

export default () => {
  const [boards, setBoards] = useState([])
  const setCurrentBoard = useState(null)[1]
  const [members, setMembers] = useState(null)
  const [me, setMe] = useState(null)
  const onChangeBoard = id => {
    setCurrentBoard(id)
    Trello.instance.boardMembers(id).then(res => {
      setMembers(res.data)
    })
  }
  useEffect(
    () => {
      Trello.instance.boards().then(res => {
        setBoards(res.data)
        if (res.data[0] && res.data[0].id) onChangeBoard(res.data[0].id)
      })
      Trello.instance.me().then(res => {
        setMe(res.data)
      })
    },
    ['boards', 'currentBoard', 'me'],
  )

  return (
    <div className="container-fluid">
      <div className="row">
        {me && (
          <React.Fragment>
            <div className="col-md-12">
              <User>
                Hello, <Avatar src={`${me.avatarUrl}/50.png`} size={32} />
                <strong>{me.fullName}</strong>
              </User>
            </div>
            <hr />
          </React.Fragment>
        )}
      </div>
      <div className="row">
        <div className="col-md-6">
          <Select options={boards} onChange={onChangeBoard} />
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
    </div>
  )
}
