import { useState } from "react";

import users from "../data/users.json";
import { Usertype } from "../types/user";

const Tabless = () => {
  const headers = Object.keys(users[0]);

  const [sort, setSort] = useState({ header: "id", Sort: "asc" });

  function handleHeaderClick(header: string) {
    setSort({
      header: header,
      Sort:
        header === sort.header
          ? sort.Sort === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  }
  function sortedArray(array: Usertype[]) {
    if (sort.Sort === "asc") {
      return array.sort((a, b) => (a[sort.header] > b[sort.header] ? 1 : -1));
    }
    return array.sort((a, b) => (a[sort.header] > b[sort.header] ? -1 : 1));
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th onClick={() => handleHeaderClick(header)} key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedArray(users).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.middle_name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.active === "0" ? "Inactive" : "Active"}</td>
              <td>{user.address}</td>
              <td>{user.country}</td>
              <td>
                {new Date(Number(user.join_date) * 1000).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabless;
