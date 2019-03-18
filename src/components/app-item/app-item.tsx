import { Component, Prop } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
  tag: 'app-item'
})
export class AppItem {
  @Prop() match: MatchResults

  render() {
    return (
      <div>
        <p>Item {this.match.params.id}</p>
      </div>
    )
  }
}