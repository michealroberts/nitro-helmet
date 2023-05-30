/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type XContentTypeOptions } from './types'

/*****************************************************************************************************************/

export const defaultXContentTypeOptions = 'nosniff'

/*****************************************************************************************************************/

export const useXContentTypeOptions = (
  event: H3Event,
  policy: XContentTypeOptions | boolean = defaultXContentTypeOptions
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXContentTypeOptions
  }

  setHeader(event, 'X-Content-Type-Options', policy)
}
