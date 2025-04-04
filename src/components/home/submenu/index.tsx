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


  console.log(menu)

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


        <li>
          <Link href="/post/pagina-1">
            Pagina 1
          </Link>
        </li>
        <li>
          <Link href="/post/pagina-2">
            Pagina 2
          </Link>
        </li>
        <li>
          <Link href="/post/pagina-3">
            Pagina 3
          </Link>
        </li>

      </ul>

    </section>
  )
}


