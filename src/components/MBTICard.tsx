import { ExternalLink, Clock, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MBTITest } from "@/data/mbtiTests";

interface MBTICardProps {
  test: MBTITest;
}

export const MBTICard = ({ test }: MBTICardProps) => {
  const handleCardClick = () => {
    window.open(test.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="mbti-card fade-in-mystical group cursor-pointer soul-glow"
      onClick={handleCardClick}
    >
      <div className="p-6 relative z-10">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="particle"
            style={{ top: "20%", animationDelay: "0s" }}
          ></div>
          <div
            className="particle"
            style={{ top: "60%", animationDelay: "-3s" }}
          ></div>
          <div
            className="particle"
            style={{ top: "40%", animationDelay: "-6s" }}
          ></div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl float-mystical">{test.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-cosmic group-hover:text-glow transition-all">
                {test.name}
              </h3>
            </div>
          </div>
          <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors float-mystical" />
        </div>

        {/* Description */}
        <p className="text-card-foreground/90 mb-6 leading-relaxed text-lg">
          {test.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-3 mb-6 text-muted-foreground">
          <Clock className="h-5 w-5 text-accent" />
          <span className="text-lg">영혼의 시간: {test.duration}</span>
        </div>

        {/* Features */}
        {/* <div className="space-y-3 mb-8">
          <h4 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary float-mystical" />
            신비로운 특징
          </h4>
          <div className="space-y-2">
            {test.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-card-foreground/80"
              >
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Action Button */}
        <Button
          className="w-full btn-cosmic text-lg py-6 group-hover:shadow-2xl transition-all"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          ✨ 검사 시작하기 ✨
          <ExternalLink className="ml-3 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
