import ItemList from "../components/ItemList";
import {useParams} from "react-router-dom";

function SearchListView() {
  let {items} = useParams();
  console.log(items);
  return <ItemList search={items}/>;
}

export default SearchListView;
