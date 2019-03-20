import { Component, Prop, State } from '@stencil/core'
import { MatchResults } from '@stencil/router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IUser } from '../../global/types'

@Component({
  tag: 'app-user',
  styleUrl: 'app-user.css',
  shadow: true
})
export class AppUser {
  @Prop() match: MatchResults

  @State() userObject: IUser
  @State() relativeTime: string

  async componentWillLoad() {
    const userId = this.match.params.id
    const response: IUser = await fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`)
      .then((res) => res.json())
    this.userObject = response
    dayjs.extend(relativeTime)
    this.relativeTime = dayjs(response.created * 1000).fromNow()
  }

  render() {
    return (
      <div class="column">
        <div class="user-container">
          <h2>User: {this.userObject.id}</h2>
          <ul>
            <li><span>Created: </span>{dayjs(this.userObject.created * 1000).format('YYYY-MM-DD')} | {this.relativeTime}</li>
            <li><span>Karma: </span>{this.userObject.karma}</li>
            <li class="about" innerHTML={this.userObject.about}></li>
          </ul>
        </div>
      </div>
    )
  }
}