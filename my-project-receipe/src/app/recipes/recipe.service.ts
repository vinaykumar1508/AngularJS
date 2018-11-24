import { Recipe } from "src/app/recipes/recipe.model";
import { EventEmitter,Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'Tasty Schnitzel is awesome',
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
        ),
        new Recipe(
            'Big Fat Burger',
            'Oh yeah!!',
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ];
    
    constructor(private slService: ShoppingListService){}
    
    getRecipes(){
         return this.recipes.slice(); // slice returns a new array(copy of original array) not the original array 
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }
        
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}