import styles from "./style.module.scss";

export default function index() {
  return (
    <div className="mt-5 text-center">
      <div className={`${styles.footer} `}>
        <a>Facebook</a>
        <a>LinkedIn</a>
      </div>
      <div className="border-t border-white/[0.2]">+94704238939</div>
    </div>
  );
}
