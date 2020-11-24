export default function Switch() {
  function switchTheme() {
    let currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === undefined) {
      currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  }
  return (
    <div className="switch">
      <label onClick={switchTheme}>
        <div className="planet" />
        <div className="elements">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
        </div>
        <style jsx global>
          {`
            .switch {
              position: fixed;
              z-index: 1000;
              top: 1rem;
              left: 1rem;
            }
            label {
              cursor: pointer;
              padding: 1rem;
              position: relative;
              display: inline-block;
              transition: transform 0.3s;

              /* To make outline on mobile invisible */
              -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            }
            .planet {
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              overflow: hidden;
              background: radial-gradient(3.75em, 99%, transparent 100%);
              background-color: var(--bg-planet-bright);
              background-repeat: no-repeat;
              position: relative;
              will-change: background;
              transition: all 0.3s ease-in;

              /* Safari transition issue */
              backface-visibility: hidden;
              transform: translate3d(0, 0, 0);
            }
            label:hover {
              transform: scale(1.15);
            }
            .planet::after {
              content: "";
              background-color: var(--bg-planet-shadow);
              width: 2rem;
              height: 2rem;
              position: absolute;
              border-radius: 50%;
              will-change: opacity, transform, background-color;
              opacity: 0;
              transform: translate(2em, -2em);
              transition: opacity 400ms ease, transform 400ms ease,
                background-color 400ms ease;
            }
            .elements {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              transition: transform 400ms ease;
            }
            .elements svg {
              position: absolute;
              width: 7px;
              height: 7px;
              opacity: 1;
              transition: transform 400ms ease, opacity 200ms ease,
                width 200ms ease, height 200ms ease;
            }
            @media (max-width: 600px) {
              .elements svg {
                width: 5px;
                height: 5px;
              }
            }
            .elements svg circle {
              fill: var(--bg-planet-bright);
              transition: fill 400ms ease;
            }
            .elements svg:first-child {
              transform: translate(1.8em, 0.35em);
            }
            .elements svg:nth-child(2) {
              transform: translate(2.8em, 0.7em);
            }
            .elements svg:nth-child(3) {
              transform: translate(3.2em, 1.8em);
            }
            .elements svg:nth-child(4) {
              transform: translate(2.8em, 2.8em);
            }
            .elements svg:nth-child(5) {
              transform: translate(1.8em, 3.2em);
            }
            .elements svg:nth-child(6) {
              transform: translate(0.7em, 2.8em);
            }
            .elements svg:nth-child(7) {
              transform: translate(0.35em, 1.8em);
            }
            .elements svg:nth-child(8) {
              transform: translate(0.7em, 0.7em);
            }

            @media (prefers-color-scheme: dark) {
              html:not([data-theme="light"]) label .planet::after {
                opacity: 1;
                transform: translate(0.6em, -0.5em);
              }
              html:not([data-theme="light"]) label .elements {
                transform: rotate(180deg);
              }
              html:not([data-theme="light"]) label .elements svg:first-child {
                transform: translate(2em, 1em);
                opacity: 0;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(2) {
                transform: translate(3em, 1.5em);
                opacity: 0;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(3) {
                transform: translate(3em, 2em);
                opacity: 0;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(4) {
                transform: translate(3em, 2em);
                opacity: 0;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(5) {
                transform: translate(1.9em, 2.6em);
                width: 0.3em;
                height: 0.3em;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(6) {
                transform: translate(1.4em, 2.5em);
                width: 0.3em;
                height: 0.3em;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(7) {
                transform: translate(1.1em, 1.6em);
                width: 0.7em;
                height: 0.7em;
              }
              html:not([data-theme="light"]) label .elements svg:nth-child(8) {
                width: 0.45em;
                height: 0.45em;
                transform: translate(1.7em, 2.1em);
              }
              html:not([data-theme="light"])
                label
                .elements
                svg:nth-child(5)
                circle,
              html:not([data-theme="light"])
                label
                .elements
                svg:nth-child(6)
                circle,
              html:not([data-theme="light"])
                label
                .elements
                svg:nth-child(7)
                circle,
              html:not([data-theme="light"])
                label
                .elements
                svg:nth-child(8)
                circle {
                fill: var(--bg-planet-lightshadow);
              }
            }

            [data-theme="dark"] label .planet::after {
              opacity: 1;
              transform: translate(0.6em, -0.5em);
            }
            [data-theme="dark"] label .elements {
              transform: rotate(180deg);
            }
            [data-theme="dark"] label .elements svg:first-child {
              transform: translate(2em, 1em);
              opacity: 0;
            }
            [data-theme="dark"] label .elements svg:nth-child(2) {
              transform: translate(3em, 1.5em);
              opacity: 0;
            }
            [data-theme="dark"] label .elements svg:nth-child(3) {
              transform: translate(3em, 2em);
              opacity: 0;
            }
            [data-theme="dark"] label .elements svg:nth-child(4) {
              transform: translate(3em, 2em);
              opacity: 0;
            }
            [data-theme="dark"] label .elements svg:nth-child(5) {
              transform: translate(1.9em, 2.6em);
              width: 0.3em;
              height: 0.3em;
            }
            [data-theme="dark"] label .elements svg:nth-child(6) {
              transform: translate(1.4em, 2.5em);
              width: 0.3em;
              height: 0.3em;
            }
            [data-theme="dark"] label .elements svg:nth-child(7) {
              transform: translate(1.1em, 1.6em);
              width: 0.7em;
              height: 0.7em;
            }
            [data-theme="dark"] label .elements svg:nth-child(8) {
              width: 0.45em;
              height: 0.45em;
              transform: translate(1.7em, 2.1em);
            }
            [data-theme="dark"] label .elements svg:nth-child(5) circle,
            [data-theme="dark"] label .elements svg:nth-child(6) circle,
            [data-theme="dark"] label .elements svg:nth-child(7) circle,
            [data-theme="dark"] label .elements svg:nth-child(8) circle {
              fill: var(--bg-planet-lightshadow);
            }
          `}
        </style>
      </label>
    </div>
  );
}
