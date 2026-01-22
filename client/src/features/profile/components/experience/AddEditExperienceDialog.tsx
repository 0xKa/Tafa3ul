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
import { Switch } from "@/components/ui/switch";
import { GetDefaultDate } from "@/lib/utils";
import FormLabel from "@/shared/components/FormLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { z } from "zod";

const addEditExperienceSchema = z.object({
  id: z.string().optional().nullable(),
  jobTitle: z.string().min(1, "Job title is required").max(100, "Job title must be 100 characters or less"),
  company: z.string().min(1, "Company name is required").max(100, "Company name must be 100 characters or less"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z
    .string()
    .nullable()
    .transform((val) => val ?? null),
  description: z
    .string()
    .max(1000, "Description must be 1000 characters or less")
    .nullable()
    .transform((val) => val ?? null),
});

type AddEditExperienceFormData = z.infer<typeof addEditExperienceSchema>;

interface AddEditExperienceDialogProps {
  experienceId?: string;
}

const AddEditExperienceDialog = ({ experienceId }: AddEditExperienceDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);
  // const addExperienceMutation = useAddExperience();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddEditExperienceFormData>({
    resolver: zodResolver(addEditExperienceSchema),
    defaultValues: {
      id: null,
      startDate: GetDefaultDate(),
      endDate: GetDefaultDate(),
      description: null,
    },
  });

  useEffect(() => {
    if (isCurrent) {
      setValue("endDate", null);
    } else {
      setValue("endDate", GetDefaultDate());
    }
  }, [isCurrent, setValue]);

  const onSubmit = async (data: AddEditExperienceFormData) => {
    // await addExperienceMutation.mutateAsync(data);
    console.log(data, experienceId);
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MdAdd className="size-6" />
          Add New Experience
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Experience</DialogTitle>
            <DialogDescription>Add a new Experience to your profile. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-6">
            <div className="grid gap-2">
              <FormLabel htmlFor="jobTitle" label="Job Title" error={errors.jobTitle?.message} required />
              <Input
                id="jobTitle"
                placeholder="e.g., Software Engineer"
                {...register("jobTitle")}
                aria-invalid={!!errors.jobTitle}
              />
            </div>

            <div className="grid gap-2">
              <FormLabel htmlFor="company" label="Company" error={errors.company?.message} required />
              <Input id="company" placeholder="e.g., Google" {...register("company")} aria-invalid={!!errors.company} />
            </div>

            <div className="grid gap-2">
              <FormLabel htmlFor="startDate" label="Start Date" error={errors.startDate?.message} required />
              <Input id="startDate" type="date" {...register("startDate")} aria-invalid={!!errors.startDate} />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <FormLabel htmlFor="endDate" label="End Date" error={errors.endDate?.message} required={!isCurrent} />

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {isCurrent ? "Currently working here" : "Not currently working here"}
                  </span>
                  <Switch id="endDate-switch" checked={isCurrent} onCheckedChange={setIsCurrent} />
                </div>
              </div>
              <Input
                id="endDate"
                type="date"
                {...register("endDate")}
                aria-invalid={!!errors.endDate}
                disabled={isCurrent}
              />
            </div>

            <div className="grid gap-2">
              <FormLabel htmlFor="description" label="Description" error={errors.description?.message} />
              <Input
                id="description"
                placeholder="Describe your role, achievements, etc."
                {...register("description")}
                aria-invalid={!!errors.description}
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Adding..." : "Add Experience"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditExperienceDialog;
