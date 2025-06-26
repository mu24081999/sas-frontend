import axiosInstance from "./axiosInstance";
export const createLead = async (payload) => {
  const response = await axiosInstance.post(`/leads`, payload);
  return response.data;
};

export const getLeads = async () => {
  const response = await axiosInstance.get(`/leads`);
  return response.data;
};

export const patchLead = async ({ id, payload }) => {
  const response = await axiosInstance.patch(`/leads/${id}`, payload);
  return response.data;
};

export const deleteLead = async (id) => {
  const response = await axiosInstance.delete(`/leads/${id}`);
  return response.data;
};
