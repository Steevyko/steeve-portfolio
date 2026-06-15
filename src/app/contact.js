export function Contacts() {
  return (
    <section id="contact" className="container py-5">
      <div className="contactWrapper">
        <div className="text-center mb-5">
          <span className="contactLabel">Contact</span>

          <h2 className="sectionTitle mt-2">
           {` Let's`} Build Something
          </h2>

          <p className="contactSubtitle">
            Open to full-stack developer roles, freelance work, and serious
            project conversations.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <a
              href="mailto:steevejocelyn5@icloud.com"
              className="contactBox"
            >
              <div className="contactIcon">✉️</div>

              <div>
                <h4>Email</h4>
                <p>steevejocelyn5@icloud.com</p>
              </div>
            </a>
          </div>

          <div className="col-md-6">
            <a href="tel:+16177040011" className="contactBox">
              <div className="contactIcon">📞</div>

              <div>
                <h4>Phone</h4>
                <p>(617) 704-0011</p>
              </div>
            </a>
          </div>
        </div>

        <div className="text-center mt-5">
          <a
            href="mailto:steevejocelyn5@icloud.com"
            className="btn btn-dark btn-lg px-5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}