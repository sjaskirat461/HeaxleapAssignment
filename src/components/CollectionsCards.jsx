import CollectionCard from './CollectionCard';
import { COLLECTIONS } from '../data';

export default function CollectionsCards() {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-4">
      {COLLECTIONS.map((coll) => (
        <CollectionCard coll={coll} key={coll.name} />
      ))}
    </div>
  );
}
