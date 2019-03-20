import { Component, State, Prop, Watch, Listen } from '@stencil/core'
import { MatchResults, RouterHistory } from '@stencil/router'

type storiesTypes = 'topstories' | 'newstories' | 'showstories' | 'askstories' | 'jobstories'

@Component({
  tag: 'app-stories',
  styleUrl: 'app-stories.css'
})
export class AppStories {
  @Prop() history: RouterHistory
  @Prop() match: MatchResults

  @State() stories!: number[][]
  
  @Watch('match')
  watchMatchHandler(newValue: MatchResults, oldValue: MatchResults) {
    if (newValue.params.stories !== oldValue.params.stories) {
      this.fetchStories(this.getStoriesType())
    }
  }
  
  async componentWillLoad() {
    await this.fetchStories(this.getStoriesType())
  }
  
  getCurrentPage = () => this.match.params.page ? parseInt(this.match.params.page) : 0

  urlHN = (type: storiesTypes) => `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`
  
  getStoriesType() {
    let storiesUrl: storiesTypes
    switch(this.match.params.stories) {
      case 'top':
        storiesUrl = 'topstories'
      break
      case 'new':
        storiesUrl = 'newstories'
        break
      case 'show':
        storiesUrl = 'showstories'
        break
      case 'ask':
        storiesUrl = 'askstories'
        break
      case 'job':
        storiesUrl = 'jobstories'
        break
      default: storiesUrl='topstories'
    }
    return storiesUrl
  }

  async fetchStories(type: storiesTypes) {
    const response = await fetch(this.urlHN(type)).then(res => res.json())
    const storiesPerPage = 30
    const formattedStories = [response.slice(0, storiesPerPage)]
    for (let i = 1; i < Math.floor(response.length / storiesPerPage); i++) {
      formattedStories.push(response.slice(i * storiesPerPage, i * storiesPerPage + storiesPerPage))
    }
    this.stories = formattedStories
  }

  @Listen('pageIncrement')
  incrementPage() {
    console.log('increment')
    let nextPage = this.getCurrentPage() + 1
    if (nextPage < 2) nextPage = 2
    else if (nextPage > 25) nextPage = 25
    this.history.replace(`/${this.match.params.stories}/${nextPage}`)
  }
  
  @Listen('pageDecrement')
  decrementPage() {
    console.log('decrement')
    let nextPage = this.getCurrentPage() - 1
    if (nextPage < 2) {
      this.history.replace(`/${this.match.params.stories}`)
    } else {
      this.history.replace(`/${this.match.params.stories}/${nextPage}`)
    }
  }

  render() {
    // if page is 0 or none, ensure not to go to negatives
    let page = Math.max(this.getCurrentPage() - 1, 0)
    return (
      <div class="column stories-container">
        <app-list-nav page={page} max={this.stories.length} />
        <ul>
          {this.stories[page].map((val) => <app-story storyId={val} key={val} />)}
        </ul>
      </div>
    )
  }
}
