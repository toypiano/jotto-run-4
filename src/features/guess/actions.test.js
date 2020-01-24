/* 
Integration test creates a new redux store instance with optional preloaded state.
Then in each test, it dispatches an action creator and gets new state from the store.
If the new state updated by the reducer matches expected state, the test passes.
*/

// Integration test for guessWord
describe("guessWord action dispatcher", () => {
  describe("no previously guessed word(first submit)", () => {
    test("updates state correctly or unsuccessful guess", () => {});
    test("updates state correctly for successful guess", () => {});
  });
  describe("there are some previously guessed words", () => {
    test("updates state correctly or unsuccessful guess", () => {});
    test("updates state correctly for successful guess", () => {});
  });
});
