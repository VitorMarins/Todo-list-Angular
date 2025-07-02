import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa as TarefaInterface } from '../../interfaces/tarefa';
import { Tarefa as TarefaService } from '../../services/tarefa';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule],
  templateUrl: './form-tarefas.html',
  styleUrl: './form-tarefas.css'
})
export class FormTarefas {
  tarefa: TarefaInterface = { _id: '', nome: '', data: '', prioridade: 'baixa' };

  constructor(private tarefaService: TarefaService) {}

  adicionarTarefa() {
    if (this.tarefa.nome.trim() === '') {
      alert('Por favor, preencha o campo de tarefa.');
      return;
    }
    this.tarefaService.adicionarTarefa(this.tarefa);
    this.tarefa = { _id: '', nome: '', data: '', prioridade: '' };
  }
}
