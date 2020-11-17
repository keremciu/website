import Head from "next/head";

import Intro from "../components/intro";
import Bio from "../components/bio";

export default function Home() {
  function switchTheme() {
    const currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  }

  return (
    <main>
      <Head>
        <title>Kerem Sevencan | Digital Experience Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <button onClick={switchTheme}>Switch Theme</button>
      </div>
      <Intro />
      <Bio />
      <div>
        <div className="grid">
          <a
            href="https://github.com/keremciu/sketch-iconfont"
            className="card"
          >
            <h3>sketch-iconfont &rarr;</h3>
            <p>
              This plugin helps you easily insert and manage icons from icon
              fonts.
            </p>
          </a>

          <a
            href="https://github.com/keremciu/fifa-tournament-generator"
            className="card"
          >
            <h3>fifa-tournament-generator &rarr;</h3>
            <p>
              Web application to create and share fifa tournaments with your
              friends.
            </p>
          </a>

          <a href="https://github.com/keremciu/font-bundles" className="card">
            <h3>font-bundles &rarr;</h3>
            <p>Main font-bundle for sketch icon-font plugin.</p>
          </a>

          <a href="https://github.com/keremciu/sketch-repeat" className="card">
            <h3>sketch-repeat &rarr;</h3>
            <p>
              This plugin helps you easily duplicate your objects to all
              Artboards.
            </p>
          </a>
        </div>
      </div>

      <footer>
        <p className="cvlink">
          Interested as a colleague?{" "}
          <a
            rel="license noopener noreferrer"
            href="https://keremciu.github.io/cv"
            target="_blank"
          >
            you can get my CV here.
          </a>
        </p>
        <p>© 2020 Kerem Sevencan. made in Berlin with love.</p>
        <div style={{ fontSize: 24 }}>🦁</div>
      </footer>

      <style jsx>{`
        footer {
          margin: 0 auto;
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.625rem;
          font-weight: 400;
          padding-bottom: 2rem;
        }
        .cvlink {
          font-size: 0.75rem;
        }

        a {
          color: inherit;
          font-weight: 500;
          transition: all 0.25s ease-in;
        }
        a:hover {
          color: var(--heading-color);
          border-bottom: 1px solid;
          border-bottom-color: var(--heading-color);
          padding-bottom: 4px;
          text-decoration: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        :root {
          --bg-color: #ebebe5;
          --secondary-bg-color: white;
          --heading-color: black;
          --primary-color: #62625c;
          --secondary-color: #808080;
          --text-bg-color: #f7faf6;
          --secondary-text-bg-color: #f2f6f1;
          --yellow-color: #ebe0a0;
        }

        [data-theme="dark"] {
          --bg-color: #13110b;
          --secondary-bg-color: black;
          --heading-color: #b8b8b6;
          --primary-color: #6e6e6d;
          --secondary-color: #5c5c5b;
          --text-bg-color: #13110b;
          --secondary-text-bg-color: #110f0a;
          --yellow-color: #292513;
        }

        body {
          background: var(--bg-color);
          transition: background 0.5s;
          color: var(--primary-color);
        }

        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
        }

        [data-style="secondary"] {
          background: var(--secondary-bg-color);
        }

        [data-style="secondary"] .label {
          background: var(--bg-color);
        }

        h1 {
          color: var(--heading-color);
        }

        section {
          margin: 0 auto;
          width: 100%;
          max-width: 800px;
          padding: 8rem 0 4rem;
        }

        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
        }

        .column {
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 1;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (max-width: 767px) {
          html {
            font-size: 65%;
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  );
}
