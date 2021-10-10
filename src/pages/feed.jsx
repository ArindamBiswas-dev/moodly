import React, { useState } from 'react';
import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiSmile,
} from 'react-icons/bs';
import Navbar from '../components/Navbar';

function Feed() {
  const [mood, setMood] = useState('');
  const [description, setDescription] = useState('');

  console.log({ mood, description });

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4 pb-10 flex flex-col">
          <div className="py-6 flex flex-col">
            <h1 className="font-medium">Make a new Post</h1>
            <select
              class="select select-sm select-bordered 
              select-secondary w-full max-w-xs mt-2"
              onChange={(e) => setMood(e.target.value)}
            >
              <option disabled="disabled" selected="selected">
                Choose your mood
              </option>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="angry">Angry</option>
              <option value="fear">Fear</option>
            </select>
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text">Describe your mood</span>
              </label>
              <textarea
                class="textarea h-24 textarea-bordered textarea-secondary"
                placeholder="Write here"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button className="w-28 ml-auto btn mt-4">Post</button>
          </div>

          <div className="flex justify-center items-center flex-col py-10 space-y-10">
            <div className="p-4 relative border-pink-300 border rounded-md w-full max-w-xl">
              <p className="font-semibold text-pink-500">
                Arindam Biswas
                <span className="pl-2 text-gray-800">is feeling</span>
              </p>
              <div className="flex items-center text-green-400">
                <h1 className="text-6xl mt-4 font-semibold">Happy</h1>
                <BsEmojiHeartEyes className="text-8xl pt-6" />
              </div>
              <p className="mt-10 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <input
                type="text"
                placeholder="Congratulate him/her"
                class="input input-ghost bg-gray-200 w-full mt-8"
              />
              <div
                className="absolute top-0 right-0 border border-pink-400 p-1 bg-pink-600 
                rounded-md text-white font-medium w-20 text-center"
              >
                21 May 2022
              </div>
            </div>

            <div className="p-4 relative border-pink-300 border rounded-md w-full max-w-xl">
              <p className="font-semibold text-pink-500">
                Arindam Biswas
                <span className="pl-2 text-gray-800">is feeling</span>
              </p>
              <div className="flex items-center text-yellow-400">
                <h1 className="text-6xl mt-4 font-semibold">Sad</h1>
                <BsEmojiFrown className="text-8xl pt-6" />
              </div>
              <p className="mt-10 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <input
                type="text"
                placeholder="Congratulate him/her"
                class="input input-ghost bg-gray-200 w-full mt-8"
              />
              <div
                className="absolute top-0 right-0 border border-pink-400 p-1 bg-pink-600 
                rounded-md text-white font-medium w-20 text-center"
              >
                21 May 2022
              </div>
            </div>

            <div className="p-4 relative border-pink-300 border rounded-md w-full max-w-xl">
              <p className="font-semibold text-pink-500">
                Arindam Biswas
                <span className="pl-2 text-gray-800">is feeling</span>
              </p>
              <div className="flex items-center text-red-500">
                <h1 className="text-6xl mt-4 font-semibold">Angry</h1>
                <BsEmojiAngry className="text-8xl pt-6" />
              </div>
              <p className="mt-10 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <input
                type="text"
                placeholder="Congratulate him/her"
                class="input input-ghost bg-gray-200 w-full mt-8"
              />
              <div
                className="absolute top-0 right-0 border border-pink-400 p-1 bg-pink-600 
                rounded-md text-white font-medium w-20 text-center"
              >
                21 May 2022
              </div>
            </div>

            <div className="p-4 relative border-pink-300 border rounded-md w-full max-w-xl">
              <p className="font-semibold text-pink-500">
                Arindam Biswas
                <span className="pl-2 text-gray-800">is feeling</span>
              </p>
              <div className="flex items-center text-gray-700">
                <h1 className="text-6xl mt-4 font-semibold">Fear</h1>
                <BsEmojiNeutral className="text-8xl pt-6" />
              </div>
              <p className="mt-10 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <input
                type="text"
                placeholder="Congratulate him/her"
                class="input input-ghost bg-gray-200 w-full mt-8"
              />
              <div
                className="absolute top-0 right-0 border border-pink-400 p-1 bg-pink-600 
                rounded-md text-white font-medium w-20 text-center"
              >
                21 May 2022
              </div>
            </div>
          </div>

          <button className="btn bg-pink-400 w-40 mx-auto border-0 hover:bg-pink-400">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
