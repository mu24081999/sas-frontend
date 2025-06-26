// export const Input = ({ label, error, className, ...props }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700">{label}</label>
//       <input
//         className={`mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
//           error ? "border-red-500" : "border-gray-300"
//         } ${className}`}
//         {...props}
//       />
//       {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
//     </div>
//   );
// };

import PropTypes from "prop-types";

export const Input = ({ label, error, className = "", ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className={`mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
};
