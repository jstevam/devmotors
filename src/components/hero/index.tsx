import { ReactNode } from "react"
import style from "@/components/hero/styles.hero.module.scss";
import Image from "next/image";

interface HeroProps {
    heading: string;
    buttonUrl: string;
    buttonTitle: string;
    bannerUrl: string;
    icon: ReactNode;
}

export function Hero({ heading, buttonUrl, buttonTitle, bannerUrl, icon }: HeroProps) {

    return (
        <main className={style.main}>
            <div className={style.containerHero}>
                <h1 className={style.title}>{heading}</h1>
                <a href={buttonUrl}
                    target="_blank"
                    className={style.link}
                >
                    {icon}
                    {buttonTitle}
                </a>
            </div>

            <div className={style.contentBanner}>
                <Image
                    className={style.banner}
                    alt={heading}
                    src={bannerUrl}
                    priority={true}
                    quality={100}
                    fill={true}
                />
            </div>

        </main>
    );
}