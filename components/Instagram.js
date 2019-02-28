import React from 'react'
import { buildUrl } from 'react-instafeed'
import useAbortableFetch from 'use-abortable-fetch'
import Image from './Image'
import FeedStyles from './styles/FeedStyles'

const options = {
  accessToken: '299977414.1677ed0.fbfe52941ab24a6780f019c95125b3e3',
  clientId: '9ae0fbf38caf4d52bedabb45bda9356c',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'most-liked', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 299977414,
  //a0fb85144f414e6699b57af20dbb6123 ig secret
}

const Instagram = () => {
  const { data, loading, error, abort } = useAbortableFetch(buildUrl(options))

  if (loading) return 'Loading...'
  if (error) return `Error: ${error}`
  if (!data) return null 
  console.log(options.resolution)

  return (
    <FeedStyles>
      {// eslint-disable-next-line no-unused-vars
        data.data && 
        data.data.map(({ caption, id, images, tags }, index) => {
          const image = images[options.resolution];
            return (
              <Image
                key={index}
                url={image.url}
                title={caption && caption.text}
                caption={caption && caption.text}
                width={image.width}
                height={image.height}
              />
            )
          
  })}
    </FeedStyles>
  )
};

export default Instagram;

//token generator: https://instagram.pixelunion.net/