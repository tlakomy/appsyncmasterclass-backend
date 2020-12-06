/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ProfileInput = {
  name: string;
  imageUrl?: string | null;
  backgroundImageUrl?: string | null;
  bio?: string | null;
  location?: string | null;
  website?: string | null;
  birthdate?: string | null;
};

export type EditMyProfileMutationVariables = {
  input: ProfileInput;
};

export type EditMyProfileMutation = {
  editMyProfile: {
    __typename: 'MyProfile';
    id: string;
    name: string;
    screenName: string;
    imageUrl: string | null;
    backgroundImageUrl: string | null;
    bio: string | null;
    location: string | null;
    website: string | null;
    birthdate: string | null;
    createdAt: string;
    tweets: {
      __typename: 'TweetsPage';
      tweets: Array<
        | {
            __typename: 'Tweet';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            text: string;
            replies: number;
            likes: number;
            retweets: number;
            retweeted: boolean;
          }
        | {
            __typename: 'Reply';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            inReplyToTweet:
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                };
            inReplyToUsers: Array<
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                }
            > | null;
            text: string;
            replies: number;
            likes: number;
            retweets: number;
            retweeted: boolean;
          }
        | {
            __typename: 'Retweet';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            retweetOf:
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                };
          }
      > | null;
      nextToken: string | null;
    };
    followersCount: number;
    followingCount: number;
    tweetsCount: number;
    likesCount: number;
  };
};

export type TweetMutationVariables = {
  text: string;
};

export type TweetMutation = {
  tweet: {
    __typename: 'Tweet';
    id: string;
    profile:
      | {
          __typename: 'MyProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
        }
      | {
          __typename: 'OtherProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
          following: boolean;
          followedBy: boolean;
        };
    createdAt: string;
    text: string;
    replies: number;
    likes: number;
    retweets: number;
    retweeted: boolean;
  };
};

export type LikeMutationVariables = {
  tweetId: string;
};

export type LikeMutation = {
  like: boolean;
};

export type UnlikeMutationVariables = {
  tweetId: string;
};

export type UnlikeMutation = {
  unlike: boolean;
};

export type RetweetMutationVariables = {
  tweetId: string;
};

export type RetweetMutation = {
  retweet: boolean;
};

export type UnretweetMutationVariables = {
  tweetId: string;
};

export type UnretweetMutation = {
  unretweet: boolean;
};

export type ReplyMutationVariables = {
  tweetId: string;
  text: string;
};

export type ReplyMutation = {
  reply: {
    __typename: 'Reply';
    id: string;
    profile:
      | {
          __typename: 'MyProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
        }
      | {
          __typename: 'OtherProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
          following: boolean;
          followedBy: boolean;
        };
    createdAt: string;
    inReplyToTweet:
      | {
          __typename: 'Tweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Reply';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          inReplyToTweet:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
          inReplyToUsers: Array<
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              }
          > | null;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Retweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          retweetOf:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
        };
    inReplyToUsers: Array<
      | {
          __typename: 'MyProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
        }
      | {
          __typename: 'OtherProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
          following: boolean;
          followedBy: boolean;
        }
    > | null;
    text: string;
    replies: number;
    likes: number;
    retweets: number;
    retweeted: boolean;
  };
};

export type FollowMutationVariables = {
  userId: string;
};

export type FollowMutation = {
  follow: boolean;
};

export type UnfollowMutationVariables = {
  userId: string;
};

export type UnfollowMutation = {
  unfollow: boolean;
};

export type GetImageUploadUrlQueryVariables = {
  extension?: string | null;
  contentType?: string | null;
};

export type GetImageUploadUrlQuery = {
  getImageUploadUrl: string;
};

export type GetMyTimelineQueryVariables = {
  limit?: number | null;
  nextToken?: string | null;
};

export type GetMyTimelineQuery = {
  getMyTimeline: {
    __typename: 'TweetsPage';
    tweets: Array<
      | {
          __typename: 'Tweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Reply';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          inReplyToTweet:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
          inReplyToUsers: Array<
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              }
          > | null;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Retweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          retweetOf:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
        }
    > | null;
    nextToken: string | null;
  };
};

