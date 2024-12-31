import { ContentItem } from "../components/content-item";
import { TrendsItem } from "../components/trends-item";
import { ItemBlock } from "../components/item-block";

export function HomeMain({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <ItemBlock>
        <ContentItem></ContentItem>
      </ItemBlock>
      <ItemBlock>
        <TrendsItem></TrendsItem>
      </ItemBlock>
    </div>
  );
}
