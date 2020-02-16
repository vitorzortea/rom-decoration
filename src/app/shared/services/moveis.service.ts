import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveisService {

  private arraySelectMoveis = [
    {
      slug: 'centro',
      url: ''
    },
    {
      slug: 'direito',
      url: ''
    },
    {
      slug: 'esquerdo',
      url: ''
    },
    {
      slug: 'meio',
      url: ''
    },
    {
      slug: 'm-parede-f',
      url: ''
    },
    {
      slug: 'm-parede-d',
      url: ''
    },
    {
      slug: 'm-parede-e',
      url: ''
    },
  ]

  private arrayAllMoveis = [
    {
      categoria: 'Sofá',
      moveis: [
        {
          nome: 'Sem Sofá',
          path: '',
        },
        {
          nome: 'Sofá 1',
          path: 'sofa1.png',
        },
        {
          nome: 'Sofá 2',
          path: 'sofa2.png',
        },
        {
          nome: 'Sofá 3',
          path: 'sofa3.png',
        },
        {
          nome: 'Sofá 4',
          path: 'sofa4.png',
        },
        {
          nome: 'Sofá 5',
          path: 'sofa5.png',
        },
        {
          nome: 'Sofá 6',
          path: 'sofa6.png',
        },
        {
          nome: 'Sofá 7',
          path: 'sofa7.png',
        },
        {
          nome: 'Sofá 8',
          path: 'sofa8.png',
        },
        {
          nome: 'Sofá 9',
          path: 'sofa9.png',
        },
      ]
    },

    {
      categoria: 'Gaveteiro',
      moveis: [
        {
          nome: 'Sem Gaveteiro',
          path: '',
        },
        {
          nome: 'Gaveteiro 1',
          path: '',
        },
        {
          nome: 'Gaveteiro 2',
          path: '',
        },
        {
          nome: 'Gaveteiro 3',
          path: '',
        },
        {
          nome: 'Gaveteiro 4',
          path: '',
        },
        {
          nome: 'Gaveteiro 5',
          path: '',
        },
        {
          nome: 'Gaveteiro 6',
          path: '',
        },
        {
          nome: 'Gaveteiro 7',
          path: '',
        },
        {
          nome: 'Gaveteiro 8',
          path: '',
        },
        {
          nome: 'Gaveteiro 9',
          path: '',
        },
      ]
    },

    {
      categoria: 'Mesa de canto',
      moveis: [
        {
          nome: 'Sem Mesa de canto',
          path: '',
        },
        {
          nome: 'Mesa de canto 1',
          path: '',
        },
        {
          nome: 'Mesa de canto 2',
          path: '',
        },
        {
          nome: 'Mesa de canto 3',
          path: '',
        },
        {
          nome: 'Mesa de canto 4',
          path: '',
        },
        {
          nome: 'Mesa de canto 5',
          path: '',
        },
        {
          nome: 'Mesa de canto 6',
          path: '',
        },
        {
          nome: 'Mesa de canto 7',
          path: '',
        },
        {
          nome: 'Mesa de canto 8',
          path: '',
        },
        {
          nome: 'Mesa de canto 9',
          path: '',
        },
      ]
    },

    {
      categoria: 'Mesa de centro',
      moveis: [
        {
          nome: 'Sem Mesa de centro',
          path: '',
        },
        {
          nome: 'Mesa de centro 1',
          path: '',
        },
        {
          nome: 'Mesa de centro 2',
          path: '',
        },
        {
          nome: 'Mesa de centro 3',
          path: '',
        },
        {
          nome: 'Mesa de centro 4',
          path: '',
        },
        {
          nome: 'Mesa de centro 5',
          path: '',
        },
        {
          nome: 'Mesa de centro 6',
          path: '',
        },
        {
          nome: 'Mesa de centro 7',
          path: '',
        },
        {
          nome: 'Mesa de centro 8',
          path: '',
        },
        {
          nome: 'Mesa de centro 9',
          path: '',
        },
      ]
    },

    {
      categoria: 'Vaso de Planta',
      moveis: [
        {
          nome: 'Sem Vaso de Planta',
          path: '',
        },
        {
          nome: 'Vaso de Planta 1',
          path: '',
        },
        {
          nome: 'Vaso de Planta 2',
          path: '',
        },
        {
          nome: 'Vaso de Planta 3',
          path: '',
        },
        {
          nome: 'Vaso de Planta 4',
          path: '',
        },
        {
          nome: 'Vaso de Planta 5',
          path: '',
        },
        {
          nome: 'Vaso de Planta 6',
          path: '',
        },
        {
          nome: 'Vaso de Planta 7',
          path: '',
        },
        {
          nome: 'Vaso de Planta 8',
          path: '',
        },
        {
          nome: 'Vaso de Planta 9',
          path: '',
        },
      ]
    },

    {
      categoria: 'Armário',
      moveis: [
        {
          nome: 'Sem Armário',
          path: '',
        },
        {
          nome: 'Armário 1',
          path: '',
        },
        {
          nome: 'Armário 2',
          path: '',
        },
        {
          nome: 'Armário 3',
          path: '',
        },
        {
          nome: 'Armário 4',
          path: '',
        },
        {
          nome: 'Armário 5',
          path: '',
        },
        {
          nome: 'Armário 6',
          path: '',
        },
        {
          nome: 'Armário 7',
          path: '',
        },
        {
          nome: 'Armário 8',
          path: '',
        },
        {
          nome: 'Armário 9',
          path: '',
        },
      ]
    },

    {
      categoria: 'Quadros',
      moveis: [
        {
          nome: 'Sem Quadros',
          path: '',
        },
        {
          nome: 'Quadros 1',
          path: '',
        },
        {
          nome: 'Quadros 2',
          path: '',
        },
        {
          nome: 'Quadros 3',
          path: '',
        },
        {
          nome: 'Quadros 4',
          path: '',
        },
        {
          nome: 'Quadros 5',
          path: '',
        },
        {
          nome: 'Quadros 6',
          path: '',
        },
        {
          nome: 'Quadros 7',
          path: '',
        },
        {
          nome: 'Quadros 8',
          path: '',
        },
        {
          nome: 'Quadros 9',
          path: '',
        },
      ]
    },

    {
      categoria: 'Janelas',
      moveis: [
        {
          nome: 'Sem Janela',
          path: '',
        },
        {
          nome: 'Janelas 1',
          path: '',
        },
        {
          nome: 'Janelas 2',
          path: '',
        },
        {
          nome: 'Janelas 3',
          path: '',
        },
        {
          nome: 'Janelas 4',
          path: '',
        },
      ]
    },

    {
      categoria: 'Portas',
      moveis: [
        {
          nome: 'Sem Porta',
          path: '',
        },
        {
          nome: 'Portas 1',
          path: '',
        },
        {
          nome: 'Portas 2',
          path: '',
        },
        {
          nome: 'Portas 3',
          path: '',
        },
        {
          nome: 'Portas 4',
          path: '',
        },
      ]
    },

  ]

  constructor() { }

  get allMoveis() { return this.arrayAllMoveis; }
  get selectMoveis() { return this.arraySelectMoveis; }
}
