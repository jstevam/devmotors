"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.submenu.module.scss";
import { X, Menu } from "lucide-react";
import { MenuProps } from "@/utils/menu.types";

interface SubMenuProp {
  menu: MenuProps
};


export default function Submenu({ menu }: SubMenuProp) {

  const [isOPen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }

    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, []);

  function toggleMenu() {
    setIsOpen(!isOPen);
  };

  return (

    <section className={styles.submenu}>

      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOPen ? styles.open : ""}`}>

        {isOPen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}


        {menu.objects.map(item => (
          <li key={item.slug}>
            <Link href={`/post/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}

      </ul>

    </section>
  )
}


