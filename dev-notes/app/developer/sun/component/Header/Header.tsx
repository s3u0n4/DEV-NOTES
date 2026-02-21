"use client";

import { usePathname, useRouter } from "next/navigation";
import "./Header.css";

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
    <header className="header">
      <div className="headerInner">
        <h1 className="logo">&lt;/&gt; Developer Portfolio</h1>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* 🔥 스위치 토글 */}
        <div
          className={`toggleSwitch ${isSun ? "sun" : "shin"}`}
          onClick={toggleDeveloper}
        >
          <div className="toggleCircle" />
        </div>
      </div>
    </header>
  );
}
