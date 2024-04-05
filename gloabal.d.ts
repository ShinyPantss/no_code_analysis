import type { Database as DB } from "./database.type";


declare global {
    type Database = DB;
    type plotAttributes = DB["public"]["Tables"]["plot_infos"]["Row"];

}
