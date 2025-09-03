import React, { useState } from 'react';
import { Plan, FormData } from '../types';

interface CustomerFormProps {
  selectedPlan: Plan;
  onCancel: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ selectedPlan, onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    taxId: '',
    phone: '',
    whatsapp: '',
    googlePageLink: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName) newErrors.fullName = "Campo obrigatório";
    if (!formData.companyName) newErrors.companyName = "Campo obrigatório";
    if (!formData.taxId) newErrors.taxId = "Campo obrigatório";
    if (!formData.phone) newErrors.phone = "Campo obrigatório";
    if (!formData.whatsapp) newErrors.whatsapp = "Campo obrigatório";
    if (!formData.googlePageLink) newErrors.googlePageLink = "Campo obrigatório";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Você precisa aceitar os termos";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      const message = `
*Novo Pedido de Avaliações*
        
Plano: ${selectedPlan.title} - ${selectedPlan.reviews} avaliações
Valor: ${selectedPlan.price}

*Dados do Cliente:*
Nome: ${formData.fullName}
Razão Social: ${formData.companyName}
CPF/CNPJ: ${formData.taxId}
Telefone: ${formData.phone}
WhatsApp: ${formData.whatsapp}
Link do Google: ${formData.googlePageLink}

Link de Pagamento: ${selectedPlan.paymentLink}
`.trim();

      const whatsappUrl = `https://wa.me/551142006110?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      onCancel();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedPlan.title} - {selectedPlan.price}
            </h2>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-700">
              Você está adquirindo {selectedPlan.reviews} avaliações 5 estrelas para o seu negócio.
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">NOME COMPLETO</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">RAZÃO SOCIAL</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
              </div>
              
              <div>
                <label htmlFor="taxId" className="block text-sm font-medium text-gray-700">CPF/CNPJ</label>
                <input
                  type="text"
                  id="taxId"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.taxId ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.taxId && <p className="mt-1 text-sm text-red-600">{errors.taxId}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">TELEFONE COMERCIAL</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WHATSAPP COMERCIAL</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.whatsapp && <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>}
              </div>
              
              <div>
                <label htmlFor="googlePageLink" className="block text-sm font-medium text-gray-700">LINK DA PÁGINA DO GOOGLE</label>
                <input
                  type="url"
                  id="googlePageLink"
                  name="googlePageLink"
                  value={formData.googlePageLink}
                  onChange={handleChange}
                  placeholder="https://maps.google.com/..."
                  className={`mt-1 block w-full px-3 py-2 border ${errors.googlePageLink ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.googlePageLink && <p className="mt-1 text-sm text-red-600">{errors.googlePageLink}</p>}
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>IMPORTANTE:</strong> Após o pagamento, um dos nossos especialistas entrará em contato para fazer uma última verificação e iniciar o processo de avaliações.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${errors.acceptTerms ? 'border-red-500' : ''}`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="acceptTerms" className={`font-medium ${errors.acceptTerms ? 'text-red-500' : 'text-gray-700'}`}>
                    Eu concordo com os termos de serviço e política de privacidade
                  </label>
                  {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>}
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-200 flex items-center justify-center"
                >
                  <span>Enviar para WhatsApp</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;