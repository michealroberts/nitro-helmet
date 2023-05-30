/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type H3Event } from 'h3'

/*****************************************************************************************************************/

export type UseEventHeaderPolicy<T extends string> = (event: H3Event, policy?: T | boolean) => void

/*****************************************************************************************************************/

export type CrossOriginEmbedderPolicy = 'unsafe-none' | 'require-corp' | 'credentialless'

/*****************************************************************************************************************/

export type CrossOriginOpenerPolicy = 'unsafe-none' | 'same-origin-allow-popups' | 'same-origin'

/*****************************************************************************************************************/

export type CrossOriginResourcePolicy = 'same-site' | 'same-origin' | 'cross-origin'

/*****************************************************************************************************************/

export type OriginAgentCluster = '?1'

/*****************************************************************************************************************/

export type ReferrerPolicy =
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'

/*****************************************************************************************************************/

export type XContentTypeOptions = 'nosniff'

/*****************************************************************************************************************/

export type XDNSPrefetchControl = 'off' | 'on'

/*****************************************************************************************************************/

export type XDownloadOptions = 'noopen'

/*****************************************************************************************************************/

export type XFrameOptions = 'DENY' | 'SAMEORIGIN' | 'ALLOW-FROM'

/*****************************************************************************************************************/

export type XPermittedCrossDomainPolicies = 'none' | 'master-only' | 'by-content-type' | 'all'

/*****************************************************************************************************************/

export type XXSSProtection = string

/*****************************************************************************************************************/

export interface H3HelmetOptions {
  contentSecurityPolicy: string | boolean
  crossOriginEmbedderPolicy: CrossOriginEmbedderPolicy | boolean
  crossOriginOpenerPolicy: CrossOriginOpenerPolicy | boolean
  crossOriginResourcePolicy: CrossOriginResourcePolicy | boolean
  originAgentCluster: OriginAgentCluster | boolean
  referrerPolicy: ReferrerPolicy | boolean
  strictTransportSecurity: string | boolean
  xContentTypeOptions: XContentTypeOptions | boolean
  xDNSPrefetchControl: XDNSPrefetchControl | boolean
  xDownloadOptions: XDownloadOptions | boolean
  xFrameOptions: XFrameOptions | boolean
  xPermittedCrossDomainPolicies: XPermittedCrossDomainPolicies | boolean
  xXSSProtection: XXSSProtection | boolean
}

/*****************************************************************************************************************/
