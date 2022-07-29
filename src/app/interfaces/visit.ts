export interface Visit {
    id: number;
    patient_id: number;
    consultation: boolean;
    doctor_id: number;
    over_the_counter: boolean;
    status: string;
    created_by: number;
}