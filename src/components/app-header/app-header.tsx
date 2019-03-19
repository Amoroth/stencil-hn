import { Component } from '@stencil/core'

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true
})
export class AppHeader {
  render() {
    return (
      <header>
        <nav class="column">
          <stencil-route-link url='/top'>
            <img src='../../assets/icon/icon.png' />
          </stencil-route-link>
          <stencil-route-link url='/top' activeClass="active-link">Top</stencil-route-link>
          <stencil-route-link url='/new' activeClass="active-link">New</stencil-route-link>
          <stencil-route-link url='/show' activeClass="active-link">Show</stencil-route-link>
          <stencil-route-link url='/ask' activeClass="active-link">Ask</stencil-route-link>
          <stencil-route-link url='/job' activeClass="active-link">Jobs</stencil-route-link>
          <a href="#" class="github-link">
            <img src='../../assets/GitHub-Mark.png' class="mobile-only" />
            <span class="desktop-only">Code on GitHub!</span>
          </a>
        </nav>
      </header>
    )
  }
}