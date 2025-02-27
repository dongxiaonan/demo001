import PageHeader from "./components/PageHeader";
import FilterBars from "./components/FilterBars";
import ImageContent from "./components/ImageContent";
import { tags, items } from "./data";

function App() {
  return (
    <>
    <PageHeader />
<FilterBars data={tags}/>
<ImageContent data={items} tags={tags} />
    </>
  );
}

export default App;
