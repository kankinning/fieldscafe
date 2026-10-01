export const metadata = { title: "Fields and OKLA Livana | Fields Café" };
import { photos } from "@/lib/editorial-assets";
export default function About() {
  return (
    <>
      <section className="page-intro section">
        <p className="eyebrow">FIELDS AND OKLA LIVANA</p>
        <h1>
          A place to meet.
          <br />
          <i>A reason to belong.</i>
        </h1>
        <div className="page-intro-bottom">
          <p>
            A café rooted in Albany’s past, with a community’s future in mind.
          </p>
          <span className="section-index">OUR NEIGHBOURHOOD STORY</span>
        </div>
      </section>
      <figure className="story-hero">
        <img src={photos.garden} alt="Fields Café in Albany" />
        <figcaption>Fields Café · a neighbourhood café by OKLA.</figcaption>
      </figure>
      <section className="story-chapter section">
        <p className="section-index">01 / OUR ROOTS</p>
        <h2>
          Where good
          <br />
          <i>things grow.</i>
        </h2>
        <div>
          <p>
            In the 1890s, Aucklanders travelled north to Albany for fresh
            apples, strawberries, pears and peaches. Fields takes its name and
            inspiration from that fruit-growing history, carrying its
            fresh-is-best spirit into everyday life.
          </p>
          <p>
            Today, our food reflects the diverse community around us. Inspired
            by many cultures and determined by none, we focus on real
            ingredients, simple flavours and a welcome for family, friends and
            wanderers alike.
          </p>
        </div>
      </section>
      <div className="story-diptych">
        <img
          src={photos.quiet}
          alt="The light-filled Fields Café interior"
          loading="lazy"
        />
        <img
          src={photos.table}
          alt="Food and a moment together at Fields Café"
          loading="lazy"
        />
      </div>
      <section className="livana-chapter section">
        <p className="section-index">02 / FIELDS × OKLA LIVANA</p>
        <img
          className="livana-logo"
          src="/assets/v2/logo-long-beige.png"
          alt="OKLA Livana"
        />
        <div className="livana-heading">
          <h2>
            A café today.
            <br />
            <i>A community taking shape.</i>
          </h2>
          <div>
            <p>
              Fields is a neighbourhood café by OKLA — and a community-café
              experiment. Before a future apartment community takes shape, a
              café can give people a place to meet, work and share the small
              rituals of daily life.
            </p>
            <p>
              That is the connection to OKLA Livana: an ambition for belonging,
              beginning with familiar faces and a shared table.
            </p>
          </div>
        </div>
        {photos.render ? (
          <figure className="development-render">
            <img
              src={photos.render}
              alt="Artist’s impression of the proposed OKLA Livana development"
              loading="lazy"
            />
            <figcaption>
              Artist’s impression of the proposed OKLA Livana development;
              AI-enhanced presentation. Not completed buildings.
            </figcaption>
          </figure>
        ) : null}
        <div className="render-pair">
          <figure>
            <img
              src={photos.renderEntrance}
              alt="Artist’s impression of the proposed OKLA Livana entrance"
              loading="lazy"
            />
            <figcaption>
              Proposed entrance · artist’s impression; AI-enhanced presentation.
            </figcaption>
          </figure>
          <figure>
            <img
              src={photos.renderLounge}
              alt="Artist’s impression of the proposed OKLA Livana residents’ lounge"
              loading="lazy"
            />
            <figcaption>
              Proposed residents’ lounge · artist’s impression; AI-enhanced
              presentation.
            </figcaption>
          </figure>
        </div>
        <div className="livana-note">
          <p>
            The café is here today. The wider apartment development is a future
            vision. Project imagery illustrates that proposal and should not be
            read as completed facilities.
          </p>
          <a
            className="text-link light"
            href="https://okla.co.nz/"
            target="_blank"
            rel="noreferrer"
          >
            Discover OKLA
          </a>
        </div>
      </section>
      <section className="closing-note section">
        <p className="eyebrow">THE FIRST CHAPTER IS ALREADY HERE</p>
        <h2>
          Come and
          <br />
          <i>be part of it.</i>
        </h2>
        <a className="text-link" href="/booking">
          Join us at Fields
        </a>
      </section>
    </>
  );
}
