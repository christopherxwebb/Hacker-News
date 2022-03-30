# WebbDev News

Welcome to WebbDev News, arguably the most prominent news aggregator after Hacker News (upon which it is very, very closely modelled).

Here's the homepage:

<img width="1513" alt="Screenshot 2022-03-30 at 01 06 27" src="https://user-images.githubusercontent.com/90918377/160725716-ee37dc06-4663-421d-951b-0f793cf7385e.png">

This application is a Y-combinator/Hacker News clone written in vanilla JavaScript, using the Hacker News API.

The app faithfully renders the nested comments of other news aggregators and forums (and it does so by using recursion), which can be seen below:

<img width="1657" alt="Screenshot 2022-03-30 at 01 14 44" src="https://user-images.githubusercontent.com/90918377/160726377-f959e0ee-6363-4ac7-bbcb-4e6e0ab54aa5.png">

Beyond being able to navigate to the newest and most highly rated posts (see header at the top), the user is also able to "favorite" articles and posts by clicking on the diminutive heart icon. The post is then saved under the 'Favorites' tab, where all favorited posts/articles can be accessed:

<img width="1641" alt="Screenshot 2022-03-30 at 01 19 35" src="https://user-images.githubusercontent.com/90918377/160726734-de51635f-4bce-4ce8-91b3-68ad8bcf7c64.png">

Favorites can also be removed by toggling on the remove favorite icon (achieved by establishing state).
