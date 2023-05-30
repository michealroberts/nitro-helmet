/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type XXSSProtection } from './types'

/*****************************************************************************************************************/

export const defaultXXSSProtection = '1; mode=block'

/*****************************************************************************************************************/

export const useXXSSProtection = (
  event: H3Event,
  policy: XXSSProtection | boolean = defaultXXSSProtection
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXXSSProtection
  }

  setHeader(event, 'X-XSS-Protection', policy)
}
