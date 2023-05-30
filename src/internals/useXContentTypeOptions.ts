/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type XContentTypeOptions } from './types'

/*****************************************************************************************************************/

export const defaultXContentTypeOptions = 'nosniff'

/*****************************************************************************************************************/

export const useXContentTypeOptions: UseEventHeaderPolicy<XContentTypeOptions> = (
  event,
  policy = defaultXContentTypeOptions
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
