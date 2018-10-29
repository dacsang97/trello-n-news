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
        if (callback) callback()
      },
      error: err,
    })
  }
}

export const getToken = () => TOKEN

const singleton = Symbol('singleton')
const singletonEnforcer = Symbol('singletonEnforcer')
export class Trello {
  API_KEY = 'be962f2b3d8d5d9767faa7be938423e0'

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton')
    }

    this._type = new Date()
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Trello(singletonEnforcer)
    }

    return this[singleton]
  }
}
