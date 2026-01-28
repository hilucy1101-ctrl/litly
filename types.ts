
export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: number;
  image: string;
  quote: string;
}

export interface FeatureItem {
  number: number;
  title: string;
  description: string;
}

export interface StepItem {
  icon: string;
  title: string;
  description: string;
}

export type AudienceType = '인플루언서' | '스타트업' | '부업' | '유튜버' | '작가';
