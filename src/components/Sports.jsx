import SportsCards from './SportsCards';

export default function Sports() {
  return (
    <>
      <p className="border-b-4 border-[#738FFF] pb-4 font-bold text-4xl inline-block">
        Sports
      </p>
      <SportsCards />
      <div className="flex justify-center">
        <button className="text-white bg-[#2C9CF0] text-sm font-semibold rounded-sm px-8 py-4 mt-10">
          Show More
        </button>
      </div>
    </>
  );
}
