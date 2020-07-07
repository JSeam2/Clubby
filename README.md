# Clubby 
App hosted at [clubby.fm](https://clubby.fm)


Clubby is a hot or not app for music.

Join a community radio channel as a radio DJ. 

Introduce new tracks to the community.

Let the crowds decide how hot your music taste is.

# How It Works
1. Sign up the app on Google assistant. _It is currently in alpha, so you need to get permission to join the alpha. Apply for alpha testing at [clubby.fm](https://clubby.fm)_

1. The voice app will then prompt you to link your Google account. This is needed for the scoring, differentiating users in channels, and organizing the song queues.

1. Join a community radio channel and listen to what's already playing. At the end of each track, you get to grade whether the song was hot or not hot. The results will then be announced to the channel thereafter.

1. When you're ready, add a song to the queue in community radio channel. Optionally, you can tell the channel more about the song and what it means to you.

1. Wait for your introductory speech and song to be played, and everyone would get to rate whether your song was hot or not hot.

1. (Not Implemented Yet) Check the leaderboard for your hotness score, and compare with friends how hot of a radio DJ you are.

# Features
1. **Word Of Mouth Discovery**: The community radio and community DJ approach treats word of mouth discovery as the primary way of discovering music. It is the most natural way of discovering music and feels more alive as compared algorithm feeding you tracks. The introduction by users help explain why the songs are meaningful and in a human relatable way.

1. **Gamified Music Recommendation and Discovery**: Music recommendation and discovery is no longer a passive experience as dictated by algorithms. We see music recommendation and discovery as an active social process and games provides a meaningful context for this to happen. The active experience provides a counterpoint to the passivity prevalent in streaming services.

1. **Music Curation on the Fly**: You don't need to by sitting down on a computer or fiddling on a phone to create playlists and share music. With a voice first interface, you can do this while driving a car, coding, or doing some other task. The voice first interace provides an outlet for social expression not possible with touch based interface.

1. **Segmentation of Mixes**: As users will be pushing out tracks to queues via the system, we are able to track the play count of the individual tracks and account for the relevant metadata. This information can later be used for royalty payments and payments to the respective rights holders. Ad monies, and subscription payments are monies that can be distributed by this system.

# Overview
1. `clubby` contains the Django web application. This is meant to be hosted on Google's Appengine. This backend is designed to interface with Actions for Google Assistant

# Challenges Faced While Building This
1. Google cloud can be quite abstrust at times especially with Google actions which is needed for building voice interface with Google. 

1. Hooking up the various functionalities can be tricky. Bugs can arise through misconfiguration, while they're are addressable quirks the are massive time wasters.