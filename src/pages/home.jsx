import React from 'react';
import Logo from '../components/Logo';
import { BsEmojiSmile } from 'react-icons/bs';
import tutorial from '../images/tutorial.svg';
import interview from '../images/interview.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './pages.css';
import friends from '../images/friends.svg';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { currentUser } = useAuth();
  const history = useHistory();

  // if ((currentUser = {})) {
  //   return history.push('/feed');
  // }

  console.log(currentUser);

  return (
    <div className="relative">
      <Navbar isHome={true} />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4 pb-10 flex flex-col">
          <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-4xl md:text-5xl  md:mt-0 text-center font-bold md:px-4 md:leading-normal">
              Give a break, Change your Mood
            </h1>
            <p className="text-center text-gray-600 md:text-lg mt-8">
              There are many free-courses and job oppurtunity available more
              than you think of. But most of us don’t know about this, But don’t
              worry
              <span className="text-pink-400 font-semibold text-xl md:text-2xl underline">
                {' '}
                Moodly{' '}
              </span>
              will help you to find those.
            </p>
            <div className="flex justify-center mt-16">
              <Link to="/signup">
                <button
                  className="btn bg-pink-400 mx-2 w-32 
                  md:w-40 border-0 hover:bg-pink-400"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/signin">
                <button
                  className="btn btn-outline hover:bg-white
                 border border-pink-400 mx-2 w-32 md:w-40 
                 text-pink-400 hover:text-pink-400 hover:border-pink-400"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div
            className="rounded-md w-full flex flex-col border border-pink-400
            justify-center items-center text-3xl font-semibold px-6 py-10 box-shadow"
          >
            <div className="flex justify-center space-x-6 mb-4 text-gray-500">
              <BsEmojiSmile />
              <BsEmojiSmile />
              <BsEmojiSmile />
              <BsEmojiSmile />
            </div>
            <h1 className="text-center max-w-xl md:leading-relaxed">
              Join thousands of serious content creators and professional
              marketers
            </h1>
            <div className="flex justify-center space-x-6 mt-4 text-gray-500">
              <BsEmojiSmile />
              <BsEmojiSmile />
              <BsEmojiSmile />
              <BsEmojiSmile />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 align-middle mt-40 gap-10">
            <div className="text-right px-4 md:p-6 flex flex-col h-full">
              <h1 className="text-2xl font-semibold mb-6">
                Publish to all your socials - with a click
              </h1>
              <p className="text-lg font-normal mb-4">
                Choose which social channels you want to post to, by a single
                click.
              </p>
              <p className="text-lg font-normal">
                Adjust your posts to fit each channel, or cross-post to multiple
                channels
              </p>
              <button
                className="bg-pink-400 w-52 ml-auto p-4 rounded-full 
                text-white font-medium mt-10 md:mt-auto"
              >
                Sign Up
              </button>
            </div>
            <div className="text-right">
              <img src={friends} className="h-96" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
