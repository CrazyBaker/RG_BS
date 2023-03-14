import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// @access Public
export const authUser = asyncHandler(async (req, res) => {
	const user = await prisma.user.findMany({
		where: {
			password1: 'njkds'
		}
	})

	res.json(user)
})
