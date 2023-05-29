/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type CrossOriginOpenerPolicy } from './types'

/*****************************************************************************************************************/

export const defaultCrossOriginOpenerPolicy = 'same-origin'

/*****************************************************************************************************************/

export const useCrossOriginOpenerPolicy = (
  event: H3Event,
  policy: CrossOriginOpenerPolicy | boolean = defaultCrossOriginOpenerPolicy
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
