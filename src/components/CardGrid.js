import GridCard from "./GridCard";

const CardGrid = () => {
  return (
    <div className="flex items-center justify-center w-3/4 bg-black h-5/6">
      <div className="grid gap-4 grid-rows-3 grid-cols-3 h-full w-full">
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
        <GridCard></GridCard>
      </div>
    </div>
  );
};

export default CardGrid;
