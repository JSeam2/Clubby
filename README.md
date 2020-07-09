# Clubby 
App hosted at [clubby.fm](https://clubby.fm)

Clubby is THE community radio built to solve the big problem of music discovery by scaling word of mouth. 
Join a public radio channel and add your favourite songs + tell us about what they mean to you!

# Why did we build this? 
In our experience as producers and engineers we've realized that the surefire way for people to discover new music is through a friend (word of mouth)! It feels *personal* and we get context on why someone likes an artist or their music. 

Maybe San Holo or Petit Biscuit makes you feel centered and hopeful, maybe Bill Withers reminds you of a time gone by. And maybe, just maybe, that's what we'd like to hear or feel as well. Your likelihood of listening to artists introduced with this context is significantly higher than it would be if it appeared randomly on a playlist. 

# Why is it awesome?
1. **Scaled Word Of Mouth Discovery**: The community radio and community DJ approach treats word of mouth discovery as the primary way of discovering music. It is the most natural way of discovering music and feels more alive as compared algorithm feeding you tracks. The introduction by users help explain why the songs are meaningful and in a human relatable way. It's all about vibing with other people.

2. **Gamified Music Recommendation and Discovery**: Music recommendation and discovery is no longer a passive experience as dictated by algorithms. We see music recommendation and discovery as an active social process and games provides a meaningful context for this to happen. The active experience provides a counterpoint to the passivity prevalent in streaming services.

3. **Music Curation on the Fly**: You don't need to by sitting down on a computer or fiddling on a phone to create playlists and share music. With a voice first interface, you can do this while driving a car, coding, or doing some other task. The voice first interace provides an outlet for social expression not possible with touch based interface.

4. **Segmentation of Mixes and Distribution of Royalties**: As users will be pushing out tracks to queues via the system, we are able to track the play count of the individual tracks and account for the relevant metadata. This information can later be used for royalty payments and payments to the respective rights holders. Ad monies, and subscription payments are monies that can be distributed by this system.

# How It Works
1. Sign up the app on Google assistant. _It is currently in alpha, so you need to get permission to join the alpha. Apply for alpha testing at [clubby.fm](https://clubby.fm)_

2. The voice app will then prompt you to link your Google account. This is needed for the scoring, differentiating users in channels, and organizing the song queues.

3. Join a community radio channel and listen to what's already playing. At the end of each track, you get to grade whether the song was hot or not hot. The results will then be announced to the channel thereafter.

4. When you're ready, add a song to the queue in community radio channel. Optionally, you can tell the channel more about the song and what it means to you.

5. Wait for your introductory speech and song to be played, and everyone would get to rate whether your song was hot or not hot.


# Overview
1. `clubby` contains the Django web application. This is meant to be hosted on Google's Appengine. This backend is designed to interface with Actions for Google Assistant

2. `nginx` contains the dockerized nginx server required to host the application outside of Google's Appengine.

3. `certificates` is an empty folder for containing ssl certs

4. `functions` contains various webhooks to run with actions console on google.

# Challenges Faced While Building This
1. Google cloud can be quite abstrust at times especially with Google actions which is needed for building voice interface with Google. 

2. Hooking up the various functionalities can be tricky. Bugs can arise through misconfiguration, while they're are addressable quirks the are massive time wasters.

3. UMG's API doesn't integrate well with Google actions as Google actions does not provide an option for streaming audio data. A workaround involved adding the stream data to an mp3 container first in order for it to be played on Google action.
