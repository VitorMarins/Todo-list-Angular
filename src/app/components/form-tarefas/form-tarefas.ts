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

  formatToDDMMYYYY(date: Date): string {
    const day = String(date.getDate() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  generateRandomIdSimple() {
    return Math.random().toString(36).substring(2, 9); // Gera um ID de 7 caracteres
  }

  adicionarTarefa() {
    if (this.tarefa.nome.trim() === '') {
      alert('Por favor, preencha o campo de tarefa.');
      return;
    }
    if (this.tarefa.data.trim() === '') {
      alert('Por favor, preencha o campo de data.');
      return;
    }

    this.tarefa._id = this.generateRandomIdSimple();
    this.tarefa.data = this.formatToDDMMYYYY(new Date(this.tarefa.data));
    this.tarefaService.adicionarTarefa(this.tarefa);
    this.tarefa = { _id: '', nome: '', data: '', prioridade: 'baixa' };
  }
}
