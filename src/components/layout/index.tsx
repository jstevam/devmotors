import React from 'react'
import styles from "./styles.container.module.scss"
import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.layoutContainer}>
            {children}
        </div>
    )
}
