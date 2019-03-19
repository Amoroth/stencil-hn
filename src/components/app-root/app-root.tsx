import { Component } from '@stencil/core'
import '@stencil/router'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <app-header />
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' routeRender={() => <stencil-router-redirect url={'/top'} />} exact={true} />
              <stencil-route url='/item/:id' component='app-item' />
              <stencil-route url='/user/:id' component='app-user' />
              <stencil-route url='/:stories/:page?' component='app-stories' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
