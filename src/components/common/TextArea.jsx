import PropTypes from "prop-types";

export const Textarea = ({ label, error, ...props }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        className={`w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        rows="4"
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};
