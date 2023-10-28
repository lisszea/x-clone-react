import { useEffect, useState } from "react";
import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";

function Timeline() {
  const { user } = useAuth();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((res) => res.json())
      .then((tweets) => {
        setTweets(tweets);
      })
  }, []);

  const createTweet = (tweet) => {
    // llamar a API, el resultado me devuelve el tweet con todos los valores
    const newTweet = {
      text: tweet.text,
      multi: tweet.text,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage,
      },
      likes: 0,
      views: 0,
      replays: 0,
      retweets: 0,
      retweetId: null,
      creationDate: new Date().toDateString(),
    };

    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTweet)
    })
    .then((res) => res.json())
    .then((newTweet) => {
      setTweets([newTweet, ...tweets]);
    });
  };

  return (
    <>
      <Header />
      <CreateTweet onSave={(tweet) => createTweet(tweet)} />
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
}

export default Timeline;

