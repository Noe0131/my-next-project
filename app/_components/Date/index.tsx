import Image from "next/image";
import styles from "./index.module.css";

type Props = {
    date: string;
};

export default function Data({ date }: Props) {
    return (
        <span className={styles.data}>
            <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
            {date}
        </span>
    );
}