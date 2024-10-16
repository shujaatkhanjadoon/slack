import { auth } from "./auth";
import { query } from "./_generated/server";

export const current = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if(userId === null){
            return;
        }
        return await ctx.db.get(userId);
    }
})