import CollectionsCards from './CollectionsCards';

export default function Collections() {
  return (
    <div className="flex flex-col items-center mt-28 gap-16 px-12 justify-center">
      <p className="text-6xl font-bold">Collection Spotlight</p>
      <p className="text-l">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>
      <div className="flex flex-row items-center justify-between gap-24">
        <button className="border-[#2C9CF0] border-2 p-2 text-[#2C9CF0] font-semibold text-3xl items-center">
          &lt;
        </button>
        <CollectionsCards />
        <button className="border-[#2C9CF0] border-2 p-2 text-[#2C9CF0] font-semibold text-3xl items-center">
          &gt;
        </button>
      </div>
    </div>
  );
}
