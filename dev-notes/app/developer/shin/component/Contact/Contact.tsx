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

          <p>Email: tlswndgk@gmail.com</p>
          <p>Location: Ansan-si, Korea</p>
        </div>

        <form className="contactForm">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="your.email@example.com" />
          <textarea placeholder="Tell me about your project..." />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
