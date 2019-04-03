import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { utils } from '@ifrc-cbs/common-react-ui';
import AdminController from '../AdminController';

import ListHeader from './Projects/ListHeader';
import ProjectsList from './Projects/ProjectsList';

const {parseQueryString} = utils;

class Projects extends React.Component {
  static get contextTypes () {
    return {
      router: PropTypes.shape({
        history: PropTypes.shape({
          push: PropTypes.func.isRequired,
          replace: PropTypes.func.isRequired,
          createHref: PropTypes.func.isRequired
        }).isRequired
      }).isRequired
    };
  }

  constructor(component) {
    super(component);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchAllProjects();
    console.log('componentDidMount', this.props.projects)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props.projects)
  }

  static parseLocationString(location = {}) {
    const params = {};

    if (location.search) {
      const {sortBy, order} = parseQueryString(location.search.substring(1));

      if (sortBy && order) {
        params.sortBy = sortBy;
        params.direction = order;
      }
    }

    return params;
  }

  render() {
    const title = 'Projects';
    const description = '';
    const {projects} = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta name="description" content={description}/>
        </Helmet>
        <article id="projects-list">
          <section className="container">
            <ListHeader/>
            <ProjectsList projects={projects} />
          </section>
        </article>
      </React.Fragment>
    );
  }
}

export default new AdminController(Projects);
