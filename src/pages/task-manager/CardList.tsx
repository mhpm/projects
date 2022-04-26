import Card from "./Card";

const colors: any = {
  todo: "secondary",
  inprogress: "warning",
  done: "success",
};

const CardList = ({ list = [], title, category }: any) => {
  return (
    <div className="mt-4">
      <h5
        className={`"mt-4 border-bottom pb-2 border-${colors[category]} text-secondary"`}
      >
        {title}
      </h5>
      {list.map((item: any) => (
        <Card key={item.id} info={item} />
      ))}
    </div>
  );
};

export default CardList;
