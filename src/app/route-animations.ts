import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slideRigth =
  trigger('routeAnimations', [
    transition('slideLeft => slideRigth', slideTo('rigth','left')),
    transition('slideRigth => slideLeft', slideTo('left','rigth')),
  ]);


function slideTo(from:string, to:string){
  if (from === 'rigth' && to === 'left'){
    from = '100vw';
    to = '-100vw';
  }else if(from === 'left' && to === 'rigth'){
    from = '-100vw';
    to = '100vw';
  }

  return [
    query(':enter, :leave',[
      style({
        position: 'absolute',
      })
    ]),
    query(':enter', [
      style({ transform : `translateX(${from})` })
    ]),
    group([
      query(':leave', [
        animate('500ms ease', style({ transform: `translateX(${to})` }))
      ], {optional:true}),
      query(':enter', [
        animate('500ms ease', style({ transform: `translateX(0vw)` }))
      ], {optional:true}),
    ])
  ];
}
