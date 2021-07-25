export const simpleFetch = async (input: RequestInfo, init?: RequestInit): Promise<any> => {
  const res = await fetch(input, init)
  return await res.json()
}
