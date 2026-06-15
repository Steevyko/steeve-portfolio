export function Hero() {
  return (
    <section className="hero container">
      <div className="row align-items-center gy-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="heroTitle">
            Steeve Jocelyn
          </h1>

          <h2 className="heroSubtitle">
            Full Stack Developer
          </h2>

          <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-2 mb-4">
            <span className="badge text-bg-primary px-3 py-2">
              AWS Certified Cloud Practitioner
            </span>

            <span className="badge text-bg-dark px-3 py-2">
              Associate of Science in Web Technologies
            </span>
          </div>

          <p className="heroText">
            I design and build modern web applications using
            <strong> React</strong>,
            <strong> Next.js</strong>,
            <strong> Node.js</strong>,
            <strong> PostgreSQL</strong>,
            <strong> MongoDB</strong>,
            and <strong>AWS</strong>.
            <br />
            <br />
            Currently building <strong>NapSend</strong>, a secure cloud-based
            file sharing platform focused on performance, scalability, and user
            experience.
          </p>

          <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-3 mt-4">
            <a href="#projects" className="btn btn-dark btn-lg">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline-dark btn-lg">
              Contact Me
            </a>
          </div>
        </div>

        <div className="col-lg-5 text-center">
          <div className="profileWrapper">
            <img
              src="/7RV02114.JPG"
              alt="Steeve Jocelyn"
              className="profileImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}