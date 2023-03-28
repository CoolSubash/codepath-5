import React from 'react'
import Card from './Card'
import './card.css'
function App(props) {
  const data = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8oRq9dV_yljssBa-3rBV0kwpFOC-EM9Gpo-kjy8Rug&usqp=CAU&ec=48665701',
      title: 'Item 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh vel magna imperdiet suscipit.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8oRq9dV_yljssBa-3rBV0kwpFOC-EM9Gpo-kjy8Rug&usqp=CAU&ec=48665701',
      title: 'Item 2',
      description:
        'Praesent commodo turpis nec commodo semper. Donec malesuada, magna at interdum tristique, dui turpis aliquet sapien, nec auctor sapien quam ut ipsum.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8oRq9dV_yljssBa-3rBV0kwpFOC-EM9Gpo-kjy8Rug&usqp=CAU&ec=48665701',
      title: 'Item 3',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac massa vel sapien congue maximus.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8oRq9dV_yljssBa-3rBV0kwpFOC-EM9Gpo-kjy8Rug&usqp=CAU&ec=48665701',
      title: 'Item 3',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac massa vel sapien congue maximus.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8oRq9dV_yljssBa-3rBV0kwpFOC-EM9Gpo-kjy8Rug&usqp=CAU&ec=48665701',
      title: 'Item 3',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac massa vel sapien congue maximus.',
    },
  ]
  const { Search } = props.responsedata

  return (
    <div className="card-container">
      {props.searchvalue.length > 0 && Search && Search.length > 0 ? (
        Search &&
        Search.length > 0 &&
        Search.map((event, index) => {
          return (
            <Card
              key={index}
              image={event.Poster}
              title={event.Title}
              description={event.Type}
            />
          )
        })
      ) : (
        <h1 className="data-no" style={{ textAlign: 'center' }}>
          No data found
        </h1>
      )}

      {/* Add more cards as needed */}
    </div>
  )
}

export default App
