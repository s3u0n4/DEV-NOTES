import "../About/About.css";
export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="sectionTitle">About Me</h2>

      <div className="aboutCards">
        <div className="aboutCard">
          <div className="img">
            <img src="../shin/AboutOne.png" alt="one" />
          </div>

          <h3>Flow First</h3>
          <p>
            기능 구현하기 전에 사용자와 시스템의 흐름을 먼저 파악합니다.
            <br />
            흐름이 정리되지 않는 코드는 문제를 해결하지 못한다고 생각합니다.
          </p>
        </div>

        <div className="aboutCard">
          <div className="img">
            <img src="../shin/AboutTwo.png" alt="two" />
          </div>

          <h3>Structural Thinking</h3>
          <p>
            문제의 본질을 구조적으로 분해하고 설계합니다.
            <br />
            구조가 명확할수록 코드는 단순해지고 유지보수는 쉬워집니다.
          </p>
        </div>

        <div className="aboutCard">
          <div className="img">
            <img src="../shin/AboutThird.png" alt="third" />
          </div>

          <h3>Reasoned Technology</h3>
          <p>
            새로운 기술 앞에서 먼저 왜?를 묻습니다.
            <br />
            트렌드를 따르기보다 문제에 가장 적합한 기술을 선택합니다.
          </p>
        </div>
      </div>

      <p className="aboutDescription">
        저는 문제를 바로 해결하기보다, 먼저 흐름과 구조를 이해하는 개발자입니다.
        <br />
        새로운 기술이 등장할 때마다 무작정 사용하기보다는, 왜 필요한지 그리고
        어떤 문제를 해결하는지부터 고민합니다.
        <br />
        근본적인 구조 위에서 선택된 기술만이 오래 유지될 수 있다고 믿으며,
        변화하는 기술 환경 속에서도 기준을 잃지 않는 개발을 지향합니다.
      </p>
    </section>
  );
}
