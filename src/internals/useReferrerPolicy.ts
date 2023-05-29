/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type ReferrerPolicy } from './types'

/*****************************************************************************************************************/

export const defaultReferrerPolicy = 'no-referrer'

/*****************************************************************************************************************/

export const useReferrerPolicy = (
  event: H3Event,
  policy: ReferrerPolicy | boolean = defaultReferrerPolicy
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultReferrerPolicy
  }

  setHeader(event, 'Referrer-Policy', policy)
}
