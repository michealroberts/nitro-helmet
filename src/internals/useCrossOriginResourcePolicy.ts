/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type CrossOriginResourcePolicy } from './types'

/*****************************************************************************************************************/

export const defaultCrossOriginResourcePolicy = 'same-origin'

/*****************************************************************************************************************/

export const useCrossOriginResourcePolicy = (
  event: H3Event,
  policy: CrossOriginResourcePolicy | boolean = defaultCrossOriginResourcePolicy
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultCrossOriginResourcePolicy
  }

  setHeader(event, 'Cross-Origin-Resource-Policy', policy)
}

/*****************************************************************************************************************/
