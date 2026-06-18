export function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="sectionTitle text-center mb-5">
        Skills & Technologies
      </h2>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
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

        <div className="col-md-6 col-lg-4">
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

        <div className="col-md-6 col-lg-4">
          <div className="skillCard">
            <h4>Database</h4>

            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Microsoft SQL Server</li>
              <li>SQL</li>
              <li>Dexie.js</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="skillCard">
            <h4>Cloud & DevOps</h4>

            <ul>
              <li>AWS EC2</li>
              <li>AWS S3</li>
              <li>AWS VPC</li>
              <li>IAM</li>
              <li>BunnyCDN</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="skillCard">
            <h4>IT Support & Systems</h4>

            <ul>
              <li>NinjaOne RMM</li>
              <li>Windows Administration</li>
              <li>Linux Administration</li>
              <li>Hardware Troubleshooting</li>
              <li>Remote Support</li>
              <li>Software Deployment</li>
              <li>Device Management</li>
              <li>Networking Fundamentals</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="skillCard">
            <h4>Automation & Tools</h4>

            <ul>
              <li>Bash Scripting</li>
              <li>PowerShell</li>
              <li>Process Automation</li>
              <li>VS Code</li>
              <li>DBeaver</li>
              <li>AI-Assisted Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}