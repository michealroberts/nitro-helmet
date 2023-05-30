/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { setHeader } from 'h3'

import { type UseEventHeaderPolicy, type CrossOriginEmbedderPolicy } from './types'

/*****************************************************************************************************************/

export const defaultCrossOriginEmbedderPolicy = 'require-corp'

/*****************************************************************************************************************/

export const useCrossOriginEmbedderPolicy: UseEventHeaderPolicy<CrossOriginEmbedderPolicy> = (
  event,
  policy = defaultCrossOriginEmbedderPolicy
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultCrossOriginEmbedderPolicy
  }

  setHeader(event, 'Cross-Origin-Embedder-Policy', policy)
}

/*****************************************************************************************************************/
