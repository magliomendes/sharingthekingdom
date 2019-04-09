import { query, animate, transition, trigger, style, stagger, keyframes } from '@angular/animations';

export function slideDownTilt(selector: string) {
    return trigger('slideDownTilt', [
        transition('* => void',
            query('.stk-item', [
                animate('900ms', keyframes([
                    style({ display: 'none' })
                ]))
            ], { optional: true })
        ),
        transition('* => *',
            query('.stk-item', [
                style({ transform: 'translateX(-1rem)', opacity: 0 }),
                stagger('75ms', [
                    animate('90ms', keyframes([
                        style({ transform: 'translateX(0)', opacity: 1, offset: 0 }),
                        style({ transform: 'scale3d(1, 1, 1) rotate3d(0, 0, .1, 1deg)', offset: 0.7 }),
                        style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
                    ]))
                ]),
            ], { optional: true })
        ),
    ]);
}