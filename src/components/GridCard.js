const GridCard = (props) => {
  return (
    <div className="bg-white rounded-md">
      <img className="h-full w-full rounded-md" src={props.url} />
    </div>
  );
};

export default GridCard;
