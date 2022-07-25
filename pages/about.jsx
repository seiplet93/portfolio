// special SSR image component
import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div>
      <h1>About</h1>
      {/* testing linter on deploy */}
      <h2>{`Terry's About Page`}</h2>
      <p className={[styles.bigFont, styles.extraGreen].join(" ")}>
        I am a super cool software engineer now. I make super cool stuff with
        the codes.
      </p>
      <div>
        <style jsx>{`
          .orangeText {
            color: orange;
          }
          p {
            font-size: 60px;
          }
        `}</style>
        <p className="orangeText">
          I love to code and would love to code for your company!
        </p>
      </div>

      {/* loading an image locally */}
    </div>
  );
}
