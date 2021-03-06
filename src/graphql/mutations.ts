/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const editMyProfile = /* GraphQL */ `
  mutation EditMyProfile($input: ProfileInput!) {
    editMyProfile(input: $input) {
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
        tweets {
          id
          profile {
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
            ... on OtherProfile {
              following
              followedBy
            }
          }
          createdAt
          ... on Tweet {
            text
            replies
            likes
            retweets
            retweeted
          }
          ... on Reply {
            inReplyToTweet {
              id
              profile {
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
              createdAt
              ... on Tweet {
                text
                replies
                likes
                retweets
                retweeted
              }
              ... on Reply {
                inReplyToTweet {
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
                inReplyToUsers {
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
                text
                replies
                likes
                retweets
                retweeted
              }
              ... on Retweet {
                retweetOf {
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
              }
            }
            inReplyToUsers {
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
              ... on OtherProfile {
                following
                followedBy
              }
            }
            text
            replies
            likes
            retweets
            retweeted
          }
          ... on Retweet {
            retweetOf {
              id
              profile {
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
              createdAt
              ... on Tweet {
                text
                replies
                likes
                retweets
                retweeted
              }
              ... on Reply {
                inReplyToTweet {
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
                inReplyToUsers {
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
                text
                replies
                likes
                retweets
                retweeted
              }
              ... on Retweet {
                retweetOf {
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
              }
            }
          }
        }
        nextToken
      }
      followersCount
      followingCount
      tweetsCount
      likesCount
    }
  }
`;
export const tweet = /* GraphQL */ `
  mutation Tweet($text: String!) {
    tweet(text: $text) {
      id
      profile {
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
          tweets {
            id
            profile {
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
            createdAt
            ... on Tweet {
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Reply {
              inReplyToTweet {
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
              inReplyToUsers {
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
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Retweet {
              retweetOf {
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
            }
          }
          nextToken
        }
        followersCount
        followingCount
        tweetsCount
        likesCount
        ... on OtherProfile {
          following
          followedBy
        }
      }
      createdAt
      text
      replies
      likes
      retweets
      retweeted
    }
  }
`;
export const like = /* GraphQL */ `
  mutation Like($tweetId: ID!) {
    like(tweetId: $tweetId)
  }
`;
export const unlike = /* GraphQL */ `
  mutation Unlike($tweetId: ID!) {
    unlike(tweetId: $tweetId)
  }
`;
export const retweet = /* GraphQL */ `
  mutation Retweet($tweetId: ID!) {
    retweet(tweetId: $tweetId)
  }
`;
export const unretweet = /* GraphQL */ `
  mutation Unretweet($tweetId: ID!) {
    unretweet(tweetId: $tweetId)
  }
`;
export const reply = /* GraphQL */ `
  mutation Reply($tweetId: ID!, $text: String!) {
    reply(tweetId: $tweetId, text: $text) {
      id
      profile {
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
          tweets {
            id
            profile {
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
            createdAt
            ... on Tweet {
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Reply {
              inReplyToTweet {
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
              inReplyToUsers {
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
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Retweet {
              retweetOf {
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
            }
          }
          nextToken
        }
        followersCount
        followingCount
        tweetsCount
        likesCount
        ... on OtherProfile {
          following
          followedBy
        }
      }
      createdAt
      inReplyToTweet {
        id
        profile {
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
          followersCount
          followingCount
          tweetsCount
          likesCount
          ... on OtherProfile {
            following
            followedBy
          }
        }
        createdAt
        ... on Tweet {
          text
          replies
          likes
          retweets
          retweeted
        }
        ... on Reply {
          inReplyToTweet {
            id
            profile {
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
              ... on OtherProfile {
                following
                followedBy
              }
            }
            createdAt
            ... on Tweet {
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Reply {
              inReplyToTweet {
                id
                profile {
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
                createdAt
                ... on Tweet {
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Reply {
                  inReplyToTweet {
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
                  inReplyToUsers {
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
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Retweet {
                  retweetOf {
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
                }
              }
              inReplyToUsers {
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
                ... on OtherProfile {
                  following
                  followedBy
                }
              }
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Retweet {
              retweetOf {
                id
                profile {
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
                createdAt
                ... on Tweet {
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Reply {
                  inReplyToTweet {
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
                  inReplyToUsers {
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
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Retweet {
                  retweetOf {
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
                }
              }
            }
          }
          inReplyToUsers {
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
            followersCount
            followingCount
            tweetsCount
            likesCount
            ... on OtherProfile {
              following
              followedBy
            }
          }
          text
          replies
          likes
          retweets
          retweeted
        }
        ... on Retweet {
          retweetOf {
            id
            profile {
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
              ... on OtherProfile {
                following
                followedBy
              }
            }
            createdAt
            ... on Tweet {
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Reply {
              inReplyToTweet {
                id
                profile {
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
                createdAt
                ... on Tweet {
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Reply {
                  inReplyToTweet {
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
                  inReplyToUsers {
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
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Retweet {
                  retweetOf {
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
                }
              }
              inReplyToUsers {
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
                ... on OtherProfile {
                  following
                  followedBy
                }
              }
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Retweet {
              retweetOf {
                id
                profile {
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
                createdAt
                ... on Tweet {
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Reply {
                  inReplyToTweet {
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
                  inReplyToUsers {
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
                  text
                  replies
                  likes
                  retweets
                  retweeted
                }
                ... on Retweet {
                  retweetOf {
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
                }
              }
            }
          }
        }
      }
      inReplyToUsers {
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
          tweets {
            id
            profile {
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
            createdAt
            ... on Tweet {
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Reply {
              inReplyToTweet {
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
              inReplyToUsers {
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
              text
              replies
              likes
              retweets
              retweeted
            }
            ... on Retweet {
              retweetOf {
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
            }
          }
          nextToken
        }
        followersCount
        followingCount
        tweetsCount
        likesCount
        ... on OtherProfile {
          following
          followedBy
        }
      }
      text
      replies
      likes
      retweets
      retweeted
    }
  }
`;
export const follow = /* GraphQL */ `
  mutation Follow($userId: ID!) {
    follow(userId: $userId)
  }
`;
export const unfollow = /* GraphQL */ `
  mutation Unfollow($userId: ID!) {
    unfollow(userId: $userId)
  }
`;
