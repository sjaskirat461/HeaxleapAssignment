import { SPORTS } from '../data';
import SportCard from './SportCard';
import AddCard from './AddCard';

export default function SportsCards() {
  return (
    <div className="flex flex-row flex-wrap my-8 justify-between">
      {SPORTS.map((card) => {
        if (card.type === 'team') {
          return <SportCard card={card} key={card.name} />;
        } else {
          return <AddCard card={card} key={card.title} />;
        }
      })}
    </div>
  );
}
