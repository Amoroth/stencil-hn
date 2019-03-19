import { Component, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'app-list-nav',
  styleUrl: 'app-list-nav.css',
  shadow: true
})
export class AppListNav {
  @Prop() page!: number
  @Prop() max!: number

  @Event() pageIncrement: EventEmitter
  @Event() pageDecrement: EventEmitter

  render() {
    return (
      <div>
        <a onClick={() => this.pageDecrement.emit()}>Prev</a>
        <span>{this.page + 1}/{this.max}</span>
        <a onClick={() => this.pageIncrement.emit()}>Next</a>
      </div>
    )
  }
}