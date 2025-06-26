export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2";
  const variantStyles =
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-700 focus:ring-blue-500"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
