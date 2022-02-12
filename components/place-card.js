import React from 'react'
import Image from 'components/Image'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'

const PlaceCard = (props) => {
  return (
    <>
      <div className="container">
        <Image alt={props.image_alt} src={props.image} className="image" />
        <div className="container1">
          <span className="text">{props.city}</span>
          <span className="text1">{props.description}</span>
          <OutlineButton button1="View product"></OutlineButton>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            font-size: 12px;
            max-width: 250px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .container {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .container {
              width: 300px;
            }
          }
        `}
      </style>
    </>
  )
}

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
