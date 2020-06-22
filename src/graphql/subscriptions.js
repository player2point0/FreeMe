/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFeelings = /* GraphQL */ `
  subscription OnCreateFeelings($owner: String!) {
    onCreateFeelings(owner: $owner) {
      id
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
      duration
      activity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($owner: String!) {
    onCreateDay(owner: $owner) {
      userId
      date
      totalTired
      totalHappy
      totalBored
      totalHungry
      numberFeelingEntries
      totalFocus
      totalProductive
      totalDistracted
      totalFlow
      numberPostWorkEntries
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owner: String!) {
    onUpdateDay(owner: $owner) {
      userId
      date
      totalTired
      totalHappy
      totalBored
      totalHungry
      numberFeelingEntries
      totalFocus
      totalProductive
      totalDistracted
      totalFlow
      numberPostWorkEntries
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owner: String!) {
    onDeleteDay(owner: $owner) {
      userId
      date
      totalTired
      totalHappy
      totalBored
      totalHungry
      numberFeelingEntries
      totalFocus
      totalProductive
      totalDistracted
      totalFlow
      numberPostWorkEntries
      createdAt
      updatedAt
      owner
    }
  }
`;
