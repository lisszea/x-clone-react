import { useParams } from "react-router-dom";
import Tweet from "../components/Tweet";

function TweetView() {
  const { tweetId } = useParams();

  // llamar a la API para consultar el tweet con tweetId
  const tweet = {
    _id: tweetId,
    text: "Ahh, Central Perk vibes! 🛋️ I always love the atmosphere there. Who needs a couch session? 😂 #CaffeineDreams",
    multi: [],
    user: {
      _id: "6505da63e813e715c8b62662",
      name: "Juan Castro",
      username: "@juan.castro",
      email: "juan.castro@example.com",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    likes: 67,
    views: 90,
    replays: 0,
    retweets: 0,
    retweetId: null,
    creationDate: "2023-09-30T13:43:44.048Z",
  };

  return <Tweet tweet={tweet}></Tweet>;
}

export default TweetView;

