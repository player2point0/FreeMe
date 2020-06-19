/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFeelings = /* GraphQL */ `
  mutation CreateFeelings(
    $input: CreateFeelingsInput!
    $condition: ModelFeelingsConditionInput
  ) {
    createFeelings(input: $input, condition: $condition) {
      id
      userId
      time
      tired
      happy
      bored
      hungry
      createdAt
      updatedAt
    }
  }
`;
export const updateFeelings = /* GraphQL */ `
  mutation UpdateFeelings(
    $input: UpdateFeelingsInput!
    $condition: ModelFeelingsConditionInput
  ) {
    updateFeelings(input: $input, condition: $condition) {
      id
      userId
      time
      tired
      happy
      bored
      hungry
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeelings = /* GraphQL */ `
  mutation DeleteFeelings(
    $input: DeleteFeelingsInput!
    $condition: ModelFeelingsConditionInput
  ) {
    deleteFeelings(input: $input, condition: $condition) {
      id
      userId
      time
      tired
      happy
      bored
      hungry
      createdAt
      updatedAt
    }
  }
`;
export const createPostWork = /* GraphQL */ `
  mutation CreatePostWork(
    $input: CreatePostWorkInput!
    $condition: ModelPostWorkConditionInput
  ) {
    createPostWork(input: $input, condition: $condition) {
      id
      userId
      time
      focus
      productive
      distracted
      flow
      createdAt
      updatedAt
    }
  }
`;
export const updatePostWork = /* GraphQL */ `
  mutation UpdatePostWork(
    $input: UpdatePostWorkInput!
    $condition: ModelPostWorkConditionInput
  ) {
    updatePostWork(input: $input, condition: $condition) {
      id
      userId
      time
      focus
      productive
      distracted
      flow
      createdAt
      updatedAt
    }
  }
`;
export const deletePostWork = /* GraphQL */ `
  mutation DeletePostWork(
    $input: DeletePostWorkInput!
    $condition: ModelPostWorkConditionInput
  ) {
    deletePostWork(input: $input, condition: $condition) {
      id
      userId
      time
      focus
      productive
      distracted
      flow
      createdAt
      updatedAt
    }
  }
`;
export const createBreak = /* GraphQL */ `
  mutation CreateBreak(
    $input: CreateBreakInput!
    $condition: ModelBreakConditionInput
  ) {
    createBreak(input: $input, condition: $condition) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
    }
  }
`;
export const updateBreak = /* GraphQL */ `
  mutation UpdateBreak(
    $input: UpdateBreakInput!
    $condition: ModelBreakConditionInput
  ) {
    updateBreak(input: $input, condition: $condition) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
    }
  }
`;
export const deleteBreak = /* GraphQL */ `
  mutation DeleteBreak(
    $input: DeleteBreakInput!
    $condition: ModelBreakConditionInput
  ) {
    deleteBreak(input: $input, condition: $condition) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
    }
  }
`;
