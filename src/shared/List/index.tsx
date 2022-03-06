import CustomCard from "../Card";
import { SearchResultType } from "../../types/search";

type ListPropsType = {
  listItems: [] | SearchResultType[];
};

export default function List({ listItems }: ListPropsType) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {listItems.map((listItem) => (
        <li key={listItem.id} style={{ marginBottom: 10 }}>
          <CustomCard
            url={listItem.url}
            name={listItem.name}
            alias={listItem.alias}
            rating={listItem.rating}
            image_url={listItem.image_url}
            review_count={listItem.review_count}
          />
        </li>
      ))}
    </ul>
  );
}
