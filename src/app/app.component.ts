import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Coloso';
  age = 23;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: '',
  }

  person = {
    name: 'Coloso',
    age: 23,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['David','Miguel','Coloso','Joan'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/juguete.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bicicleta.jpg'
    },
    {
      name: 'Coleccion de albumes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/libros.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/libros.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/libros.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/libros.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  incraseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }

  onRegister(){
    console.log(this.register)
  }
}
