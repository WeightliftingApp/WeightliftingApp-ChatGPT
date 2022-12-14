import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
  sessionToken: process.env.SESSION_TOKEN ?? '',
  clearanceToken: process.env.CLEARANCE_TOKEN ?? '',
  userAgent: process.env.USER_AGENT ?? '',
})

export async function sendMessage(message: string) {
  await api.ensureAuth()
  const response = await api.sendMessage(message)
  return response
}
