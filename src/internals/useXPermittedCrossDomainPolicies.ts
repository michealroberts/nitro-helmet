/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type XPermittedCrossDomainPolicies } from './types'

/*****************************************************************************************************************/

export const defaultXPermittedCrossDomainPolicies = 'none'

/*****************************************************************************************************************/

export const useXPermittedCrossDomainPolicies = (
  event: H3Event,
  policy: XPermittedCrossDomainPolicies | boolean = defaultXPermittedCrossDomainPolicies
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXPermittedCrossDomainPolicies
  }

  setHeader(event, 'X-Permitted-Cross-Domain-Policies', policy)
}
