import { Component, Prop, h, Watch, Listen } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: unknown;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    // @ts-ignore
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }

  componentWillLoad() {
    console.log('componentWillLoad::first::', this.first);
    console.log('componentWillLoad::middle::', this.middle);
    console.log('componentWillLoad::last::', this.last);
  }
}
