/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type XFrameOptions } from './types'

/*****************************************************************************************************************/

export const defaultXFrameOptions = 'SAMEORIGIN'

/*****************************************************************************************************************/

export const useXFrameOptions: UseEventHeaderPolicy<XFrameOptions> = (
  event,
  policy = defaultXFrameOptions
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
