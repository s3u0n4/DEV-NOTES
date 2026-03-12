"use client";

import { usePathname, useRouter } from "next/navigation";
import "./Header.css";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isSun = pathname.includes("/developer/sun");

  const toggleDeveloper = () => {
    if (isSun) {
      router.push("/developer/shin");
    } else {
      router.push("/developer/sun");
    }
  };

  return (
    <header className="shinHeader">
      <div className="shinHeaderInner">
        <h1 className="shinLogo">
          <Link href="/">&lt;/&gt; Developer Portfolio</Link>
        </h1>

        <div className="shinNavGroup">
          <nav className="shinNav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* 🔥 스위치 토글 */}
          <div
            className={`shinToggleSwitch ${isSun ? "sun" : "shin"}`}
            onClick={toggleDeveloper}
          >
            <div className="shinToggleCircle">
              <img src="../shin/mobile.png" alt="web" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
