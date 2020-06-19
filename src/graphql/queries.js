/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeelings = /* GraphQL */ `
  query GetFeelings($id: ID!) {
    getFeelings(id: $id) {
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
export const listFeelingss = /* GraphQL */ `
  query ListFeelingss(
    $filter: ModelFeelingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeelingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPostWork = /* GraphQL */ `
  query GetPostWork($id: ID!) {
    getPostWork(id: $id) {
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
export const listPostWorks = /* GraphQL */ `
  query ListPostWorks(
    $filter: ModelPostWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBreak = /* GraphQL */ `
  query GetBreak($id: ID!) {
    getBreak(id: $id) {
      id
      userId
      duration
      activity
      createdAt
      updatedAt
    }
  }
`;
export const listBreaks = /* GraphQL */ `
  query ListBreaks(
    $filter: ModelBreakFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBreaks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        duration
        activity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
