/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type ReferrerPolicy } from './types'

/*****************************************************************************************************************/

export const defaultReferrerPolicy = 'no-referrer'

/*****************************************************************************************************************/

export const useReferrerPolicy: UseEventHeaderPolicy<ReferrerPolicy> = (
  event,
  policy = defaultReferrerPolicy
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
