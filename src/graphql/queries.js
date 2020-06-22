/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeelings = /* GraphQL */ `
  query GetFeelings($id: ID!) {
    getFeelings(id: $id) {
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
export const listFeelingss = /* GraphQL */ `
  query ListFeelingss(
    $filter: ModelFeelingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeelingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tired
        happy
        bored
        hungry
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPostWork = /* GraphQL */ `
  query GetPostWork($id: ID!) {
    getPostWork(id: $id) {
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
export const listPostWorks = /* GraphQL */ `
  query ListPostWorks(
    $filter: ModelPostWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        focus
        productive
        distracted
        flow
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBreak = /* GraphQL */ `
  query GetBreak($id: ID!) {
    getBreak(id: $id) {
      id
      duration
      activity
      createdAt
      updatedAt
      owner
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
        duration
        activity
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($userId: ID!, $date: String!) {
    getDay(userId: $userId, date: $date) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $userId: ID
    $date: ModelStringKeyConditionInput
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDays(
      userId: $userId
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
