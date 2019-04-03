import React, {Component} from 'react';
import {Table} from 'evergreen-ui';
import ProjectListItem from './ProjectListItem';

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      fakeData: [
        {
          projectName: 'Project One',
          dataOwner: 'Data Owner One',
          geographicalScope: 'Scope One',
          healthRisk: 'Health risk One'
        },
        {
          projectName: 'Project Two',
          dataOwner: 'Data Owner Two',
          geographicalScope: 'Scope Two',
          healthRisk: 'Health risk Two'
        },
        {
          projectName: 'Project Three',
          dataOwner: 'Data Owner Three',
          geographicalScope: 'Scope Three',
          healthRisk: 'Health risk Three'
        },
        {
          projectName: 'Project Four',
          dataOwner: 'Data Owner Four',
          geographicalScope: 'Scope Four',
          healthRisk: 'Health risk Four'
        }
      ]
    };


  }

  componentDidMount() {}

  render() {
    return (
      <Table marginBottom={32}>
        <Table.Head>
          <Table.TextHeaderCell>Project name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Data owner</Table.TextHeaderCell>
          <Table.TextHeaderCell>Geographical scope</Table.TextHeaderCell>
          <Table.TextHeaderCell>Health risks</Table.TextHeaderCell>
        </Table.Head>

        <Table.Body height={240}>
          {
            this.state.fakeData.map((data, i) => {
              return <ProjectListItem key={i} data={data}/>;
            })
          }
        </Table.Body>
      </Table>
    );
  }
};
