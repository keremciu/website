import { Fragment } from "react";

export default function Hero({ label, title, description }) {
  return (
    <Fragment>
      <span className="label">{label}</span>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <style jsx>{`
        .title {
          margin: 1.375rem 0;
          line-height: 1.15;
          font-weight: normal;
          font-size: 2rem;
          font-family: "IBM Plex Serif", "New York Medium",
            -apple-system-ui-serif, ui-serif, serif;
          position: relative;
        }

        .description {
          line-height: 1.5;
          font-weight: 500;
        }

        .label {
          border-radius: 1rem;
          padding: 4px 10px;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background: var(--secondary-bg-color);
          color: var(--secondary-color);
        }
      `}</style>
    </Fragment>
  );
}
