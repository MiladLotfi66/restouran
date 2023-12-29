import { useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";

function CategoriesPage() {
    const router=useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  function changeHandler(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }
  function searchHandler() {
    router.push({pathname:"/categories" , query})
    console.log(query);
  }

  return (
    <div className={styles.container}>
      <h2>Categories Page</h2>
      <div className={styles.subcontainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More Than 30 min</option>
            <option value="less">Les than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
