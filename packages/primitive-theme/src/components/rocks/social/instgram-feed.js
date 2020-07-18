import React, { Fragment } from 'react'
import { buildUrl } from 'react-instafeed'
 
// sk-dev: not developed

import useAbortableFetch from '@hooks/useAbortableFetch'
import Image from "@frontity/components/image";

const options = {
  accessToken: 'access...',
  clientId: 'client...',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 123,
}
 
const InstagramFeed = ({ actions }) => {

  //const { json, loading, error, abort } = useAbortableFetch(buildUrl(options))
  if (loading) return 'Loading...'
  if (error) return `Error: ${error}`
  if (!json) return null
 
  const { data, meta, pagination } = json
 
  return (
    <Fragment>

      {// eslint-disable-next-line no-unused-vars
      data &&
        data.map(({ caption, id, images, tags }, index) => {
          const image = images[options.resolution]
          return (
              <Image
                key={index}
                url={image.url}
                title={caption.text}
                caption={caption.text}
                width={image.width}
                height={image.height}
              />

          )
        })}

    </Fragment>
  )
};

export default InstagramFeed;