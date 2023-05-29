/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

export interface H3HelmetOptions {
  contentSecurityPolicy: string | boolean
  crossOriginResourcePolicy: string | boolean
  crossOriginOpenerPolicy: string | boolean
  crossOriginEmbedderPolicy: string | boolean
  originAgentCluster: string | boolean
  referrerPolicy: string | boolean
  strictTransportSecurity: string | boolean
  xContentTypeOptions: string | boolean
  xDNSPrefetchControl: string | boolean
  xDownloadOptions: string | boolean
  xFrameOptions: string | boolean
  xPermittedCrossDomainPolicies: string | boolean
  xXSSProtection: number | boolean
}

/*****************************************************************************************************************/
