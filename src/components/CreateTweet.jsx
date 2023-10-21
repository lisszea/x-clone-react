import { useState } from "react";

const user = {
    id: "65182610a780df98aa42ca85",
    name: 'Juan Castro',
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
}

function CreateTweet({ onSave }) {

    const [text, setText] = useState('');

    const tweet = {
        text,
        multi: [],
        userId: '6505da63e813e715c8b62662',
    }

    const save = (tweet) => {
        onSave(tweet);
        setText('');
    }

    return (
        <div className="flex gap-4 p-4 items-start">
            <img className="rounded-full" width="40" src={user.profileImage} alt={user.name} />
            <div className="grow">
                <input className="w-full bg-black mb-4 py-2 outline-0" type="text" name="text" id="text" placeholder="What is happening?!" onChange={(event) => setText(event.target.value)} value={text} />
                <button className="float-right bg-sky-500 py-2 px-4 rounded-full disabled:opacity-50" disabled={!text} onClick={() => save(tweet)}>Post</button>
            </div>
        </div>
    )
}

export default CreateTweet;