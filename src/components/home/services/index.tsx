"use client"
<<<<<<< HEAD
=======

>>>>>>> d76754f3c4d270c53cef4e15e7692ddbc3a8b101
import React from 'react'
import styles from "./styles.services.module.scss"
import { HomeProps } from './../../../utils/home.type';
import Image from 'next/image';
<<<<<<< HEAD
import SimpleParallax from 'simple-parallax-js';
=======
import SimpleParallax from "simple-parallax-js";
>>>>>>> d76754f3c4d270c53cef4e15e7692ddbc3a8b101

export function Services({ object }: HomeProps) {
    return (
        <>
            <section className={styles.containerAbout} id="servicos">
                <article className={styles.innerAbout}>
                    <h1 className={styles.title}>Sobre</h1>
                    <p>{object.metadata.about.description}</p>
                </article>

                <div className={styles.bannerAbout}>
<<<<<<< HEAD
                    <SimpleParallax delay={1} transition="cubic-bezier(0,0,0,1)" >
=======
                    <SimpleParallax orientation="right">
>>>>>>> d76754f3c4d270c53cef4e15e7692ddbc3a8b101
                        <Image
                            className={styles.imageAbout}
                            src={object.metadata.about.banner.url}
                            alt='Imagem ilustrativa sobre a empresa'
                            quality={100}
<<<<<<< HEAD
                            // fill={true}
                            //sizes="(max-width: 480px) 100vw,(max-width: 1024px) 75vw, 60vw"
                            width={1024} height={1920}
=======
                            fill={true}
                            sizes="(max-width: 480px) 100vw,(max-width: 1024px) 75vw, 60vw"
>>>>>>> d76754f3c4d270c53cef4e15e7692ddbc3a8b101
                        />
                    </SimpleParallax>
                </div>

            </section>

            <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

            <section className={styles.services}>

                {object.metadata.services.map(service => (
                    <article key={service.description} className={styles.service}>

                        <div className={styles.innerService}>
                            <Image
                                className={styles.imageService}
                                src={service.imagem.url}
                                alt='Imagem do Serviço'
                                quality={100}
                                fill={true}
                                sizes="(max-width: 480px) 100vw,(max-width: 1024px) 75vw, 60vw"
                            />
                        </div>

                        <p>{service.description}</p>

                    </article>
                ))}

            </section>

        </>
    )
}

