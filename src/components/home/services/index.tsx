import React from 'react'
import styles from "./styles.services.module.scss"
import { HomeProps } from './../../../utils/home.type';
import Image from 'next/image';

export function Services({ object }: HomeProps) {
    return (
        <>
            <section className={styles.containerAbout} id="servicos">
                <article className={styles.innerAbout}>
                    <h1 className={styles.title}>Sobre</h1>
                    <p>{object.metadata.about.description}</p>
                </article>

                <div className={styles.bannerAbout}>
                    <Image
                        className={styles.imageAbout}
                        src={object.metadata.about.banner.url}
                        alt='Imagem ilustrativa sobre a empresa'
                        quality={100}
                        fill={true}
                    />
                </div>
            </section>

            <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

            <section className={styles.services}>

                {object.metadata.services.map(service => (
                    <article key={service.descripion} className={styles.service}>

                        <div className={styles.innerService}>
                            <Image
                                className={styles.imageService}
                                src={service.imagem.url}
                                alt='Imagem do Serviço'
                                quality={100}
                                fill={true}
                            />
                        </div>

                        <p>{service.descripion}</p>

                    </article>
                ))}

            </section>

        </>
    )
}

