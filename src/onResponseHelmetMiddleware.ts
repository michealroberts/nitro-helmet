/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { defineResponseMiddleware } from 'h3'

import { type H3HelmetOptions } from './internals/types'

import { defaultOptions } from './internals/defaultOptions'

import { useContentSecurityPolicy } from './internals/useContentSecurityPolicy'
import { useCrossOriginEmbedderPolicy } from './internals/useCrossOriginEmbedderPolicy'
import { useCrossOriginOpenerPolicy } from './internals/useCrossOriginOpenerPolicy'
import { useCrossOriginResourcePolicy } from './internals/useCrossOriginResourcePolicy'
import { useOriginAgentCluster } from './internals/useOriginAgentCluster'
import { useReferrerPolicy } from './internals/useReferrerPolicy'
import { useStrictTransportSecurity } from './internals/useStrictTransportSecurity'
import { useXContentTypeOptions } from './internals/useXContentTypeOptions'
import { useXDNSPrefetchControl } from './internals/useXDNSPrefetchControl'
import { useXDownloadOptions } from './internals/useXDownloadOptions'
import { useXFrameOptions } from './internals/useXFrameOptions'
import { useXPermittedCrossDomainPolicies } from './internals/useXPermittedCrossDomainPolicies'
import { useXXSSProtection } from './internals/useXXSSProtection'

/*****************************************************************************************************************/

export const onResponseHelmetMiddleware = (options?: H3HelmetOptions) =>
  defineResponseMiddleware(event => {
    // Merge the user provided options with the default options:
    const opts = { ...defaultOptions, ...options }

    // Append security helmet headers:
    useContentSecurityPolicy(event, opts.contentSecurityPolicy)
    useCrossOriginEmbedderPolicy(event, opts.crossOriginEmbedderPolicy)
    useCrossOriginOpenerPolicy(event, opts.crossOriginOpenerPolicy)
    useCrossOriginResourcePolicy(event, opts.crossOriginResourcePolicy)
    useOriginAgentCluster(event, opts.originAgentCluster)
    useReferrerPolicy(event, opts.referrerPolicy)
    useStrictTransportSecurity(event, opts.strictTransportSecurity)
    useXContentTypeOptions(event, opts.xContentTypeOptions)
    useXDNSPrefetchControl(event, opts.xDNSPrefetchControl)
    useXDownloadOptions(event, opts.xDownloadOptions)
    useXFrameOptions(event, opts.xFrameOptions)
    useXPermittedCrossDomainPolicies(event, opts.xPermittedCrossDomainPolicies)
    useXXSSProtection(event, opts.xXSSProtection)
  })

/*****************************************************************************************************************/

// Expose the onResponseHelmetMiddleware as helmet alias for ease of use:
export const helmet = onResponseHelmetMiddleware

/*****************************************************************************************************************/
