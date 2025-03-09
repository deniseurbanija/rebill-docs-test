import { useUserContext } from '../components/context/UserContext'

const useCurlCommand = (templateCurlCommand: string): string => {
  const userData = useUserContext()

  const replaceParams = (curlCommand: string): string => {
    let modifiedCurl = curlCommand

    // Direct replacement for known placeholders from userData
    const placeholders = {
      '{userEmail}': userData?.rebillUserEmail,
      '{YOUR_SECRET_KEY}': userData?.secretKey,
      '{YOUR_PUBLIC_KEY}': userData?.publicKey,
      // Add more placeholders as needed
    }

    Object.entries(placeholders).forEach(([placeholder, value]) => {
      if (value) {
        modifiedCurl = modifiedCurl.replace(new RegExp(placeholder, 'g'), value)
      }
    })
    return modifiedCurl
  }

  return replaceParams(templateCurlCommand)
}

export default useCurlCommand
