/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

/*****************************************************************************************************************/

export const defaultStrictTransportSecurity = 'max-age=15552000; includeSubDomains'

/*****************************************************************************************************************/

export const useStrictTransportSecurity = (
  event: H3Event,
  policy: string | boolean = defaultStrictTransportSecurity
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
