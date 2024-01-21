import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('This is a test', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU'),
    new Recipe('This is a test 2', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU')
  ];
  selectedItem: number = -1;
  @Output() itemSelected = new EventEmitter<Recipe>();

  selectItem(recipe: Recipe) {
    this.recipes.forEach(rec => {
      if(rec.id === recipe.id) {
        this.selectedItem = rec.id;
      }
    })
    this.itemSelected.emit(recipe);
  }
}
