import { Injectable } from '@angular/core';
import { Tarefa as TarefaInterface } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root'
})
export class Tarefa {
  tarefas: TarefaInterface[] = [];

  constructor() { }

  adicionarTarefa(tarefa: TarefaInterface) {
    this.tarefas.unshift({ ...tarefa });
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }
  removerTarefa(_id: string) {
    this.tarefas = this.tarefas.filter(tarefa => tarefa._id !== _id);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }
}
