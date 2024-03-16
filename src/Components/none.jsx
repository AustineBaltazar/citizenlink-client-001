const getStatusColorClass = (status) => {
  switch (status) {
    case "pending":
      return "bg-gray-500";
    case "on review":
      return "bg-[#9B755E]";
    case "incomplete":
      return "bg-[#F28E2C]";
    case "not eligible":
      return "bg-[#F28E2C]";
    case "eligible":
      return "bg-emerald-300";
    case "rejected":
      return "bg-red-500";
    case "approved":
      return "bg-[#008000]";
    case "updated":
      return "bg-[#068CB6]";
    default:
      return "bg-white";
  }
};
