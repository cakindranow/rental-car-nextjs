import { prisma } from "@/lib/prisma";

export const getContacts = async () => {
    try {
        const contacts = await prisma.contact.findMany();
        return contacts
    } catch (error) {
        throw new Error("Failed to fetch contact data")
    }
}

export const getProfile = () => {
   const user : UserInterface = {
    id : "11",
    name : "joko widodo",
    address : "jalan sukabumi"
   }

   return user
}


export const getProducts = () => {
    const products : ProductInterface[] = [
        {
            id : "1",
            productName : "macbook 13",
            price : 5000,
        },
        {
            id : "2",
            productName : "ipad pro",
            price : 5000,
        }
    ]
    return products
}