export function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="sectionTitle text-center mb-5">
        Skills & Technologies
      </h2>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="skillCard">
            <h4>Frontend</h4>

            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="skillCard">
            <h4>Backend</h4>

            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>JWT Authentication</li>
              <li>File Upload Systems</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="skillCard">
            <h4>Database</h4>

            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Dexie.js</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="skillCard">
            <h4>Cloud & Tools</h4>

            <ul>
                   <li>AWS EC2</li>
      <li>AWS S3</li>
      <li>AWS VPC</li>
      <li>IAM</li>
      <li>BunnyCDN</li>
      <li>Linux</li>
      <li>Git</li>
      <li>GitHub</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}