import { useEffect, useRef } from "react";

const CursorCicle = () => {
  const ball = useRef()

  useEffect(() => {
    gsap.set(ball.current, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.25;
    const xSet = gsap.quickSetter(ball.current, "x", "px");
    const ySet = gsap.quickSetter(ball.current, "y", "px");

    window.addEventListener("mousemove", e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, [ball])

  return (
    <div ref={ball} className=" w-3 h-3 fixed top-0 left-0 bg-white rounded-full pointer-events-none"></div>
  )
}

export default CursorCicle


// Change circle size and Color when hover a Link

/*   
  const link = document.getElementById("footer")

    function linkAnimIn() {
      gsap.to(ball.current, {
        duration: 0.3,
        scale: 2
      })
      ball.current.classList.add("border-indigo-400")
    }

    function linkAnimOut() {
      gsap.to(ball.current, {
        duration: 0.3,
        scale: 1
      })
      ball.current.classList.remove("border-indigo-400")
    }


    link.addEventListener('mouseover', e => {
      linkAnimIn();
    });

    link.addEventListener('mouseout', e => {
      linkAnimOut();
    }) */;

