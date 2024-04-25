import './App.css';
import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import background from "./childe.jpg";

const App = () => {
  const APP_ID = '59353f51';
  const APP_KEY = '99f9581e54e7e27893b0a6ea44e54dc6';
  const VIDEXAMPLE ='https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);
  //empty array 2nd param makes it so effect only occurs when app is mounted

  //TAKES CARE OF GETTING RECIPES
  const getRecipes = async () => {
    const response = await fetch(
      'https://api.edamam.com/search?q=' + query + '&app_id=59353f51&app_key=99f9581e54e7e27893b0a6ea44e54dc6');
    const data = await response.json(); //formats it so its easier to work with
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div style = {{backgroundImage: 'url(${background})' }} className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
        className="search-bar" 
        type="text" 
        onChange={updateSearch} 
        value={search}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        image={recipe.recipe.image} />
      ))}
      </div>
    </div>
  );
}

export default App;
