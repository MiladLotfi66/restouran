import styles from './MenuPage.module.css'
import Card from '../modules/Card'
function MenuPage({data}) {
  return (
    <div className={styles.container}>
        <h2>menu</h2>
        <div className={styles.subContainer}>{
            data.map((food)=><Card key={food.id} {...food}></Card>)
            }</div>
    </div>
  )
}
export default MenuPage


