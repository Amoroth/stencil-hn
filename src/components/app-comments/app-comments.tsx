import { Component, Prop, State } from '@stencil/core'
import { IComment } from '../../global/types'


@Component({
  tag: 'app-comments',
  styleUrl: 'app-comments.css',
  shadow: true
})
export class AppComments {
  @Prop() comments!: number[]

  @State() commentObjects: IComment[] = []

  async componentDidLoad() {
    for (let i = 0; i < this.comments.length; i++) {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.comments[i]}.json?print=pretty`)
        .then(res => res.json())
      this.commentObjects = [...this.commentObjects, response]
    }
  }

  render() {
    const comments = this.commentObjects.map((comment) => {
      return <app-comment comment={comment} />
    })
    return (
      <ul>
        {comments}
      </ul>
    )
  }
}