export type GetMyProfileQuery = {
  getMyProfile: {
    __typename: 'MyProfile';
    id: string;
    name: string;
    screenName: string;
    imageUrl: string | null;
    backgroundImageUrl: string | null;
    bio: string | null;
    location: string | null;
    website: string | null;
    birthdate: string | null;
    createdAt: string;
    tweets: {
      __typename: 'TweetsPage';
      tweets: Array<
        | {
            __typename: 'Tweet';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            text: string;
            replies: number;
            likes: number;
            retweets: number;
            retweeted: boolean;
          }
        | {
            __typename: 'Reply';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            inReplyToTweet:
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                };
            inReplyToUsers: Array<
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                }
            > | null;
            text: string;
            replies: number;
            likes: number;
            retweets: number;
            retweeted: boolean;
          }
        | {
            __typename: 'Retweet';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            retweetOf:
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                };
          }
      > | null;
      nextToken: string | null;
    };
    followersCount: number;
    followingCount: number;
    tweetsCount: number;
    likesCount: number;
  };
};

export type GetProfileQueryVariables = {
  screenName: string;
};

export type GetProfileQuery = {
  getProfile: {
    __typename: 'OtherProfile';
    id: string;
    name: string;
    screenName: string;
    imageUrl: string | null;
    backgroundImageUrl: string | null;
    bio: string | null;
    location: string | null;
    website: string | null;
    birthdate: string | null;
    createdAt: string;
    tweets: {
      __typename: 'TweetsPage';
      tweets: Array<
        | {
            __typename: 'Tweet';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            text: string;
            replies: number;
            likes: number;
            retweets: number;
            retweeted: boolean;
          }
        | {
            __typename: 'Reply';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            inReplyToTweet:
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                };
            inReplyToUsers: Array<
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                }
            > | null;
            text: string;
            replies: number;
            likes: number;
            retweets: number;
            retweeted: boolean;
          }
        | {
            __typename: 'Retweet';
            id: string;
            profile:
              | {
                  __typename: 'MyProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                }
              | {
                  __typename: 'OtherProfile';
                  id: string;
                  name: string;
                  screenName: string;
                  imageUrl: string | null;
                  backgroundImageUrl: string | null;
                  bio: string | null;
                  location: string | null;
                  website: string | null;
                  birthdate: string | null;
                  createdAt: string;
                  tweets: {
                    __typename: 'TweetsPage';
                    nextToken: string | null;
                  };
                  followersCount: number;
                  followingCount: number;
                  tweetsCount: number;
                  likesCount: number;
                  following: boolean;
                  followedBy: boolean;
                };
            createdAt: string;
            retweetOf:
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                };
          }
      > | null;
      nextToken: string | null;
    };
    followersCount: number;
    followingCount: number;
    tweetsCount: number;
    likesCount: number;
    following: boolean;
    followedBy: boolean;
  };
};

export type GetTweetsQueryVariables = {
  userId: string;
  limit: number;
  nextToken?: string | null;
};

export type GetTweetsQuery = {
  getTweets: {
    __typename: 'TweetsPage';
    tweets: Array<
      | {
          __typename: 'Tweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Reply';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          inReplyToTweet:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
          inReplyToUsers: Array<
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              }
          > | null;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Retweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          retweetOf:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
        }
    > | null;
    nextToken: string | null;
  };
};

export type GetLikesQueryVariables = {
  userId: string;
  limit: number;
  nextToken?: string | null;
};

