export default function Menu() {
  return (
    <>
      <section className="page-heading section">
        <p className="eyebrow">SOMETHING GOOD IS ON THE TABLE</p>
        <h1>
          Find your
          <br />
          <i>favourite.</i>
        </h1>
        <p>
          Fresh ingredients, generous plates and flavours worth coming back for.
          Explore our café menu, then come and make yourself at home.
        </p>
        <a className="button dark" href="/api/menus/ordinary" download>
          Download café menu (PDF)
        </a>
        <span className="small">
          Menu availability and prices may change. Please speak with our team
          about allergies.
        </span>
      </section>
      <section className="menu-images section">
        <img
          src="/assets/sweet.webp"
          alt="Fruit and a sweet breakfast plate at Fields"
        />
        <img
          src="/assets/savoury.webp"
          alt="A savoury Fields breakfast plate"
        />
      </section>
      <section className="callout section">
        <h2>Feeding a few more?</h2>
        <p>Explore the Woozoo Group catering menu for your next gathering.</p>
        <a className="text-link" href="/events">
          See events & catering
        </a>
      </section>
    </>
  );
}
