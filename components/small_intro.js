

import Hero from "./hero";

export default function Intro({ title, date }) {
  return (
    <div className="container">
      <section style={{ paddingTop: '48px', paddingBottom: '16px' }}>
        <Hero
          label={<a href="/">JOURNAL OF KEREM SEVENCAN</a>}
          title={title}
          description={
            <small>Last update on {new Date(date).toLocaleDateString()}. Had to be written.</small>
          }
        />
      </section>
      <style jsx>{`
        a {
          text-decoration: none;
          color: var(--secondary-color);
        }

        a:hover {
          color: var(--primary-color);
        }

        `}
      </style>
    </div>
  );
}
