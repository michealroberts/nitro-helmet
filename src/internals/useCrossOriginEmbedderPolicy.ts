/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

/*****************************************************************************************************************/

export const defaultCrossOriginEmbedderPolicy = 'require-corp'

/*****************************************************************************************************************/

export const useCrossOriginEmbedderPolicy = (
  event: H3Event,
  policy: string | boolean = defaultCrossOriginEmbedderPolicy
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
