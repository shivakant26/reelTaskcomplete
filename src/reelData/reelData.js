import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";
import profileImage from "../assets/images/download.jpeg";

export const reelData = [
  {
    reel_id: 1,
    user: {
      username: "user123",
      profile_picture: profileImage,
    },
    media_url: vid1,
    caption: "Oceans like glaciar with wind",
    likes: 24,
    shares: 43,
    song: "nature fall song",
    comments: [
      {
        user: {
          username: "user1",
          profile_picture: profileImage,
        },
        text: "Cool reel!",
      },
    ],
  },
  {
    reel_id: 2,
    user: {
      username: "users_avi",
      profile_picture: profileImage,
    },
    media_url: vid2,
    caption: "Sun and water wave",
    likes: 214,
    shares: 32,
    song: "sunrise song",
    comments: [
      {
        user: {
          username: "user1",
          profile_picture: profileImage,
        },
        text: "Cool reel!",
      },
      {
        user: {
          username: "user2",
          profile_picture: profileImage,
        },
        text: "Nice video!",
      },
      {
        user: {
          username: "user2",
          profile_picture: profileImage,
        },
        text: "Nice video!",
      },
    ],
  },
  {
    reel_id: 3,
    user: {
      username: "user_tmy",
      profile_picture: profileImage,
    },
    media_url: vid3,
    caption: "waterfall seens feeling",
    likes: 234,
    shares: 45,
    song: "waterfall song",
    comments: [
      {
        user: {
          username: "user1",
          profile_picture: profileImage,
        },
        text: "Cool reel!",
      },
      {
        user: {
          username: "user2",
          profile_picture: profileImage,
        },
        text: "Nice video!",
      },
      {
        user: {
          username: "user3",
          profile_picture: profileImage,
        },
        text: "Nice video!",
      },
      {
        user: {
          username: "user3",
          profile_picture: profileImage,
        },
        text: "Nice video!",
      },
    ],
  },
];
