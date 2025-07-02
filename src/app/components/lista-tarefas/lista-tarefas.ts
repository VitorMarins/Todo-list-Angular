import { Component, OnInit } from '@angular/core';
import { Tarefa as TarefaService } from '../../services/tarefa';
import { Tarefa as TarefaInterface } from '../../interfaces/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  imports: [],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})
export class ListaTarefas implements OnInit {
  tarefas: TarefaInterface[] = [];
  constructor(private TarefaService: TarefaService) {}

  ngOnInit(): void {
    console.log('ListaTarefas component initialized');
    this.tarefas = this.TarefaService.tarefas;
    console.log('Tarefas loaded:', this.tarefas);
  }
  removerTarefa(_id: string) {
    console.log('Removing task with ID:', _id);
    this.TarefaService.removerTarefa(_id);
    this.tarefas = this.TarefaService.tarefas;
  }
}
