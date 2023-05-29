/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-cors
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { eventHandler, setHeaders } from 'h3'

import { type Handler } from '../shared/handler'

import {
  useContentSecurityPolicy,
  defaultContentSecurityPolicy
} from '../../src/internals/useContentSecurityPolicy'

import {
  useCrossOriginEmbedderPolicy,
  defaultCrossOriginEmbedderPolicy
} from '../../src/internals/useCrossOriginEmbedderPolicy'

import {
  useCrossOriginOpenerPolicy,
  defaultCrossOriginOpenerPolicy
} from '../../src/internals/useCrossOriginOpenerPolicy'

import {
  useCrossOriginResourcePolicy,
  defaultCrossOriginResourcePolicy
} from '../../src/internals/useCrossOriginResourcePolicy'

import {
  useOriginAgentCluster,
  defaultOriginAgentCluster
} from '../../src/internals/useOriginAgentCluster'

/*****************************************************************************************************************/

export const helmetHandlers: Handler[] = [
  {
    method: 'GET',
    url: '/helmet/content-security-policy',
    handler: eventHandler(async event => {
      useContentSecurityPolicy(event, "default-src 'self';")

      return {
        policy: "default-src 'self';"
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-content-security-policy',
    handler: eventHandler(async event => {
      useContentSecurityPolicy(event)

      return {
        policy: defaultContentSecurityPolicy
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-content-security-policy',
    handler: eventHandler(async event => {
      useContentSecurityPolicy(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/cross-origin-embedder-policy',
    handler: eventHandler(async event => {
      useCrossOriginEmbedderPolicy(event, 'require-corp')

      return {
        policy: 'require-corp'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-cross-origin-embedder-policy',
    handler: eventHandler(async event => {
      useCrossOriginEmbedderPolicy(event)

      return {
        policy: defaultCrossOriginEmbedderPolicy
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-cross-origin-embedder-policy',
    handler: eventHandler(async event => {
      useCrossOriginEmbedderPolicy(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/cross-origin-opener-policy',
    handler: eventHandler(async event => {
      useCrossOriginOpenerPolicy(event, 'same-origin')

      return {
        policy: 'same-origin'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-cross-origin-opener-policy',
    handler: eventHandler(async event => {
      useCrossOriginOpenerPolicy(event)

      return {
        policy: defaultCrossOriginOpenerPolicy
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-cross-origin-opener-policy',
    handler: eventHandler(async event => {
      useCrossOriginOpenerPolicy(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/cross-origin-resource-policy',
    handler: eventHandler(async event => {
      useCrossOriginResourcePolicy(event, 'cross-origin')

      return {
        policy: 'cross-origin'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-cross-origin-resource-policy',
    handler: eventHandler(async event => {
      useCrossOriginResourcePolicy(event)

      return {
        policy: defaultCrossOriginResourcePolicy
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-cross-origin-resource-policy',
    handler: eventHandler(async event => {
      useCrossOriginResourcePolicy(event, false)

      return {
        policy: false
      }
    })
  },

  //

  {
    method: 'GET',
    url: '/helmet/origin-agent-cluster',
    handler: eventHandler(async event => {
      useOriginAgentCluster(event, '?1')

      return {
        policy: '?1'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-origin-agent-cluster',
    handler: eventHandler(async event => {
      useOriginAgentCluster(event)

      return {
        policy: defaultOriginAgentCluster
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-origin-agent-cluster',
    handler: eventHandler(async event => {
      useOriginAgentCluster(event, false)

      return {
        policy: false
      }
    })
  }
]

/*****************************************************************************************************************/
