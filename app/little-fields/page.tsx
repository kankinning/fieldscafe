export const metadata = { title: "Little Fields | Fields Café" };
import { photos } from "@/lib/editorial-assets";
export default function Little() {
  return (
    <>
      <section className="little-hero">
        <img
          src={photos.little}
          alt="Little Fields café kiosk inside the Auckland Council building at 6 Munroe Lane"
        />
        <div>
          <p className="eyebrow">LITTLE FIELDS · 6 MUNROE LANE</p>
          <h1>
            A little pause.
            <br />
            <i>A better day.</i>
          </h1>
        </div>
      </section>
      <section className="story-chapter section">
        <p className="section-index">OUR SMALLER NEIGHBOURHOOD RITUAL</p>
        <h2>
          Good things,
          <br />
          <i>in a little space.</i>
        </h2>
        <div>
          <p>
            Inside the Auckland Council building at 6 Munroe Lane, Little Fields
            brings a familiar neighbourhood spirit to your weekday.
          </p>
          <p>
            A distinct café kiosk, with its own place in the rhythm of Albany.
            Drop by for coffee and a pause before carrying on with your day.
          </p>
          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=Little+Fields+6+Munroe+Lane+Albany"
          >
            Find Little Fields
          </a>
        </div>
      </section>
      <div className="little-photo-story">
        <figure>
          <img
            src={photos.littleInterior}
            alt="The counter and seating detail at Little Fields"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src={photos.littlePastry}
            alt="A Little Fields pastry, topped with cream and edible flowers"
            loading="lazy"
          />
        </figure>
      </div>
      <section className="little-details section">
        <figure>
          <img
            src={photos.littleDetail}
            alt="Coffee and detail at the Little Fields branch"
            loading="lazy"
          />
        </figure>
        <div>
          <p className="eyebrow">A WEEKDAY KIND OF PLEASURE</p>
          <h2>
            Meet you
            <br />
            <i>at Little Fields.</i>
          </h2>
          <p>
            Inside the Auckland Council building
            <br />6 Munroe Lane, Albany
          </p>
          <dl>
            <div>
              <dt>Monday — Friday</dt>
              <dd>7:30am — 1:30pm</dd>
            </div>
            <div>
              <dt>Saturday — Sunday</dt>
              <dd>Closed</dd>
            </div>
          </dl>
          <p className="small">
            Please confirm current hours before making a special trip.
          </p>
          <p>Looking for our full café and table bookings?</p>
          <a className="text-link" href="/booking">
            Visit Fields at 4 Appian Way
          </a>
        </div>
      </section>
    </>
  );
}
