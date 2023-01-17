import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Mehod not allowed"});
    }
    

    const serviceData = JSON.parse(req.body);
    const savedService = await prisma.service.create({
        data: serviceData,
    })

    res.json(savedService);
};