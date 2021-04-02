export const sleep = (msec: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, msec))
}
