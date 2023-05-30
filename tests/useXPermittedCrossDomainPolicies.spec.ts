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
  defaultXPermittedCrossDomainPolicies,
  useXPermittedCrossDomainPolicies
} from '../src/internals/useXPermittedCrossDomainPolicies'

/*****************************************************************************************************************/

describe('useXPermittedCrossDomainPolicies', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useXPermittedCrossDomainPolicies).toBeDefined()
  })

  it('should set X-Permitted-Cross-Domain-Policies on the request', async () => {
    const res = await request.get('/helmet/x-permitted-cross-domain-policies', {
      method: 'GET'
    })
    expect(res.header['x-permitted-cross-domain-policies']).toEqual('none')
  })

  it('should set X-Permitted-Cross-Domain-Policies on the request', async () => {
    const res = await request.get('/helmet/default-x-permitted-cross-domain-policies', {
      method: 'GET'
    })
    expect(res.header['x-permitted-cross-domain-policies']).toEqual(
      defaultXPermittedCrossDomainPolicies
    )
  })

  it('should not set X-Permitted-Cross-Domain-Policies on the request', async () => {
    const res = await request.get('/helmet/no-x-permitted-cross-domain-policies', {
      method: 'GET'
    })
    expect(res.header['x-permitted-cross-domain-policies']).toEqual(undefined)
  })
})
