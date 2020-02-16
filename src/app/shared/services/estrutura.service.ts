import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstruturaService {

  constructor() { }

  private estrutura = [
    {
      local: 'Parede Frontal',
      slug: 'parede-f',
      cor: 'transparent',
      url: ''
    },
    {
      local: 'Parede Lateral Direita',
      slug: 'parede-d',
      cor: 'transparent',
      url: ''
    },
    {
      local: 'Parede Lateral Esquerda',
      slug: 'parede-e',
      cor: 'transparent',
      url: ''
    },
    {
      local: 'Fundação',
      slug: 'piso',
      cor: 'transparent',
      url: ''
    },
    {
      local: 'Teto',
      slug: 'teto',
      cor: 'transparent',
      url: ''
    },
  ];

  private wallPaper = [
    {
      nome: 'Sem Papel de Parede',
      path: '',
    },
    {
      nome: 'Azulejos Grandes',
      path: 'papel1.jpg',
    },
    {
      nome: 'Azulejos Pequenos',
      path: 'papel2.jpg',
    },
    {
      nome: 'Madeira Vertical',
      path: 'papel3.jpg',
    },
    {
      nome: 'Madeira Horizontal',
      path: 'papel4.jpg',
    },
    {
      nome: 'Tijolo Regular',
      path: 'papel5.jpg',
    },
    {
      nome: 'Tijolo Rústico',
      path: 'papel6.jpg',
    },
    {
      nome: 'Papel de parede 1',
      path: 'papel7.jpg',
    },
    {
      nome: 'Papel de parede 2',
      path: 'papel8.jpg',
    },
    {
      nome: 'Papel de parede 3',
      path: 'papel9.jpg',
    },
    {
      nome: 'Papel de parede 4',
      path: 'papel10.jpg',
    },
    {
      nome: 'Papel de parede 5',
      path: 'papel11.jpg',
    },
    {
      nome: 'Papel de parede 6',
      path: 'papel12.jpg',
    },
    {
      nome: 'Papel de parede 7',
      path: 'papel13.jpg',
    },
    {
      nome: 'Papel de parede 8',
      path: 'papel14.jpg',
    },
    {
      nome: 'Papel de parede 9',
      path: 'papel15.jpg',
    },
    {
      nome: 'Papel de parede 10',
      path: 'papel16.jpg',
    },
    {
      nome: 'Papel de parede 11',
      path: 'papel17.jpg',
    },
    {
      nome: 'Papel de parede 12',
      path: 'papel18.jpg',
    },
    {
      nome: 'Papel de parede 13',
      path: 'papel19.jpg',
    }
  ];

  estruturaGet() {
    return this.estrutura;
  }
  wallPaperGet() {
    return this.wallPaper;
  }
}
