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
  defaultStrictTransportSecurity,
  useStrictTransportSecurity
} from '../src/internals/useStrictTransportSecurity'

/*****************************************************************************************************************/

describe('useStrictTransportSecurity', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useStrictTransportSecurity).toBeDefined()
  })

  it('should set Strict-Transport-Security on the request', async () => {
    const res = await request.get('/helmet/strict-transport-security', {
      method: 'GET'
    })
    expect(res.header['strict-transport-security']).toEqual('max-age=15552000; includeSubDomains')
  })

  it('should set Strict-Transport-Security on the request', async () => {
    const res = await request.get('/helmet/default-strict-transport-security', {
      method: 'GET'
    })
    expect(res.header['strict-transport-security']).toEqual(defaultStrictTransportSecurity)
  })

  it('should not set Strict-Transport-Security on the request', async () => {
    const res = await request.get('/helmet/no-strict-transport-security', {
      method: 'GET'
    })
    expect(res.header['strict-transport-security']).toEqual(undefined)
  })
})
