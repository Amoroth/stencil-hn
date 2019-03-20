import { Component, Prop, State } from '@stencil/core'
import { MatchResults } from '@stencil/router'
import { IStory } from '../../global/types'
import { truncateURL } from '../../global/app'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

@Component({
  tag: 'app-item'
})
export class AppItem {
  @Prop() match: MatchResults

  @State() storyObject: IStory
  @State() relativeTime: string

  async componentWillLoad() {
    const response: IStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.match.params.id}.json?print=pretty`)
      .then(res => res.json())
    this.storyObject = response
    dayjs.extend(relativeTime)
    this.relativeTime = dayjs(response.time * 1000).fromNow()
  }

  render() {
    return (
      <div>
        <h2>
          <a href={this.storyObject.url}>{this.storyObject.title}</a>
          <span> ({truncateURL(this.storyObject.url)})</span>
        </h2>
        <br />
        <span class="meta">{this.storyObject.score} points |</span>
        <span> by <stencil-route-link>{this.storyObject.by}</stencil-route-link> |</span>
        <span> {this.relativeTime}</span>
        {/* <app-comment /> */}
      </div>
    )
  }
}