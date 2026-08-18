import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Project } from '../models/project';

interface DummyProduct {
  id: number;
  title: string;
  description: string;
}

interface DummyProductsResponse {
  products: DummyProduct[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {

    return this.http
      .get<DummyProductsResponse>(this.apiUrl)
      .pipe(
        map(response =>
          response.products.map(product => ({
            id: product.id,
            name: product.title,
            description: product.description
          }))
        )
      );
  }
}
