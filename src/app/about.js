export function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="sectionTitle mb-4">About Me</h2>

          <p className="aboutText">
            {`I am a Full Stack Developer and AWS Certified Cloud Practitioner
            with experience in both software development and IT support. My
            background includes building modern web applications using React,
            Next.js, Node.js, PostgreSQL, and MongoDB, as well as providing
            computer technician support through hands-on internship experience.`}
          </p>

          <p className="aboutText">
            {`During my internship, I worked with NinjaOne to assist with
            device management, system monitoring, troubleshooting, software
            deployment, and general IT support operations. I also worked with
            Windows and Linux environments, gaining experience in operating
            system administration, system maintenance, scripting, automation,
            and technical support.`}
          </p>

          <p className="aboutText">
            {`I enjoy solving technical problems, whether that means developing
            scalable web applications, managing cloud infrastructure,
            automating processes, or helping users resolve technology issues
            efficiently. Currently, I am building `}
            <strong>NapSend</strong>
            {`, a cloud-based file sharing platform focused on performance,
            security, and simplicity. My goal is to continue growing as both a
            software engineer and IT professional while creating reliable
            solutions that deliver meaningful value.`}
          </p>
        </div>
      </div>
    </section>
  );
}