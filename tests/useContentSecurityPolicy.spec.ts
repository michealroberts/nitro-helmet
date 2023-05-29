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
  defaultContentSecurityPolicy,
  useContentSecurityPolicy
} from '../src/internals/useContentSecurityPolicy'

/*****************************************************************************************************************/

describe('useContentSecurityPolicy', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useContentSecurityPolicy).toBeDefined()
  })

  it('should set Content-Security-Policy headers correctly on the request', async () => {
    const res = await request.get('/helmet/content-security-policy', {
      method: 'GET'
    })
    expect(res.header['content-security-policy']).toEqual("default-src 'self';")
  })

  it('should set Content-Security-Policy headers correctly on the request', async () => {
    const res = await request.get('/helmet/default-content-security-policy', {
      method: 'GET'
    })
    expect(res.header['content-security-policy']).toEqual(defaultContentSecurityPolicy)
  })

  it('should not set Content-Security-Policy headers correctly on the request', async () => {
    const res = await request.get('/helmet/no-content-security-policy', {
      method: 'GET'
    })
    expect(res.header['content-security-policy']).toEqual(undefined)
  })
})
