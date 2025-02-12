import { IProducts } from "../../interfaces/index";

const ProductCard = ({
  name,
  details,
  id,
  numOfsheets,
  size,
  thickness,
  img,
}: IProducts) => {
  return (
    <div className="text-right gap-5 items-center text-xl" id={id}>
      <div>
        <img className="max-w-full h-full mb-5" src={img} />
      </div>
      <div>
        <p className="text-2xl font-bold"> {name} :</p>
        <p>{details}</p>
        {size && (
          <p className="flex gap-1">
            المقاس:
            {size.map((s) => (
              <p className="">{s}</p>
            ))}
          </p>
        )}

        {thickness && <p> السمك: {thickness} </p>}
        {numOfsheets && <p> عدد الاوراق :{numOfsheets} لكل كيلو </p>}
      </div>
    </div>
  );
};

export default ProductCard;
