import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShopingListService } from '../../shoping-list/shoping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  
  ngOnInit(): void {
      
  }
  onAddToShopingList(){
    this.recipeService.addIngredientToShopingItem(this.recipe.ingredients);
  }
}
