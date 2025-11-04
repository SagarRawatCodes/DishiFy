
        

        import axios from "axios";

const geminiApiKey = process.env.REACT_APP_GEMINI_API;

const generateRecipe = async ({ ingredients, mealType, cuisine, cookingTime, complexity }) => {
  if (!geminiApiKey) {
    throw new Error("Missing Gemini API key! Add REACT_APP_GEMINI_API to your .env file.");
  }

  const recipePrompt = `
Generate a recipe that incorporates the following details:
- Ingredients: ${ingredients}
- Meal Type: ${mealType}
- Cuisine Preference: ${cuisine}
- Cooking Time: ${cookingTime}
- Complexity: ${complexity}

Provide a detailed recipe with preparation and cooking steps.
Use only the provided ingredients.
Give the recipe a name in its local language based on cuisine preference.
  `;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`,
      {
        contents: [
          {
            parts: [{ text: recipePrompt }],
          },
        ],
      }
    );

    const recipeText = response.data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text)
      ?.join("\n") || "No recipe content available";

    const recipeTitle = recipeText.split("\n")[0].trim();

    console.log("Generated Recipe:", recipeText);
    return { recipeText, recipeTitle };
  } catch (error) {
    console.error("Error generating recipe:", error.response?.data || error.message);
    throw new Error("Failed to generate recipe");
  }
};

export default generateRecipe;

