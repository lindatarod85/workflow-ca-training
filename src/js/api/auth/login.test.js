import { login } from "./login.js";
import localStorageMock from "../../mocks/LocalStorage.mock.js";

//Save token

global.localStorage = localStorageMock;

describe("LocalStorageMock", () => {
  it("allows for mock call detection on storage methods", () => {
    localStorage.setItem("test", "hello world");
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});

//Call fetch

describe("login function", () => {
  it("should call fetch", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue({}),
      }),
    );
    global.fetch = mockFetch;
    await login("testemail", "testpassword");
    expect(mockFetch).toHaveBeenCalled();
  });
});
