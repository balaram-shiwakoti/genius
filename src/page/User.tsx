import { useState } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState(
    searchParams.get("subscription") || "all"
  );
  return (
    <div className="table-container">
      <Filter setFilter={setFilter} />
      <Table filter={filter} />
    </div>
  );
};

export default User;
