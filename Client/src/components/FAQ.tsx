import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "As avaliações são reais?",
    answer: "Sim, todas as avaliações são feitas por usuários reais e verificados do Google. Elas são publicadas de forma gradual e natural para manter a credibilidade do seu perfil."
  },
  {
    question: "Quanto tempo leva para as avaliações aparecerem?",
    answer: "O processo completo leva em média 7 dias. As avaliações são publicadas gradualmente para manter a naturalidade e evitar suspeitas pelo Google."
  },
  {
    question: "Posso escolher o conteúdo das avaliações?",
    answer: "Sim, nosso especialista entrará em contato após a compra para entender seu negócio e personalizar o conteúdo das avaliações de acordo com os serviços ou produtos oferecidos."
  },
  {
    question: "O Google pode remover as avaliações?",
    answer: "Nossas avaliações seguem todas as diretrizes do Google e são feitas por perfis reais e ativos, minimizando o risco de remoção. Caso alguma avaliação seja removida, nós a substituímos sem custo adicional."
  },
  {
    question: "Como faço para monitorar as avaliações?",
    answer: "Você receberá notificações por e-mail ou WhatsApp cada vez que uma nova avaliação for publicada em seu perfil do Google."
  },
  {
    question: "Posso solicitar avaliações para mais de um estabelecimento?",
    answer: "Sim, você pode adquirir planos para diferentes estabelecimentos. Cada plano é aplicado a um único perfil do Google."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso serviço de avaliações no Google.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span className="text-lg font-semibold text-left text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-white border-t border-gray-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;