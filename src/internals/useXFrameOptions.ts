/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type XFrameOptions } from './types'

/*****************************************************************************************************************/

export const defaultXFrameOptions = 'SAMEORIGIN'

/*****************************************************************************************************************/

export const useXFrameOptions = (
  event: H3Event,
  policy: XFrameOptions | boolean = defaultXFrameOptions
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXFrameOptions
  }

  setHeader(event, 'X-Frame-Options', policy)
}
