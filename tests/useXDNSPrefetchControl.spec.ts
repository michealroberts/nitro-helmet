/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import {
  defaultXDNSPrefetchControl,
  useXDNSPrefetchControl
} from '../src/internals/useXDNSPrefetchControl'

/*****************************************************************************************************************/

describe('useXDNSPrefetchControl', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useXDNSPrefetchControl).toBeDefined()
  })

  it('should set X-DNS-Prefetch-Control on the request', async () => {
    const res = await request.get('/helmet/x-dns-prefetch-control', {
      method: 'GET'
    })
    expect(res.header['x-dns-prefetch-control']).toEqual('off')
  })

  it('should set X-DNS-Prefetch-Control on the request', async () => {
    const res = await request.get('/helmet/default-x-dns-prefetch-control', {
      method: 'GET'
    })
    expect(res.header['x-dns-prefetch-control']).toEqual(defaultXDNSPrefetchControl)
  })

  it('should not set X-DNS-Prefetch-Control on the request', async () => {
    const res = await request.get('/helmet/no-x-dns-prefetch-control', {
      method: 'GET'
    })
    expect(res.header['x-content-type-options']).toEqual(undefined)
  })
})
