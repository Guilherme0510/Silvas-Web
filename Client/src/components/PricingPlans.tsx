import React, { useState } from 'react';
import PlanCard from './PlanCard';
import CustomerForm from './CustomerForm';
import { plans } from '../data/plans';
import { Plan } from '../types';

const PricingPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  
  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };
  
  const handleCancelForm = () => {
    setSelectedPlan(null);
  };
  
  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o Plano Ideal para seu Negócio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aumente a visibilidade da sua empresa com avaliações 5 estrelas no Google. Quanto mais avaliações, maior será sua credibilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handleSelectPlan}
            />
          ))}
        </div>
        
        {selectedPlan && (
          <CustomerForm 
            selectedPlan={selectedPlan}
            onCancel={handleCancelForm}
          />
        )}
      </div>
    </section>
  );
};

export default PricingPlans;