import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { productsList } from './product.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'IMDB-List';
  ProductList: productsList[] = [];
  //https://dummyjson.com/products
  //https://dummyjson.com/

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.fetchPosts();
    this.fetchPosts().subscribe((products) => {
      // console.log(products);
      this.ProductList = products;
    });
    //console.log(this.ProductList);
  }

  ngAfterViewChecked() {
    //console.log(this.ProductList);
  }

  OnfetchPosts() {
    this.fetchPosts()
      // .pipe(
      //   map((response) => {
      //     for (const item in response) {
      //       if (item == 'products') {
      //       }
      //     }
      //     return response;
      //   })
      // )
      .subscribe((products) => {
        // console.log(products);
        this.ProductList = products;
      });

    console.log(this.ProductList);
  }

  fetchPosts(): Observable<productsList[]> {
    return this.http.get<productsList[]>('https://dummyjson.com/products');
  }

  // fetchPosts() {
  //   return (
  //     this.http
  //       .get('https://dummyjson.com/products')
  //       // .pipe(
  //       //   map((result) => {
  //       //     // for (const items in result) {
  //       //     // console.log(result);
  //       //     // }
  //       //   })
  //       // )
  //       .subscribe((products) => {
  //         //console.log(products);
  //         this.ProductList = products;
  //         console.log(this.ProductList);
  //       })
  //   );
  // }
}
