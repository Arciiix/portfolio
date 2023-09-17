import styles from "./Hamburger.module.css";

interface HamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Hamburger({ isOpen, onToggle }: HamburgerProps) {
  return (
    <div
      className={`${styles.hamburger} ${isOpen ? styles.isActive : ""}`}
      onClick={onToggle}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}
