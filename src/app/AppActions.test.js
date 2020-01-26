import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { fetchSecretWord } from "./AppActions";

describe("fetchSecretWord thunk action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("update secretWord state with fetched word", () => {
    const secretWord = "piano";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });
    return store.dispatch(fetchSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
  describe("updates serverError state to 'true'", () => {
    let store;
    beforeEach(() => {
      store = storeFactory();
    });
    test("when server returns 4xx status", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404
        });
      });

      return store.dispatch(fetchSecretWord()).then(() => {
        const newState = store.getState();
        expect(newState.serverError).toBe(true);
      });
    });
    test("when server returns 5xx status", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500
        });
      });

      return store.dispatch(fetchSecretWord()).then(() => {
        const newState = store.getState();
        expect(newState.serverError).toBe(true);
      });
    });
  });
});
