import axios from "axios";
import { getStoredToken } from "./authStorage";

export interface UserItem {
  id: number;
  name: string;
  surname: string;
  email: string;
  photo: string;
  createdAt: string;
}

export interface UserUpdatePayload {
  name: string;
  surname: string;
  email: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000/users",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export async function getUsers(): Promise<UserItem[]> {
  const response = await api.get<UserItem[]>("");
  return response.data;
}

export async function getUserById(id: number): Promise<UserItem> {
  const response = await api.get<UserItem>(`/${id}`);
  return response.data;
}

export async function updateUser(
  id: number,
  payload: UserUpdatePayload,
): Promise<UserItem> {
  const response = await api.put<UserItem>(`/${id}`, payload);
  return response.data;
}

export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/${id}`);
}
