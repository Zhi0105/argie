import { experienceInterface } from "@_src/types/interface";
import { ISE, FS, E } from '@_components/Lazy/LazyImage'


export const experiences: experienceInterface[] = [
  {
    logo: <ISE width={50} height={50} />,
    company: "Codetech IT Solutions",
    year: "2016-2017",
    role: "Junior system developer",
    description: [
      "Developing payroll system based on clients policy using vb.net & MSSQL",
      "Updating client's reports based on their need format using crystal report application."
    ]
  },
  {
    logo: <E width={40} height={40} />,
    company: "Big E Food Corporation",
    year: "2017-2020",
    role: "Office staff",
    description: [
      "Counter checking outbound deliveries",
      "Receiving returned items",
      "Receiving outbound documents",
      "Processing credit of return items",
      "Processing charges to truckers",
      "Validating invoice cancelled to avoid discrepancies",
      "Validating actual stocks of return vs. product return slip"
    ]
  },
  {
    logo: <FS width={40} height={40} />,
    company: "Flowerstore.ph",
    year: "2022 - current",
    role: "Software Developer",
    description: [
      "React Native Developer",
      "React Js Developer",
      "Next Js Developer",
    ]
  },
]