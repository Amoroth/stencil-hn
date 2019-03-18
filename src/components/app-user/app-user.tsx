import { Component, Prop } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
  tag: 'app-user'
})
export class AppUser {
  @Prop() match: MatchResults

  render() {
    return (
      <div>
        <p>User {this.match.params.id}</p>
      </div>
    )
  }
}