import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import Switch from "../components/switch";

const Intro = dynamic(() => import("../components/intro"));
const Bio = dynamic(() => import("../components/bio"));
const Hero = dynamic(() => import("../components/hero"));
const Projects = dynamic(() => import("../components/projects"));

export default function Home() {
  useEffect(function onFirstMount() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.dataset.theme = "light";
    }
  }, []);

  return (
    <main>
      <Head>
        <title>Kerem Sevencan | Digital Experience Developer</title>
        <meta name="author" content="Kerem Sevencan" />
        <meta
          name="description"
          content="Berlin based JavaScript developer who loves nature and gaming."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Switch />
      <Intro />
      <Bio />
      <Projects />
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
          <a
            rel="license noopener noreferrer"
            href="https://github.com/keremciu/"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="var(--heading-color)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M18.002 1.54701e-06C8.05586 -0.00412974 0 8.2667 0 18.4751C0 26.5476 5.03944 33.4097 12.0576 35.9298C13.0028 36.1735 12.858 35.4836 12.858 35.0126V31.8109C7.40029 32.4678 7.17909 28.7579 6.81309 28.1382C6.07306 26.8409 4.32354 26.5104 4.84639 25.8908C6.08915 25.2339 7.35605 26.056 8.82404 28.2828C9.88582 29.8981 11.9571 29.6254 13.0068 29.3569C13.2361 28.386 13.7267 27.5185 14.4024 26.8451C8.74763 25.804 6.39079 22.2594 6.39079 18.0454C6.39079 16.0005 7.04636 14.1207 8.33337 12.6045C7.5129 10.1051 8.40979 7.96511 8.53044 7.64701C10.8672 7.43218 13.2964 9.36562 13.4854 9.51848C14.8126 9.15079 16.3289 8.95662 18.0261 8.95662C19.7314 8.95662 21.2517 9.15906 22.591 9.53087C23.0455 9.17558 25.2977 7.5148 27.4696 7.71724C27.5862 8.03535 28.463 10.1258 27.6908 12.5922C28.9939 14.1125 29.6575 16.0087 29.6575 18.0578C29.6575 22.28 27.2846 25.8288 21.6137 26.8533C22.0994 27.344 22.4851 27.9292 22.7482 28.5747C23.0113 29.2202 23.1465 29.913 23.146 30.6128V35.2605C23.1782 35.6323 23.146 36 23.7493 36C30.8721 33.5336 36 26.622 36 18.4792C36 8.2667 27.9401 1.54701e-06 18.002 1.54701e-06V1.54701e-06Z" />
            </svg>
          </a>
          <a
            rel="license noopener noreferrer"
            href="https://twitter.com/keremciu/"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="var(--heading-color)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M18 0C8.05982 0 0 8.05982 0 18C0 27.9402 8.05982 36 18 36C27.9402 36 36 27.9402 36 18C36 8.05982 27.9402 0 18 0ZM26.6504 13.5683C26.6625 13.7571 26.6625 13.954 26.6625 14.1469C26.6625 20.0451 22.1705 26.8393 13.9621 26.8393C11.4308 26.8393 9.08437 26.104 7.10759 24.8384C7.4692 24.8786 7.81473 24.8946 8.18438 24.8946C10.2737 24.8946 12.1942 24.1875 13.725 22.9902C11.7643 22.95 10.117 21.6643 9.55446 19.8964C10.2415 19.9969 10.8603 19.9969 11.5674 19.8161C10.5578 19.611 9.65039 19.0627 8.99926 18.2643C8.34813 17.466 7.99347 16.4668 7.99554 15.4366V15.3804C8.58616 15.7138 9.28125 15.9187 10.0085 15.9469C9.39713 15.5394 8.89577 14.9875 8.54884 14.3399C8.20191 13.6923 8.02014 12.969 8.01964 12.2344C8.01964 11.4027 8.23661 10.6433 8.62634 9.98438C9.74693 11.3639 11.1453 12.4921 12.7304 13.2958C14.3156 14.0994 16.0522 14.5605 17.8272 14.6491C17.1964 11.6156 19.4625 9.16071 22.1866 9.16071C23.4723 9.16071 24.6295 9.69911 25.4451 10.567C26.4536 10.3781 27.4179 10.0004 28.2777 9.4942C27.9442 10.5268 27.2451 11.3987 26.317 11.9491C27.217 11.8527 28.0848 11.6036 28.8884 11.254C28.2817 12.146 27.5223 12.9375 26.6504 13.5683Z" />
            </svg>
          </a>
          <a
            rel="license noopener noreferrer"
            href="https://instagram.com/keremciu/"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="var(--heading-color)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M17.9952 11.9972C14.69 11.9972 11.9927 14.6945 11.9927 17.9997C11.9927 21.3048 14.69 24.0021 17.9952 24.0021C21.3003 24.0021 23.9976 21.3048 23.9976 17.9997C23.9976 14.6945 21.3003 11.9972 17.9952 11.9972ZM35.998 17.9997C35.998 15.514 36.0205 13.0509 35.8809 10.5698C35.7413 7.68789 35.0839 5.13021 32.9765 3.02282C30.8646 0.910937 28.3114 0.258008 25.4295 0.118416C22.9439 -0.0211755 20.4808 0.00133938 17.9997 0.00133938C15.514 0.00133938 13.0509 -0.0211755 10.5698 0.118416C7.68789 0.258008 5.13021 0.91544 3.02282 3.02282C0.910937 5.13471 0.258008 7.68789 0.118416 10.5698C-0.0211755 13.0554 0.00133938 15.5185 0.00133938 17.9997C0.00133938 20.4808 -0.0211755 22.9484 0.118416 25.4295C0.258008 28.3114 0.91544 30.8691 3.02282 32.9765C5.13471 35.0884 7.68789 35.7413 10.5698 35.8809C13.0554 36.0205 15.5185 35.998 17.9997 35.998C20.4853 35.998 22.9484 36.0205 25.4295 35.8809C28.3114 35.7413 30.8691 35.0839 32.9765 32.9765C35.0884 30.8646 35.7413 28.3114 35.8809 25.4295C36.025 22.9484 35.998 20.4853 35.998 17.9997ZM17.9952 27.2352C12.8843 27.2352 8.75959 23.1105 8.75959 17.9997C8.75959 12.8888 12.8843 8.7641 17.9952 8.7641C23.106 8.7641 27.2307 12.8888 27.2307 17.9997C27.2307 23.1105 23.106 27.2352 17.9952 27.2352ZM27.609 10.5428C26.4157 10.5428 25.4521 9.57913 25.4521 8.38585C25.4521 7.19256 26.4157 6.22893 27.609 6.22893C28.8023 6.22893 29.7659 7.19256 29.7659 8.38585C29.7663 8.6692 29.7107 8.94983 29.6024 9.21168C29.4942 9.47353 29.3353 9.71145 29.1349 9.91181C28.9346 10.1122 28.6967 10.271 28.4348 10.3793C28.173 10.4876 27.8923 10.5431 27.609 10.5428Z" />
            </svg>
          </a>
          <a
            rel="license noopener noreferrer"
            href="https://dribbble.com/keremciu/"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="var(--heading-color)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Dribbble</title>
              <path d="M7.24821 15.7661C7.96339 12.3589 10.2536 9.52232 13.3312 8.07589C13.6205 8.46964 15.5813 11.1937 17.4054 14.4241C12.2625 15.7902 7.73839 15.7741 7.24821 15.7661ZM25.2804 9.80357C22.5804 7.40893 18.908 6.50089 15.4286 7.34464C15.7339 7.75446 17.7268 10.4705 19.5268 13.7732C23.4321 12.3027 25.0795 10.0848 25.2804 9.80357ZM11.258 26.6786C14.5125 29.2179 18.7554 29.6277 22.2911 28.125C22.1304 27.1607 21.4875 23.8018 19.9446 19.8C15.517 21.3107 12.4071 24.3321 11.258 26.6786ZM19.1973 17.9839C18.9241 17.3571 18.6187 16.7384 18.3054 16.1196C12.825 17.7589 7.50536 17.6946 7.02321 17.6786C7.02321 17.7911 7.01518 17.9036 7.01518 18.0161C7.01518 20.8366 8.08393 23.408 9.83571 25.3607C11.6196 22.3152 15.2277 19.1009 19.1973 17.9839ZM22.0018 19.2938C23.4402 23.2393 24.0187 26.4536 24.1312 27.1205C26.5982 25.4571 28.35 22.8134 28.8402 19.7598C28.4705 19.6393 25.4411 18.7393 22.0018 19.2938ZM20.3705 15.4045C20.7563 16.192 21.0375 16.8348 21.3348 17.558C24.9911 17.1 28.6232 17.8312 28.9848 17.9116C28.9607 15.3161 28.0366 12.9375 26.5018 11.0732C26.2687 11.3866 24.4286 13.7411 20.3705 15.4045ZM36 3.85714V32.1429C36 34.2723 34.2723 36 32.1429 36H3.85714C1.72768 36 0 34.2723 0 32.1429V3.85714C0 1.72768 1.72768 0 3.85714 0H32.1429C34.2723 0 36 1.72768 36 3.85714ZM30.8571 18C30.8571 10.9125 25.0875 5.14286 18 5.14286C10.9125 5.14286 5.14286 10.9125 5.14286 18C5.14286 25.0875 10.9125 30.8571 18 30.8571C25.0875 30.8571 30.8571 25.0875 30.8571 18Z" />
            </svg>
          </a>
          <a
            rel="license noopener noreferrer"
            href="https://www.linkedin.com/in/keremsevencan/"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="var(--heading-color)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Linkedin</title>
              <path d="M34.56 0H1.44C0.6435 0 0 0.6435 0 1.44V34.56C0 35.3565 0.6435 36 1.44 36H34.56C35.3565 36 36 35.3565 36 34.56V1.44C36 0.6435 35.3565 0 34.56 0ZM10.6785 30.6765H5.337V13.4955H10.6785V30.6765ZM8.01 11.1465C7.39767 11.1465 6.79909 10.9649 6.28995 10.6247C5.78082 10.2845 5.384 9.80101 5.14967 9.23529C4.91534 8.66957 4.85403 8.04707 4.97349 7.4465C5.09295 6.84594 5.38781 6.29428 5.8208 5.8613C6.25378 5.42831 6.80544 5.13345 7.406 5.01399C8.00657 4.89453 8.62907 4.95584 9.19479 5.19017C9.76051 5.4245 10.244 5.82132 10.5842 6.33045C10.9244 6.83959 11.106 7.43817 11.106 8.0505C11.1015 9.7605 9.7155 11.1465 8.01 11.1465ZM30.6765 30.6765H25.3395V22.32C25.3395 20.3265 25.3035 17.766 22.563 17.766C19.7865 17.766 19.359 19.935 19.359 22.176V30.6765H14.0265V13.4955H19.1475V15.8445H19.2195C19.9305 14.4945 21.672 13.068 24.273 13.068C29.682 13.068 30.6765 16.6275 30.6765 21.2535V30.6765Z" />
            </svg>
          </a>
        </div>
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
          font-size: 0.85rem;
        }

        .socials {
          display: flex;
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

      <style jsx global>{`
        :root {
          --bg-color: #ebebe5;
          --secondary-bg-color: white;
          --heading-color: black;
          --primary-color: #62625c;
          --secondary-color: #808080;
          --text-bg-color: #f7faf6;
          --secondary-text-bg-color: #f2f6f1;
          --yellow-color: #ebd55b;
          --bg-planet-bright: #ebd55b;
          --bg-planet-shadow: #828894;
          --bg-planet-lightshadow: #8d939d;
        }

        [data-theme="dark"] {
          --bg-planet-bright: #d7d7d8;
          --bg-color: #13110b;
          --secondary-bg-color: black;
          --heading-color: #b8b8b6;
          --primary-color: #6e6e6d;
          --secondary-color: #5c5c5b;
          --text-bg-color: #13110b;
          --secondary-text-bg-color: #110f0a;
          --yellow-color: #433806;
        }

        body {
          background: var(--bg-color);
          transition: background 0.3s;
          color: var(--primary-color);
        }

        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
        }

        [data-style="secondary"].wrapper {
          background: var(--secondary-bg-color);
        }

        [data-style="secondary"] .label {
          background: var(--bg-color);
        }

        .label {
          line-height: 1;
          border-radius: 1rem;
          padding: 4px 10px;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background: var(--secondary-bg-color);
          color: var(--secondary-color);
        }

        h1 {
          color: var(--heading-color);
        }

        .textlink {
          color: inherit;
          font-weight: 500;
          transition: all 0.2s ease-in;
          transition: background-position 80ms ease-out 0s;
          background-image: linear-gradient(
            transparent 0px,
            var(--yellow-color) 0px
          );
          background-position: 0px 12px;
          background-repeat: no-repeat;
          text-decoration: none;
        }
        .textlink:hover {
          color: var(--heading-color);
          background-position: 0px 0px;
        }

        section {
          margin: 0 auto;
          width: 100%;
          max-width: 960px;
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
          line-height: 1.5715;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: normal;
          font-family: "IBM Plex Serif", "New York Medium",
            -apple-system-ui-serif, ui-serif, serif;
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
