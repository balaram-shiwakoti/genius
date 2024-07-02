import { useNavigate } from "react-router-dom";
import { Usertype } from "../../../types/user";

import "./table.css";
type Props = {
  filteredUsers: Usertype[];
};

const TableBody = ({ filteredUsers }: Props) => {
  const navigate = useNavigate();

  function handleUserClick(user: Usertype) {
    navigate(`/users/${user.id}`);
  }

  return (
    <tbody>
      {filteredUsers.map((user) => (
        <tr onClick={() => handleUserClick(user)} key={user.id}>
          <td>
            <span> {user.id} </span>
          </td>
          <td>
            <span> {user.first_name} </span>
          </td>
          <td>
            <span> {user.middle_name} </span>
          </td>
          <td>
            <span> {user.last_name} </span>
          </td>
          <td>
            <span> {user.username} </span>
          </td>
          <td>
            <span> {user.email}</span>
          </td>
          <td>
            <span> {user.password} </span>
          </td>
          <td>
            <span>{user.active === "0" ? "Inactive" : "Active"}</span>
          </td>
          <td>
            <span> {user.address} </span>
          </td>
          <td>
            <span> {user.country} </span>
          </td>
          <td>
            <span>
              {new Date(Number(user.join_date) * 1000).toLocaleDateString()}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
