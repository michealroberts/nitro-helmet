/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type XPermittedCrossDomainPolicies } from './types'

/*****************************************************************************************************************/

export const defaultXPermittedCrossDomainPolicies = 'none'

/*****************************************************************************************************************/

export const useXPermittedCrossDomainPolicies: UseEventHeaderPolicy<
  XPermittedCrossDomainPolicies
> = (event, policy = defaultXPermittedCrossDomainPolicies) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXPermittedCrossDomainPolicies
  }

  setHeader(event, 'X-Permitted-Cross-Domain-Policies', policy)
}
