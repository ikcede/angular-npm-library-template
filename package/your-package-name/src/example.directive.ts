import { Directive, OnInit } from '@angular/core';

/**
 * Example directive.
 */
@Directive({
  selector: '[example]',
  standalone: true,
})
export class ExampleDirective implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('ExampleDirective initialized');
  }
}
