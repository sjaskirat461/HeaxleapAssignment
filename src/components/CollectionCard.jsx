export default function CollectionCard({ coll }) {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-xl py-4 px-2 justify-center items-center relative">
      <div className="bg-[#f7f7f8] w-10 h-10 rounded-full absolute -left-4 bottom-44"></div>
      <div className="bg-[#f7f7f8] w-10 h-10 rounded-full absolute -right-4 bottom-44"></div>
      <img src={coll.image} alt="" className="w-56" />
      <div className="border-b-2 border-[#A9ACB2] border-dashed  w-full mx-8">
        &nbsp;
      </div>
      <p className="text-xl font-semibold">{coll.name}</p>
      <p className="text-l font-semibold">
        {coll.date} | {coll.day} | {coll.time}
      </p>
      <p className="text-[#525965] text-sm">{coll.venue}</p>
      <button className="w-full bg-[#1D1D1F] py-2 flex flex-row justify-center rounded-sm text-white">
        {coll.action}
      </button>
    </div>
  );
}
