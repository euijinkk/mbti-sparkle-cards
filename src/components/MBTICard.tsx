import { ExternalLink, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MBTITest } from "@/data/mbtiTests";

interface MBTICardProps {
  test: MBTITest;
}

export const MBTICard = ({ test }: MBTICardProps) => {
  const handleCardClick = () => {
    window.open(test.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mbti-card fade-in-up group cursor-pointer" onClick={handleCardClick}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{test.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {test.name}
              </h3>
              <Badge 
                variant={test.category === "무료" ? "secondary" : "default"}
                className="mt-1"
              >
                {test.category}
              </Badge>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {test.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>소요시간: {test.duration}</span>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Star className="h-4 w-4 text-primary" />
            주요 특징
          </h4>
          <div className="flex flex-wrap gap-2">
            {test.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full btn-hero group-hover:shadow-lg transition-all"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          검사 시작하기
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};