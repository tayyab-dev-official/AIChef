import React from "react";
import IngredientsForm from "./IngredientsForm";
import IngredientsList from "./components/IngredientsList";
import AIRecipe from "./components/AIRecipe";
import { getRecipeFromMistral } from "./ai";


export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function getRecipe() {
    setIsLoading(true);
    setRecipe("");
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setIsLoading(false);
  }

  // const recipeSection = React.useRef(null);

  // React.useEffect(
  //   function () {
  //     recipe
  //       ? recipeSection.current && recipeSection.current.scrollIntoView()
  //       : console.log(`no recipe`);
  //   },
  //   [recipe]
  // );

  // const recipeSection = React.useRef(null);

  // React.useEffect(() => {
  //   if (recipe !== "" && recipeSection.current !== null) {
  //     recipeSection.current.scrollIntoView();
  //   }
  // }, [recipe]);

  const recipeSection = React.useRef(null);

  React.useEffect(
    function () {
      if (recipe && recipeSection.current) {
        recipeSection.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [recipe]
  );

  React.useEffect(
    function () {
      if (isLoading && recipeSection.current) {
        setTimeout(() => {
          recipeSection.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    },
    [isLoading]
  );

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <section className="instructions" style={{ marginBottom: "1.5rem" }}>
        <h2>Welcome to CloudChef!</h2>
        <p>Enter your ingredients below and click "Add ingredients". When you have at least 4, click "Get a recipe" to let AI Chef create a recipe for you!</p>
      </section>

      <IngredientsForm addIngredient={addIngredient} />

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      )}

      {isLoading && (
        <section className="ai-loading-message" aria-live="polite" ref={recipeSection}>
          <h3>AI Chef is generating your recipe...</h3>
        </section>
      )}

      {recipe && <AIRecipe recipe={recipe} />}
    </main>
  );
}
