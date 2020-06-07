import { authenticate } from "../../../../../lib/passport"
import { setTokenCookie, setProfileCookie } from "../../../../../lib/cookies"

export default async (req, res) => {
    const user = await authenticate('google', req, res)
    setTokenCookie(res, user.token)
    setProfileCookie(res, JSON.stringify(user.profile))
    res.statusCode = 302
    res.setHeader("Location", req.headers.referer || '/')
    res.end()
};