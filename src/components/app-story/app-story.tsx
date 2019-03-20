import { Component, Prop, State } from '@stencil/core'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IStory } from '../../global/types'

@Component({
  tag: 'app-story',
  styleUrl: 'app-story.css',
  shadow: true
})
export class AppStory {
  @Prop() storyId!: number

  @State() storyObject: IStory
  @State() relativeTime: string

  async componentWillLoad() {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.storyId}.json?print=pretty`)
    const jsonResponse: IStory = await response.json()
    this.storyObject = jsonResponse
    dayjs.extend(relativeTime)
    this.relativeTime = dayjs(jsonResponse.time * 1000).fromNow()
  }

  truncateURL = () => this.storyObject.url.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n]+)/i)[1]

  render() {
    return (
      <li>
        <span class="score">{this.storyObject.score}</span>
        <span>
          <a href={this.storyObject.url || `/item/${this.storyId}`}>{this.storyObject.title}</a>
          {this.storyObject.url ? <span class="meta"> ({this.truncateURL()})</span> : null}
        </span>
        <br />
        <span class="meta">
          <span>by <stencil-route-link url={`/user/${this.storyObject.by}`}>{this.storyObject.by}</stencil-route-link></span>
          <span> {this.relativeTime}</span>
          <span> | <stencil-route-link url={`/item/${this.storyId}`}>{this.storyObject.descendants} comments</stencil-route-link></span>
        </span>
      </li>
    )
  }
}