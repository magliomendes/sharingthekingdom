import { trigger, transition, style, group, animate, query } from "@angular/animations";

const slideInFromBottom = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })
        , { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('.7s ease-in-out', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('.7s ease-in-out', style({ transform: 'translateY(-100%)' }))]
            , { optional: true }),
    ])
];

const slideOutToRight = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })
        , { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))]
            , { optional: true }),
    ])
];

const fadeInOut = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
        , { optional: true }),
    group([
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(1.5rem)' }),
            animate('0.5s 0.75s ease-in', style({ opacity: 1.0, transform: 'translateY(0rem)' }))
        ], { optional: true }),
        query(':leave', [
            style({ opacity: 1.0 }),
            animate('0.250s ease-out', style({ opacity: 0, transform: 'translateY(1.5rem)' }))
        ], { optional: true })
    ])
];

export const routerTransition = trigger('routerTransition',
    [
        transition('* => list', fadeInOut),
        transition('* => reading', slideInFromBottom)
    ]
)