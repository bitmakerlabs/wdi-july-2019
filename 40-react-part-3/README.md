# Intro to React: Day 3

## Overview
Today we'll learn about the React 'Component Lifecycle' through a combination of
discussion, illustrative examples, and by starting to work on a simple 'Film
Library' application.

## Agenda
- Day 1 and 2 Recap (10 minutes)
- Introduction to React's 'Component Lifecycle' (30 minutes)
- Examples and Discovery:
  - 'LifecycleLogger' (10 minutes)
  - 'LifecycleVisualizer' (15 minutes)
- Exercise:
  - 'Film Library' (45 minutes)
- Wrap Up (5-10 minutes)

We'll begin with a brief discussion of the concepts introduced during React Day
1 and 2. How do we feel about React? Do we understand what it is and how to use
it? Are there any aspects of React that we feel are particularly tricky? Now is
the time to ask!

Then we'll move on to a discussion about React's 'Component Lifecycle'. In
general, our goal is to understand what it is and what problem(s) it solves.
More specifically, we want to come away with an understanding of the various
lifecycle phase, as well as which methods are available to us.

We'll follow-up by reviewing a series of examples that allow us to 'peak under
the hood' of the 'Component Lifecycle'. These exercises, including the
'LifecycleLogger' and 'LifecycleVisualizer', will give us a better understanding
of the order in which the lifecycle methods are invoked. They will also give us
an idea of how and when to use these methods.

After that we'll move on to today's exercise: the Film Library. The Film Library
is an application that displays information about films, including their title,
summary, and poster. This application allows users to view a list of 'All'
films, or to view details about a specific film. Additionally, users can add
or remove individual films from their 'Fave' list.

Finally, we'll wrap up with a short summary and Q&A period.

## Exercise

### Part 1: Film List
Part 1 of the exercise will be completed in-class.

### Part 2: Film Details

#### Step 0: Overview
In part 2 of the Film Library exercise, we'll allow the user to view information
about specific films using the `FilmDetails` component.

#### Step 1: Add `current` to App state
In order to display information about a specific film, we'll have to keep track
of it in our application state. We can do this by adding a `current` property to
the `state` object of our `App` component. Since there won't be a current
property when the app loads, we'll give it a default value of `{}`.

#### Step 2: Allowing `current` to be set
Now that we're tracking the 'current film, we need a way to set it! To do this,
we'll define a `setCurrent()` method on our app class.

The `setCurrent()` method will accept one argument: `film`. When the method is
invoked, it will call `this.setState()`, passing in an object that contains the
`film`. This will update the state of the app component and cause it to
re-render.

#### Step 3: Passing `setCurrent()` down
We've defined `setCurrent()` within our `App` component, but we need to *call*
it within our `FilmRow` components. To do this, we'll have to pass it down the
component tree as a prop.

We'll start by passing a reference to `setCurrent()` into the `FilmList`
component. For the prop name, let's use: `onFilmClick`. If we've done this
correctly, we should now have access to `this.props.onFilmClick` within the
`FilmList` component.

Since `onClick` can only be used on 'vanilla' HTML elements, we'll have to pass
our function down to the `FilmRow`. To do this, update the `<FilmRow />` to
include a prop of `onFilmClick`, whose value is `this.props.onFilmClick`. If
we've done this correctly, we should have access to `this.props.onFilmClick`
within the `FilmRow` component.

Within the `FilmRow` component, add an `onClick` handler to the outermost HTML
element. The value of this handler should be an anonymous function that invokes
`this.props.onFilmClick`, passing in `this.props.film`. For example:

```
<... onClick={ () => this.props.onFilmClick(this.props.film) }>
```

Now, whenever a `FilmRow` is clicked, the `setCurrent()` method will be invoked
with the corresponding film.

To test that everything is working as expected, add a `componentDidUpdate()`
method within the `App` component and log out `this.state`. We should see the
`current` property change whenever one of the `FilmRow` components is clicked.

#### Step 4: Building `FilmDetails`
We now have a way to set the `current` property, but we don't have a way to
display the correspondong information. It's time to build the `FilmDetails`
component!

We'll start by creating the `FilmDetails.js` file, importing the correct
dependencies, defining the `FilmDetails` class, and exporting it. That sounds
like a lot, but we have `App`, `FilmList`, and `FilmRow` for reference.

After we've defined our `FilmDetails` class, we can add a `render()` method.
This method will eventually read-in and display information received as props,
but let's start with something a bit more simple: copy the `FilmDetails`-related
markup from `App.html` and return it.

Finally, import the `FilmDetails` component into `App`, and update the
`render()` method to include `<FilmDetails />`.

To test this step, boot up the application. If everything worked as expected, we
should see the `FilmDetails` component.

#### Step 5: Passing `current` to `FilmDetails`.
Alright, we've arrived at the last step: updating `FilmDetails` to use the
`current` data.

We'll start by updating the `App` component to pass the `current` data to
`FilmDetails` as a prop. To keep things simple, let's call the prop: `current`.
If we've done this correctly, we should have access to `this.props.current`
within the `FilmDetails` component.

Next we'll replace the placeholder content in the `render()` method. We should
be able to replace the title, tagline, and overview with the corresponding
properties from `this.props.current`, but the 'backdrop' and 'poster' images may
be a bit more difficult. To retrieve and display these images we need to
concatenate the `backdrop_path` and `poster_path` properties with the
corresponding 'base URLs'. These URLs live within the `TMDB.js` file, and can be
copied directly into the `FilmDetails` component. After we've concatenated the
full image paths, we can use them within the `<img />` tags.

To test this step, boot up the application. If everything worked as expected,
the `FilmDetails` component should update whenever we select a new `current`
film.

#### Step 6: Wrap Up
Before we give ourselves a big pat on the back (or two), let's make sure that
all of the features and functionality work as expected:
- Clicking on a `FilmRow` successfully sets the `current` property.
- The `FilmDetails` component correctly display the `current` film data.
- Setting a new `current` film correctly updates the `FilmDetails` component.

Looks good? Then that's it, you've successfully added the `FilmDetails` component to the Film
Library application.

## Resources
- [Film Library Exercise: Part 1](https://github.com/bitmakerlabs/react-november-2018/blob/master/03-nested-components-part-2/film-project-part-1.md)
- [Film Library Exercise: Part 2](https://github.com/bitmakerlabs/react-november-2018/blob/master/06-react-state-part-3/film-project-part-2.md)
- [Film Library Exercise: Part 3](https://github.com/bitmakerlabs/react-november-2018/blob/master/08-underlying-concepts-part-2/film-project-part-3.md)
- [Film Library Exercise: Part 4](https://github.com/bitmakerlabs/react-november-2018/blob/master/10-apis-and-heroku-part-2/film-project-part-4.md)

