import { useRef, useState } from "react";
import Image from 'next/image';
import styles from './inputSenha.module.scss'


export default function InputSenha() {
  const inputRef = useRef(null);
  const [eyeIsClosed, setEyeState] = useState(false);

  const toggleShow = () => {
    if (inputRef.current.type === "password") {
      setEyeState(true)
      inputRef.current.type = "text";
    } else {
      setEyeState(false)
      inputRef.current.type = "password";
    }
  };

  function Eye() {
    return (<Image
      src="EyeDefault.svg"
      alt="Eye"
      width={24}
      height={24}
    />)
  }

  function EyeClosed() {
    return (<Image
      src="EyeClosed.svg"
      alt="EyeClosed"
      width={24}
      height={24} />)
  }

  return (
    <div className={styles.container}>
      <span className={styles.image}></span>
      <input className={styles.input} ref={inputRef} type="password" placeholder="senha123" />
      <button className={styles.button} type='button' onClick={toggleShow}>{eyeIsClosed ? <EyeClosed /> : <Eye />}</button>
    </div>
  )
}