import { useState } from "react";
import Filter from "../components/User/Filter";
import { useSearchParams } from "react-router-dom";
import Table from "../components/User/Table";
import Header from "../components/User/Header";

const User = () => {
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState(
    searchParams.get("subscription") || "all"
  );
  return (
    <>
      <Header />
      <div className="table-container">
        <Filter setFilter={setFilter} />
        <Table filter={filter} />
      </div>
    </>
  );
};

export default User;
