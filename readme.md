# Graded Project - Mahanoro Station

![Design preview for the Mahanoro station coding challenge](./design/1.png)

## The challenge

Your challenge is to build out this app and get it working with **redux**, **compound components** and **styled components**, while making it look as close to the design as possible.

This is a website that will allow us to reserve some seats in _"Taxi brousses"_ departing from Mahanoro station.

Your users should be able to:

- Pick a city from the city list
- See the available trips to that city, and pick one where seats are still availalable
- Select one or more seats in the car, and see how much it's going to cost
- Confirm the booking
- See their confirmed bookings on the 'My account'page
- Modify their own information, like name or phone number, on that same page.

## Where to find everything

Your task is to build out the project to the designs from this Figma link: https://www.figma.com/file/6gSAJpaedebKAUuaM4ekFR/Mahanoro-Station?node-id=4%3A38

The data from the trips are available on this link : https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). This will make it easier to share your code with the community if you need some help. If you're not sure how to do this, [have a read through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, but I recommend you to use **Netlify**.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead how your data and reducers will look like.

## Submit your project

You have until **Tuesday** at **15h30** to submit your github link and netlify link on this form : https://forms.gle/ikBWC2MokmdH4jdw6

**Have fun building!** 🚀



## Report

<h1 align="center">{Your project name}</h1>

<div align="center">
  <h3>
    <a href="https://mahanoro-station-noeline.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/vakodrazan/mahanoro-station">
      Solution
    </a>
  </h3>
</div>

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/);
-   [Redux](https://redux.js.org/)
-   [Date-fns](https://date-fns.org/)
-   [Styled-components](https://styled-components.com/)

### Structure: 

All I need to do is to create a reservation website that can help the traveler to book their place wherever they are.

- There are two links in the header which link to the home page and to the booking list.
- On the home page, there are destination places each one link to its own items. 
- When clicking on of them it will go to another page that shows all the list that has the same destination but a different bus. 
- User can choose which bus want to book. When they click it, it will bring them to another page where they can choose whatever seat they want. They can choose as many seats as they can. The details of that will appear when they choose how much is the bus fare and the total amount of the booking they made. Also, the number of seats they book will appear in the booking button.
- After they’ve booked it, the popup will show it as if they want to see the booking list in their account. 
- On the booking seat page, there are several seats which the user can choose from. It will be in red if the place is not available anymore and white if it is still available. But once they select one of them that one will change into orange and after the booking, it should change into red because it’s not available anymore but since I couldn’t change it, it won’t change into red.
When going into the user account, they can update their name. Also, they can see the list of the booking seat they’ve made. They can cancel it if they don’t want that.

### Need more work:

- I tried to work more to change the seat not available after booking but I couldn’t. 
- I tried also to make the updated user work but it doesn’t even wait for the button to be clicked.
- Also, I have bugs which are when I book a new place the previous one is still there which I don’t want anymore but I guess that happens because I couldn’t change the seat I’ve booked into not available.

### Acknowledge:

- This project was so good because it taught me lots of things. I sometimes use redux hooks and also using connect when I have to use more than one state.
- I also learn how to only show one item when I’ve got more than one from an array. 
- It helps me to be familiar with redux and how to use redux from scratch.

I was wondering if we could use a `useparams` in another component which has nothing to do with it.