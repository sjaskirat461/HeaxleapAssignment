export default function AddCard({ card }) {
  return (
    <div className="flex flex-col flex-nowrap bg-white p-4 w-64 gap-6 shadow-xl">
      <div className="relative">
        <img src={card.image} alt="image" className="w-96" />
        <p className="absolute -right-0 -top-0 px-5 py-1 bg-black text-white font-bold">
          Ad
        </p>
      </div>
      <p className="text-xl font-semibold">{card.title}</p>
      <p className="text-[#525965] text-sm">{card.description}</p>
    </div>
  );
}
