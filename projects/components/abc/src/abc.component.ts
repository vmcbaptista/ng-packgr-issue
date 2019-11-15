import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-abc',
  template: `
    <p>
      components works!
    </p>
  `,
  styles: []
})
export class AbcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
