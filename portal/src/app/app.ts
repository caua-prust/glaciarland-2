import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  noticias: any[] = [];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {

    this.noticiaService.listarNoticias().subscribe({
      next: (dados) => {
        this.noticias = dados;
        console.log('Notícias carregadas:', this.noticias);
      },

      error: (erro) => {
        console.error('Erro ao carregar notícias:', erro);
      }
    });

  }
}