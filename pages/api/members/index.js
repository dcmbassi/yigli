import Member from '../../../models/memberModel'
import dbConnect from '../../../db/connect'
import bcrypt from 'bcryptjs'

const handler = async (req, res) => {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const members = await Member.find()
                res.status(200).json({ success: true, data: members })
            } catch (error) {
                res.status(400).json({ success: false, message: error.message })
            }
            break;
        case 'POST':
            /*
                TO DO:
                3. Remove password from return value before sending response
            */
           const {password} = req.body
           const salt = await bcrypt.genSalt(10)
           const hashedPassword = await bcrypt.hash(password, salt)
           const newBody = {...req.body, password: hashedPassword}
            try {
                const member = await Member.create(newBody)
                let sanitisedMember = member.toObject()
                delete sanitisedMember.password
                res.status(201).json({ success: true, data: sanitisedMember })
            } catch (error) {
                res.status(400).json({ success: false, message: error.response.data })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}

export default handler