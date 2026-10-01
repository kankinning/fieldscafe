export const metadata = { title: "Events & Catering | Fields Café" };
import { photos } from "@/lib/editorial-assets";
export default function Events() {
  return (
    <>
      <section className="page-intro section">
        <p className="eyebrow">EVENTS & CATERING</p>
        <h1>
          Good company.
          <br />
          <i>A memorable table.</i>
        </h1>
        <div className="page-intro-bottom">
          <p>
            For the moments you want to bring people together. Make them at
            Fields.
          </p>
          <a className="text-link" href="mailto:info@fieldscafe.co.nz">
            Start a conversation
          </a>
        </div>
      </section>
      <figure className="story-hero event-image">
        <img
          src={photos.gathering}
          alt="The Fields Café space for gathering with friends, family and colleagues"
        />
        <figcaption>A welcoming setting for your occasion.</figcaption>
      </figure>
      <section className="story-chapter section">
        <p className="section-index">01 / GATHER AT FIELDS</p>
        <h2>
          Your people.
          <br />
          <i>Your occasion.</i>
        </h2>
        <div>
          <p>
            A team lunch, a private celebration, or a get-together that has been
            too long in the making. Fields pairs an open, inviting setting with
            the pleasure of sharing good food.
          </p>
          <p>
            Tell us about your date, guest count and the occasion you have in
            mind. We’ll talk through the right space, availability and
            arrangements with you personally.
          </p>
          <a className="text-link" href="tel:+6494145888">
            Talk to us · 09 414 5888
          </a>
        </div>
      </section>
      <section className="catering-editorial section">
        <div>
          <p className="eyebrow">02 / WOOZOO GROUP CATERING</p>
          <h2>
            A beautiful spread.
            <br />
            <i>Where you need it.</i>
          </h2>
          <p>
            Morning tea and lunch packages. Platters, buffets and canapés.
            Sit-down occasions. Explore the group catering menu, then speak with
            Fields about the details that make it yours.
          </p>
          <a className="button dark" href="/api/menus/catering" download>
            Download catering menu · PDF
          </a>
          <p className="small">
            Please check the menu’s lead times, minimums and GST terms. Your
            event details and availability are confirmed by the team.
          </p>
        </div>
        <figure>
          <img
            src={photos.catering}
            alt="Catering food being carefully prepared at Fields"
            loading="lazy"
          />
        </figure>
      </section>
      <section className="event-diptych">
        <img
          src={photos.floral}
          alt="Floral detail photographed at a Fields gathering"
          loading="lazy"
        />
        <img
          src={photos.event}
          alt="A past gathering at Fields Café"
          loading="lazy"
        />
      </section>
      <p className="event-history-caption">
        Floral detail and a past gathering at Fields.
      </p>
      <section className="closing-note section">
        <p className="eyebrow">LET’S MAKE SOMETHING OF IT</p>
        <h2>
          Every gathering
          <br />
          <i>starts somewhere.</i>
        </h2>
        <a className="text-link" href="mailto:info@fieldscafe.co.nz">
          info@fieldscafe.co.nz
        </a>
      </section>
    </>
  );
}
