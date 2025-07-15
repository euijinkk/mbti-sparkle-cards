// Mock data for MBTI tests - easy to add/modify
export interface MBTITest {
  id: string;
  name: string;
  description: string;
  url: string;
  duration: string;
  icon: string;
}

export const mbtiTests: MBTITest[] = [
  {
    id: "16personalities",
    name: "16Personalities",
    description: "내면의 진정한 자아를 발견하는 가장 인기 있는 성격 탐구 여정",
    url: "https://www.16personalities.com/ko",
    duration: "12분",
    icon: "🧠",
  },
  {
    id: "truity",
    name: "Truity TypeFinder",
    description:
      "과학과 영성이 만나는 지점에서 당신의 진정한 본질을 탐구합니다",
    url: "https://www.truity.com/test/type-finder-personality-test-new",
    duration: "15분",
    icon: "🔬",
  },
  {
    id: "personalitypage",
    name: "Personality Page",
    description:
      "간결하지만 깊이 있는 자아 발견의 순간, 빠른 깨달음을 원하는 영혼에게",
    url: "https://www.personalitypage.com/html/test.html",
    duration: "5분",
    icon: "⚡",
  },
  {
    id: "humanmetrics",
    name: "HumanMetrics",
    description:
      "융의 깊은 지혜를 바탕으로 한 전통적인 심리 탐구의 신성한 여정",
    url: "https://www.humanmetrics.com/personality/test",
    duration: "10분",
    icon: "📚",
  },
  {
    id: "keirsey",
    name: "Keirsey Temperament",
    description:
      "기질의 신비를 풀어내는 독특한 접근법으로 내면의 본성을 해방시킵니다",
    url: "https://keirsey.com/temperament-sorter-ii/",
    duration: "20분",
    icon: "👥",
  },
  {
    id: "psychologytoday",
    name: "Psychology Today",
    description: "심리학의 성전에서 제공하는 신뢰할 수 있는 자아 탐구의 안내서",
    url: "https://www.psychologytoday.com/us/tests/personality/personality-type-test",
    duration: "8분",
    icon: "🏥",
  },
];
