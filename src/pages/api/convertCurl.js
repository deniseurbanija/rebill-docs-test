// pages/api/convertCurl.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { curl } = req.body;
    
    if (!curl) {
      return res.status(400).json({ message: 'Curl command is required' });
    }
    const result = await axios.post(`https://curl.rebill.dev/`, { curl })
    return res.status(200).json(result.data);
  } catch (error) {
    console.error('Error converting curl command:', error);
    return res.status(500).json({ message: 'Error converting curl command', error: error.message });
  }
}
