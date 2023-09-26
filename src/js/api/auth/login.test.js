//import {login} from "./login.js";
import localStorageMock from "../../mocks/LocalStorage.mock.js";

globals.localStorage = localStorageMock;

describe("LocalStorageMock", () => {
  it("allows for mock call detection on storage methods", () => {
    localStorage.setItem("test", "hello world");
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});

/*
describe("login function", () => {
  it("should call fetch", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue({}),
      })
    );
    global.fetch = mockFetch;

    await login("testemail", "testpassword");

    expect(mockFetch).toHaveBeenCalled();
  });

  
  it("should add the token to local storage", () => {
    const mockKey = "key";
    const mockJson = { value: "json value" };

    // Set an item in local storage
    localStorage.setItem(mockKey, JSON.stringify(mockJson));

    // Retrieve the item from local storage and check if it's equal to the expected value
    const storedValue = localStorage.getItem(mockKey);

    expect(storedValue).toEqual(JSON.stringify(mockJson));
  });
});*/

//Call fetch
/*
describe("login function", () => {
    it("should call fetch", async () => {
        const mockFetch = jest.fn(() =>
            Promise.resolve({
                json: jest.fn().mockResolvedValue({}),
            })
        );
        global.fetch = mockFetch;
        await login("testemail", "testpassword");
        expect(mockFetch).toHaveBeenCalled();
    });
  });*/

//Save token
/*
  describe("token is added into local storage", () => {
    it("should add the token to local storage", () => {
      const mockKey = "key";
      const mockJson = { value: "json value" };
      
      // Set an item in local storage
      localStorage.setItem(mockKey, JSON.stringify(mockJson));
      
      // Retrieve the item from local storage and check if it's equal to the expected value
      const storedValue = localStorage.getItem(mockKey);
      
      expect(storedValue).toEqual(JSON.stringify(mockJson));
    });
  });
  */
