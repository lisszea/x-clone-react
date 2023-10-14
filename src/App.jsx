import './App.css'
import Tweet from './components/Tweet';

const tweets = [
  {
    "_id": "65182610a780df98aa42ca85",
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
    "_id": "65182610a780df98aa42ca85",
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
    "_id": "65182610a780df98aa42ca85",
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
    "_id": "65182610a780df98aa42ca85",
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
    "_id": "65182610a780df98aa42ca85",
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

function App() {
  return tweets.map((tweet) => (<Tweet key={tweet._id} tweet={tweet} />))
}

export default App
