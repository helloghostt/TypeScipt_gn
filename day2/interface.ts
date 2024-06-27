interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueID: () => string;
}
const linda: Employee = {
  name: "linda",
  id: 2,
  isManager: false,
  getUniqueID: (): string => {
    let uniqueID = linda.id + " - " + linda.name;
    if (!linda.isManager) {
      return "emp-" + uniqueID;
    }
    return uniqueID;
  },
};

const pam: Employee = {
  name: "pam",
  id: 1,
  isManager: true,
  getUniqueID: (): string => {
    let uniqueID = pam.id + " - " + pam.name;
    if (!pam.isManager) {
      return "mgr-" + uniqueID;
    }
    return uniqueID;
  },
};
console.log(pam.getUniqueID()); //1 - pam
