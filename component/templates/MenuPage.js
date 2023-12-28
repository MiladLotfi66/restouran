import styles from './MenuPage.module.css'

function MenuPage({data}) {
    console.log(data);
  return (
    <div className={styles.container}>
        <h2>menu</h2>
        <div className={styles.subContainer}>{
            data.map(food=><p key={food.id}>{food.name}</p>)
            }</div>
    </div>
  )
}
export default MenuPage


