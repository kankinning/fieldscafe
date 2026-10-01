export default function Booking() {
  return (
    <section className="booking section">
      <div>
        <p className="eyebrow">MAKE YOURSELF AT HOME</p>
        <h1>
          Pull up
          <br />a <i>chair.</i>
        </h1>
        <p>Book directly with Fields through ResDiary.</p>
        <p>
          Bookings for 4 or more on weekdays, and 8 or more on weekends. Smaller
          groups are welcome to walk in.
        </p>
        <p>
          For 12 or more, private dining or today’s availability, call{" "}
          <a href="tel:+6494145888">09 414 5888</a>.
        </p>
        <a
          className="text-link"
          href="https://booking.resdiary.com/widget/Standard/FieldsCafe/4133?includeJquery=true"
          target="_blank"
          rel="noreferrer"
        >
          Open booking in a new window
        </a>
      </div>
      <iframe
        title="Book a table at Fields Café with ResDiary"
        src="https://booking.resdiary.com/widget/Standard/FieldsCafe/4133?includeJquery=true"
        className="booking-widget"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
