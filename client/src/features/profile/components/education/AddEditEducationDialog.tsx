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
import { useAddEditEducation } from "../../hooks/useAddEditEducation";
import { toast } from "sonner";

const addEditEducationSchema = z
  .object({
    id: z.string().nullable(),
    institution: z.string().min(1, "Institution is required").max(100, "Institution must be 100 characters or less"),
    degree: z.string().min(1, "Degree is required").max(100, "Degree must be 100 characters or less"),
    fieldOfStudy: z
      .string()
      .min(1, "Field of study is required")
      .max(100, "Field of study must be 100 characters or less"),
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
  })
  .refine(
    (data) => {
      if (!data.endDate) return true;
      return new Date(data.endDate) >= new Date(data.startDate);
    },
    {
      message: "Invalid end date",
      path: ["endDate"],
    },
  );

type AddEditEducationFormData = z.infer<typeof addEditEducationSchema>;

interface AddEditEducationDialogProps {
  educationId?: string;
}

const AddEditEducationDialog = ({ educationId }: AddEditEducationDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);
  const addEditEducationMutation = useAddEditEducation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddEditEducationFormData>({
    resolver: zodResolver(addEditEducationSchema),
    defaultValues: {
      id: educationId ?? null,
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

  const onSubmit = async (data: AddEditEducationFormData) => {
    await addEditEducationMutation.mutateAsync(data, {
      onSuccess: () => {
        toast.success("Education has been added successfully.");
      },
      onError: () => {
        toast.error("Failed to add education");
      },
    });
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MdAdd className="size-6" />
          Add New Education
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Education</DialogTitle>
            <DialogDescription>Add a new education to your profile. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-6">
            <div className="grid gap-2">
              <FormLabel htmlFor="institution" label="Institution" error={errors.institution?.message} required />
              <Input
                id="institution"
                placeholder="e.g., Harvard University"
                {...register("institution")}
                aria-invalid={!!errors.institution}
              />
            </div>

            <div className="grid gap-2">
              <FormLabel htmlFor="degree" label="Degree" error={errors.degree?.message} required />
              <Input
                id="degree"
                placeholder="e.g., Bachelor of Science"
                {...register("degree")}
                aria-invalid={!!errors.degree}
              />
            </div>

            <div className="grid gap-2">
              <FormLabel htmlFor="fieldOfStudy" label="Field of Study" error={errors.fieldOfStudy?.message} required />
              <Input
                id="fieldOfStudy"
                placeholder="e.g., Computer Science"
                {...register("fieldOfStudy")}
                aria-invalid={!!errors.fieldOfStudy}
              />
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
                    {isCurrent ? "Currently studying here" : "Not currently studying here"}
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
                placeholder="Additional details (optional)"
                {...register("description")}
                aria-invalid={!!errors.description}
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Adding..." : "Add Education"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditEducationDialog;
