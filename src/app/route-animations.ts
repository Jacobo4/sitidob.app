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


function slideTo(firstDirection:string, secondDirection:string){
  if (firstDirection === 'rigth' && secondDirection === 'left'){
    firstDirection = '100vw';
    secondDirection = '-100vh';
  }else if(firstDirection === 'left' && secondDirection === 'rigth'){
    firstDirection = '-100vw';
    secondDirection = '100vh';
  }

  return [
    query(':enter, :leave',[
      style({
        position: 'absolute',
      })
    ]),
    query(':enter', [
      style({ transform : `translateX(${firstDirection})` })
    ]),
    group([
      query(':leave', [
        animate('500ms ease', style({ transform: `translateX(${secondDirection})` }))
      ], {optional:true}),
      query(':enter', [
        animate('500ms ease', style({ transform: `translateX(0vw)` }))
      ], {optional:true}),
    ])
  ];
}
