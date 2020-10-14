# React_Redux_MessageBoard
This project is used React.js , Redux, Scss, Axios, MDB Design functionalitys.

- In this project  user must need to login , without login user can not access project functionality
- Only need to add register user email id for login in this project.
- After Login success, user can view all user's post,
- And click on specif post its redirect on post detail page,
- Inside the post detail page, uer can write comment and reply.
- User also able to  remove and edit post  (only own post) inside the detail page
- User also able to logout 

## Folder Structure
```
  public/
    index.html
    favicon.ico
  src/
    Assets/
      /scss
        main.scss
    Components/
      /Footer
        Footer.jsx
        Footer.scss
      /Header
        Header.jsx
        Header.scss
      /Loaders
        /RoundLoader
          RoundLoader.jsx
          RoundLoader.scss
      /Pagination
        Pagination.jsx
        Pagination.scss
    Pages/
      Home/
        Home.jsx
        Home.scss
      Login/
        Login.jsx
        Login.scss
      Post/
        Post.jsx
        Post.scss
    Services/
      WebAPI.jsx
    Store/
      action/
        action.js
      const/
        const.js
      reducer/
        LoginUser/
          Login.js
        Post/
          Post.js
      index.js
    App.js
    App.test.js
    index.js
    registerServiceWorker.js
    Routes.js
  .gitignore
  README.md
  package.json

```

## Project Guide:
- please follow below steps to run React_Redux_MessageBoard project

- clone app `git clone https://github.com/wondercrazy15/React_Redux_MessageBoard.git`
- npm install
- npm start

