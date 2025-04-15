"use client";

import Link from "next/link";
import styles from "./styles.error.module.scss";


export default function Error() {
    return (
        <div className={styles.error}>
            <h1>Ops essa pagina não existe!</h1>
            <Link href="/">
                Voltar para Home
            </Link>
        </div>

    )
}