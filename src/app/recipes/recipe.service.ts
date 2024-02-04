import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'; 

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('This is a test', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU'),
    new Recipe('This is a test 2', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU')
  ];
  
  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }
}
