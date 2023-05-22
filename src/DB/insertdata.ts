import { people } from "../app";
import person from "./schema/person";

const insertData = async (datainput: people) => {
  try {
    await person.create({
      firstname: datainput.firstname,
      lastname: datainput.lastname,
    });

    console.log("done");
  } catch (error) {
    console.log(error);
  }
};
export default { insertData };
