import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'front-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [

    { nome: 'João', idade: 31, email: 'joao@curso.com.br', curso: 'Arquitetura de software'},
    { nome: 'Paula', idade: 26, email: 'paula@curso.com.br', curso: 'Full Stack Java'},
    { nome: 'Alberto', idade: 29, email: 'alberto@curso.com.br', curso: 'Back End Python'},

  ];

  displayedColumns: string[] = ['nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }
  mudarValor() {
    this.valor++;
  }
  reiniciarValor() {
    this.valor = 0;
  }
  exibirTabela(){
    this.exibeTabela = true;
  }

}
