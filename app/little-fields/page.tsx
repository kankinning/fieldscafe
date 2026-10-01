export default function Little() {
  return (
    <>
      <section className="little-hero">
        <img
          src="/assets/little.webp"
          alt="Little Fields kiosk and its dark timber counter at 6 Munroe Lane"
        />
        <div>
          <p className="eyebrow">6 MUNROE LANE · ALBANY</p>
          <h1>
            A little
            <br />
            Fields in
            <br />
            your <i>day.</i>
          </h1>
        </div>
      </section>
      <section className="story section">
        <h2>
          Your everyday
          <br />
          coffee stop.
        </h2>
        <div>
          <p>
            Meet Little Fields, our distinct café kiosk inside the Auckland
            Council building at 6 Munroe Lane, Albany. A familiar neighbourhood
            welcome, in a smaller setting.
          </p>
          <p>
            Drop by for coffee and a little pause in your weekday. For a full
            café visit and table bookings, find Fields at 4 Appian Way.
          </p>
          <a
            className="button dark"
            href="https://www.google.com/maps/search/?api=1&query=Little+Fields+6+Munroe+Lane+Albany"
          >
            Find Little Fields
          </a>
        </div>
      </section>
      <section className="little-promo section">
        <img
          src="/assets/coffee.webp"
          alt="The espresso machine at Little Fields"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">SMALL RITUALS. GOOD DAYS.</p>
          <h2>
            Coffee,
            <br />
            then carry on.
          </h2>
          <p>
            Inside the Auckland Council building
            <br />6 Munroe Lane, Albany
          </p>
          <p className="small">
            Monday — Friday · 7:30am — 1:30pm. Closed weekends. Please confirm
            current hours before making a special trip.
          </p>
        </div>
      </section>
    </>
  );
}
