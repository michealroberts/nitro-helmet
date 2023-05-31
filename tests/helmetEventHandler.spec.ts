/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/nitro-helmet
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { beforeEach, describe, expect, it } from 'vitest'

import supertest, { type SuperTest, type Test } from 'supertest'

import { toNodeListener } from 'h3'

import { server } from './utilities/server'

import { helmetEventHandler } from '../src'

/*****************************************************************************************************************/

describe('helmetEventHandler', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(helmetEventHandler).toBeDefined()
  })

  it('should set all security headers correctly on the request', async () => {
    const res = await request.get('/helmet-event-handler', {
      method: 'GET'
    })
    expect(res.header['content-security-policy']).toBeDefined()
    expect(res.header['cross-origin-embedder-policy']).toBeDefined()
    expect(res.header['cross-origin-opener-policy']).toBeDefined()
    expect(res.header['cross-origin-resource-policy']).toBeDefined()
    expect(res.header['origin-agent-cluster']).toBeDefined()
    expect(res.header['referrer-policy']).toBeDefined()
    expect(res.header['strict-transport-security']).toBeDefined()
    expect(res.header['x-content-type-options']).toBeDefined()
    expect(res.header['x-dns-prefetch-control']).toBeDefined()
    expect(res.header['x-download-options']).toBeDefined()
    expect(res.header['x-frame-options']).toBeDefined()
    expect(res.header['x-permitted-cross-domain-policies']).toBeDefined()
    expect(res.header['x-xss-protection']).toBeDefined()
  })
})
