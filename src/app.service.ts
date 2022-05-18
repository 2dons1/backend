import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly restaurants = [
    {
      id: 1, 
      naziv: "Terasa Zagreb", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 3,
      vrsta: "caffe",
      grad: "Zagreb",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    },
    {
      id: 2, 
      naziv: "Terasa Pula", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 2,
      vrsta: "caffe",
      grad: "Pula",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    },
    {
      id: 3, 
      naziv: "Terasa Rijeka", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 2,
      vrsta: "caffe",
      grad: "Rijeka",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    },
    {
      id: 4, 
      naziv: "Terasa Zadar - nightlife", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 2,
      vrsta: "nightlife",
      grad: "Zadar",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    },
    {
      id: 5, 
      naziv: "Terasa Karlovac - nightlife", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 2,
      vrsta: "nightlife",
      grad: "Karlovac",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    },
    {
      id: 6, 
      naziv: "Sheeft - Rijeka", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 2,
      vrsta: "nightlife",
      grad: "Rijeka",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    },
    {
      id: 7, 
      naziv: "Sheeft - Rijeka", 
      adresa: "Horvaćanska cesta 68",
      radnoVrijeme: "08:00-24:00",
      kontaktBroj: "091 129 6147",  
      datumStvaranja: "10.5.2022 17:67",
      potvrden: true,
      vlasnik: 2,
      vrsta: "nightlife",
      grad: "Rovinj",
      fotografije: ["placeholder.png"],
      pogodnosti: ["Besplatan WiFi", "Dostava", "Pet Friendly", "Moguča rezervacija", "Parking", "Karitčno plaćanje", "Testiranje"]
    }
  ];

  private restaurants_reviews = [
    {id: 1, user_id: 2, review_text: "Ovo je tekst recenzije1", review_title: "Naslov recenizje"},
    {id: 2, user_id: 2, review_text: "Ovo je tekst recenzije2", review_title: "Naslov recenizje"},
    {id: 3, user_id: 3, review_text: "Ovo je tekst recenzije3", review_title: "Naslov recenizje"},
    {id: 4, user_id: 4, review_text: "Ovo je tekst recenzije4", review_title: "Naslov recenizje"},
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
    if(user.username != "Dorian"){ // && user.email != "dorian.doncevic@gmail.com"
      return {
        status: 201
      }
    }
    else{
      return {
        status: 409,
        message: 'Already exists.',
        error: 'Conflict'
      }
    }
    
  }

  userLogin(user){

    if(user.username == "Dorian" && user.password == "admin"){
      return {
        status: 200,
        access_token: 'frende-vidi-token',
        user: {
          id: 2,
          username: '2Dons', 
          ime: 'Dorian', 
          prezime: 'Doncevic',
          email: 'dorian.doncevic@gmail.com',
          uloga: 'ugostitelj',
        }
      }
    }
    else{
      return {
        status: 'nope'
      }
    }

  }

  postReview(review){
    console.log(review)

    this.restaurants_reviews.push({"user_id": review.user_id, "review_text": review.text, "review_title": review.title, "id": 7})

    return review
  }
  
  postRestaurant(restaurant){
    return restaurant;
  }
}
