import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { fetchSecretWord } from "./actions";

describe("fetchSecretWord thunk action creator", () => {
  test("update secretWord state with fetched word", () => {});
  describe("updates serverError state to 'true'", () => {
    test("when server returns 4xx status", () => {});
    test("when server returns 5xx status", () => {});
  });
});
