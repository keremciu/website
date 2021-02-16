import { useState } from 'react'

import Hero from "./hero";

const hairList = ['', 'mohawk', 'gray', 'long']

export default function Intro() {
  const [reveal, setReveal] = useState(false)
  const [hairStyle, setHairStyle] = useState('mohawk')
  const filteredHairList = hairList.filter(style => style !== hairStyle)
  const changeAvatar = () => {
    setReveal(true)
    setHairStyle(filteredHairList[Math.floor(Math.random() * filteredHairList.length)])
  }

  return (
    <div className="container">
      <section>
        <div className="avatar" onClick={changeAvatar}>
          <picture className="top">
            <source
              srcSet="/avatar_256.webp 1x, /avatar_640.webp 2x, /avatar_828.webp 3x"
              type="image/webp"
            />
            <source srcSet="/avatar.png" type="image/png" />
            <img
              alt="Drawing of Kerem Sevencan"
              src="/avatar_828.webp"
              style={{ width: '12rem', height: '10.7rem' }}
            />
          </picture>
          {hairStyle !== '' &&
            <img
              alt={`${hairStyle} of Kerem`}
              src={`/${hairStyle}_hair.png`}
              className={reveal ? 'bottom reveal' : 'bottom'}
              onAnimationEnd={() => setReveal(false)}
            />
          }
        </div>
        <Hero
          label="DIGITAL EXPERIENCE DEVELOPER"
          title={
            <span>
              hello! I am Kerem
              <svg
                className="name-vector"
                width="140"
                height="60"
                viewBox="0 0 140 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M38.0919 37.0732L18.3039 27.8049L140 0L115.265 16.5854L140 24.878L0 60L38.0919 37.0732Z" />
              </svg>
            </span>
          }
          description={
            <span>
              a butterfly who is collecting colors to provide beautiful experiences
              <br />
              mostly after creating games and simple web apps
            </span>
          }
        />
      </section>
      <style jsx>{`
        .avatar {
          position: relative;
          display: inline-flex;
          margin-bottom: 2rem;
          height: 11rem;
          cursor: pointer;
        }
        .avatar img.top {
          position: absolute;
          animation-name: example;
          animation-duration: 0.5s;
        }
        .avatar img.bottom {
          position: absolute;
          z-index: 2;
          width: 4.8rem;
          height: 4.6rem;
          left: 3.95rem;
          top: -0.55rem;
        }
        .avatar img.bottom.reveal {
          animation-name: reveal;
          animation-duration: 0.8s;
          animation-timing-function: ease-in-out;
          transform: scale(1.2);
        }
        @keyframes reveal {
          0% {
            opacity: 0;
            transform: scale(1.1);
          }
          30% {
            transform: scale(1.1);
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes example {
          from {
            filter: blur(3px) brightness(1.2);
          }
          to {
            filter: blur(0px) brightness(1);
          }
        }
        .name-vector {
          position: absolute;
          top: 0rem;
          left: 10rem;
          z-index: -1;
          content: " ";
          display: block;
          width: 9rem;
          height: 4rem;
          fill: var(--yellow-color);
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .avatar {
            margin-left: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
