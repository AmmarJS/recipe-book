import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = new Recipe("Test", "This is a test", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU');
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<Recipe>();

  selectItem(event: Event) {
    this.selected.emit(this.recipe);
  }
}
