/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFeelings = /* GraphQL */ `
  subscription OnCreateFeelings($owner: String!) {
    onCreateFeelings(owner: $owner) {
      id
      userId
      tired
      happy
      bored
      hungry
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFeelings = /* GraphQL */ `
  subscription OnUpdateFeelings($owner: String!) {
    onUpdateFeelings(owner: $owner) {
      id
      userId
      tired
      happy
      bored
      hungry
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFeelings = /* GraphQL */ `
  subscription OnDeleteFeelings($owner: String!) {
    onDeleteFeelings(owner: $owner) {
      id
      userId
      tired
      happy
      bored
      hungry
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePostWork = /* GraphQL */ `
  subscription OnCreatePostWork($owner: String!) {
    onCreatePostWork(owner: $owner) {
      id
      userId
      focus
      productive
      distracted
      flow
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePostWork = /* GraphQL */ `
  subscription OnUpdatePostWork($owner: String!) {
    onUpdatePostWork(owner: $owner) {
      id
      userId
      focus
      productive
      distracted
      flow
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePostWork = /* GraphQL */ `
  subscription OnDeletePostWork($owner: String!) {
    onDeletePostWork(owner: $owner) {
      id
      userId
      focus
      productive
      distracted
      flow
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBreak = /* GraphQL */ `
  subscription OnCreateBreak($owner: String!) {
    onCreateBreak(owner: $owner) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBreak = /* GraphQL */ `
  subscription OnUpdateBreak($owner: String!) {
    onUpdateBreak(owner: $owner) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBreak = /* GraphQL */ `
  subscription OnDeleteBreak($owner: String!) {
    onDeleteBreak(owner: $owner) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
      owner
    }
  }
`;
