/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type CrossOriginOpenerPolicy } from './types'

/*****************************************************************************************************************/

export const defaultCrossOriginOpenerPolicy = 'same-origin'

/*****************************************************************************************************************/

export const useCrossOriginOpenerPolicy: UseEventHeaderPolicy<CrossOriginOpenerPolicy> = (
  event,
  policy = defaultCrossOriginOpenerPolicy
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultCrossOriginOpenerPolicy
  }

  setHeader(event, 'Cross-Origin-Opener-Policy', policy)
}

/*****************************************************************************************************************/
