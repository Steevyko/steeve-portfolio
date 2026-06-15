export function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="sectionTitle mb-4">About Me</h2>

          <p className="aboutText">
           {` I'm a Full Stack Developer passionate about building modern,
            scalable web applications that solve real-world problems.
            My journey in technology led me to earn an Associate of Science
            in Web Technologies and the AWS Certified Cloud Practitioner
            certification.`}
          </p>

          <p className="aboutText">
            I specialize in React, Next.js, Node.js, PostgreSQL, MongoDB,
            and AWS cloud services. I enjoy designing clean user experiences,
            developing secure backend systems, and deploying applications
            that are both reliable and scalable.
          </p>

          <p className="aboutText">
        Currently, {`I'm`} building <strong>NapSend</strong>, a cloud-based
        file sharing platform focused on performance, security, and
        simplicity. My goal is to continue growing as a software engineer
        while creating products that deliver meaningful value to users.
          </p>
        </div>
      </div>
    </section>
  );
}