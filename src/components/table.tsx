import { useState } from "react";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { Usertype } from "../types/user";
import useFetchJson from "../hooks/fetchJson";
import { SubscriptionType } from "../types/subscription";

type FilterProps = {
  filter: string;
};

const Table = ({ filter }: FilterProps) => {
  const [sort, setSort] = useState({ header: "id", Sort: "asc" });
  const [displayLimit, setDisplayLimit] = useState(50);

  const { data: subscriptions } = useFetchJson<SubscriptionType[]>(
    "/subscriptions.json"
  );

  const {
    data: users,
    isLoading,
    error,
  } = useFetchJson<Usertype[]>("/users.json");

  //sort the array based on the header and sort type
  function sortedArray(array: Usertype[]) {
    if (sort.Sort === "asc") {
      return array?.sort((a, b) => (a[sort.header] > b[sort.header] ? 1 : -1));
    }
    return array?.sort((a, b) => (a[sort.header] > b[sort.header] ? -1 : 1));
  }

  function filterUsers() {
    const subscribedUserIds =
      subscriptions && subscriptions?.map((sub) => sub.user_id);
    if (filter === "all") {
      return users;
    } else if (filter === "subscribed") {
      return users?.filter((user) =>
        subscribedUserIds?.includes(String(user.id))
      );
    } else if (filter === "notsubscribed") {
      return users?.filter(
        (user) => !subscribedUserIds?.includes(String(user.id))
      );
    }
    return users;
  }

  const filteredUsers = sortedArray(filterUsers() || []).slice(0, displayLimit);

  function loadMoreUsers() {
    setDisplayLimit(displayLimit + 50);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <table>
        <TableHeader users={users} sort={sort} setSort={setSort} />
        <TableBody filteredUsers={filteredUsers} />
      </table>
      {displayLimit < (filterUsers()?.length ?? 0) && (
        <button onClick={loadMoreUsers}>Load More</button>
      )}
    </>
  );
};

export default Table;
