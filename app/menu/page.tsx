export const metadata = { title: "The Menu | Fields Café" };
import { photos } from "@/lib/editorial-assets";
export default function Menu() {
  return (
    <>
      <section className="page-intro section">
        <p className="eyebrow">THE FIELDS TABLE</p>
        <h1>
          For the love
          <br />
          <i>of good food.</i>
        </h1>
        <div className="page-intro-bottom">
          <p>
            Fresh ingredients, generous plates and simple, delicious flavours.
            Find a favourite. Stay for another coffee.
          </p>
          <a className="text-link" href="/api/menus/ordinary" download>
            Download café menu · PDF
          </a>
        </div>
      </section>
      <section className="menu-editorial">
        <figure>
          <img
            src={photos.breakfast}
            alt="A savoury dish prepared at Fields Café"
          />
        </figure>
        <div>
          <p className="eyebrow">MORNINGS INTO AFTERNOONS</p>
          <h2>
            Take your time.
            <br />
            <i>There’s plenty to enjoy.</i>
          </h2>
          <p>
            Our café menu brings together the things we love to eat, with
            influences from the many cultures that make Albany home.
          </p>
          <a className="button dark" href="/api/menus/ordinary" download>
            View the current menu
          </a>
          <p className="small">
            Please speak with our team about allergies and dietary needs.
            Dishes, availability and prices may change.
          </p>
        </div>
        <figure className="menu-second">
          <img
            src={photos.pancakes}
            alt="A sweet plate with fresh fruit at Fields"
            loading="lazy"
          />
          <figcaption>Something sweet to finish.</figcaption>
        </figure>
      </section>
      <section className="image-strip">
        <img src={photos.table} alt="A table of Fields food" loading="lazy" />
        <img
          src={photos.fruit}
          alt="A beautifully prepared Fields plate"
          loading="lazy"
        />
      </section>
      <section className="closing-note section">
        <p className="eyebrow">BRING EVERYONE TO THE TABLE</p>
        <h2>
          A few more
          <br />
          <i>to feed?</i>
        </h2>
        <a className="text-link" href="/events">
          Explore our catering menu
        </a>
      </section>
    </>
  );
}
