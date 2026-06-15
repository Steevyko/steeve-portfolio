const napSendScreenshots = [
  
  "/project/3.png",
  "/project/4.png",
  "/project/5.png",
  "/project/6.png",
  "/project/7.png",
];
const authScreenshots = [
 "/project/1.png",
  "/project/2.png",
]
export function Projects() {
  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="sectionTitle">Featured Projects</h2>
        <p className="text-muted">
          Real-world applications built with modern technologies.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="projectCard featuredProject">
            <div
              id="napSendCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {napSendScreenshots.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#napSendCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="carousel-inner">
                {napSendScreenshots.map((image, index) => (
                  <div
                    key={image}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100 projectCarouselImage"
                      alt={`NapSend screenshot ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#napSendCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#napSendCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>

            <div className="projectContent">
              <span className="projectTag">Flagship Project</span>

              <h3>NapSend</h3>

              <p>
                Secure cloud-based file sharing platform built with Next.js,
                Node.js, PostgreSQL, MongoDB, AWS S3, BunnyCDN, and Bootstrap.
              </p>

              <ul className="projectFeatures">
                <li>Folder & file explorer</li>
                <li>Breadcrumb navigation</li>
                <li>Multi-file upload system</li>
                <li>AWS S3 storage</li>
                <li>BunnyCDN integration</li>
                <li>JWT authentication</li>
              </ul>

              <div className="techStack">
                <span>Next.js</span>
                <span>Node.js</span>
                <span>AWS S3</span>
                <span>AWS VPC</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>BunnyCDN</span>
              </div>

              {/* <div className="mt-4 d-flex gap-2 flex-wrap">
                <a href="#" className="btn btn-dark btn-sm">
                  View Demo
                </a>

                <a href="#" className="btn btn-outline-dark btn-sm">
                  Source Code
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="projectCard authProject h-100">
           <div
  id="authCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    {authScreenshots.map((_, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#authCarousel"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
      />
    ))}
  </div>

  <div className="carousel-inner">
    {authScreenshots.map((image, index) => (
      <div
        key={image}
        className={`carousel-item ${index === 0 ? "active" : ""}`}
      >
        <img
          src={image}
          className="d-block w-100 authCarouselImage"
          alt={`Authentication Screenshot ${index + 1}`}
        />
      </div>
    ))}
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#authCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" />
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#authCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" />
  </button>
</div>
            <div className="projectContent">
              <span className="projectTag darkTag">Security Project</span>

              <h3>Authentication System</h3>

              <p>
                Secure authentication platform with account creation, login, OTP
                verification, protected routes, and JWT-based session
                management.
              </p>

              <ul className="projectFeatures">
                <li>User registration</li>
                <li>Login validation</li>
                <li>JWT authentication</li>
                <li>OTP verification</li>
                <li>Protected routes</li>
              </ul>

              <div className="techStack">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>JWT</span>
                <span>OTP</span>
              </div>

              {/* <div className="mt-4 d-flex gap-2 flex-wrap">
                <a href="#" className="btn btn-dark btn-sm">
                  View Demo
                </a>

                <a href="#" className="btn btn-outline-dark btn-sm">
                  Source Code
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}