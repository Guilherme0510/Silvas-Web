import React from 'react';
import { CreditCard, CheckCircle, UserCheck, Star } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um processo simples de 4 etapas para aumentar sua reputação online.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <CreditCard className="h-8 w-8" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">1. Escolha e Pague</h3>
                  <p className="text-gray-600">
                    Selecione o plano ideal para seu negócio e faça o pagamento de forma segura.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <UserCheck className="h-8 w-8" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">2. Verificação</h3>
                  <p className="text-gray-600">
                    Nosso especialista entrará em contato para confirmar os detalhes do seu negócio.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <Star className="h-8 w-8 fill-current" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">3. Implementação</h3>
                  <p className="text-gray-600">
                    Começamos a publicar avaliações genuínas no seu perfil do Google de forma gradual.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">4. Resultados</h3>
                  <p className="text-gray-600">
                    Acompanhe o aumento da sua visibilidade e fluxo de clientes com sua nova reputação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;