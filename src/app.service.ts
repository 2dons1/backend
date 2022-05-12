import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly restaurants = [
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 1, naziv: "Gladne oči", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "ul. Nikole Tesle 10, 10000, Zagreb"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 2, naziv: "NOMU sushi & wine", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "ul. Nikole Tesle 11, 10000, Zagreb"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 3, naziv: "Famoso Food", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "ul. Nikole Tesle 12, 10000, Zagreb"},
    {time: "10.5.2022 17:51", telefon: "091 129 6147", id: 4, naziv: "The Stag's Head", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 00.00", adresa: "ul. Nikole Tesle 13, 10000, Zagreb"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 5, naziv: "Sheeft", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "ul. Nikole Tesle 14, 10000, Zagreb"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 6, naziv: "Terasa", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "Horvaćanska cesta 69"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 7, naziv: "The Stag's Head", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 00.00", adresa: "ul. Nikole Tesle 13, 10000, Zagreb"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 8, naziv: "Sheeft", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "ul. Nikole Tesle 14, 10000, Zagreb"},
    {time: "10.5.2022 17:67", telefon: "091 129 6147", id: 9, naziv: "Terasa", image: "placeholder.png", kratica: "caffe", radnoVrijeme: "Otvoreno: zatvara se u 23.00", adresa: "Horvaćanska cesta 69"}
  ];

  private restaurants_reviews = [
    {user_id: "Korisnik1", review_text: "Ovo je tekst recenzije1", review_title: "Naslov recenizje"},
    {user_id: "Korisnik2", review_text: "Ovo je tekst recenzije2", review_title: "Naslov recenizje"},
    {user_id: "Korisnik3", review_text: "Ovo je tekst recenzije3", review_title: "Naslov recenizje"},
    {user_id: "Korisnik4", review_text: "Ovo je tekst recenzije4", review_title: "Naslov recenizje"},
  ];

  getRestaurants(): {} {
    // SELECT * FROM RESTAURANTS
    return this.restaurants;
  }

  getRestaurant(id): {} {
    // SELECT * FROM RESTAURANTS WHERE RESTAURANT_ID == id
    const result = [];
    this.restaurants.forEach(element => {
      if(element.id == id){
        result.push(element);
      }
    });
    return result;
  }

  getRestaurantReviews(id): {} {
    // SELECT * FROM REVIEWS WHERE RESTAURANT_ID == id
    if(id == "4"){
      return this.restaurants_reviews;
    }
    else{
      return [];
    }
  }

  userRegister(user){
    if(user.username != "Dorian" && user.email != "dorian.doncevic@gmail.com"){
      return {"status": "valid"}
    }
    else if(user.username == "Dorian"){
      return {"status": "username used"}
    }
    else if(user.email == "dorian.doncevic@gmail.com"){
      return {"status": "email used"}
    }
    
  }

  userLogin(user){

    if(user.username == "Dorian" && user.password == "admin"){
      return {"status": 'yes'}
    }
    else{
      return {"status": 'nope'}
    }

  }

  postReview(review){
    console.log(review)

    this.restaurants_reviews.push({"user_id": "Korisnik" + review.user_id, "review_text": review.text, "review_title": review.title})

    return review
  }
  
  postRestaurant(restaurant){
    return restaurant;
  }
}
