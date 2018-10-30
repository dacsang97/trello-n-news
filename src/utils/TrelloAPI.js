import axios from 'axios'

let TOKEN = null

export const login = (callback, err) => {
  if (window && window.Trello) {
    window.Trello.authorize({
      type: 'popup',
      name: 'Trello & News',
      scope: {
        read: 'true',
      },
      expiration: 'never',
      success() {
        TOKEN = window.localStorage.getItem('trello_token')
        if (callback) callback(TOKEN)
      },
      error: err,
    })
  }
}

export const getToken = () => TOKEN

export const setToken = token => {
  TOKEN = token
}

const singleton = Symbol('singleton')
const singletonEnforcer = Symbol('singletonEnforcer')
export class Trello {
  API_KEY = 'be962f2b3d8d5d9767faa7be938423e0'

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton')
    }

    this._api = axios.create({
      baseURL: 'https://api.trello.com/1/',
      params: {
        key: this.API_KEY,
        token: TOKEN,
        member: true,
        member_fields: 'fullname,avatarUrl,username',
      },
    })
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Trello(singletonEnforcer)
    }

    return this[singleton]
  }

  me() {
    return this._api.get('members/me')
  }

  boards() {
    return this._api.get('members/me/boards')
  }

  boardMembers(boardId) {
    return this._api.get(`boards/${boardId}/memberships`)
  }

  boardLists(boardId) {
    return this._api.get(`boards/${boardId}/lists`)
  }

  listCards(listId) {
    return this._api.get(`lists/${listId}/cards`)
  }
}