export type GetLikesQuery = {
  getLikes: {
    __typename: 'TweetsPage';
    tweets: Array<
      | {
          __typename: 'Tweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Reply';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          inReplyToTweet:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
          inReplyToUsers: Array<
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              }
          > | null;
          text: string;
          replies: number;
          likes: number;
          retweets: number;
          retweeted: boolean;
        }
      | {
          __typename: 'Retweet';
          id: string;
          profile:
            | {
                __typename: 'MyProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
              }
            | {
                __typename: 'OtherProfile';
                id: string;
                name: string;
                screenName: string;
                imageUrl: string | null;
                backgroundImageUrl: string | null;
                bio: string | null;
                location: string | null;
                website: string | null;
                birthdate: string | null;
                createdAt: string;
                tweets: {
                  __typename: 'TweetsPage';
                  tweets: Array<
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      }
                  > | null;
                  nextToken: string | null;
                };
                followersCount: number;
                followingCount: number;
                tweetsCount: number;
                likesCount: number;
                following: boolean;
                followedBy: boolean;
              };
          createdAt: string;
          retweetOf:
            | {
                __typename: 'Tweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Reply';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                inReplyToTweet:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
                inReplyToUsers: Array<
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    }
                > | null;
                text: string;
                replies: number;
                likes: number;
                retweets: number;
                retweeted: boolean;
              }
            | {
                __typename: 'Retweet';
                id: string;
                profile:
                  | {
                      __typename: 'MyProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                    }
                  | {
                      __typename: 'OtherProfile';
                      id: string;
                      name: string;
                      screenName: string;
                      imageUrl: string | null;
                      backgroundImageUrl: string | null;
                      bio: string | null;
                      location: string | null;
                      website: string | null;
                      birthdate: string | null;
                      createdAt: string;
                      tweets: {
                        __typename: 'TweetsPage';
                        nextToken: string | null;
                      };
                      followersCount: number;
                      followingCount: number;
                      tweetsCount: number;
                      likesCount: number;
                      following: boolean;
                      followedBy: boolean;
                    };
                createdAt: string;
                retweetOf:
                  | {
                      __typename: 'Tweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Reply';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      inReplyToTweet:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                      inReplyToUsers: Array<
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          }
                      > | null;
                      text: string;
                      replies: number;
                      likes: number;
                      retweets: number;
                      retweeted: boolean;
                    }
                  | {
                      __typename: 'Retweet';
                      id: string;
                      profile:
                        | {
                            __typename: 'MyProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                          }
                        | {
                            __typename: 'OtherProfile';
                            id: string;
                            name: string;
                            screenName: string;
                            imageUrl: string | null;
                            backgroundImageUrl: string | null;
                            bio: string | null;
                            location: string | null;
                            website: string | null;
                            birthdate: string | null;
                            createdAt: string;
                            followersCount: number;
                            followingCount: number;
                            tweetsCount: number;
                            likesCount: number;
                            following: boolean;
                            followedBy: boolean;
                          };
                      createdAt: string;
                      retweetOf:
                        | {
                            __typename: 'Tweet';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Reply';
                            id: string;
                            createdAt: string;
                            text: string;
                            replies: number;
                            likes: number;
                            retweets: number;
                            retweeted: boolean;
                          }
                        | {
                            __typename: 'Retweet';
                            id: string;
                            createdAt: string;
                          };
                    };
              };
        }
    > | null;
    nextToken: string | null;
  };
};

export type GetFollowersQueryVariables = {
  userId: string;
  limit: number;
  nextToken?: string | null;
};

export type GetFollowersQuery = {
  getFollowers: {
    __typename: 'ProfilesPage';
    profiles: Array<
      | {
          __typename: 'MyProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
        }
      | {
          __typename: 'OtherProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
          following: boolean;
          followedBy: boolean;
        }
    > | null;
    nextToken: string | null;
  };
};

export type GetFollowingQueryVariables = {
  userId: string;
  limit: number;
  nextToken?: string | null;
};

export type GetFollowingQuery = {
  getFollowing: {
    __typename: 'ProfilesPage';
    profiles: Array<
      | {
          __typename: 'MyProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
        }
      | {
          __typename: 'OtherProfile';
          id: string;
          name: string;
          screenName: string;
          imageUrl: string | null;
          backgroundImageUrl: string | null;
          bio: string | null;
          location: string | null;
          website: string | null;
          birthdate: string | null;
          createdAt: string;
          tweets: {
            __typename: 'TweetsPage';
            tweets: Array<
              | {
                  __typename: 'Tweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Reply';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  inReplyToTweet:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                  inReplyToUsers: Array<
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      }
                  > | null;
                  text: string;
                  replies: number;
                  likes: number;
                  retweets: number;
                  retweeted: boolean;
                }
              | {
                  __typename: 'Retweet';
                  id: string;
                  profile:
                    | {
                        __typename: 'MyProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                      }
                    | {
                        __typename: 'OtherProfile';
                        id: string;
                        name: string;
                        screenName: string;
                        imageUrl: string | null;
                        backgroundImageUrl: string | null;
                        bio: string | null;
                        location: string | null;
                        website: string | null;
                        birthdate: string | null;
                        createdAt: string;
                        followersCount: number;
                        followingCount: number;
                        tweetsCount: number;
                        likesCount: number;
                        following: boolean;
                        followedBy: boolean;
                      };
                  createdAt: string;
                  retweetOf:
                    | {
                        __typename: 'Tweet';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Reply';
                        id: string;
                        createdAt: string;
                        text: string;
                        replies: number;
                        likes: number;
                        retweets: number;
                        retweeted: boolean;
                      }
                    | {
                        __typename: 'Retweet';
                        id: string;
                        createdAt: string;
                      };
                }
            > | null;
            nextToken: string | null;
          };
          followersCount: number;
          followingCount: number;
          tweetsCount: number;
          likesCount: number;
          following: boolean;
          followedBy: boolean;
        }
    > | null;
    nextToken: string | null;
  };
};
