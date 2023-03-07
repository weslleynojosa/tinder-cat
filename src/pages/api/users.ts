import { user, users } from "@/common/users";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<user[]>) {
    res.status(200).json(users)
}