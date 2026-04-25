# Frontend Practice Assessment 2 (React + JavaScript)

## Objective

Build a **User Dashboard App** that fetches and displays data from a public API.
This assessment focuses on **API integration, async handling, and UI states**.

---

## Requirements

### Core Features

* Fetch users from a public API:
  https://jsonplaceholder.typicode.com/users

* Display a list of users with:

  * Name
  * Email
  * Company name

* Add a **search bar** to filter users by name

* On clicking a user:

  * Show detailed information:

    * Phone
    * Website
    * Address

---

## Functional Expectations

* Use **functional components**
* Use **React hooks**

  * `useState`
  * `useEffect`
* Handle **API calls properly**
* Manage **loading, success, and error states**

---

## UI Requirements

* Show a **loading indicator** while fetching data
* Show an **error message** if API fails
* Show an **empty state** if no results found
* Keep UI clean and responsive

---

## Bonus (Optional but Recommended)

* Add **pagination** (client-side)
* Add **debounced search**
* Highlight selected user
* Cache API data (basic optimization)
* Use custom hooks (e.g., `useFetch`)

---

## Deliverables

* Working React application
* Code pushed to a Git repository
* Include a **README.md** with:

  * Setup instructions
  * How to run the project

---

## Evaluation Criteria

* API integration and async handling
* Proper use of React hooks
* State management
* Code structure and readability
* Handling of loading/error states
* UI/UX clarity

---

## Time Expectation

* Expected completion time: **2–4 hours**

---

## Notes

* No backend required
* Focus on clean logic rather than complex UI
* Avoid over-engineering