import users from "../data/users.json";

type Props = {
  sort: { header: string; Sort: string };
  setSort: React.Dispatch<
    React.SetStateAction<{ header: string; Sort: string }>
  >;
};

const TableHeader = ({ sort, setSort }: Props) => {
  const headers = Object.keys(users[0]);

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
          <th onClick={() => handleSort(header)} key={header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
