import Image from "next/image";

import Hero from "./hero";

export default function Intro() {
  return (
    <div className="container">
      <section>
        <div className="avatar">
          <Image
            width={190}
            height={170}
            src="/avatar.png"
            alt="Drawing of Kerem Sevencan"
          />
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
              a butterfly who is collecting colors to provide beautiful
              products.
              <br />
              mostly after creating games and simple web apps.
            </span>
          }
        />
      </section>
      <style jsx>{`
        .avatar {
          display: block;
          margin-bottom: 2rem;
        }
        .avatar img {
          animation-name: example;
          animation-duration: 10s;
        }
        @keyframes example {
          from {
            filter: blur(5px) brightness(3);
          }
          to {
            filter: blur(0px) brightness(1);
          }
        }
        .name-vector {
          position: absolute;
          top: -10px;
          left: 150px;
          z-index: -1;
          content: " ";
          display: block;
          width: 140px;
          height: 60px;
          fill: var(--yellow-color);
        }
        @media (max-width: 767px) {
          .name-vector {
            width: 90px;
            top: -16px;
            left: 100px;
          }
        }
        @media (max-width: 1024px) {
          .avatar {
            margin-left: 20px;
          }
        }
      `}</style>
    </div>
  );
}
