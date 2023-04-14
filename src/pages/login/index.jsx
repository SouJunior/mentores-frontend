import styles from './login.module.scss'
import FormCard from '../../components/FormCard/formCard';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        className={styles.figures}
        src="BackgroundFigures.svg"
        alt="Figuras do Background"
        width={1316.51}
        height={855.58}
      />
      <FormCard />
    </div>
  )
}