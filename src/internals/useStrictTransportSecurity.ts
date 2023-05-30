/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy } from './types'

/*****************************************************************************************************************/

export const defaultStrictTransportSecurity = 'max-age=15552000; includeSubDomains'

/*****************************************************************************************************************/

export const useStrictTransportSecurity: UseEventHeaderPolicy<string> = (
  event,
  policy = defaultStrictTransportSecurity
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultStrictTransportSecurity
  }

  setHeader(event, 'Strict-Transport-Security', policy)
}
