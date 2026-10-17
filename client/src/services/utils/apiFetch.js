const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.data = data;
  }
}

export async function apiFetch(path, options = {}) {
  const { headers, ...rest } = options;

  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    ...rest,
    headers: { "Content-Type": "application/json", ...headers },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    console.log(errorData);

    throw new APIError(
      errorData.message || "Request failed",
      res.status,
      errorData,
    );
  }

  return res.status === 204 ? null : res.json();
}
