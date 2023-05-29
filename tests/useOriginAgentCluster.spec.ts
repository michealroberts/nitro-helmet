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
  defaultOriginAgentCluster,
  useOriginAgentCluster
} from '../src/internals/useOriginAgentCluster'

/*****************************************************************************************************************/

describe('useOriginAgentCluster', () => {
  let request: SuperTest<Test>

  beforeEach(() => {
    request = supertest(toNodeListener(server))
  })

  it('should be defined', () => {
    expect(useOriginAgentCluster).toBeDefined()
  })

  it('should set Origin-Agent-Cluster on the request', async () => {
    const res = await request.get('/helmet/origin-agent-cluster', {
      method: 'GET'
    })
    expect(res.header['origin-agent-cluster']).toEqual('?1')
  })

  it('should set Origin-Agent-Cluster on the request', async () => {
    const res = await request.get('/helmet/default-origin-agent-cluster', {
      method: 'GET'
    })
    expect(res.header['origin-agent-cluster']).toEqual(defaultOriginAgentCluster)
  })

  it('should not set Origin-Agent-Cluster on the request', async () => {
    const res = await request.get('/helmet/no-origin-agent-cluster', {
      method: 'GET'
    })
    expect(res.header['origin-agent-cluster']).toEqual(undefined)
  })
})
