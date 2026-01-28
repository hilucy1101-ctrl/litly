
import React from 'react';
import { CheckCircle2, ShoppingCart, UserCheck, CreditCard } from 'lucide-react';
import { TestimonialItem, FeatureItem, StepItem, FAQItem } from './types';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    quote: '"리틀리 쓰고 매출이 한 달 만에 4배 올랐어요!"'
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: '"정산이 빨라서 자금 회전이 정말 좋네요."'
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    quote: '"복잡한 쇼핑몰보다 100배 편해요."'
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    quote: '"커피 한 잔 값 수수료로 비즈니스 시작!"'
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    quote: '"CS 대응 시간이 절반으로 줄었습니다."'
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    quote: '"링크 하나로 인생이 바뀌었어요."'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    number: 1,
    title: "미리 정산 시스템",
    description: "기다림 없는 빠른 정산으로 비즈니스 가속화"
  },
  {
    number: 2,
    title: "업계 최저 수수료 2%",
    description: "불필요한 수수료를 줄이고 크리에이터의 이익을 보호"
  },
  {
    number: 3,
    title: "클릭 한 번으로 판매",
    description: "복잡한 절차 없이 30초면 상품 등록 완료"
  },
  {
    number: 4,
    title: "강력한 분석 대시보드",
    description: "유입 경로와 구매 전환율을 실시간 확인"
  },
  {
    number: 5,
    title: "전문 디자인 테마",
    description: "코딩 없이도 브랜드 아이덴티티 구축"
  }
];

export const STEPS: StepItem[] = [
  {
    icon: "UserCheck",
    title: "간단 인증",
    description: "SNS 계정으로 5초 만에 가입하고 본인 인증을 완료하세요."
  },
  {
    icon: "ShoppingCart",
    title: "상품 등록",
    description: "판매할 콘텐츠의 이미지와 설명을 등록하세요. 파일 업로드도 지원합니다."
  },
  {
    icon: "CreditCard",
    title: "판매 시작",
    description: "발급된 프로필 링크를 SNS에 공유하고 즉시 수익을 창출하세요."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "정산은 언제 되나요?",
    answer: "구매 확정 후 영업일 기준 1~3일 이내에 지정하신 계좌로 정산됩니다."
  },
  {
    question: "판매 수수료 외에 다른 비용이 있나요?",
    answer: "아니요, 고정 월비용 없이 판매될 때만 최저 수준의 수수료(2%)가 발생합니다."
  },
  {
    question: "어떤 종류의 상품을 팔 수 있나요?",
    answer: "전자책(PDF), 영상, 디자인 에셋, 상담권 등 다양한 디지털 콘텐츠를 판매할 수 있습니다."
  }
];
