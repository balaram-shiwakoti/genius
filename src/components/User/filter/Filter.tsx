import { useSearchParams } from "react-router-dom";

import "./filter.css";

type FilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ setFilter }: FilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="custom-select">
      <label htmlFor="subscription">Filter :</label>
      <select
        value={searchParams.get("subscription") || "all"}
        onChange={(e) => {
          setFilter(e.target.value);
          setSearchParams({ subscription: e.target.value });
        }}
        name="subscription"
        id="subscription"
      >
        <option value="all">All</option>
        <option value="subscribed">Subscribed</option>
        <option value="notsubscribed">Not subscribed</option>
      </select>
    </div>
  );
};

export default Filter;
