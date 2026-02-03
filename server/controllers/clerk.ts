import { Response , Request } from "express"
import { verifyWebhook } from '@clerk/express/webhooks'
import { prisma } from "../configs/prisma.js";

const clerkWebHooks = async (req: Request,res:Response) => {
    try {
        const evt: any = await verifyWebhook(req)
        // get data from request
        const {data,type} = evt;

        // switch cases for diff events
        switch (type) {
            case "user.created": {
                await prisma.user.create({
                    data: {
                        id: data.id,
                        email: data.email_addresses[0]?.email_address,
                        name: data.first_name + " " + data?.last_name,
                        image: data?.image_url,

                    }
                })
                  break;
            }

            case "user.updated": {
                await prisma.user.update({
                    where:{
                        id: data.id
                    },
                    data: {
                        id: data.id,
                        email: data.email_addresses[0]?.email_address,
                        name: data.first_name + " " + data?.last_name,
                        image: data?.image_url,

                    }
                })
                  break;
            }
            
            case "user.deleted": {
                await prisma.user.delete({
                    where:{
                        id: data.id
                    }
                })
                  break;
            }

            case "payementAttempt.updated": {
                if((data.charge_type === "recurring" || data.charge_type === "checkout") && data.status === "paid") {
                    const credits = {pro:80,premium:240,}
                    const clerkUserId = data?.payer?.userId;
                    const planId: keyof typeof credits = data?.subscription_items?.[0]?.plan?.slug;

                    if(planId !== "pro" && planId !== "premium") {
                        return res.status(401).json({message: "Invalid Plan"})
                    }

                    console.log(planId)
                    await prisma.user.update({
                        where: {id: clerkUserId,},
                        data: {
                            credits: {increment:credits[planId]}
                        }
                    })
                }
                    break;
            }
        
            default:
                break;
        }

        res.json({message : "Webhook Received:" + type})


    } catch (error:any) {
        
    }
}

export default clerkWebHooks