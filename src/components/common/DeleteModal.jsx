import { Button } from "./Button";
import { useEffect } from "react";

export const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  isPending,
  entityName = "Item",
  entityIdentifier = "",
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000078] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Delete {entityName}</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this {entityName.toLowerCase()}{" "}
          {entityIdentifier ? `"${entityIdentifier}"` : ""}? This action cannot
          be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <Button variant="secondary" onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
};
