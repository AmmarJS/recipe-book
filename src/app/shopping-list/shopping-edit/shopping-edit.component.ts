import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput!: ElementRef<HTMLInputElement>;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addIngredient(event: Event) {
    event.preventDefault();
    
    let name: string = this.nameInput.nativeElement.value;
    let amount: number = +this.amountInput.nativeElement.value;

    if(name.trim() === '' || amount <= 0) return;

    let newIngredient = new Ingredient(name, amount);

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';

    this.ingredientAdded.emit(newIngredient);
  }
}
