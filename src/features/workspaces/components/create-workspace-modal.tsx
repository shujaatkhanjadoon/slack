"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "../store/use-create-wordspace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();
    const handleClose = () => {
        setOpen(false);
        // TODO: clear form
    }
    return(
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add a wordspace
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <form className="space-y-4">
                        <Input 
                        value=""
                        disabled={false}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
                        />
                        <div className="flex justify-end">
                            <Button disabled={false} >
                                Create
                            </Button>
                        </div>
                    </form>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}