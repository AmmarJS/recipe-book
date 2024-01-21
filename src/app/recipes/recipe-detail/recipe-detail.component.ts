import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe = new Recipe('test', 'test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU');
}
