export interface Plan {
  id: string;
  title: string;
  price: string;
  reviews: number;
  paymentLink: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface FormData {
  fullName: string;
  companyName: string;
  taxId: string;
  phone: string;
  whatsapp: string;
  googlePageLink: string;
  acceptTerms: boolean;
}