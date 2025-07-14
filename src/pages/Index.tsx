import { useState } from "react";
import { Brain, Sparkles, Users } from "lucide-react";
import { MBTICard } from "@/components/MBTICard";
import { FilterTabs } from "@/components/FilterTabs";
import { mbtiTests, getTestsByCategory } from "@/data/mbtiTests";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const filteredTests = getTestsByCategory(selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center space-y-8">
            {/* Logo & Title */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Brain className="h-16 w-16 text-primary float-animation" />
                <Sparkles className="h-6 w-6 text-primary/60 absolute -top-2 -right-2 float-animation" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                MBTI Store
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                다양한 MBTI 성격 검사를 한 곳에서 비교하고 선택하세요.<br />
                나에게 맞는 검사를 찾아 성격을 깊이 이해해보세요.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{mbtiTests.length}+</div>
                <div className="text-sm text-muted-foreground">검사 사이트</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">무료 이용</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center flex items-center gap-1">
                <Users className="h-5 w-5 text-primary" />
                <div className="text-2xl font-bold text-primary">신뢰</div>
                <div className="text-sm text-muted-foreground ml-1">검증됨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <FilterTabs 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <MBTICard key={test.id} test={test} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            💡 각 검사의 특성을 비교해보고 자신에게 가장 적합한 검사를 선택하세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
