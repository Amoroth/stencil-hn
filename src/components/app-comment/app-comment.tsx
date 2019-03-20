import { Component, Prop, State } from '@stencil/core'
import { IComment } from '../../global/types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

@Component({
  tag: 'app-comment',
  styleUrl: 'app-comment.css',
  shadow: true
})
export class AppComment {
  @Prop() comment!: IComment

  @State() relativeTime: string

  componentWillLoad() {
    dayjs.extend(relativeTime)
    this.relativeTime = dayjs(this.comment.time * 1000).fromNow()
  }

  render() {
    return (
      <li>
        <div class="meta">
          <a href={`/user/${this.comment.by}`}>{this.comment.by}</a>
          <span> {this.relativeTime}</span>
        </div>
        <p class="comment-text" innerHTML={this.comment.text}></p>
        {this.comment.kids ? <app-comments indent comments={this.comment.kids} /> : null}
      </li>
    )
  }
}