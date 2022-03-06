import gsap from "gsap";
import { useEffect, useRef } from "react";

const CursorCicle = () => {
  const ball = useRef()

  useEffect(() => {
    gsap.set(ball.current, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.10;
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

    /*   const links = document.querySelectorAll(".linkCircle")
      console.log(links);
  
      function linkAnimIn() {
        gsap.to(ball.current, {
          duration: 0.3,
          scale: 2.5
        })
        ball.current.classList.add("border-[1.5px]")
      }
  
      function linkAnimOut() {
        gsap.to(ball.current, {
          duration: 0.3,
          scale: 1
        })
      }
  
      links.forEach(link => {
        link.addEventListener('mouseover', e => {
          linkAnimIn();
        });
  
        link.addEventListener('mouseout', e => {
          linkAnimOut();
        })
      }) */

  }, [ball])

  return (
    <div ref={ball} className=" w-3 h-3 fixed top-0 left-0 md:bg-white  rounded-full pointer-events-none dark:bg-black"></div>
  )
}

export default CursorCicle



