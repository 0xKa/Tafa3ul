import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { z } from "zod";
import { useAddSkill } from "../hooks/useAddSkill";

const addSkillSchema = z.object({
  skillName: z.string().min(1, "Skill name is required").max(50, "Skill name must be 50 characters or less"),
  yearsOfExperience: z
    .number("Years of experience must be a number")
    .min(0, "Years of experience cannot be negative")
    .max(100, "Years of experience must be 100 or less"),
});

type AddSkillFormData = z.infer<typeof addSkillSchema>;

const AddSkillDialog = () => {
  const [open, setOpen] = useState(false);
  const addSkillMutation = useAddSkill();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddSkillFormData>({
    resolver: zodResolver(addSkillSchema),
    defaultValues: {
      skillName: "",
      yearsOfExperience: 0,
    },
  });

  const onSubmit = async (data: AddSkillFormData) => {
    await addSkillMutation.mutateAsync(data);
    reset();
    // setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MdAdd className="size-6" />
          Add New Skill
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Skill</DialogTitle>
            <DialogDescription>Add a new skill to your profile. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-6">
            <div className="grid gap-2">
              <Label htmlFor="skillName">Skill Name</Label>
              <Input id="skillName" placeholder="e.g., React, Python, Leadership" {...register("skillName")} />
              {errors.skillName && <p className="text-sm text-destructive">{errors.skillName.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                type="number"
                placeholder="e.g., 3"
                {...register("yearsOfExperience", { valueAsNumber: true })}
              />
              {errors.yearsOfExperience && (
                <p className="text-sm text-destructive">{errors.yearsOfExperience.message}</p>
              )}
            </div>
          </div>

          <DialogFooter className="gap-2">
            {addSkillMutation.error && (
              <p className="w-full text-sm text-destructive">{addSkillMutation.error.message}</p>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Adding..." : "Add Skill"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillDialog;
