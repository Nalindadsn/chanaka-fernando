import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.scss";
import Link from "next/link";

export default function index() {
  return (
    <div className="mt-5 text-center">
      <div className={`${styles.footer} `}>
        <Link
          href="https://www.linkedin.com/in/chanakafernando"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <FaLinkedin />
          LinkedIn
        </Link>
        {/* <Link
          href="https://github.com/Nalindadsn"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <FaGithub />
          Github
        </Link> */}
        <Link
          href="https://web.facebook.com/chanaka.fernando.5011"
          className="flex gap-1 items-center"
          target="_blank"
        >
          <FaFacebook />
          Facebook
        </Link>
      </div>
      <div className="border-t border-white/[0.2]">
        <Link
          href="https://api.whatsapp.com/send/?phone=94704238939"
          target="_blank"
          className="flex gap-1 items-center w-full justify-center py-2"
        >
          <FaWhatsapp className="text-green-500" /> whatsapp
        </Link>
      </div>
    </div>
  );
}
