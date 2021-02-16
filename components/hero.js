import { Fragment } from "react";

export default function Hero({ label, title, description }) {
  return (
    <div className="hero">
      <span className="label">{label}</span>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <style jsx>{`
        .title {
          margin: 1.375rem 0;
          font-size: 2rem;
          position: relative;
        }

        .description {
          font-weight: 500;
        }
        @media (max-width: 1024px) {
          .hero {
            margin-left: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
