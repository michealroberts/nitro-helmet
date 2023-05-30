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

import { useReferrerPolicy, defaultReferrerPolicy } from '../../src/internals/useReferrerPolicy'

import {
  useStrictTransportSecurity,
  defaultStrictTransportSecurity
} from '../../src/internals/useStrictTransportSecurity'

import {
  useXContentTypeOptions,
  defaultXContentTypeOptions
} from '../../src/internals/useXContentTypeOptions'

import {
  useXDNSPrefetchControl,
  defaultXDNSPrefetchControl
} from '../../src/internals/useXDNSPrefetchControl'

import {
  useXDownloadOptions,
  defaultXDownloadOptions
} from '../../src/internals/useXDownloadOptions'

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
  },
  {
    method: 'GET',
    url: '/helmet/referrer-policy',
    handler: eventHandler(async event => {
      useReferrerPolicy(event, 'origin-when-cross-origin')

      return {
        policy: 'origin-when-cross-origin'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-referrer-policy',
    handler: eventHandler(async event => {
      useReferrerPolicy(event)

      return {
        policy: defaultReferrerPolicy
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-referrer-policy',
    handler: eventHandler(async event => {
      useReferrerPolicy(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/strict-transport-security',
    handler: eventHandler(async event => {
      useStrictTransportSecurity(event, 'max-age=15552000; includeSubDomains')

      return {
        policy: 'max-age=15552000; includeSubDomains'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-strict-transport-security',
    handler: eventHandler(async event => {
      useStrictTransportSecurity(event)

      return {
        policy: defaultStrictTransportSecurity
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-strict-transport-security',
    handler: eventHandler(async event => {
      useStrictTransportSecurity(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/x-content-type-options',
    handler: eventHandler(async event => {
      useXContentTypeOptions(event, 'nosniff')

      return {
        policy: 'nosniff'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-x-content-type-options',
    handler: eventHandler(async event => {
      useXContentTypeOptions(event)

      return {
        policy: defaultXContentTypeOptions
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-x-content-type-options',
    handler: eventHandler(async event => {
      useXContentTypeOptions(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/x-dns-prefetch-control',
    handler: eventHandler(async event => {
      useXDNSPrefetchControl(event, 'off')

      return {
        policy: 'off'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-x-dns-prefetch-control',
    handler: eventHandler(async event => {
      useXDNSPrefetchControl(event)

      return {
        policy: defaultXDNSPrefetchControl
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-x-dns-prefetch-control',
    handler: eventHandler(async event => {
      useXDNSPrefetchControl(event, false)

      return {
        policy: false
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/x-download-options',
    handler: eventHandler(async event => {
      useXDownloadOptions(event, 'noopen')

      return {
        policy: 'noopen'
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/default-x-download-options',
    handler: eventHandler(async event => {
      useXDownloadOptions(event)

      return {
        policy: defaultXDownloadOptions
      }
    })
  },
  {
    method: 'GET',
    url: '/helmet/no-x-download-options',
    handler: eventHandler(async event => {
      useXDownloadOptions(event, false)

      return {
        policy: false
      }
    })
  }
]

/*****************************************************************************************************************/
