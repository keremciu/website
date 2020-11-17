import Image from "next/image";

import Hero from "./hero";

export default function Intro() {
  return (
    <div className="container">
      <section>
        <div className="avatar">
          <Image
            width={144}
            height={130}
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
          width: 9em;
          margin-bottom: 2rem;
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
            top: -20px;
            left: 100px;
          }
        }
      `}</style>
    </div>
  );
}
