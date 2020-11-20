import Hero from "./hero";

export default function Bio() {
  return (
    <div data-style="secondary" className="wrapper">
      <div className="container">
        <section>
          <Hero
            label="LIFELONG LEARNER"
            title="biography"
            description={
              <span>
                playing with words or changing my look often helps me
                <br />
                express my inner change to the mother earth.
              </span>
            }
          />
        </section>
        <div className="textwrapper">
          <div className="longtext row">
            <div className="column">
              <p>
                Happy to see that you’d like to read more words from me.
                <br />I consider myself a refugee in this chaotic world. I feel
                displaced because somehow we're doomed to feel lonely.
              </p>
              <p>
                I believe that if we share what we have, we can tear down the
                walls between us and find out who / what we belong to.
              </p>
              <p>
                When I was little, my curiosity took me to the game universe. I
                played games then <strong>changed</strong> what I played. This
                universe has driven me to become a self-taught developer who has
                a design spirit inside. I shared what I learn on my way.
              </p>
              <p>
                Thanks to the internet and freelance web projects, I started
                working early then I studied Visual Communication Design and
                practiced different visual disciplines.
              </p>
            </div>
            <div className="column secondary">
              <p>
                On the professional side, I'm trying to call myself a React
                enthusiast and an evangelist of Design Standards.
              </p>
              <p>
                Throughout my entire career, I've built many bridges between
                frontend and design. I am a good observer when it comes to
                identifying communication issues between people / tools.
              </p>
              <p>
                I believe working together will be like playing with Legos if we
                build a structure with well-defined constraints.
              </p>
              <p>
                On the social side, I feel a mix of a carpenter and a koala. You
                might find me trying to be a spiritual man at a table full of
                rational people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .textwrapper {
          margin: 0 auto 4rem;
        }
        .longtext {
          margin: 0 -2rem;
          background: var(--text-bg-color);
          border-radius: 1rem;
          color: var(--heading-color);
        }
        .column {
          min-height: 100px;
          max-width: 620px;
          padding: 3rem 4rem;
        }
        .column.secondary {
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          background: var(--secondary-text-bg-color);
        }
        @media (max-width: 1024px) {
          .row {
            margin-left: 0px;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
