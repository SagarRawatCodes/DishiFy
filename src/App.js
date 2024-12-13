/*import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import RecipeForm from './component/RecipeForm';
import RecipePage from './component/RecipePage';
import generateRecipe from './api/geminiApi';

function App() {
  const [recipe, setRecipe] = useState({ title: '', text: '', image: '' });
  const navigate = useNavigate();
  const handleRecipeGeneration =async (formData) => {
    

    try {
      const { recipeTitle, ingredients, instructions, Serve } = await generateRecipe(formData);
      setRecipe({ title: recipeTitle, ingredients, instructions, Serve });
      navigate('/recipe', { state: { recipeTitle, ingredients, instructions, Serve } });
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe({ title: 'Error', ingredients: 'Unable to generate recipe.', instructions: '', Serve: '' });
      navigate('/recipe', { state: { recipeTitle: 'Error', ingredients: 'Unable to generate recipe.', instructions: '', Serve: '' } });
    };
  
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={<RecipeForm onRecipeGenerated={handleRecipeGeneration} />}
          />
          <Route
            path="/recipe"
            element={<RecipePage recipe={recipe} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
};
};

export default App;
/*
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeForm from './component/RecipeForm';
import RecipePage from './component/RecipePage';
import generateRecipe from './api/geminiApi';

function App() {
  const [recipe, setRecipe] = useState({ title: '', text: '', image: '' });

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={<RecipeForm onRecipeGenerated={handleRecipeGeneration} />}
          />
          <Route
            path="/recipe"
            element={<RecipePage recipe={recipe} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function RecipeForm({ onRecipeGenerated }) {
  const navigate = useNavigate();

  const handleRecipeGeneration = async (formData) => {
    try {
      const { recipeTitle, ingredients, instructions, Serve } = await generateRecipe(formData);
      setRecipe({ title: recipeTitle, ingredients, instructions, Serve });
      navigate('/recipe', { state: { recipeTitle, ingredients, instructions, Serve } });
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe({ title: 'Error', ingredients: 'Unable to generate recipe.', instructions: '', Serve: '' });
      navigate('/recipe', { state: { recipeTitle: 'Error', ingredients: 'Unable to generate recipe.', instructions: '', Serve: '' } });
    }
  };

  // ... rest of your form component
}

export default App;*/
import { useState } from "react";
import {Route, Routes, useNavigate } from "react-router-dom";
import RecipeForm from './component/RecipeForm';
import generateRecipe from './api/geminiApi';

function App() {
  const [recipe, setRecipe] = useState({ title: '', text: '', image: '' });
  const navigate = useNavigate();

  const handleRecipeGeneration = async (formData) => {
    console.log(formData);
    try {
      const { recipeText, recipeTitle} = await generateRecipe(formData);
      console.log("Generated Recipe:", recipeText, recipeTitle);
      setRecipe({ title: recipeTitle, text: recipeText,});
      navigate('/recipe', { state: { recipeTitle, recipeText} });
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe({ title: 'Error', text: 'Unable to generate recipe.'});
      navigate('/recipe', { state: { recipeTitle: 'Error', recipeText: 'Unable to generate recipe.' } });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    <Routes>
      <Route
        path="/"
        element={<RecipeForm onSubmit={handleRecipeGeneration} recipe={recipe}/>}
      />
    </Routes>
  </div>
);
}


export default App;
