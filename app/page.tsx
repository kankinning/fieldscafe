import { Entrance } from "./entrance";
import { EditorialGallery } from "./editorial-gallery";
import { photos } from "@/lib/editorial-assets";
export default function Home() {
  return (
    <>
      <Entrance />
      <section className="hero">
        <img
          className="hero-image"
          src={photos.hero}
          alt="Fields Café and its open, welcoming setting in Albany"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">A NEIGHBOURHOOD CAFÉ · ALBANY, NEW ZEALAND</p>
          <h1>
            Stay. <i>Play.</i>
            <br />
            Take away.
          </h1>
          <div className="hero-caption">
            <p>
              Good food. Open space.
              <br />
              The pleasure of being here.
            </p>
            <a className="text-link light" href="/menu">
              Discover the menu
            </a>
          </div>
        </div>
        <div className="hero-base">
          <span>4 APPIAN WAY, ALBANY</span>
          <a href="#welcome">
            SCROLL TO DISCOVER
            <span className="scroll-line" aria-hidden="true" />
          </a>
          <span>A NEIGHBOURHOOD CAFÉ BY OKLA</span>
        </div>
      </section>
      <section id="welcome" className="editorial-intro section">
        <div className="section-index">01 / THE EVERYDAY, RECONSIDERED</div>
        <div className="intro-grid">
          <h2>
            A little space.
            <br />
            <i>A slower pace.</i>
          </h2>
          <div className="intro-copy">
            <p>
              For the first coffee of the day. For a long lunch, a familiar
              face, a moment that becomes an afternoon.
            </p>
            <p>
              Fields is Albany’s neighbourhood café and eatery. Rooted in the
              area’s fruit-growing past and inspired by the community around us,
              we make room for good food and good company.
            </p>
            <a className="text-link" href="/about">
              Fields and OKLA Livana
            </a>
          </div>
        </div>
        <div className="composition">
          <figure className="composition-main">
            <img
              src={photos.dining}
              alt="Light and open space inside Fields Café"
              loading="lazy"
            />
            <figcaption>A place to settle in.</figcaption>
          </figure>
          <figure className="composition-detail">
            <img
              src={photos.detail}
              alt="A Fields-branded cushion and natural material details inside the café"
              loading="lazy"
            />
            <figcaption>The everyday, made a little better.</figcaption>
          </figure>
          <div className="composition-note">
            <span className="fine-rule" />
            <p>
              Fresh is best.
              <br />
              Company makes it
              <br />
              <i>even better.</i>
            </p>
          </div>
        </div>
      </section>
      <section className="taste section">
        <div className="section-index">02 / AT THE TABLE</div>
        <div className="taste-heading">
          <h2>
            Simple pleasures.
            <br />
            <i>Beautifully made.</i>
          </h2>
          <div>
            <p>
              Real ingredients. Generous flavours. Food inspired by many
              cultures, and determined by none.
            </p>
            <a className="text-link light" href="/menu">
              Explore our café menu
            </a>
          </div>
        </div>
        <EditorialGallery
          items={[
            {
              src: photos.breakfast,
              alt: "A freshly prepared savoury plate at Fields Café",
              label: "Make a morning of it.",
            },
            {
              src: photos.sweet,
              alt: "Fresh fruit and a sweet plate at Fields Café",
              label: "A little indulgence.",
            },
            {
              src: photos.pasta,
              alt: "Pasta enjoyed at Fields Café",
              label: "Good food, good company.",
            },
            {
              src: photos.fruit,
              alt: "A beautifully prepared Fields plate",
              label: "Fresh flavours, familiar pleasures.",
            },
          ]}
        />
      </section>
      <section className="gather-feature">
        <img
          src={photos.gathering}
          alt="Fields Café offers a welcoming setting for gatherings"
          loading="lazy"
        />
        <div className="gather-card">
          <p className="eyebrow">03 / A PLACE FOR YOUR PEOPLE</p>
          <h2>
            Gather
            <br />
            <i>beautifully.</i>
          </h2>
          <p>
            A team lunch. A family celebration. A long-overdue catch-up. Some
            moments deserve a little more room.
          </p>
          <a className="text-link" href="/events">
            Events & catering
          </a>
        </div>
      </section>
      <section className="community section">
        <div className="section-index">04 / A NEIGHBOURHOOD TAKING SHAPE</div>
        <div className="community-grid">
          <div>
            <h2>
              More than
              <br />
              <i>a meeting place.</i>
            </h2>
            <p>
              A café today. A future community in mind. Discover the connection
              between Fields and OKLA Livana, and the idea of belonging that
              brings them together.
            </p>
            <a className="text-link" href="/about">
              Fields and OKLA Livana
            </a>
          </div>
          <figure>
            <img
              src={photos.render}
              alt="Artist’s impression of the proposed OKLA Livana development"
              loading="lazy"
            />
            <figcaption>
              Artist’s impression of the proposed OKLA Livana development;
              AI-enhanced presentation.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="little-editorial section">
        <div className="little-pair">
          <figure>
            <img
              src={photos.little}
              alt="The distinct Little Fields kiosk inside the Auckland Council building"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={photos.littlePastry}
              alt="A pastry photographed at Little Fields, 6 Munroe Lane"
              loading="lazy"
            />
          </figure>
        </div>
        <div>
          <p className="eyebrow">05 / A LITTLE DIFFERENT</p>
          <h2>
            A smaller ritual.
            <br />
            <i>The same spirit.</i>
          </h2>
          <p>
            Meet Little Fields. Your weekday coffee stop inside the Auckland
            Council building at 6 Munroe Lane, with a neighbourhood welcome of
            its own.
          </p>
          <a className="text-link" href="/little-fields">
            Discover Little Fields
          </a>
        </div>
      </section>
      <section className="neighbourhood section">
        <figure>
          <img
            src={photos.playground}
            alt="The nearby neighbourhood playground with its red slide and climbing frames"
            loading="lazy"
          />
          <figcaption>Nearby neighbourhood playground.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">STAY A LITTLE. PLAY A LITTLE.</p>
          <h2>
            Make room
            <br />
            <i>for the whole day.</i>
          </h2>
          <p>
            A family breakfast, a little fresh air, and a chance to play nearby.
            There’s more than one way to make yourself at home in the
            neighbourhood.
          </p>
        </div>
      </section>
      <section className="visit-banner">
        <p className="eyebrow">THERE’S A PLACE FOR YOU HERE</p>
        <h2>
          Shall we
          <br />
          <i>make a day of it?</i>
        </h2>
        <a className="button dark" href="/booking">
          Book a table
        </a>
        <a
          className="quiet-link"
          href="https://www.google.com/maps/search/?api=1&query=Fields+Cafe+4+Appian+Way+Albany"
        >
          Find us at 4 Appian Way
        </a>
      </section>
    </>
  );
}
