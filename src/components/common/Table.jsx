import PropTypes from "prop-types";

export const Table = ({ columns, data, actions, rowKey = "_id" }) => {
  const getRowKey = (item) => {
    return typeof rowKey === "function" ? rowKey(item) : item[rowKey];
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700 min-w-[200px]"
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700 min-w-[150px]">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={getRowKey(item)} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-2 px-4 border-b text-sm text-gray-900"
                  >
                    {column.render
                      ? column.render(item[column.key], item)
                      : item[column.key] || "-"}
                  </td>
                ))}
                {actions && (
                  <td className="py-2 px-4 border-b text-sm text-gray-900">
                    {actions(item)}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="py-2 px-4 text-center text-sm text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Table.propTypes = {
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//       header: PropTypes.string.isRequired,
//       render: PropTypes.func,
//     })
//   ).isRequired,
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   actions: PropTypes.func,
//   rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
// };
