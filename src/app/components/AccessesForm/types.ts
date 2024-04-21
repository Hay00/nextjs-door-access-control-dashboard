import { Access } from "@/app/services/accesses/types";

export interface AccessesFormProps {
  accesses: Access[];
  onSubmit: (accesses: InitialValues) => void;
}

export interface InitialValues {
  sunday: {
    start: string;
    end: string;
  };
  monday: {
    start: string;
    end: string;
  };
  tuesday: {
    start: string;
    end: string;
  };
  wednesday: {
    start: string;
    end: string;
  };
  thursday: {
    start: string;
    end: string;
  };
  friday: {
    start: string;
    end: string;
  };
  saturday: {
    start: string;
    end: string;
  };
}

export interface OnSubmitProps {
  accesses: [
    {
      day_of_week: number;
      start: string;
      end: string;
    }
  ];
}
