import styles from "./not-found.module.css";  // 修正点: "moudule" -> "module"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.text}>
                    あなたがアクセスしようしたページは存在しません。
                    <br />
                    URLを再度ご確認ください。
                </dd>
            </dl>
        </div>
    );
}
