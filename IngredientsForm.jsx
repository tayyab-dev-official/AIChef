export default function IngredientsForm(props) {
    return (
      //   <form action={props.addIngredient} className="add-ingredient-form">
      //     <input
      //       type="text"
      //       placeholder="e.g. oregano"
      //       aria-label="Add ingredient"
      //       name="ingredient"
      //     />
      //     <button>Add ingredient</button>
      //   </form>
      <form action={props.addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. mutton"
          name="ingredient"
          aria-label="Add ingredient"
        />
        <button>Add ingredients</button>
      </form>
    );
}


