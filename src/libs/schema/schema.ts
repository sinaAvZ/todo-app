import z from "zod";

const schema = {
  title: () =>
    z.string().min(3, "title shouldn't be smaller than three character"),
  description:()=> z.string(),
};
export default schema;
// here we define general type validation like mobileNumber
