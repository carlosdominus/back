export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tag?: string;
  tagColor?: string;
  quote: string;
  stars: number;
  timeAgo?: string;
  verified?: boolean;
  avatar: string;
}

export interface Winner {
  id: string;
  name: string;
  location: string;
  prize: string;
  game: string;
  date: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcos S',
    location: 'RJ',
    tag: '👏 Usuário desde Jan', // Fixed typo "Usuária" -> "Usuário"
    quote: "O LotoApp mudou meu jeito de jogar — comecei a ter muito mais acertos. Simples de usar e rápido. Recomendo!",
    stars: 5,
    tagColor: 'bg-blue-100 text-blue-800',
    avatar: 'https://i.pravatar.cc/64?img=12'
  },
  {
    id: '2',
    name: 'Ana P',
    location: 'SP',
    tag: '🕒 último comentário: 2h',
    quote: "Peguei sequência de acertos que nunca tive antes — o gerador é impressionante. Usei as opções rápidas e funcionou.",
    stars: 5,
    tagColor: 'bg-orange-100 text-orange-800',
    avatar: 'https://i.pravatar.cc/64?img=24'
  },
  {
    id: '3',
    name: 'Juliana R.',
    location: 'BA',
    verified: true,
    tag: '✔️ verificado',
    quote: "Rápido, prático e com sugestões muito melhores do que eu fazia antes. Já recuperei o valor do app nas 2 primeiras semanas.",
    stars: 4,
    tagColor: 'bg-green-100 text-green-800',
    avatar: 'https://i.pravatar.cc/64?img=32'
  },
  {
    id: '4',
    name: 'Felipe M.',
    location: 'PR',
    tag: '🎯 resultado recente',
    quote: "Testei várias combinações e o gerador entrega números consistentes. Me surpreendeu a praticidade.",
    stars: 5,
    tagColor: 'bg-purple-100 text-purple-800',
    avatar: 'https://i.pravatar.cc/64?img=8'
  },
  {
    id: '5',
    name: 'Rosa L.',
    location: 'MG',
    tag: '📅 usuária 1 mês',
    quote: "Eu recomendo para quem quer organizar jogos sem estresse. Dá pra ajustar nível de risco e salvar combinações.",
    stars: 4,
    tagColor: 'bg-pink-100 text-pink-800',
    avatar: 'https://i.pravatar.cc/64?img=46'
  },
  {
    id: '6',
    name: 'Ricardo F.',
    location: 'PE',
    tag: '🔔 ganhou bônus',
    quote: "Funciona como organizador de palpites — a assertividade varia, mas melhorou meus resultados em relação ao que eu fazia.",
    stars: 5,
    tagColor: 'bg-yellow-100 text-yellow-800',
    avatar: 'https://i.pravatar.cc/64?img=55'
  }
];

export const RECENT_WINNERS: Winner[] = [
  {
    id: 'w1',
    name: 'Roberto Alves',
    location: 'Campinas, SP',
    prize: 'R$ 2.450,00',
    game: '14 Pontos',
    date: 'Ontem',
    avatar: 'https://i.pravatar.cc/64?img=68'
  },
  {
    id: 'w2',
    name: 'Fernanda Lima',
    location: 'Porto Alegre, RS',
    prize: 'R$ 42.100,50',
    game: 'Quina LotoFácil',
    date: 'Há 2 dias',
    avatar: 'https://i.pravatar.cc/64?img=44'
  },
  {
    id: 'w3',
    name: 'Carlos Mendes',
    location: 'Belo Horizonte, MG',
    prize: 'R$ 1.890,00',
    game: '14 Pontos',
    date: 'Há 4 horas',
    avatar: 'https://i.pravatar.cc/64?img=11'
  },
  {
    id: 'w4',
    name: 'Patrícia Souza',
    location: 'Salvador, BA',
    prize: 'R$ 8.540,00',
    game: 'Quadra + Terno',
    date: 'Há 5 dias',
    avatar: 'https://i.pravatar.cc/64?img=5'
  },
  {
    id: 'w5',
    name: 'André P.',
    location: 'Curitiba, PR',
    prize: 'R$ 145.300,00',
    game: 'Prêmio Principal',
    date: 'Semana passada',
    avatar: 'https://i.pravatar.cc/64?img=53'
  }
];

export const COLORS = {
  primary: '#1a4d3f',
  primaryDark: '#143d32',
  background: '#fafafa',
  textPrimary: '#1a1a1a',
  textSecondary: '#666666',
  white: '#ffffff',
  warning: '#f59e0b',
  error: '#ef4444',
};