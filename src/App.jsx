import './App.css'
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';
import { useState } from 'react';

const TWEETS = [
  {
    "_id": "1",
    "text": "Ahh, Central Perk vibes! 🛋️ I always love the atmosphere there. Who needs a couch session? 😂 #CaffeineDreams",
    "multi": [],
    "user": {
      _id: '6505da63e813e715c8b62662',
      name: "Juan Castro",
      username: "@juan.castro",
      email: "juan.castro@example.com",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "likes": 67,
    "views": 90,
    "replays": 0,
    "retweets": 0,
    "retweetId": null,
    "creationDate": "2023-09-30T13:43:44.048Z"
  },
  {
    "_id": "2",
    "text": "Ahh, Central Perk vibes! 🛋️ I always love the atmosphere there. Who needs a couch session? 😂 #CaffeineDreams",
    "multi": [],
    "user": {
      _id: '6505da63e813e715c8b62662',
      name: "Juan Castro",
      username: "@juan.castro",
      email: "juan.castro@example.com",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "likes": 67,
    "views": 90,
    "replays": 0,
    "retweets": 0,
    "retweetId": null,
    "creationDate": "2023-09-30T13:43:44.048Z"
  },
  {
    "_id": "3",
    "text": "Ahh, Central Perk vibes! 🛋️ I always love the atmosphere there. Who needs a couch session? 😂 #CaffeineDreams",
    "multi": [],
    "user": {
      _id: '6505da63e813e715c8b62662',
      name: "Juan Castro",
      username: "@juan.castro",
      email: "juan.castro@example.com",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "likes": 67,
    "views": 90,
    "replays": 0,
    "retweets": 0,
    "retweetId": null,
    "creationDate": "2023-09-30T13:43:44.048Z"
  },
  {
    "_id": "4",
    "text": "Ahh, Central Perk vibes! 🛋️ I always love the atmosphere there. Who needs a couch session? 😂 #CaffeineDreams",
    "multi": [],
    "user": {
      _id: '6505da63e813e715c8b62662',
      name: "Juan Castro",
      username: "@juan.castro",
      email: "juan.castro@example.com",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "likes": 67,
    "views": 90,
    "replays": 0,
    "retweets": 0,
    "retweetId": null,
    "creationDate": "2023-09-30T13:43:44.048Z"
  },
  {
    "_id": "5",
    "text": "Ahh, Central Perk vibes! 🛋️ I always love the atmosphere there. Who needs a couch session? 😂 #CaffeineDreams",
    "multi": [],
    "user": {
      _id: '6505da63e813e715c8b62662',
      name: "Juan Castro",
      username: "@juan.castro",
      email: "juan.castro@example.com",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "likes": 67,
    "views": 90,
    "replays": 0,
    "retweets": 0,
    "retweetId": null,
    "creationDate": "2023-09-30T13:43:44.048Z"
  }
]

let idSecuence = 5;

function App() {

  const [tweets, setTweets] = useState(TWEETS);

  const createTweet = (tweet) => {
    // llamar a API, el resultado me devuelve el tweet con todos los valores
    const newTweet = {
      _id: String(++idSecuence),
      text: tweet.text,
      multi: tweet.text,
      user: {
        _id: tweet.userId,
        name: "Juan Castro",
        username: "@juan.castro",
        email: "juan.castro@example.com",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      likes: 0,
      views: 0,
      replays: 0,
      retweets: 0,
      retweetId: null,
      creationDate: new Date().toDateString()
    }

    setTweets([newTweet, ...tweets]);
  }

  return (
    <>
      <CreateTweet onSave={(tweet) => createTweet(tweet)} />
      { tweets.map((tweet) => (<Tweet key={tweet._id} tweet={tweet} />)) }
    </>
  )
}

export default App
