import { User,DeliveryPartner } from "../../generated/prisma/client.ts";

declare global {
    namespace Express {
        interface Request{
            user?:{
                id:string,
                isAdmin?:boolean;
            }
            partner?:DeliveryPartner
        }
    }
}

// this remove error in middleware auth req.user
export {}