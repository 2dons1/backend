import { Controller, Get, Header, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRegisterDto } from './user-register.dto';
import { UserLoginDto } from './user-login.dto';
import { ReviewDto } from './review.dto';
import { RestaurantDto } from './restaurant.dto';
import { CommentDto } from './comment.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/restaurants')
  @Header("Access-Control-Allow-Origin", "*")
  getRestaurants(): {} {
    // console.log("I got it.")
    return this.appService.getRestaurants();
  }

  @Delete('/restaurants')
  @Header("Access-Control-Allow-Origin", "*")
  deleteRestaurant(@Body() restaurant_delete_info: UserRegisterDto): {} {
    console.log(restaurant_delete_info);
    return restaurant_delete_info;
  }

  @Delete('/comments')
  @Header("Access-Control-Allow-Origin", "*")
  deleteComment(@Body() comment: CommentDto): {} {
    console.log(comment);
    return comment;
  }

  @Post('/comments')
  @Header("Access-Control-Allow-Origin", "*")
  postComment(@Body() comment: CommentDto): {} {
    console.log(comment);
    return comment;
  }

  @Put('/restaurants')
  @Header("Access-Control-Allow-Origin", "*")
  editRestaurant(@Body() restaurant_edit_info: UserRegisterDto): {} {
    console.log(restaurant_edit_info);
    return restaurant_edit_info;
  }

  @Get('/restaurant/:id')
  @Header("Access-Control-Allow-Origin", "*")
  getRestaurant(@Param('id') id): {} {
    return this.appService.getRestaurant(id);
  }

  @Get('/restaurant/:id/reviews')
  @Header("Access-Control-Allow-Origin", "*")
  getRestaurantReviews(@Param('id') id): {} {
    return this.appService.getRestaurantReviews(id);
  }

  @Post('/register')
  @Header("Access-Control-Allow-Origin", "*")
  userRegister(@Body() user: UserRegisterDto){
    console.log(user);
    return this.appService.userRegister(user);
  }

  @Post('/login')
  @Header("Access-Control-Allow-Origin", "*")
  userLogin(@Body() user: UserLoginDto){
    return this.appService.userLogin(user);
  }

  @Post('/review')
  @Header("Access-Control-Allow-Origin", "*")
  postReview(@Body() review: ReviewDto){
    return this.appService.postReview(review);
  }

  @Post('/addRestaurant')
  @Header("Access-Control-Allow-Origin", "*")
  postRestaurant(@Body() restaurant: RestaurantDto){
    console.log(restaurant);
    return this.appService.postRestaurant(restaurant);
  }

}
