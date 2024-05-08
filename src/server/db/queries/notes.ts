import { Query } from "../pool";

const all = () => Query("SELECT * FROM notes;");

export default { all };
