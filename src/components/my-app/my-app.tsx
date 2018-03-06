import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {


  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="boxed">
        <h1>{this.first} {this.last}</h1>
        {/* <h1>Bryan Kulzick</h1> */}
        <p><b>Class :</b> Mage </p>
        <p><b>Health:</b> 10 </p>

      </div>
    );
  }
}

