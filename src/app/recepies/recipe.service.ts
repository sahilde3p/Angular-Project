import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService
{
    public selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 
        "It is a test",
        "https://i2.wp.com/shimmishango.com.au/wp-content/uploads/2018/08/rawpixel-722818-unsplash.jpg?resize=300%2C200&ssl=1"
         ),

         new Recipe('Test Recipe2', 
        "It is a test2",
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86uBg9-Alz2nFbWe7ELEnesFbVR9E0kJV67qkKudTFCxH7AZu'
         )
      ];

      getRecipes()
      {
          return this.recipes.slice();
      }

      
    
}