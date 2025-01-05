import { IsMobileDirective } from './is-mobile.directive';
import { ElementRef } from '@angular/core';

describe('IsMobileDirective', () => {
  it('should create an instance', () => {
    const directive = new IsMobileDirective(
      { nativeElement: document.createElement('div') } as ElementRef,
      jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass'])
    );
    expect(directive).toBeTruthy();
  });
});
