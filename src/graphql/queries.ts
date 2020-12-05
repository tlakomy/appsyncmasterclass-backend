/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageUploadUrl = /* GraphQL */ `
  query GetImageUploadUrl($extension: String, $contentType: String) {
    getImageUploadUrl(extension: $extension, contentType: $contentType)
  }
`;
export const getMyTimeline = /* GraphQL */ `
  query GetMyTimeline($limit: Int, $nextToken: String) {
    getMyTimeline(limit: $limit, nextToken: $nextToken) {
      tweets {
        id
        createdAt
        ... on Tweet {
          text
          replies
          likes
          retweets
          retweeted
        }
        ... on Reply {
          text
          replies
          likes
          retweets
          retweeted
        }
      }
      nextToken
    }
  }
`;
export const getMyProfile = /* GraphQL */ `
  query GetMyProfile {
    getMyProfile {
      id
      name
      screenName
      imageUrl
      backgroundImageUrl
      bio
      location
      website
      birthdate
      createdAt
      tweets {
        nextToken
      }
      followersCount
      followingCount
      tweetsCount
      likesCount
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($screenName: String!) {
    getProfile(screenName: $screenName) {
      id
      name
      screenName
      imageUrl
      backgroundImageUrl
      bio
      location
      website
      birthdate
      createdAt
      tweets {
        nextToken
      }
      followersCount
      followingCount
      tweetsCount
      likesCount
      following
      followedBy
    }
  }
`;
export const getTweets = /* GraphQL */ `
  query GetTweets($userId: ID!, $limit: Int!, $nextToken: String) {
    getTweets(userId: $userId, limit: $limit, nextToken: $nextToken) {
      tweets {
        id
        createdAt
        ... on Tweet {
          text
          replies
          likes
          retweets
          retweeted
        }
        ... on Reply {
          text
          replies
          likes
          retweets
          retweeted
        }
      }
      nextToken
    }
  }
`;
export const getLikes = /* GraphQL */ `
  query GetLikes($userId: ID!, $limit: Int!, $nextToken: String) {
    getLikes(userId: $userId, limit: $limit, nextToken: $nextToken) {
      tweets {
        id
        createdAt
        ... on Tweet {
          text
          replies
          likes
          retweets
          retweeted
        }
        ... on Reply {
          text
          replies
          likes
          retweets
          retweeted
        }
      }
      nextToken
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers($userId: ID!, $limit: Int!, $nextToken: String) {
    getFollowers(userId: $userId, limit: $limit, nextToken: $nextToken) {
      profiles {
        id
        name
        screenName
        imageUrl
        backgroundImageUrl
        bio
        location
        website
        birthdate
        createdAt
        followersCount
        followingCount
        tweetsCount
        likesCount
        ... on OtherProfile {
          following
          followedBy
        }
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($userId: ID!, $limit: Int!, $nextToken: String) {
    getFollowing(userId: $userId, limit: $limit, nextToken: $nextToken) {
      profiles {
        id
        name
        screenName
        imageUrl
        backgroundImageUrl
        bio
        location
        website
        birthdate
        createdAt
        followersCount
        followingCount
        tweetsCount
        likesCount
        ... on OtherProfile {
          following
          followedBy
        }
      }
      nextToken
    }
  }
`;
