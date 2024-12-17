import Image from 'next/image';
import styles from './page.module.css';
import { MEMBERS_LIST_LIMIT} from "@/app/_constants";
import { getMembersList } from '../_libs/microcms';

export default async function Page() {
  const data = await getMembersList({ limit: 100 });
    return (
      <div className={styles.container}>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません。</p>
        ) : (
          <ul>
            {data.contents.map((member) => (
              <li key={member.id} className={styles.list}>
                <Image
                  src={member.image.url}
                  alt=""
                  width={member.image.width}
                  height={member.image.height}
                  className={styles.image}
                />
                <dl>
                  <dt className={styles.name}>{member.name}</dt>
                  <dd className={styles.position}>{member.position}</dd>
                  <dd className={styles.profile}>{member.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }