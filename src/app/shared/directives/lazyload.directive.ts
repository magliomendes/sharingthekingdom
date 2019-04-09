import { Directive } from '@angular/core';

@Directive({
    selector: '[lazyload]',
    exportAs: 'lazyload'
})

export class LazyLoadDirective {
    constructor() { }
}