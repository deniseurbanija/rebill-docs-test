import axios from 'axios'
import { parse } from 'cookie'

const SANDBOX_API_KEY = 'Sandbox API Key'

export default async function handler(req, res) {
  const { cookie } = req.headers

  const cookies = cookie ? parse(cookie) : {}

  const rebillOrganizationToken = cookies.rebillOrganizationToken
  const rebillUserEmail = cookies.rebillUserEmail
  const rebillName = cookies.rebillName
  const rebillLastName = cookies.rebillLastName
  const rebillOrganizationName = cookies.rebillOrganizationName
  const rebillOrganizationLogo = cookies.rebillOrganizationLogo
  const rebillAccountType = cookies.rebillAccountType
  const rebillLanguage = cookies.rebillLanguage
  const response = {
    rebillUserEmail,
    rebillName,
    rebillLastName,
    rebillOrganizationLogo,
    rebillOrganizationName,
    rebillLanguage,
  }
  if (!rebillOrganizationToken) {
    res.status(200).json(response)
  }
  if (rebillAccountType === 'sandbox') {
    console.log('Organization in sandbox')
    const {sandboxKey} = await findOrCreateSandboxApiKey(rebillOrganizationToken)
    response.secretKey = sandboxKey.secretKey
    response.publicKey = sandboxKey.publicKey
    console.log('Sandbox key found')
    res.status(200).json({
      response,
    })
  }

  if (rebillAccountType === 'prod') {
    const organizations = await getOrganizations(rebillOrganizationToken)
    console.log('organizations', organizations)
    const organizationsChildren = organizations[0]?.children
    const organizationSandbox = organizationsChildren.find((org) =>
      org.alias.includes('sandbox'),
    )
    if (!organizationSandbox) {
      res.status(400).json({
        message: 'No sandbox organization found',
      })
    }
    console.log('Organization sandbox found')
    const sandboxAuthToken = await switchOrganization(
      rebillOrganizationToken,
      organizationSandbox?.id,
    )
    console.log('Organization sandbox switched')
    const sandboxKey = await findOrCreateSandboxApiKey(
      sandboxAuthToken.authToken,
    )
    response.secretKey = sandboxKey.secretKey
    response.publicKey = sandboxKey.publicKey
    console.log('Sandbox key found')
    res.status(200).json({
      response,
    })
  }
}

async function findOrCreateSandboxApiKey(token) {
  const organizationKeys = await getApiKeys(token)
  console.log('Organization keys found', organizationKeys?.length)
  const sandboxKey = organizationKeys?.find(
    (key) => key.description === SANDBOX_API_KEY,
  )
  if (!sandboxKey) {
    const newSandboxKey = await createApiKey(SANDBOX_API_KEY, token)
    return newSandboxKey
  }
  return sandboxKey
}

async function createApiKey(description, token) {
  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.API_CORE_URL}/api-keys`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        description,
      },
    })

    return response.data
  } catch (error) {
    console.error('createApiKey', error)
  }
}

async function getApiKeys(token) {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.API_CORE_URL}/api-keys`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.error('getApiKeys', error)
  }
}

async function getOrganizations(token) {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.API_CORE_URL}/auth/organizations`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.error('getOrganizations', error)
  }
}

async function switchOrganization(token, organizationId) {
  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.API_CORE_URL}/auth/organizations/${organizationId}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('switchToOrganization', error)
  }
}
