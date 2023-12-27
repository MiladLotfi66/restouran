import Link from 'next/link'
import styles from './layout.module.css'
function layout(children) {
  return (
    <>
      <header className={styles.header}>
<div className={styles.left}>
    <Link href='/'>foodRoya </Link>
</div>
<div className={styles.right}>
<Link href='/menu'>Menu </Link>
<Link href='/categories'>Categories </Link>

</div>
      </header>
      <div className={styles.container}><children />
      </div>
      <footer className={styles.footer}>
<a href='https://signalmobile.ir' target='_blank' rel='noreferrer'>miladlotfi</a>
this website is created by miladlotfi &copy;
      </footer>
    </>
  )
}

export default layout
