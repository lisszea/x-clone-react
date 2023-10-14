import { ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

function Tweet({ tweet }) {
    return (
        <div className="flex gap-4 p-4 items-start">
            <img className="rounded-full" src={tweet.user.profileImage} alt={tweet.user.name} width="40" />
            <div>
                <a className="font-bold hover:underline mr-2" href="#">{tweet.user.name}</a>
                <a className="mr-2 text-gray-600" href="#">{tweet.user.username}</a>
                <span className="text-gray-600">· {tweet.creationDate}</span>

                <p className="mt-4">{tweet.text}</p>

                <div className='mt-4 flex justify-between'>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-sky-500'>
                        <ChatBubbleOvalLeftIcon className="h-5 w-5 text-gray" />
                        <span>{tweet.replays}</span>
                    </button>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-green-500'>
                        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray" />
                        <span>{tweet.retweets}</span>
                    </button>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-green-500'>
                        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray" />
                        <span>20</span>
                    </button>
                    <button className='text-gray-600 flex gap-1 items-center text-xs hover:text-green-500'>
                        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray" />
                        <span>20</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Tweet;