import { Plan } from '../types';

export const plans: Plan[] = [
  {
    id: 'basic',
    title: 'Plano Básico',
    price: 'R$59,90',
    reviews: 5,
    paymentLink: 'https://loja.infinitepay.io/gmapsbrasil-ltda/ryc8780-5-avaliacoes-google-maps'
  },
  {
    id: 'standard',
    title: 'Plano Padrão',
    price: 'R$109,90',
    reviews: 10,
    paymentLink: 'https://loja.infinitepay.io/gmapsbrasil-ltda/zmd0301-10-avaliacoes-5-estrelas'
  },
  {
    id: 'premium',
    title: 'Plano Premium',
    price: 'R$149,90',
    reviews: 15,
    paymentLink: 'https://loja.infinitepay.io/gmapsbrasil-ltda/jgj8330-15-avaliacoes-5-estrelas'
  }
];