export class Order {
  _id: string;
  name: string;
  no: string;
  subject: string;
  status: string;
  progress: number;
  customer: {
    name: string
    carNumber: string
    phone: string
    carType: string
    company: string
    remark: string
  };
  subjectsCost: number;
  materialsCost: number;
  orderCost: number;
  repairSubjects: [
    {
      id: number
      name: string
      code: string
      staff: string
      cost: number
      costUnit: string
    }
  ];
  repairMaterials: [
    {
      id: number
      name: string
      code: string
      spec: string
      count: number
      costUnit: string
      outPrice: number
      unit: string
    }
  ];
}
