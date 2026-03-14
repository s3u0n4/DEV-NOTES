import "../Footer/Footer.css";

export default function Footer() {
  return (
    <footer className="shinFooter">
      <div className="shinFooterInner">
        {/* 왼쪽 */}
        <div className="shinFooterLeft">
          <h2 className="shinFooterLogo">
            <span>&lt;/&gt;</span> Developer Portfolio
          </h2>

          <p>
            코드보다 먼저 흐름을 설계합니다.
            <br />
            문제의 본질에서 출발한 디지털 경험을 만듭니다.
          </p>
        </div>

        {/* 가운데 */}
        <div className="shinFooterCenter">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* 오른쪽 */}
        <div className="shinFooterRight">
          <h3>Connect</h3>

          <div className="shinFooterIcons">
            <a href="#">
              <img src="/github.png" alt="github" />
            </a>

            <a href="#">
              <img src="/mail.png" alt="mail" />
            </a>
          </div>
        </div>
      </div>

      <div className="shinFooterBottom">
        © 2026 Jungha Shin. All rights reserved.
      </div>
    </footer>
  );
}
