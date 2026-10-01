export default function About() {
  return (
    <>
      <section className="page-heading section">
        <p className="eyebrow">ROOTED IN ALBANY</p>
        <h1>
          Where good
          <br />
          things <i>grow.</i>
        </h1>
        <p>
          A neighbourhood café, with a little of Albany’s history at its heart.
        </p>
      </section>
      <div className="wide-image">
        <img
          src="/assets/interior.webp"
          alt="Open, light-filled seating at Fields Café"
        />
      </div>
      <section className="story section">
        <h2>
          From orchards
          <br />
          to everyday rituals.
        </h2>
        <div>
          <p>
            In the 1890s, Aucklanders travelled north to Albany for fresh
            apples, strawberries, pears and peaches. Fields takes its name and
            inspiration from that fruit-growing history — and carries its
            fresh-is-best spirit into the everyday.
          </p>
          <p>
            Our food reflects the diverse community around us. Inspired by many
            cultures and determined by none, we focus on real ingredients,
            simple flavours and a welcome for family, friends and wanderers
            alike.
          </p>
        </div>
      </section>
      <section className="story section green">
        <h2>
          A community
          <br />
          before a skyline.
        </h2>
        <div>
          <p>
            Fields is a neighbourhood café by OKLA. It is also a community-café
            experiment: a place to meet, work and share daily rituals,
            supporting the future apartment community envisioned for OKLA
            Livana.
          </p>
          <p>
            The café is here today. The wider development is a future vision.
            Fields gives that ambition a human starting point — shared tables,
            familiar faces and a reason to belong.
          </p>
          <a
            className="text-link"
            href="https://okla.co.nz/"
            target="_blank"
            rel="noreferrer"
          >
            Discover OKLA
          </a>
        </div>
      </section>
    </>
  );
}
