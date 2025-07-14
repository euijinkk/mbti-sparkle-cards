// Mock data for MBTI tests - easy to add/modify
export interface MBTITest {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  duration: string;
  features: string[];
  icon: string;
}

export const mbtiTests: MBTITest[] = [
  {
    id: "16personalities",
    name: "16Personalities",
    description: "가장 인기 있는 무료 성격 검사로 정확하고 상세한 결과를 제공합니다",
    url: "https://www.16personalities.com/ko",
    category: "무료",
    duration: "12분",
    features: ["상세한 분석", "직업 추천", "관계 조언"],
    icon: "🧠"
  },
  {
    id: "truity",
    name: "Truity TypeFinder",
    description: "과학적 근거를 바탕으로 한 정확한 성격 유형 분석을 제공합니다",
    url: "https://www.truity.com/test/type-finder-personality-test-new",
    category: "프리미엄",
    duration: "15분",
    features: ["과학적 검증", "맞춤형 리포트", "경력 가이드"],
    icon: "🔬"
  },
  {
    id: "personalitypage",
    name: "Personality Page",
    description: "간단하면서도 정확한 MBTI 검사로 빠른 결과를 원하는 분들께 추천",
    url: "https://www.personalitypage.com/html/test.html",
    category: "무료",
    duration: "5분",
    features: ["빠른 검사", "간단한 결과", "기본 설명"],
    icon: "⚡"
  },
  {
    id: "humanmetrics",
    name: "HumanMetrics",
    description: "융의 이론을 바탕으로 한 전통적인 MBTI 검사 방식을 제공합니다",
    url: "https://www.humanmetrics.com/personality/test",
    category: "무료",
    duration: "10분",
    features: ["전통적 방식", "심층 이론", "학술적 접근"],
    icon: "📚"
  },
  {
    id: "keirsey",
    name: "Keirsey Temperament",
    description: "기질 이론을 바탕으로 한 독특한 성격 분석 접근법을 제공합니다",
    url: "https://keirsey.com/temperament-sorter-ii/",
    category: "프리미엄",
    duration: "20분",
    features: ["기질 분석", "리더십 스타일", "팀워크 분석"],
    icon: "👥"
  },
  {
    id: "psychologytoday",
    name: "Psychology Today",
    description: "심리학 전문 매체에서 제공하는 신뢰할 수 있는 성격 검사입니다",
    url: "https://www.psychologytoday.com/us/tests/personality/personality-type-test",
    category: "무료",
    duration: "8분",
    features: ["전문가 검증", "신뢰성 높음", "심리학 기반"],
    icon: "🏥"
  }
];

// Categories for filtering
export const categories = ["전체", "무료", "프리미엄"];

// Helper function to get tests by category
export const getTestsByCategory = (category: string): MBTITest[] => {
  if (category === "전체") return mbtiTests;
  return mbtiTests.filter(test => test.category === category);
};