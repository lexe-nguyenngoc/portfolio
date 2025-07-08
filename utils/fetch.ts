const fetchHandler = async <T>(url: string): Promise<ActionResponse<T>> => {
  const response = await fetch(url);

  if (!response.ok) return { success: false };

  return {
    success: true,
    data: await response.json()
  };
};

export default fetchHandler;
