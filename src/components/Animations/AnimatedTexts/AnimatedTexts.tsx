import TextTransition, { presets } from "react-text-transition";

export interface AnimatedText {
  text: string;
  color: string;
}

interface AnimatedTextsProps {
  texts: AnimatedText[];
  currentIndex: number;
}

export default function AnimatedTexts({
  texts,
  currentIndex,
}: AnimatedTextsProps) {
  return (
    <TextTransition
      style={{ color: texts[currentIndex].color }}
      springConfig={presets.wobbly}
    >
      {texts[currentIndex].text}
    </TextTransition>
  );
}
