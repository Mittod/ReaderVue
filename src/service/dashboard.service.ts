import type Dashboard from "@/models/dashboard.model";
import { HttpService } from "./http.service";

export default class DashboardHttpService extends HttpService<Dashboard>{
    constructor() {
        super();
    }
}