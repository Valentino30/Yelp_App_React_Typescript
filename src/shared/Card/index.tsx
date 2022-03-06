import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

import { SearchResultType } from "../../types/search";

type CardPropsType = Omit<SearchResultType, "id">;

export default function CustomCard({
  url,
  name,
  alias,
  rating,
  image_url,
  review_count,
}: CardPropsType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link
        href={url}
        target="_blank"
        component={CardActionArea}
        style={{ textDecoration: "none" }}
      >
        <CardMedia component="img" height="140" image={image_url} alt={alias} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Reviews: ${review_count}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Rating: ${rating}`}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
