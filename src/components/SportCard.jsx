export default function SportCard({ card }) {
  return (
    <div className="flex flex-col flex-nowrap bg-white p-4 w-64 gap-4 shadow-xl">
      <img src={card.image} alt="image" className="w-96" />
      <p className="text-xl font-semibold">{card.name}</p>
      <div className="flex flex-row bg-[#F7F7F8] px-4 py-2 gap-6">
        <div>
          <p className="text-[#525965] text-sm">Total Events</p>
          <p className="text-l font-semibold">{card.events} Events</p>
        </div>
        <div>
          <p className="text-[#525965] text-sm">Sport</p>
          <p className="text-l  font-semibold">{card.sports}</p>
        </div>
      </div>
    </div>
  );
}
