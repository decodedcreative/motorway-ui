# Developer Notes

## Approach

Due to time constraints a focus was made to utilise third-party libraries. For the form task, this enabled use of a Colour Picker component for selecting favourite colour and a Date Picker component for selecting date of birth. This meant that less time needed to be allocated to form validation as these components guaranteed valid entries in the same way that using radio buttons or select boxes would with regular HTML form controls. The remaining fields were assumed to be mandatory.

For the form validation itself, React Hook Form was used. It is one of the two most commonly used third-party form validation solutions in React (the other being Formik) and is quick and easy to install and implement. It has a smaller bundle size than Formik and fewer dependencies (none).

## CSS

With more time invested, the styling of this application would definitely have been more fully featured. The focus in the time-frame was to create something functional which could possibly be more creative once the core features were implemented. The styling that has been added was via the Emotion CSS-in-JS package. Emotion is a production dependency of the MUI React library used for the form components and has very similar syntax to Styled Components which was chosen due to familiarity.

## Performance

React Query has been added as it has query caching capabilities but fairly rudimentary testing of its basic implementation produced minimal performance improvements via page load times in Chrome's network tab.

With more time, an exploration into image caching strategies would have been made. Although not officially supported yet, React Suspense seemed like a good fit. It allows the compilation to continue whilst data is being fetched so a loading spinner could have been added and perhaps some skeleton elements to occupy the screen space required for the image grid. This would mean when the images became available, the layout of the page would remain largely unchanged which might be a better experience for the user.

Improvements to the API itself could be made by editing `server.js` but this file was deemed out of scope for this task.
