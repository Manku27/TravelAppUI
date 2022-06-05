import { mock } from "./mock";

export const boatsRequest = () => {
  return new Promise((resolve, reject) => {
    const mockData = mock;
    if (!mockData) {
      reject("not found");
    }
    resolve(mockData);
  });
};
