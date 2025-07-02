import { Component, OnInit } from '@angular/core';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';
import { FormTarefas } from './components/form-tarefas/form-tarefas';
import { Tarefa as TarefaService } from './services/tarefa';

@Component({
  selector: 'app-root',
  imports: [ListaTarefas, FormTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'anotaTarefas';

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    const tarefas = localStorage.getItem('tarefas');
    this.tarefaService.tarefas = tarefas
      ? JSON.parse(tarefas)
      : [];
  }
}
