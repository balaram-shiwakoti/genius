import { Usertype } from "../../types/user";

type Props = {
  sort: { header: string; Sort: string };
  setSort: React.Dispatch<
    React.SetStateAction<{ header: string; Sort: string }>
  >;
  users: Usertype[] | null;
};

const TableHeader = ({ sort, setSort, users }: Props) => {
  const headers = users ? Object.keys(users[0]) : [];
  function handleSort(header: string) {
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
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th
            onClick={() => handleSort(header)}
            key={header}
            className="sortable-header"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
