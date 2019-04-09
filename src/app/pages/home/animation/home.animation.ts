import { animate, keyframes, style, trigger, transition, query, stagger } from "@angular/animations";

export const sentenceFromLeft = trigger('firstSentenceAnimation', [
    transition('active => inactive', [
        query('span', [
            style({
                opacity: 0
            }),
            stagger('2000ms',
                animate(
                    '4000ms',
                    keyframes([
                        style({
                            width: '0%',
                            opacity: 0,
                            offset: 0
                        }),
                        style({
                            width: '100%',
                            opacity: 1,
                            offset: .2,
                        }),
                        style({
                            opacity: 0,
                            offset: .7,
                        }),
                        style({
                            opacity: 0,
                            offset: 1,
                        })
                    ])
                )
            )
        ])
    ])
]);

export const sentenceFromZ = trigger('secondSentenceAnimation', [
    transition('active => inactive', [
        query('span', [
            style({
                opacity: 0
            }),
            stagger('2000ms',
                animate(
                    '4000ms',
                    keyframes([
                        style({
                            transform: 'translateZ(60rem) translateX(20rem)',
                            opacity: 0,
                            offset: 0
                        }),
                        style({
                            transform: 'translateZ(0px) translateX(0px)',
                            opacity: 1,
                            offset: .3,
                        }),
                        style({
                            opacity: 0,
                            offset: .7,
                        }),
                        style({
                            opacity: 0,
                            offset: 1,
                        })
                    ])
                )
            )
        ])
    ])
]);

export const pulseBackground = trigger('circleAnimation', [
    transition('active => inactive', [
        query('.animated-circle', [
            style({
                opacity: 0
            }),
            animate('2s', keyframes([
                style({
                    transform: 'scale3d(.4, .4, .4)',
                    opacity: 0,
                    offset: 0
                }),
                style({
                    transform: 'scale3d(.9, .9, .9)',
                    opacity: .2,
                    offset: .7,
                }),
                style({
                    transform: 'scale3d(1, 1, 1)',
                    opacity: 0,
                    offset: 1,
                })
            ]))
        ])
    ])
]);

export const infinityArrowDown = trigger('arrowDown', [
    transition('* => *', [
        query('.animated-arrow', [
            style({
                opacity: 0
            }),
            animate('1s', keyframes([
                style({
                    transform: 'translate(0, -.9rem)',
                    offset: 0,
                    opacity: .1
                }),
                style({
                    transform: 'translate(0, -.5rem)',
                    offset: .2,
                    opacity: .8
                }),
                style({
                    transform: 'translate(0, 0rem)',
                    opacity: .3,
                    offset: .4
                }),
                style({
                    transform: 'translate(0, 0.2rem)',
                    offset: 1,
                    opacity: 0
                })
            ]))
        ])
    ])
])