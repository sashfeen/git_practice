import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({title, calories, ingredients, url, image}) => {

    const listItems = ingredients.map((ingredient) => 
        <li>{ingredient.food}</li>
    );
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <h5>Calories: {calories}</h5>
            <img className={styles.image} src={image} alt="Image of recipe." />
            <p>
                Ingredients: <br></br> <ol>{listItems}</ol> 
                <br></br>
                URL: {url}
            </p>
        </div>
    );
}

export default Recipe;