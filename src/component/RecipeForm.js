
/*
import { useState } from "react";
import "../App.css";
import generateRecipe from "../api/geminiApi";

const RecipeForm = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState(""); // State to store the generated recipe
  const [recipeTitle, setRecipeTitle] = useState(""); // State to store the recipe title

  const handleSubmit = async () => {
    const formData = {
      ingredients,
      mealType,
      cuisine,
      cookingTime,
      complexity,
    };

    try {
      const { RecipeText, recipeTitle } = await generateRecipe(formData); // Get both recipe text and title
      console.log("Generated Recipe:", RecipeText);
      console.log("Recipe Title:", recipeTitle);
      setGeneratedRecipe(RecipeText); // Set the recipe text into state
      setRecipeTitle(recipeTitle); // Set the recipe title into state
    } catch (error) {
      console.error("Error generating recipe:", error);
      setGeneratedRecipe("Failed to generate recipe. Please try again."); // Error handling
      setRecipeTitle(""); // Clear title on error
    }
  };

  return (
    <div>
    <div className="flex justify-center items-center">
  <div className="font-bold text-5xl text-center m-2 text-blue-500">
    DishiFy
  </div>
</div>
    <div className="flex flex-row mt-5 justify-center items-center">
      <div className="w-[400px] border rounded-lg overflow-hidden shadow-lg text-center">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Recipe Generator</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
              Ingredients
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ingredients"
              type="text"
              placeholder="Enter ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealType">
              Meal Type
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="mealType"
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisine">
              Cuisine Preference
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cuisine"
              type="text"
              placeholder="e.g., Italian, Mexican"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookingTime">
              Cooking Time
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="cookingTime"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            >
              <option value="Less than 30 minutes">Less than 30 minutes</option>
              <option value="30-60 minutes">30-60 minutes</option>
              <option value="More than 1 hour">More than 1 hour</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="complexity">
              Complexity
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="complexity"
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Generate Recipe
            </button>
          </div>
        </div>
      </div>
      <div>


      
      <div className="w-[400px] h-[565px] text-sm text-gray-600 p-4 border rounded-lg shadow-xl whitespace-pre-line overflow-y-auto">
      {recipeTitle && (
        <div className="text-2xl font-bold text-center mb-4">
          {recipeTitle} 
        </div>
      )}
        {generatedRecipe} { Display the generated recipe }
      </div>
    </div>
    </div>
    </div>
  );
};

export default RecipeForm;
*/
import { useState } from "react";
import "../App.css";
import generateRecipe from "../api/geminiApi";
import { Oval } from 'react-loader-spinner'; // Import the loader

const RecipeForm = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");
  const [generatedRecipe, setGeneratedRecipe] = useState(""); // State to store the generated recipe
  const [recipeTitle, setRecipeTitle] = useState(""); // State to store the recipe title
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleSubmit = async () => {
    const formData = {
      ingredients,
      mealType,
      cuisine,
      cookingTime,
      complexity,
    };

    setLoading(true);  // Start loading

    try {
      const { RecipeText, recipeTitle } = await generateRecipe(formData); // Get both recipe text and title
      console.log("Generated Recipe:", RecipeText);
      console.log("Recipe Title:", recipeTitle);
      setGeneratedRecipe(RecipeText); // Set the recipe text into state
      setRecipeTitle(recipeTitle); // Set the recipe title into state
    } catch (error) {
      console.error("Error generating recipe:", error);
      setGeneratedRecipe("Failed to generate recipe. Please try again."); // Error handling
      setRecipeTitle(""); // Clear title on error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="font-bold text-5xl text-center m-2 text-blue-500">DishiFy</div>
      </div>
      <div className="flex flex-row mt-5 justify-center items-center">
        <div className="w-[400px] border rounded-lg overflow-hidden shadow-lg text-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Recipe Generator</div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
              Ingredients
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ingredients"
              type="text"
              placeholder="Enter ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealType">
              Meal Type
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="mealType"
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisine">
              Cuisine Preference
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cuisine"
              type="text"
              placeholder="e.g., Italian, Mexican"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookingTime">
              Cooking Time
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="cookingTime"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            >
              <option value="Less than 30 minutes">Less than 30 minutes</option>
              <option value="30-60 minutes">30-60 minutes</option>
              <option value="More than 1 hour">More than 1 hour</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="complexity">
              Complexity
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="complexity"
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          
            {/* Form inputs (ingredients, meal type, etc.) */}
            {/* Your existing form code here */}
            <div className="px-6 py-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Generate Recipe
              </button>
            </div>
          </div>
        </div>

        {/* Displaying the Loading spinner or recipe */}
        <div>
          <div className="w-[400px] h-[565px] text-md text-gray-600 p-4 border rounded-lg shadow-xl whitespace-pre-line overflow-y-auto">
            {loading ? (
              <div className="flex flex-col justify-center items-center py-10">
              {/* Loading Text */}
              <div className="text-xl font-semibold text-gray-500 mb-4">
                Please wait, generating your recipe...
              </div>
              {/* Loader */}
              <Oval color="#00BFFF" height={50} width={50} />
            </div>
            ) : (
              <>
                {recipeTitle && (
                  <div className="text-2xl font-bold text-center mb-4">
                    {recipeTitle} {/* Display the recipe title */}
                  </div>
                )}
                <div>{generatedRecipe}</div> {/* Display the generated recipe */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
