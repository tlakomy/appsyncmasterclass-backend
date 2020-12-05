/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type GetImageUploadUrlQueryVariables = {
  extension?: string | null,
  contentType?: string | null,
};

export type GetImageUploadUrlQuery = {
  getImageUploadUrl: string,
};

export type GetMyTimelineQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type GetMyTimelineQuery = {
  getMyTimeline:  {
    __typename: "TweetsPage",
    tweets:  Array<( {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        text: string,
        replies: number,
        likes: number,
        retweets: number,
        retweeted: boolean,
      } | {
        __typename: "Reply",
        id: string,
        createdAt: string,
        text: string,
        replies: number,
        likes: number,
        retweets: number,
        retweeted: boolean,
      } | {
        __typename: "Retweet",
        id: string,
        createdAt: string,
      }
    ) > | null,
    nextToken: string | null,
  },
};

export type GetMyProfileQuery = {
  getMyProfile:  {
    __typename: "MyProfile",
    id: string,
    name: string,
    screenName: string,
    imageUrl: string | null,
    backgroundImageUrl: string | null,
    bio: string | null,
    location: string | null,
    website: string | null,
    birthdate: string | null,
    createdAt: string,
    tweets:  {
      __typename: "TweetsPage",
      nextToken: string | null,
    },
    followersCount: number,
    followingCount: number,
    tweetsCount: number,
    likesCount: number,
  },
};

export type GetProfileQueryVariables = {
  screenName: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "OtherProfile",
    id: string,
    name: string,
    screenName: string,
    imageUrl: string | null,
    backgroundImageUrl: string | null,
    bio: string | null,
    location: string | null,
    website: string | null,
    birthdate: string | null,
    createdAt: string,
    tweets:  {
      __typename: "TweetsPage",
      nextToken: string | null,
    },
    followersCount: number,
    followingCount: number,
    tweetsCount: number,
    likesCount: number,
    following: boolean,
    followedBy: boolean,
  },
};

export type GetTweetsQueryVariables = {
  userId: string,
  limit: number,
  nextToken?: string | null,
};

export type GetTweetsQuery = {
  getTweets:  {
    __typename: "TweetsPage",
    tweets:  Array<( {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        text: string,
        replies: number,
        likes: number,
        retweets: number,
        retweeted: boolean,
      } | {
        __typename: "Reply",
        id: string,
        createdAt: string,
        text: string,
        replies: number,
        likes: number,
        retweets: number,
        retweeted: boolean,
      } | {
        __typename: "Retweet",
        id: string,
        createdAt: string,
      }
    ) > | null,
    nextToken: string | null,
  },
};

export type GetLikesQueryVariables = {
  userId: string,
  limit: number,
  nextToken?: string | null,
};

export type GetLikesQuery = {
  getLikes:  {
    __typename: "TweetsPage",
    tweets:  Array<( {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        text: string,
        replies: number,
        likes: number,
        retweets: number,
        retweeted: boolean,
      } | {
        __typename: "Reply",
        id: string,
        createdAt: string,
        text: string,
        replies: number,
        likes: number,
        retweets: number,
        retweeted: boolean,
      } | {
        __typename: "Retweet",
        id: string,
        createdAt: string,
      }
    ) > | null,
    nextToken: string | null,
  },
};

export type GetFollowersQueryVariables = {
  userId: string,
  limit: number,
  nextToken?: string | null,
};

export type GetFollowersQuery = {
  getFollowers:  {
    __typename: "ProfilesPage",
    profiles:  Array<( {
        __typename: "MyProfile",
        id: string,
        name: string,
        screenName: string,
        imageUrl: string | null,
        backgroundImageUrl: string | null,
        bio: string | null,
        location: string | null,
        website: string | null,
        birthdate: string | null,
        createdAt: string,
        followersCount: number,
        followingCount: number,
        tweetsCount: number,
        likesCount: number,
      } | {
        __typename: "OtherProfile",
        id: string,
        name: string,
        screenName: string,
        imageUrl: string | null,
        backgroundImageUrl: string | null,
        bio: string | null,
        location: string | null,
        website: string | null,
        birthdate: string | null,
        createdAt: string,
        followersCount: number,
        followingCount: number,
        tweetsCount: number,
        likesCount: number,
        following: boolean,
        followedBy: boolean,
      }
    ) > | null,
    nextToken: string | null,
  },
};

export type GetFollowingQueryVariables = {
  userId: string,
  limit: number,
  nextToken?: string | null,
};

export type GetFollowingQuery = {
  getFollowing:  {
    __typename: "ProfilesPage",
    profiles:  Array<( {
        __typename: "MyProfile",
        id: string,
        name: string,
        screenName: string,
        imageUrl: string | null,
        backgroundImageUrl: string | null,
        bio: string | null,
        location: string | null,
        website: string | null,
        birthdate: string | null,
        createdAt: string,
        followersCount: number,
        followingCount: number,
        tweetsCount: number,
        likesCount: number,
      } | {
        __typename: "OtherProfile",
        id: string,
        name: string,
        screenName: string,
        imageUrl: string | null,
        backgroundImageUrl: string | null,
        bio: string | null,
        location: string | null,
        website: string | null,
        birthdate: string | null,
        createdAt: string,
        followersCount: number,
        followingCount: number,
        tweetsCount: number,
        likesCount: number,
        following: boolean,
        followedBy: boolean,
      }
    ) > | null,
    nextToken: string | null,
  },
};
