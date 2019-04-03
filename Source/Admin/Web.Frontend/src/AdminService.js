import {BaseApi} from '@ifrc-cbs/common-react-ui';
import {QueryCoordinator} from '@dolittle/queries';

import {AllProjects} from './dolittle/Projects/AllProjects';



export default class Admin extends BaseApi {

  fetchAllProjects(params) {
    QueryCoordinator.apiBaseUrl = process.env.DOLITTLE_URL;

    this.queryCoordinator = new QueryCoordinator();
    this.query = new AllProjects(params);

    return this.queryCoordinator
      .execute(this.query)
      .then(response => {
        if (!response.success) {
          const err = new Error('An error has occurred.');
          err.data = response;

          throw err;
        }

        return {
          projects: response.items
        }
      });
  }
};



