/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type XDNSPrefetchControl } from './types'

/*****************************************************************************************************************/

export const defaultXDNSPrefetchControl = 'off'

/*****************************************************************************************************************/

export const useXDNSPrefetchControl = (
  event: H3Event,
  policy: XDNSPrefetchControl | boolean = defaultXDNSPrefetchControl
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultXDNSPrefetchControl
  }

  setHeader(event, 'X-DNS-Prefetch-Control', policy)
}
