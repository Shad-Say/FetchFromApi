export interface Idata {
  examDate: string;
  studentIdTrainingData?: null[] | null;
  predictionConfidence?: null[] | null;
  studentAvailability: boolean;
  maxMarksTrainingData?: null[] | null;
  maxMarksConfidence?: null[] | null;
  obtainedMarksTrainingData?: null[] | null;
  obtainedMarksConfidence?: null[] | null;
  createdOn: string;
  _id: string;
  section: string;
  studentId: string;
  securedMarks: number;
  totalMarks: number;
  marksInfo?: MarksInfoEntity[] | null;
  schoolId: string;
  subject: string;
  classId: string;
  __v: number;
  predictedStudentId?: string | null;
  maxMarksPredicted?: null;
  obtainedMarksPredicted?: null;
}
export interface MarksInfoEntity {
  predictionConfidence?: (number | string)[] | null;
  tags?: (string | null)[] | null;
  trainingData?: (string | null)[] | null;
  questionId: string;
  obtainedMarks: string;
  predictedMarks?: string | null;
}
