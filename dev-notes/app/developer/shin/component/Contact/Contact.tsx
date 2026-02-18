import "../Contact/Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="sectionTitle">Get In Touch</h2>

      <div className="contactWrapper">
        <div className="contactInfo">
          <h3>Let’s Work Together</h3>
          <p>
            함께 문제를 정의하고, 구조적인 해결책을 만들어가고 싶습니다.
            <br />
            새로운 프로젝트,창의적인 아이디어, 또는 같은 기준을 가진 협업이라면
            언제든 환영합니다.
          </p>
          <div className="infoItem">
            <div className="iconCircle">
              <img src="/shin/mail.png" alt="mail" />
            </div>
            <div>
              <span className="infoTitle">Email</span>
              <p>tlswndgk@gmail.com</p>
            </div>
          </div>

          <div className="infoItem">
            <div className="iconCircle">
              <img src="/shin/location.png" alt="location" />
            </div>

            <div>
              <span className="infoTitle">Location</span>
              <p>Ansan-si, Korea</p>
            </div>
          </div>
        </div>

        <form className="contactForm">
          <h3>Name</h3>
          <input type="text" placeholder="Your name" />
          <h3>Email</h3>
          <input type="email" placeholder="your.email@example.com" />
          <h3>Message</h3>
          <textarea placeholder="Tell me about your project..." />
          <button type="submit">
            Send Message <img src="/shin/send.png" alt="send" />
          </button>
        </form>
      </div>
    </section>
  );
}
