import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter();
  ingredientsToShopingList = new EventEmitter<Ingredient[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 1),
      ]
    ),
  ];

  constructor(private shopingListService: ShopingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShopingItem(ingredients: Ingredient[]) {
    this.shopingListService.addIngriedients(ingredients);
  }
}
