import { animate, keyframes, style, trigger, transition, query, stagger } from "@angular/animations";

export const rotate = trigger('firstSentenceAnimation', [
    transition('active => inactive', [
        query('div', [
            stagger('0ms',
                animate(
                    '3000ms',
                    keyframes([
                        style({
                            'background-image': 'url(/assets/images/share-branco.svg)',
                            offset: 0,
                        }),
                        style({
                            'background-image': 'url(/assets/images/coroa-branco.svg)',
                            offset: .33,
                        }),
                        style({
                            'background-image': 'url(/assets/images/mundo-branco.svg)',
                            offset: .66,
                        }),
                        style({
                            'background-image': 'url(/assets/images/share-branco.svg)',
                            offset: .95,
                        }),
                    ])
                )
            )
        ])
    ])
]);