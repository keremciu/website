import Tippy from "@tippyjs/react";

export default function Footer({ links }) {
  return (
    <>
      <footer>
        <p className="cvlink">
          Interested as a colleague?{" "}
          <a
            className="textlink"
            rel="license noopener noreferrer"
            href="https://keremciu.github.io/cv"
          >
            you can get my CV here
          </a>
          .
        </p>
        <div className="socials">
          {links.map((link) => (
            <a
              key={link.title}
              rel="license noopener noreferrer"
              href={link.href}
            >
              <Tippy
                theme="light"
                content={<div className="tooltipcontent">{link.title}</div>}
                interactive
                offset={[0, 13]}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="var(--heading-color)"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label={link.title}
                  focusable="false"
                >
                  <path d={link.svgPath} />
                </svg>
              </Tippy>
            </a>
          ))}
        </div>
        <p>© 2020 Kerem Sevencan. made in Berlin with love.</p>
        <div style={{ fontSize: 24 }}>🦁</div>
      </footer>

      <style jsx>{`
        .cvlink {
          font-size: 0.85rem;
        }

        .socials {
          display: flex;
          min-height: 70px;
          height: 70px;
          justify-content: space-between;
          width: 100%;
          max-width: 400px;
          padding: 1rem 0;
        }

        .socials a svg {
          opacity: 0.8;
          transform-origin: center center;
          transition: all 0.2s ease-out;
        }

        .socials a:hover svg {
          opacity: 1;
          transform: scale(1.15);
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </>
  );
}
