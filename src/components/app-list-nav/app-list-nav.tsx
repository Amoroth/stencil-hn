import { Component, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'app-list-nav'
})
export class AppListNav {
  @Prop() page!: number
  @Prop() max!: number

  @Event() pageIncrement: EventEmitter
  @Event() pageDecrement: EventEmitter

  render() {
    return (
      <div>
        <button onClick={() => this.pageDecrement.emit()} disabled={this.page === 0}>Prev</button>
        <span>{this.page + 1}/{this.max}</span>
        <button onClick={() => this.pageIncrement.emit()}>Next</button>
      </div>
    )
  }
}