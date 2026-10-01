export default function Events() {
  return (
    <>
      <section className="split-heading section">
        <div>
          <p className="eyebrow">GOOD COMPANY. GOOD FOOD.</p>
          <h1>
            Make it
            <br />a <i>gathering.</i>
          </h1>
          <p>
            A team lunch, a family celebration or a long-overdue get-together.
            Bring your people; we’ll help you plan the food and setting.
          </p>
          <a className="button dark" href="tel:+6494145888">
            Talk to us · 09 414 5888
          </a>
        </div>
        <img
          src="/assets/interior.webp"
          alt="Fields Café interior with space to gather"
        />
      </section>
      <section className="story section">
        <h2>
          Your occasion.
          <br />
          Our place.
        </h2>
        <div>
          <p>
            Light-filled interiors and an open outlook make Fields an inviting
            backdrop for private and corporate gatherings. Talk with our team
            about your date, guest count and the kind of occasion you have in
            mind.
          </p>
          <p>
            We’ll confirm the right space, availability and arrangements with
            you personally.
          </p>
          <a className="text-link" href="mailto:info@fieldscafe.co.nz">
            Email info@fieldscafe.co.nz
          </a>
        </div>
      </section>
      <section className="catering section">
        <div>
          <p className="eyebrow">WOOZOO GROUP CATERING</p>
          <h2>
            A good spread,
            <br />
            where you need it.
          </h2>
          <p>
            From morning tea and lunch packages to platters, buffets, sit-down
            dining and canapés. Explore the group menu and speak with Fields
            about what works for your event.
          </p>
          <a className="button dark" href="/api/menus/catering" download>
            Download catering menu (PDF)
          </a>
          <p className="small">
            Please check the menu’s lead times, minimums and GST terms. Your
            event details and availability are confirmed by the team.
          </p>
        </div>
        <img
          src="/assets/savoury.webp"
          alt="Freshly prepared food at Fields Café"
          loading="lazy"
        />
      </section>
    </>
  );
}
