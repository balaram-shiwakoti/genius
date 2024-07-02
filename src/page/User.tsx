import { useState } from "react";
import Filter from "../components/User/filter/Filter";
import { useSearchParams } from "react-router-dom";
import Table from "../components/User/Table/Table";
import Header from "../components/User/header/Header";

const User = () => {
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState(
    searchParams.get("subscription") || "all"
  );
  return (
    <>
      <Header />
      <div className="filter-table-conatiner">
        <Filter setFilter={setFilter} />
        <Table filter={filter} />
      </div>
    </>
  );
};

export default User;
