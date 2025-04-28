"use client"

import React from 'react'
import styles from "./styles.services.module.scss"
import { HomeProps } from './../../../utils/home.type';
import Image from 'next/image';
import SimpleParallax from 'simple-parallax-js';


export function Services({ object }: HomeProps) {
    return (
        <>
            <section className={styles.containerAbout} id="servicos">
                <article className={styles.innerAbout}>
                    <h1 className={styles.title}>Sobre</h1>
                    <p>{object.metadata.about.description}</p>
                </article>

                <div className={styles.bannerAbout}>

                    <SimpleParallax delay={1} transition="cubic-bezier(0,0,0,1)" >
                        <Image
                            className={styles.imageAbout}
                            src={object.metadata.about.banner.url}
                            alt='Imagem ilustrativa sobre a empresa'
                            quality={100}
                            fill={true}
                            sizes="(max-width: 480px) 100vw,(max-width: 1024px) 75vw, 60vw"
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

