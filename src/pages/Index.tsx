import { Brain, Sparkles, Eye, Moon, Star } from "lucide-react";
import { MBTICard } from "@/components/MBTICard";
import { mbtiTests } from "@/data/mbtiTests";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Cosmic Background */}
      <div className="cosmic-bg">
        {/* Floating Particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center space-y-12">
            {/* Mystical Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative soul-glow">
                <div className="flex items-center gap-4">
                  <Brain className="h-20 w-20 text-primary float-mystical" />
                  <Eye className="h-16 w-16 text-accent float-mystical" />
                  <Moon className="h-18 w-18 text-primary-glow float-mystical" />
                </div>
                <Sparkles className="h-8 w-8 text-primary/80 absolute -top-4 -right-4 float-mystical" />
                <Star className="h-6 w-6 text-accent/60 absolute -bottom-2 -left-2 float-mystical" />
              </div>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-6xl sm:text-8xl font-bold text-cosmic text-glow">
                MBTI Store
              </h1>
              <div className="space-y-4">
                <p className="text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
                  🌟 내면의 우주를 탐험하는 신비로운 여정 🌟
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  다양한 성격 검사를 통해 진정한 자아를 발견하고<br />
                  숨겨진 잠재력과 영혼의 본질을 깨달아보세요
                </p>
              </div>

              {/* Mystical Stats */}
              <div className="flex justify-center items-center gap-12 pt-12">
                <div className="text-center soul-glow">
                  <div className="text-4xl font-bold text-cosmic text-glow">{mbtiTests.length}</div>
                  <div className="text-lg text-muted-foreground">신비로운 검사</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="text-center soul-glow">
                  <div className="text-4xl font-bold text-cosmic text-glow">∞</div>
                  <div className="text-lg text-muted-foreground">무한한 가능성</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="text-center soul-glow">
                  <div className="text-4xl font-bold text-cosmic text-glow flex items-center justify-center gap-2">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div className="text-lg text-muted-foreground">영혼의 각성</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mystical Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cosmic mb-4">🔮 자아 탐구의 신전 🔮</h2>
          <p className="text-xl text-muted-foreground">각각의 검사는 당신 내면의 다른 차원을 열어줍니다</p>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mbtiTests.map((test) => (
            <MBTICard key={test.id} test={test} />
          ))}
        </div>

        {/* Mystical Footer */}
        <div className="text-center mt-20 pt-12 border-t border-border/30">
          <div className="space-y-4">
            <p className="text-2xl text-cosmic font-semibold">
              ✨ 당신만의 우주를 발견하세요 ✨
            </p>
            <p className="text-lg text-muted-foreground">
              각 검사는 당신 영혼의 다른 면을 비추는 거울입니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
