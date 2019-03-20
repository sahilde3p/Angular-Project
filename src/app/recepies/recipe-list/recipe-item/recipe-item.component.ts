import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  private recipe: Recipe;

  

  

  constructor(private recipeService: RecipeService) { }

  ngOnInit() 
  {
    this.recipeService.selectedRecipe.subscribe( 
      
      (recipe:Recipe)=>{
        this.recipe = recipe;
    });
  }

}