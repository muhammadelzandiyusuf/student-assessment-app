export type FormValueProps = {
  aspek_penilaian_1: {
    mahasiswa_1: string;
    mahasiswa_2: string;
    mahasiswa_3: string;
    mahasiswa_4: string;
    mahasiswa_5: string;
    mahasiswa_6: string;
    mahasiswa_7: string;
    mahasiswa_8: string;
    mahasiswa_9: string;
    mahasiswa_10: string;
  },
  aspek_penilaian_2: {
    mahasiswa_1: string;
    mahasiswa_2: string;
    mahasiswa_3: string;
    mahasiswa_4: string;
    mahasiswa_5: string;
    mahasiswa_6: string;
    mahasiswa_7: string;
    mahasiswa_8: string;
    mahasiswa_9: string;
    mahasiswa_10: string;
  },
  aspek_penilaian_3: {
    mahasiswa_1: string;
    mahasiswa_2: string;
    mahasiswa_3: string;
    mahasiswa_4: string;
    mahasiswa_5: string;
    mahasiswa_6: string;
    mahasiswa_7: string;
    mahasiswa_8: string;
    mahasiswa_9: string;
    mahasiswa_10: string;
  },
  aspek_penilaian_4: {
    mahasiswa_1: string;
    mahasiswa_2: string;
    mahasiswa_3: string;
    mahasiswa_4: string;
    mahasiswa_5: string;
    mahasiswa_6: string;
    mahasiswa_7: string;
    mahasiswa_8: string;
    mahasiswa_9: string;
    mahasiswa_10: string;
  },
};

export type RegisterNameProps = 'aspek_penilaian_1.mahasiswa_1' | 'aspek_penilaian_1.mahasiswa_2'
  | 'aspek_penilaian_1.mahasiswa_3' | 'aspek_penilaian_1.mahasiswa_4' | 'aspek_penilaian_1.mahasiswa_5'
  | 'aspek_penilaian_1.mahasiswa_6' | 'aspek_penilaian_1.mahasiswa_7' | 'aspek_penilaian_1.mahasiswa_8'
  | 'aspek_penilaian_1.mahasiswa_9' | 'aspek_penilaian_1.mahasiswa_10' | 'aspek_penilaian_2.mahasiswa_1'
  | 'aspek_penilaian_2.mahasiswa_2' | 'aspek_penilaian_2.mahasiswa_3' | 'aspek_penilaian_2.mahasiswa_4'
  | 'aspek_penilaian_2.mahasiswa_5' | 'aspek_penilaian_2.mahasiswa_6' | 'aspek_penilaian_2.mahasiswa_7'
  | 'aspek_penilaian_2.mahasiswa_8' | 'aspek_penilaian_2.mahasiswa_9' | 'aspek_penilaian_2.mahasiswa_10'
  | 'aspek_penilaian_3.mahasiswa_1' | 'aspek_penilaian_3.mahasiswa_2' | 'aspek_penilaian_3.mahasiswa_3'
  | 'aspek_penilaian_3.mahasiswa_4' | 'aspek_penilaian_3.mahasiswa_5' | 'aspek_penilaian_3.mahasiswa_6'
  | 'aspek_penilaian_3.mahasiswa_7' | 'aspek_penilaian_3.mahasiswa_8' | 'aspek_penilaian_3.mahasiswa_9'
  | 'aspek_penilaian_3.mahasiswa_10' | 'aspek_penilaian_4.mahasiswa_1' | 'aspek_penilaian_4.mahasiswa_2'
  | 'aspek_penilaian_4.mahasiswa_3' | 'aspek_penilaian_4.mahasiswa_4' | 'aspek_penilaian_4.mahasiswa_5'
  | 'aspek_penilaian_4.mahasiswa_6' | 'aspek_penilaian_4.mahasiswa_7' | 'aspek_penilaian_4.mahasiswa_8'
  | 'aspek_penilaian_4.mahasiswa_9' | 'aspek_penilaian_4.mahasiswa_10';

export type StudentAssessmentFormProps = {
  name: string;
  register: Array<{ label?: string, name: RegisterNameProps }>;
};
