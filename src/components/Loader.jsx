import reactDom from 'react-dom'
import { useEffect, useRef, useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import gsap from 'gsap';

const Loader = () => {
  const { logoColor } = useContext(DarkModeContext)
  const loader = useRef()
  const logo = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(loader.current, {
      opacity: 1,
      duration: 0.7,
    }).to(logo.current, {
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    }).to(loader.current, {
      opacity: 0,
      autoAlpha: 0,
    })
  }, [])

  return (
    reactDom.createPortal(
      <div ref={loader} className={`grid place-content-center absolute top-0 left-0 z-50 w-full h-screen ${localStorage.getItem("theme") === "dark" ? "bg-white" : "bg-[#121212]"}`}>
        <svg ref={logo} tabIndex="0" aria-label="Logo Jeison Garzón" width="58" height="36" viewBox="0 0 58 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.8676 34.2405H23.871C29.908 34.2405 34.8025 29.3449 34.8025 23.3044V12.3695C34.8025 8.42121 36.8958 4.96532 40.0318 3.0445C40.1373 2.97983 40.1339 2.82667 40.025 2.76653C38.508 1.93717 36.7767 1.45951 34.9296 1.43796C28.8484 1.36875 23.871 6.42551 23.871 12.5079V23.3044C23.871 27.255 21.7755 30.7165 18.6361 32.6374C18.534 32.6998 18.5352 32.8484 18.6395 32.9063C20.1928 33.7583 21.9695 34.2405 23.8676 34.2405ZM23.8676 34.2405H12.9315C6.89451 34.2405 2 29.346 2 23.309V23.3056H12.9315V23.309C12.9315 27.3548 15.1303 30.889 18.4013 32.7746H18.4047C20.0135 33.7084 21.873 34.2405 23.8676 34.2405ZM45.7386 23.3056H40.2689M56.6736 12.3661V12.3695H45.742C45.742 8.32363 43.5398 4.794 40.2723 2.90382H40.2689C38.6601 1.97007 36.7971 1.43796 34.8025 1.43796H45.7375C51.7745 1.43796 56.6736 6.32907 56.6736 12.3661ZM56.6736 23.3056V23.309C56.6736 29.346 51.7745 34.2405 45.7375 34.2405L34.8025 34.2371C36.7971 34.2371 38.6601 33.7084 40.2689 32.7746C43.5398 30.8879 45.742 27.3548 45.742 23.309V23.3056H56.6736Z"
            stroke={logoColor} strokeWidth="2.4" strokeMiterlimit="10" />
        </svg>
      </div >, document.getElementById("loader"))
  )
}

export default Loader


