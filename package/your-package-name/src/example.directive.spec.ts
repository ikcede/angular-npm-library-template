import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleDirective } from './example.directive';

@Component({
  template: `
    <div example>
      <h1>Test Heading</h1>
    </div>
  `,
  standalone: true,
  imports: [ExampleDirective],
})
class DefaultTestComponent {}

describe('ExampleDirective', () => {
  let fixture: ComponentFixture<DefaultTestComponent>;
  let directive: ExampleDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleDirective],
    });
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(DefaultTestComponent);
    const directive = fixture.componentInstance;
    expect(directive).toBeTruthy();
  });
});
