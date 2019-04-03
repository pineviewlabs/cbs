import {BaseController} from 'repertoire';
import AdminService from './AdminService';

const ApiBaseUrl = process.env.API_URL;

export default class AdminController extends BaseController {
  get stateNamespace() {
    return 'app';
  }

  constructor(component) {
    super(component);

    this.adminService = new AdminService({
      baseUrl: ApiBaseUrl
    });

    this.state = {
      projects(state) {
        return state.projects || [];
      }
    };

    this.connect();
  }

  fetchAllProjects(params) {
    return this.adminService.fetchAllProjects(params);
  }
}
