import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.co.in',
//     target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

//Create custom React element
const reactElement = React.createElement(
  'a',
  { href: 'https://google.co.in', target: '_blank' },
  'click me to visit google'
)

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  //MyApp(),
  //anotherElement
  //reactElement
  <App />
)
