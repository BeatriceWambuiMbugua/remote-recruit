import { Button } from "@/components/ui/button";

interface FeatureHighlightProps {
  title: string;
  description: string;
  badgeText?: string; // optional
}

export const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  badgeText,
  title,
  description,
}) => {
  return (
    <div className="space-y-9">
      {badgeText && (
        <Button className="bg-[#C2EEFF] hover:bg-[#C2EEFF]/90 text-[#11142D] text-xs rounded-2xl">
          {badgeText}
        </Button>
      )}

      <h1 className="text-[#11142D] text-4xl font-medium leading-[3.5rem]">
        {title}
      </h1>

      <p className="text-[#11142DA4] text-lg leading-9 max-w-xl">
        {description}
      </p>
    </div>
  );
};
