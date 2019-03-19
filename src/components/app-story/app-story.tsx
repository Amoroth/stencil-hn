import { Component, Prop, State } from '@stencil/core'
import { IStory } from '../../global/types'

@Component({
  tag: 'app-story'
})
export class AppStory {
  @Prop() storyId!: number

  @State() storyObject: IStory

  async componentWillLoad() {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.storyId}.json?print=pretty`)
    const jsonResponse: IStory = await response.json()
    this.storyObject = jsonResponse
  }

  truncateURL = () => this.storyObject.url.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n]+)/i)[1]

  render() {
    return (
      <div>
        <p>Id: {this.storyObject.id}</p>
        <p>By: <stencil-route-link url={`/user/${this.storyObject.by}`}>{this.storyObject.by}</stencil-route-link></p>
        <p>Title: {this.storyObject.title}</p>
        <p>Url: {this.storyObject.url ? this.truncateURL() : null}</p>
        <p>Time: {new Date(this.storyObject.time).toString()}</p>
        <p>Score: {this.storyObject.score}</p>
        <p>Comments: <stencil-route-link url={`/item/${this.storyId}`}>{this.storyObject.descendants}</stencil-route-link></p>
      </div>
    )
  }
}