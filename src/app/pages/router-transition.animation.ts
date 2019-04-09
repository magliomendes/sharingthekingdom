import { trigger, transition, style, group, animate, query, stagger, keyframes } from "@angular/animations";

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

const slideInFromTop = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })
        , { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('.7s ease-in-out', style({ transform: 'translateY(0%)' })),
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('.7s ease-in-out', style({ transform: 'translateY(-100%)' }))]
            , { optional: true }),
    ]),
    query('.stk-family', [
        stagger('3.4s',
            animate('3.4s',
                keyframes([
                    style({
                        display: 'none',
                        offset: 0,
                    }),
                    style({
                        display: 'block',
                        offset: 1,
                    }),
                ])
            )
        )
    ], { optional: true }),
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

const slideOutToLeft = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })
        , { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(100%)' }),
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
        transition('* => about-us', fadeInOut),
        transition('* => home', slideOutToRight),
        transition('* => sections', slideInFromBottom),
        transition('* => galeries', fadeInOut),
        transition('* => calendar', fadeInOut),
        transition('* => devotional-list', slideInFromBottom),
        transition('* => visiting', fadeInOut),
        transition('* => store', fadeInOut)
    ]
)