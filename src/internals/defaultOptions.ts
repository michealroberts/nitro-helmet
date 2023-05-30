/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3HelmetOptions } from './types'

import { defaultContentSecurityPolicy as contentSecurityPolicy } from './useContentSecurityPolicy'
import { defaultCrossOriginEmbedderPolicy as crossOriginEmbedderPolicy } from './useCrossOriginEmbedderPolicy'
import { defaultCrossOriginOpenerPolicy as crossOriginOpenerPolicy } from './useCrossOriginOpenerPolicy'
import { defaultCrossOriginResourcePolicy as crossOriginResourcePolicy } from './useCrossOriginResourcePolicy'
import { defaultOriginAgentCluster as originAgentCluster } from './useOriginAgentCluster'
import { defaultReferrerPolicy as referrerPolicy } from './useReferrerPolicy'
import { defaultStrictTransportSecurity as strictTransportSecurity } from './useStrictTransportSecurity'
import { defaultXContentTypeOptions as xContentTypeOptions } from './useXContentTypeOptions'
import { defaultXDNSPrefetchControl as xDNSPrefetchControl } from './useXDNSPrefetchControl'
import { defaultXDownloadOptions as xDownloadOptions } from './useXDownloadOptions'
import { defaultXFrameOptions as xFrameOptions } from './useXFrameOptions'
import { defaultXPermittedCrossDomainPolicies as xPermittedCrossDomainPolicies } from './useXPermittedCrossDomainPolicies'
import { defaultXXSSProtection as xXSSProtection } from './useXXSSProtection'

/*****************************************************************************************************************/

export const defaultOptions: H3HelmetOptions = {
  contentSecurityPolicy,
  crossOriginEmbedderPolicy,
  crossOriginOpenerPolicy,
  crossOriginResourcePolicy,
  originAgentCluster,
  referrerPolicy,
  strictTransportSecurity,
  xContentTypeOptions,
  xDNSPrefetchControl,
  xDownloadOptions,
  xFrameOptions,
  xPermittedCrossDomainPolicies,
  xXSSProtection
}

/*****************************************************************************************************************/
