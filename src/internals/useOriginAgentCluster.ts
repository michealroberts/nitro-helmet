/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event, setHeader } from 'h3'

import { type OriginAgentCluster } from './types'

/*****************************************************************************************************************/

export const defaultOriginAgentCluster = '?1'

/*****************************************************************************************************************/

export const useOriginAgentCluster = (
  event: H3Event,
  policy: OriginAgentCluster | boolean = defaultOriginAgentCluster
) => {
  if (typeof policy === 'boolean' && !policy) {
    return
  }

  // If the policy is a boolean, then use the default policy:
  if (typeof policy === 'boolean') {
    policy = defaultOriginAgentCluster
  }

  setHeader(event, 'Origin-Agent-Cluster', policy)
}
