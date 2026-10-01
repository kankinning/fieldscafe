import { Entrance } from "./entrance";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ALBANY, AUCKLAND · YOUR NEIGHBOURHOOD CAFÉ</p>
          <Entrance />
          <div className="hero-bottom">
            <p>
              Good food. Open space.
              <br />A place to make your own.
            </p>
            <a className="button dark" href="/menu">
              Explore the menu
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src="/assets/interior.webp"
            alt="Sunlight falls across the open Fields Café interior"
            fetchPriority="high"
          />
          <figcaption>Room for your everyday.</figcaption>
        </figure>
      </section>
      <section className="intro section">
        <p className="eyebrow">A LITTLE ROOM TO CONNECT</p>
        <div>
          <h2>
            Come for coffee.
            <br />
            Stay for everything else.
          </h2>
          <p>
            Long breakfasts. A catch-up that runs into lunch. A moment to
            yourself. Fields brings fresh, generous food and a welcoming place
            to the heart of Albany.
          </p>
          <a className="text-link" href="/about">
            Meet your neighbourhood café
          </a>
        </div>
      </section>
      <section className="food-grid section">
        <div className="food-title">
          <p className="eyebrow">FRESH THINKING. FAMILIAR PLEASURES.</p>
          <h2>
            Made for
            <br />
            your kind
            <br />
            of day.
          </h2>
          <p>
            Inspired by many cultures, with simple, delicious flavours at the
            centre.
          </p>
          <a className="button dark" href="/menu">
            See what’s on the menu
          </a>
        </div>
        <figure>
          <img
            src="/assets/savoury.webp"
            alt="A colourful savoury plate photographed at Fields Café"
            loading="lazy"
          />
          <figcaption>Something savoury.</figcaption>
        </figure>
        <figure className="offset">
          <img
            src="/assets/sweet.webp"
            alt="A beautifully presented sweet plate with fruit at Fields Café"
            loading="lazy"
          />
          <figcaption>A little sweetness.</figcaption>
        </figure>
      </section>
      <section className="venue">
        <img
          src="/assets/exterior.webp"
          alt="Fields Café’s illuminated glass facade and outdoor deck at dusk"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">GATHER AT FIELDS</p>
          <h2>
            A place for
            <br />
            your people.
          </h2>
          <p>
            From a shared lunch to something worth celebrating. Let’s make room
            for your next gathering.
          </p>
          <a className="button cream" href="/events">
            Events & catering
          </a>
        </div>
      </section>
      <section className="visit section">
        <div>
          <p className="eyebrow">WE’LL SAVE YOU A LITTLE SPACE</p>
          <h2>
            See you
            <br />
            at Fields.
          </h2>
          <a className="text-link" href="/booking">
            Book your next visit
          </a>
        </div>
        <div>
          <h3>4 Appian Way, Albany</h3>
          <p>Beside Hooton Reserve, Auckland.</p>
          <dl>
            <div>
              <dt>Monday — Friday</dt>
              <dd>7am — 3pm</dd>
            </div>
            <div>
              <dt>Saturday — Sunday</dt>
              <dd>8am — 4pm</dd>
            </div>
          </dl>
          <p className="small">
            Kitchen closes 2:10pm weekdays, 2:30pm weekends.
            <br />
            Public holiday hours may vary. Call ahead to confirm.
          </p>
          <a className="text-link" href="tel:+6494145888">
            09 414 5888
          </a>
        </div>
      </section>
      <section className="little-promo section">
        <img
          src="/assets/little.webp"
          alt="The Little Fields kiosk inside the Auckland Council building"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">
            SAME NEIGHBOURHOOD SPIRIT. A LITTLE DIFFERENT.
          </p>
          <h2>
            Hello,
            <br />
            Little Fields.
          </h2>
          <p>
            Your coffee stop at 6 Munroe Lane, inside the Auckland Council
            building.
          </p>
          <a className="button dark" href="/little-fields">
            Meet Little Fields
          </a>
        </div>
      </section>
    </>
  );
}
