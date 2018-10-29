import axios from 'axios'

const singleton = Symbol('singleton')
const singletonEnforcer = Symbol('singletonEnforcer')

export default class News {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton')
    }
    this._api = axios.create({
      baseURL: 'https://wt-13aa445b4e3aa3eaf74205a4bf23c313-0.sandbox.auth0-extend.com/news',
    })
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new News(singletonEnforcer)
    }

    return this[singleton]
  }

  publications() {
    return this._api.get('/publications')
  }

  posts() {
    return this._api.get('/posts')
  }
}
