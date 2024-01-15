import gsap, { Power0 } from 'gsap';

// another option is to make an array of animations for mobile and desktop separately
export const animations = [
  {
    selector: '#party',
    duration: 3,
    scale: 0.9,
    ease: Power0.easeOut,
    x: 300,
    y: 100,
  },
  {
    selector: '#hand',
    duration: 3,
    scale: 0.9,
    ease: Power0.easeOut,
    x: -300,
    y: -200,
  },
  {
    selector: '#clover',
    duration: 3,
    scale: 1.3,
    ease: Power0.easeOut,
    x: -400,
    y: 100,
  },
];

export function mockupAnimation(mockupElement, textRef) {
  let tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.to(
    textRef,
    {
      duration: 1,
      opacity: 1,
      y: 0,
    },
    '-=0.5'
  )
    .to(mockupElement, {
      x: 0,
      opacity: 1,
      duration: 1,
    })

    .to(
      mockupElement,
      {
        rotate: 0,
        scale: 0.9,
      },
      '-=0.4'
    )
    .to(mockupElement, {
      duration: 3,
      scale: 1,
    });
}

export function widgetsAnimation(widgetElement) {
  const tl = gsap.timeline();
  tl.to(widgetElement, {
    duration: 0,
    opacity: 1,
  });
}

export function leavesAnimation(leavesElement, x, y) {
  const tl = gsap.timeline();
  tl.to(leavesElement, {
    duration: 1,
    x: x,
    y: y,
  });
}
