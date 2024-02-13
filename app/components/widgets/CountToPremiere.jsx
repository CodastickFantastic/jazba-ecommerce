import { Image } from "@shopify/hydrogen-react"
import styles from "~/styles/components/widgets/countToPremiere.module.css"

import premiereUnknown from "~/../public/jazba-nowa-premiera.webp"
import { Link } from "@remix-run/react"
import { useEffect, useState } from "react";

export default function CountToPremiere() {
    const [timeToPremiere, setTimeToPremiere] = useState({
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    });

    useEffect(() => {
        let startCoundDownToPremiere = setInterval(() => {
            const countDownDate = new Date("20 Feb 2024 19:00:00").getTime();
            let now = new Date().getTime()

            let distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeToPremiere({
                days: days < 10 ? "0" + days : days,
                hours: hours < 10 ? "0" + hours : hours,
                minutes: minutes < 10 ? "0" + minutes : minutes,
                seconds: seconds < 10 ? "0" + seconds : seconds
            })

            if (distance < 0) {
                clearInterval(startCoundDownToPremiere)
            }
        }, 1000)
    }, [])



    return (
        <div className={styles.newPremiere}>
            <h2>Premiera <span className="beige">Haftu</span></h2>
            <Image src={premiereUnknown} alt="Wyciemno postać, kto to może być?" width={228} />
            <div className={styles.timer}>
                <div className={styles.timerSegment}>
                    <span className={styles.time}>{timeToPremiere.days}</span>
                    <span className={styles.label}>dni</span>
                </div>
                <div className={styles.timerSegment}>
                    <span className={styles.time}>{timeToPremiere.hours}</span>
                    <span className={styles.label}>godziny</span>
                </div>
                <div className={`${styles.timerSegment} ${styles.delimiter}`}>
                    <span className={styles.time}>:</span>
                    <span className={styles.label}>:</span>
                </div>
                <div className={styles.timerSegment}>
                    <span className={styles.time}>{timeToPremiere.minutes}</span>
                    <span className={styles.label}>minuty</span>
                </div>
                <div className={styles.timerSegment}>
                    <span className={styles.time}>{timeToPremiere.seconds}</span>
                    <span className={styles.label}>sekundy</span>
                </div>
            </div>
            <Link to="/#newsletter">Poinformuj mnie o premierze</Link>
        </div>
    )
}