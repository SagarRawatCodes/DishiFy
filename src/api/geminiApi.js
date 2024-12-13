
        

        import axios from "axios";

        
        const geminiApiKey = process.env.REACT_APP_GEMINI_API;

        
        const generateRecipe = async ({ ingredients, mealType, cuisine, cookingTime, complexity }) => {
            const recipePrompt = [
                "Generate a recipe that incorporates the following details:",
                `[Ingredients: ${ingredients}]`,
                `[Meal Type: ${mealType}]`,
                `[Cuisine Preference: ${cuisine}]`,
                `[Cooking Time: ${cookingTime}]`,
                `[Complexity: ${complexity}]`,
                "Please provide a detailed recipe, including steps for preparation and cooking. Only use the ingredients provided.",
                "The recipe should highlight the fresh and vibrant flavors of ingredients.",
                "Also, give the recipe a suitable name in its local language based on cuisine preference.",
            ].join('\n');
            console.log(recipePrompt);
        
            
        
            // Log individual fields for debugging
            console.log("Ingredients:", ingredients);
            console.log("Meal Type:", mealType);
            console.log("Cuisine:", cuisine);
            console.log("Cooking Time:", cookingTime);
            console.log("Complexity:", complexity);
        
            try {
                const response = await axios({
                    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`,
                    method: "post",
                    data: {
                        contents: [
                            {
                                parts: [
                                    { text: recipePrompt }
                                ]
                            },
                        ],
                    },
                });
                console.log(response.data);
        
                // Extract the recipe text from the response
                const RecipeText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No recipe content available';
        
                const recipeTitle = RecipeText.split('\n')[0].trim();

        
                console.log("Generated Recipe:", RecipeText);
               // console.log("Recipe Title:", recipeTitle);
        
                return {  RecipeText,recipeTitle};
            } catch (error) {
                console.error("Error generating recipe:", error);
                throw new Error('Failed to generate recipe');
            }
        };
        
        export default generateRecipe;
        