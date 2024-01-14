import gsap from 'gsap';

export function mockupAnimation(mockupElement, textRef) {
  let tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.to(mockupElement, {
    x: 0,
  })
    .to(
      textRef,
      {
        duration: 1,
        opacity: 1,
      },
      '-=0.5'
    )
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
