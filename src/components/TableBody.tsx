import { Usertype } from "../types/user";
import { useNavigate } from "react-router-dom";

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
  );
};

export default TableBody;
