import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are me", likeCount: 12 },
    { id: 2, message: "It's wonderfull life", likeCount: 5 },
    { id: 3, message: "Render it", likeCount: 4 },
    { id: 4, message: "Render", likeCount: 6 },
  ],
};

test("length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("oblivion");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(5);
});

test("message of new post should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("oblivion");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts[4].message).toBe("oblivion");
});


// test("after deleting length of messages should be decrement", () => {
//     // 1. test data
//     let action = deletePost(1);
  
//     // 2. action
//     let newState = profileReducer(state, action);
  
//     // 3. expectation
  
//     expect(newState.posts.length).toBe(3);
//   });