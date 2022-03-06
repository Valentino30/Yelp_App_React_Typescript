import CustomCard from "../Card";
import { SearchResultType } from "../../types/search";
import { StyledList, StyledListItem } from "./styles";

type ListPropsType = {
  listItems: [] | SearchResultType[];
};

export default function List({ listItems }: ListPropsType) {
  return (
    <StyledList>
      {listItems.map((listItem) => (
        <StyledListItem key={listItem.id}>
          <CustomCard
            url={listItem.url}
            name={listItem.name}
            alias={listItem.alias}
            rating={listItem.rating}
            image_url={listItem.image_url}
            review_count={listItem.review_count}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
}
