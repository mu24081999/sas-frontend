import axiosInstance from "./axiosInstance";
export const createAutoSale = async (payload) => {
  const response = await axiosInstance.post(`/auto-sales`, payload);
  return response.data;
};

export const getAutoSales = async () => {
  const response = await axiosInstance.get(`/auto-sales`);
  return response.data;
};

export const editAutoSale = async ({ id, payload }) => {
  const response = await axiosInstance.patch(`/auto-sales/${id}`, payload);
  return response.data;
};

export const deleteAutoSale = async (id) => {
  const response = await axiosInstance.delete(`/auto-sales/${id}`);
  return response.data;
};

export const exportAutoSalesCSV = async () => {
  const response = await axiosInstance.get("/auto-sales/export", {
    responseType: "blob",
  });
  return response.data;
};
