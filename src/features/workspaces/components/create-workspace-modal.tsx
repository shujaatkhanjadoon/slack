"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "../store/use-create-wordspace-modal";

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

                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}