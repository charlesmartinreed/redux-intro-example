// evaluate any actions that are committed, fetching or creating new posts
// actions have types, which are represented by constants
import { FETCH_POSTS, NEW_POST } from "../actions/types";

// create your initial state that represents posts
const initialState = {
  items: [],
  item: {}
};

//evaluate the type we're dealing with
export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
