import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Investidor } from '../../models/investidor.interface';

@Component({
  selector: 'app-lista-investidores',
  imports: [CommonModule],
  templateUrl: './lista-investidores.component.html',
  styleUrl: './lista-investidores.component.scss'
})
export class ListaInvestidoresComponent {
  protected readonly investidores = signal<Investidor[]>([
    {
      id: 1,
      nome: 'Sequoia Capital',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Fundo de investimento líder em tecnologia e inovação',
      website: 'https://www.sequoiacap.com'
    },
    {
      id: 2,
      nome: 'Andreessen Horowitz',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Investimentos em startups de tecnologia e criptomoedas',
      website: 'https://a16z.com'
    },
    {
      id: 3,
      nome: 'SoftBank Vision Fund',
      logo: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop',
      setor: 'Technology Investments',
      descricao: 'Maior fundo de tecnologia do mundo',
      website: 'https://visionfund.com'
    },
    {
      id: 4,
      nome: 'Accel Partners',
      logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Investidor em empresas de tecnologia de alto crescimento',
      website: 'https://www.accel.com'
    },
    {
      id: 5,
      nome: 'Tiger Global',
      logo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop',
      setor: 'Investment Management',
      descricao: 'Gestora de investimentos com foco em internet e tecnologia',
      website: 'https://www.tigerglobal.com'
    },
    {
      id: 6,
      nome: 'Index Ventures',
      logo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Investimentos em tecnologia e inovação na Europa e EUA',
      website: 'https://www.indexventures.com'
    },
    {
      id: 7,
      nome: 'Benchmark Capital',
      logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Parceiro de empreendedores visionários',
      website: 'https://www.benchmark.com'
    },
    {
      id: 8,
      nome: 'Lightspeed Venture',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Investimentos em empresas inovadoras globalmente',
      website: 'https://lsvp.com'
    },
    {
      id: 9,
      nome: 'Greylock Partners',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Investidor em empresas líderes de tecnologia',
      website: 'https://greylock.com'
    },
    {
      id: 10,
      nome: 'Kleiner Perkins',
      logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop',
      setor: 'Venture Capital',
      descricao: 'Pioneiros em venture capital desde 1972',
      website: 'https://www.kleinerperkins.com'
    }
  ]);
}
