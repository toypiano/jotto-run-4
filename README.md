# Jotto - run4

React TDD with jest and enzyme

## Lessons

- Export actionTypes individually. This makes it easier to import actionTypes from different `FeatureActions.js` file.

```js
// FoodActions.js
export const ORDER_ADDED = "food/orderAdded";
export const addOrder = () => {
  return {
    type: ORDER_ADDED,
    payload: { pizza: 1, coke: 1 }
  };
};

// UserActions.js
export const USER_LOGGED_IN = "user/loggedIn";

// userReducer.js
import { ORDER_ADDED } from "../food/FoodActions.js";
import { USER_LOGGED_IN } from "./UserActions.js";
```

- When dispatching actions asynchronously (via thunk action creators) inside a test, you MUST **return** `store.dispatch()`

```js
beforeEach(() => {
  moxios.install();
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: "conga"
    });
  });
  store = storeFactory(preloadedState);
  return store.dispatch(resetGame()).then(() => {
    newState = store.getState();
  });
});
afterEach(() => {
  moxios.uninstall();
});
// calling resetGame with button click is already in unit test.
test("updates 'secretWord' state correctly upon execution", () => {
  expect(newState.secretWord.length).toBe(5);
  expect(newState.secretWord).not.toBe(secretWord);
});
```

- Feature-based folder structure for react apps

```
    user/
        User.js
        User.test.js
        UserActions.js
        UserActions.test.js
        UserProfile.js
        UserProfile.test.js
        UserAvatar.js
        UserAvatar.test.js
        userReducer.js // camelCase to match the state
        userReducer.test.js
        // (state.user)
```

- When you get anything from DOM, it is a **string**. Don't forget to convert them.

```js
test("renders correct index next to guessed word", () => {
  const guessIndex = findByTestAttr(wrapper, "guess-index");
  const indexes = guessIndex.map(wrapper => wrapper.text());
  const expected = guessedWords.map((word, index) =>
    (index + 1).toString()
  );
  expect(indexes).toEqual(expected);
});
```

- Extract server error message from axios response object

```js
// errorMessageReducer.js
export default (state = null, action) => {
  switch (action.type) {
    case FETCH_WORD_FAIL:
      return action.error.response.data.message;
    case FETCH_WORD_SUCCESS:
      return null;
    default:
      return state;
  }
};
```
